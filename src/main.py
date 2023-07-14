import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')


@app.route('/predict', methods = ['POST'])
def home():
    if(request.method == 'POST'):
        data = request.get_json()
        
        # pickle = open("model.pickle","rb")
        model=pickle.load(open(r'D:\react apps\hate-speech\src\model.pkl','rb'))
        cv = pickle.load(open(r'D:\react apps\hate-speech\src\countVec.pkl', 'rb'))
        # clf = pickle.load(pickle)
        x = data['data']
        # cv = CountVectorizer()
        tx = cv.transform([x]).toarray()
        ans = model.predict(tx)
        if 'No' in ans[0] :
             return 'No Hate Speech Detected'
        return 'Hate Speech Detected'

if __name__ == '__main__':
	app.run(debug = True)