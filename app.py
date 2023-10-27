from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello from Render</h1>'

@app.route('/two')
def two():
    return '<h2>Hello from page two</h2>'