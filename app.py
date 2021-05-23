#from fastai1 import *
from flask import Flask,render_template,request,flash,url_for,redirect
from werkzeug.utils import secure_filename
import json
import random
import tablib

###############################################
#l=learner.load_learner("./models/level1.pth") #
###############################################

app=Flask(__name__)
app.secret_key = 'h432hi5ohi3h5i5hi3o2hi'


#create a route
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/prediction',methods=['GET','POST'])
def result():
    if request.method == 'POST':
        #flash(" ".join(request.form.keys()))
        f=request.form['img_file'].split("/")
        #-----------------------------------#
        #result=jsonify(l.predict(f))        #
        #json.dump(result,"testfile.json")   #
        #-----------------------------------#
        with open("testfile.json") as jfile:
            dicl=json.load(jfile)
        ifile=f[len(f)-1]
        if ifile in dicl.keys():
            result=dicl[ifile]
        furl="/test_images/"+f[len(f)-1]
        stage="Can't identify"
        if 'Mucosa' in result:
            stage="S0"
            if 'Lympho' in result:
                stage="S1"
            elif 'Debris' in result:
                stage="S2"
            
            if 'Stroma' in result or 'Complex' in result:
                stage="S3I"
            
        elif 'Lympho' in result:
            stage="S3"
            if 'Stroma' in result or 'Complex' in result:
                stage="S3I"
            
            #print(cell)
            
        #print(result1)
        return render_template('index.html',isindex=True,imagef=str(url_for("static",filename=furl)),result=result,stage=stage)
    else:
        return redirect(url_for('home'))
@app.route('/model')
def model():
    return render_template('model.html')
