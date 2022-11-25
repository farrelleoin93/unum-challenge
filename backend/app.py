from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}}) 

@app.route('/', methods=['GET','POST'])
def api():
    if request.method == 'POST':
        print('greater')
        numbers = request.json.get('numbers')
        jsonStatement = jsonify(numbers)
        print(jsonStatement.response)
        return jsonStatement

        # else:
        #     result = request.json.get('numbers')
        #     print('less')
        #     print(result)
        #     return jsonify(numbers=result)


        # print(result)
        # return jsonify(numbers=result)
    
    else:
        return {'numbers': numbers}

      
# Running app
if __name__ == '__main__':
    app.run(debug=True)