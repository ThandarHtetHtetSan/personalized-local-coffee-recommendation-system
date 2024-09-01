# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/data', methods=['POST'])
# def receive_data():
#     data = request.json  # Get JSON data from the request
#     selected_values = data.get('selectedValues', {})
#     value_mappings = data.get('valueMappings', {})

#     print("Selected Values:", selected_values)  # Print selected values to console for debugging
#     print("Value Mappings:", value_mappings)  # Print value mappings to console for debugging

#     return jsonify({'status': 'success', 'message': 'Data received successfully'})

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import numpy as np
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)
# Configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/createDB" 
# Initialize PyMongo
mongo = PyMongo(app)

# Load and preprocess the data
# data = pd.read_csv('E:\\Coffee Recommender System\\POL_Coffee_Sheet3_new.csv')

# Perform an aggregation with $lookup to join users with posts
pipeline = [
    {
        "$lookup": {
            "from": "roastlevels",               # The collection to join with
            "localField": "roast_level",       # Field from the posts collection
            "foreignField": "_id",         # Field from the users collection
            "as": "roast_level"              # The output array field
        }
    },
    {
        "$unwind": "$roast_level"            # Unwind the user_info array to convert it to an object
    },
    {
        "$lookup": {
            "from": "fragrances",               # The collection to join with
            "localField": "fragrance",       # Field from the posts collection
            "foreignField": "_id",         # Field from the users collection
            "as": "fragrance"              # The output array field
        }
    },
    {
        "$unwind": "$fragrance"            # Unwind the user_info array to convert it to an object
    },
    {
        "$lookup": {
            "from": "flavors",               # The collection to join with
            "localField": "flavor",       # Field from the posts collection
            "foreignField": "_id",         # Field from the users collection
            "as": "flavor"              # The output array field
        }
    },
    {
        "$unwind": "$flavor"            # Unwind the user_info array to convert it to an object
    },
    {
        "$lookup": {
            "from": "groundtypes",               # The collection to join with
            "localField": "ground_type",       # Field from the posts collection
            "foreignField": "_id",         # Field from the users collection
            "as": "ground_type"              # The output array field
        }
    },
    {
        "$unwind": "$ground_type"            # Unwind the user_info array to convert it to an object
    },
    {
        "$lookup": {
            "from": "bodies",               # The collection to join with
            "localField": "body",       # Field from the posts collection
            "foreignField": "_id",         # Field from the users collection
            "as": "body"              # The output array field
        }
    },
    {
        "$unwind": "$body"            # Unwind the user_info array to convert it to an object
    },

    {
        "$project": {                      # Specify which fields to include/exclude
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
    }
    }
]

dbData = list(mongo.db.coffees.aggregate(pipeline))
# Convert the 'price' column from int to str
# dbData['price'] = dbData['price'].astype(str)
data = pd.DataFrame(dbData)
data['price'] = data['price'].astype(str)
data['no_of_bags'] = data['no_of_bags'].astype(str)

print(data['price'])
# print(data['no_of_bags'])
# Define the mappings for categorical features
mappings = {
    'roast_level': {'Light': 0, 'Medium Light': 1, 'Medium': 2, 'Medium Dark': 3, 'Dark': 4},
    'ground_type': {'Whole Bean': 0, 'Fine Ground': 1, 'Coarse Ground': 2},
    'fragrance': {'Fruity': 0, 'Floral': 1, 'Sweet': 2, 'Spicy': 3, 'Smoky': 4},
    'flavor': {'Very Sweet': 0, 'Sweet': 1, 'Normal': 2, 'Bitter': 3, 'Very Bitter': 4},
    'body': {'Lighter': 0, 'Light': 1, 'Medium': 2, 'Full': 3, 'Heavy': 4}
}
features = ['roast_level', 'ground_type', 'fragrance', 'flavor', 'body']

# Apply label encoding to features
for feature in features:
    data[feature] = data[feature].map(mappings[feature])

print('-------')
print(data[features])

# print('-------')
# print(data['_id'])
# Prepare features (X) and target (y)
X = data[features]
y = data[['class_name', 'brand_name', 'net_weight', 'price', 'processing_method', 'coffee_type', 'contact', 'no_of_bags']] 

# Train KNN model
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X, y)

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json  # Get JSON data from the request

    # Extract selectedValues from the incoming data
    selected_values = data.get('selectedValues', {})
    print(selected_values)
    print(type(selected_values))
    roast_level = selected_values['roast']
    print(roast_level)
    ground_type = selected_values['groundtype']
    print(ground_type)
    fragrance = selected_values['fragrance']
    print(fragrance)
    flavor = selected_values['flavor']
    print(flavor)
    body = selected_values['body']
    print(body)
    user_input_df = pd.DataFrame([{
            'roast_level': roast_level,
            'ground_type': ground_type,
            'fragrance': fragrance,
            'flavor': flavor,
            'body': body
        }], columns=features)
    # Create feature array
    # features = np.array([[roast_level, ground_type, fragrance, flavor, body]])
    distances, indices = knn.kneighbors(user_input_df)
    recommendations = y.iloc[indices[0]].to_dict(orient='records')
    print(recommendations)
    print(type(recommendations))
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)

