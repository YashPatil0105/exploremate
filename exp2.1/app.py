from flask import Flask, render_template, request, jsonify
import pandas as pd
from datetime import datetime
import time
from fn1 import recommend_attractions, recommend_hotels, recommend_restaurants

app = Flask(__name__)

# Define routes for different recommendations
@app.route('/')
def home():
    return "Hello!! Welcome to ExploreMate....."

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    # Get user preferences from the form
    # Example: duration, budget, travel dates, etc.
    user_preferences = request.form

    answer = None

    if request.method == 'POST':
        user_location = request.form['location']
        user_start_date = request.form['Start_date']
        user_end_date = request.form['end_date']
        user_budget = request.form['budget']

    # Calculate the number of days between the start and end dates
    start_date = datetime.strptime(user_start_date, "%d-%m-%Y")
    end_date = datetime.strptime(user_end_date, "%d-%m-%Y")
    num_days = (end_date - start_date).days

    # Use the recommendation systems to get tailored recommendations
    attractions_recommendations = recommend_attractions(user_location)
    time.sleep(1)
    hotels_recommendations = recommend_hotels(user_location, budget=user_budget, num_days=num_days)
    time.sleep(1)
    restaurants_recommendations = recommend_restaurants(user_location, budget=user_budget)

    recomm=[attractions_recommendations,hotels_recommendations, restaurants_recommendations]
    # Pass the recommendations to the template for display
    return jsonify({'answer': recomm})

if __name__ == '__main__':
    app.run(debug=True)
