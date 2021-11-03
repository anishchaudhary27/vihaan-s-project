from flask import Flask
import json
import math
from flask_cors import CORS
app = Flask(__name__)

CORS(app)


@app.route('/rank/<searchTerm>')
def hello_world(searchTerm):
    print(searchTerm)
    resp = [
        "https://image.freepik.com/free-photo/hello-word-white-paper-printed-with-old-fashion-typewriter-font_184700-1184.jpg" for i in range(10)]
    return json.dumps(
        {
            "urls": resp,
            "scores": [0.00954 for i in range(10)]
        },
        separators=(',', ':')
    )


if __name__ == '__main__':
    app.run("127.0.0.1", 5000)
