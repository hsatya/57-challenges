from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    greeting = None
    if request.method == 'POST':
        name = request.form.get('name')
        greeting = f'Hello, {name}, nice to meet you!'
    return render_template("index.html", greeting=greeting)



if __name__ == '__main__':
    app.run(debug=True)