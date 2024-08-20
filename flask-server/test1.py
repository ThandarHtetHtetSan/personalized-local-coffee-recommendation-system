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

app = Flask(__name__)
CORS(app)

# Load and preprocess the data
data = pd.read_csv('E:\\Coffee Recommender System\\POL_Coffee_Sheet3_new.csv')

# Define the mappings for categorical features
mappings = {
    'Roast Level': {'Light': 0, 'Medium Light': 1, 'Medium': 2, 'Medium Dark': 3, 'Dark': 4},
    'Ground Type': {'Whole Bean': 0, 'Fine Ground': 1, 'Coarse Ground': 2},
    'Fragrance': {'Fruity': 0, 'Floral': 1, 'Sweet': 2, 'Spicy': 3, 'Smoky': 4},
    'Flavor': {'Very Sweet': 0, 'Sweet': 1, 'Normal': 2, 'Bitter': 3, 'Very Bitter': 4},
    'Body': {'Lighter': 0, 'Light': 1, 'Medium': 2, 'Full': 3, 'Heavy': 4}
}
features = ['Roast Level', 'Ground Type', 'Fragrance', 'Flavor', 'Body']

# Apply label encoding to features
for feature in features:
    data[feature] = data[feature].map(mappings[feature])

# Prepare features (X) and target (y)
X = data[features]
y = data['Class Name']

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
    roast_level = selected_values['roast_level']
    print(roast_level)
    ground_type = selected_values['ground_type']
    print(ground_type)
    fragrance = selected_values['fragrance']
    print(fragrance)
    flavor = selected_values['flavor']
    print(flavor)
    body = selected_values['body']
    print(body)
    user_input_df = pd.DataFrame([{
            'Roast Level': roast_level,
            'Ground Type': ground_type,
            'Fragrance': fragrance,
            'Flavor': flavor,
            'Body': body
        }], columns=features)
    # Create feature array
    # features = np.array([[roast_level, ground_type, fragrance, flavor, body]])
    distances, indices = knn.kneighbors(user_input_df)
    recommendations = y.iloc[indices[0]].tolist()
    print(recommendations)
    print(type(recommendations))
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)

