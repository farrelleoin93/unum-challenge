from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}}) 

@app.route('/', methods=['GET','POST'])
def api():


    if request.method == 'POST':
        # Get the list of numbers
        numbers = request.json.get('numbers')
        # Do calculations
        numbers_list = [float(i) for i in numbers]
        max_number = max(numbers_list)
        min_number = min(numbers_list)
        average_number = round(sum(numbers_list) / len(numbers_list))

        print(numbers_list, max_number, min_number, average_number)
        # Return as dictionary
        return {
            'numbers': numbers_list,
            'min': min_number,
            'max': max_number,
            'average': average_number
        }

      
# Running app
if __name__ == '__main__':
    app.run(debug=True)