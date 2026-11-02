from flask import Flask, render_template

app = Flask(__name__)



@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/player")
def get_player():
    player = {"name": "LeBron James", "pts": 25, "reb": 8, "ast": 7}
    return player