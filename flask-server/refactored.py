from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd

# ─────────────────────── Setup ───────────────────────
app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/coffeeDB"
mongo = PyMongo(app)

# ─────────────────────── Constants ───────────────────────
FEATURES = ['roast_level', 'ground_type', 'fragrance', 'flavor', 'body']

MAPPINGS = {
    'roast_level': {'Light': 0, 'Medium Light': 1, 'Medium': 2, 'Medium Dark': 3, 'Dark': 4},
    'ground_type': {'Whole Bean': 0, 'Fine Ground': 1, 'Coarse Ground': 2},
    'fragrance': {'Fruity': 0, 'Floral': 1, 'Sweet': 2, 'Spicy': 3, 'Smoky': 4},
    'flavor': {'Very Sweet': 0, 'Sweet': 1, 'Normal': 2, 'Bitter': 3, 'Very Bitter': 4},
    'body': {'Lighter': 0, 'Light': 1, 'Medium': 2, 'Full': 3, 'Heavy': 4}
}

LOOKUPS = [
    ("roastlevels", "roast_level"),
    ("fragrances", "fragrance"),
    ("flavors", "flavor"),
    ("groundtypes", "ground_type"),
    ("bodies", "body"),
]

# ─────────────────────── Helper Functions ───────────────────────
def get_coffee_aggregation_pipeline():
    pipeline = []
    for collection, field in LOOKUPS:
        pipeline += [
            {"$lookup": {
                "from": collection,
                "localField": field,
                "foreignField": "_id",
                "as": field
            }},
            {"$unwind": f"${field}"}
        ]

    pipeline += [
        {"$project": {
            "_id": 1,
            "brand_name": 1,
            "coffee_type": 1,
            "processing_method": 1,
            "no_of_bags": 1,
            "class_name": 1,
            "price": 1,
            "net_weight": 1,
            "contact": 1,
            "roast_level": "$roast_level.type",
            "fragrance": "$fragrance.type",
            "flavor": "$flavor.type",
            "ground_type": "$ground_type.type",
            "body": "$body.type"
        }},
        {"$sort": {"_id": -1}}
    ]
    return pipeline

def get_coffees():
    print("Fetching coffee data from MongoDB")
    data = list(mongo.db.coffees.aggregate(get_coffee_aggregation_pipeline()))
    for item in data:
        item['_id'] = str(item['_id'])
        # Convert other relevant fields to string, if they exist
        item['price'] = str(item.get('price', ''))
        item['no_of_bags'] = str(item.get('no_of_bags', ''))
    return data

def encode_features(df):
    for feature in FEATURES:
        df[feature] = df[feature].map(MAPPINGS[feature])
    return df

def build_knn_model(data):
    df = pd.DataFrame(data)
    df = encode_features(df)
    X = df[FEATURES]
    y = df[['_id', 'class_name', 'brand_name', 'net_weight', 'price', 'processing_method', 'coffee_type', 'contact', 'no_of_bags']]
    knn = KNeighborsClassifier(n_neighbors=6)
    knn.fit(X, y)
    return knn, y

def get_unique_recommendations(y, indices):
    recommendations = y.iloc[indices[0]].to_dict(orient='records')
    seen = set()
    unique_recs = []

    for rec in recommendations:
        if rec['brand_name'] not in seen:
            unique_recs.append(rec)
            seen.add(rec['brand_name'])
        if len(unique_recs) == 6:
            break

    if len(unique_recs) < 6:
        for rec in recommendations:
            if rec not in unique_recs:
                unique_recs.append(rec)
            if len(unique_recs) == 6:
                break
    return unique_recs

# ─────────────────────── Routes ───────────────────────
@app.route('/api/recommend', methods=['POST'])
def recommend_coffee():
    db_data = get_coffees()
    knn, y = build_knn_model(db_data)

    input_data = request.json.get('selectedValues', {})
    user_input = pd.DataFrame([{
        'roast_level': input_data['roast'],
        'ground_type': input_data['ground_type'],
        'fragrance': input_data['fragrance'],
        'flavor': input_data['flavor'],
        'body': input_data['body']
    }], columns=FEATURES)

    user_input = encode_features(user_input)
    distances, indices = knn.kneighbors(user_input)
    recommendations = get_unique_recommendations(y, indices)

    return jsonify(recommendations)

@app.route('/api/add-coffee', methods=['POST'])
def add_coffee():
    data = request.json
    coffee = {
        "brand_name": data['brand_name'],
        "class_name": data['class_name'],
        "coffee_type": data['coffee_type'],
        "processing_method": data['processing_method'],
        "no_of_bags": int(data['no_of_bags']),
        "net_weight": data['net_weight'],
        "contact": data['contact'],
        "price": str(data['price']),
        "roast_level": ObjectId(data['roast_level']),
        "fragrance": ObjectId(data['fragrance']),
        "flavor": ObjectId(data['flavor']),
        "ground_type": ObjectId(data['ground_type']),
        "body": ObjectId(data['body']),
    }
    mongo.db.coffees.insert_one(coffee)
    return jsonify({"message": "Coffee added successfully!"}), 201

@app.route('/api/coffees', methods=['GET'])
def fetch_all_coffees():
    return jsonify(get_coffees())

@app.route('/api/coffees/<id>', methods=['GET'])
def fetch_coffee_by_id(id):
    try:
        object_id = ObjectId(id)
    except Exception:
        return jsonify({"message": "Invalid ID"}), 400

    result = list(mongo.db.coffees.aggregate([{"$match": {"_id": object_id}}] + get_coffee_aggregation_pipeline()))
    if result:
        coffee = result[0]
        coffee['_id'] = str(coffee['_id'])
        coffee['price'] = str(coffee.get('price', ''))
        coffee['no_of_bags'] = str(coffee.get('no_of_bags', ''))
        return jsonify(coffee)
    return jsonify({"message": "Coffee not found!"}), 404

@app.route('/api/delete-coffee/<coffee_id>', methods=['DELETE'])
def delete_coffee(coffee_id):
    result = mongo.db.coffees.delete_one({'_id': ObjectId(coffee_id)})
    if result.deleted_count:
        return jsonify({"message": "Coffee deleted successfully!"}), 200
    return jsonify({"message": "Coffee not found!"}), 404

@app.route('/api/edit-coffee/<coffee_id>', methods=['PUT'])
def edit_coffee(coffee_id):
    data = request.json
    updated_data = {
        "brand_name": data.get('brand_name'),
        "coffee_type": data.get('coffee_type'),
        "processing_method": data.get('processing_method'),
        "no_of_bags": int(data.get('no_of_bags')),
        "price": str(data.get('price')),
        "roast_level": ObjectId(data.get('roast_level')),
        "fragrance": ObjectId(data.get('fragrance')),
        "flavor": ObjectId(data.get('flavor')),
        "ground_type": ObjectId(data.get('ground_type')),
        "body": ObjectId(data.get('body')),
    }

    result = mongo.db.coffees.update_one({"_id": ObjectId(coffee_id)}, {"$set": updated_data})
    if result.matched_count:
        return jsonify({"message": "Coffee updated successfully!"}), 200
    return jsonify({"message": "Coffee not found!"}), 404

# ─────────────────────── Run App ───────────────────────
if __name__ == '__main__':
    app.run(debug=True)