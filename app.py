from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/collection')
def mycollection():
    return render_template('collection.html')

@app.route('/collection', methods=['GET', 'POST'])
def collection():
    if request.method == 'POST':
        # Get the username from the form submission
        username = request.form.get('username')
        
        if username:
            # Redirect to the user-specific collection page
            return render_template('user_profile.html', username=username)
        else:
            return "Username is required", 400
    
    return render_template('collection.html')





if __name__ == '__main__':
    app.run(debug=True)
