from flask import Flask, render_template, request, jsonify
import pyautogui as pg
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/space_bar', methods=['POST'])
def space_bar():
    data = request.get_json()
    if (data['space_bar']):
        pg.press('space')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/arrow_up', methods=['POST'])
def arrow_up():
    data = request.get_json()
    if (data['arrow_up']):
        pg.press('up')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/arrow_down', methods=['POST'])
def arrow_down():
    data = request.get_json()
    if (data['arrow_down']):
        pg.press('down')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/arrow_left', methods=['POST'])
def arrow_left():
    data = request.get_json()
    if (data['arrow_left']):
        pg.press('left')
        time.sleep(0.1)
        pg.press('o')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/arrow_right', methods=['POST'])
def arrow_right():
    data = request.get_json()
    if (data['arrow_right']):
        pg.press('right')
        time.sleep(0.1)
        pg.press('o')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/tab_key', methods=['POST'])
def tab_key():
    data = request.get_json()
    if (data['tab_key']):
        pg.press('tab')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/f_key', methods=['POST'])
def f_key():
    data = request.get_json()
    if (data['f_key']):
        pg.press('f')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/j_key', methods=['POST'])
def j_key():
    data = request.get_json()
    if (data['j_key']):
        pg.press('j')
    return jsonify({'message': 'Data received successfully'})

@app.route('/api/enter_key', methods=['POST'])
def enter_key():
    data = request.get_json()
    if (data['enter_key']):
        pg.press('enter')
    return jsonify({'message': 'Data received successfully'})



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

