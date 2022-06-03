import json
import pandas as pd
import numpy as np
import csv
import pickle
import shutil, os
from os import listdir
from os.path import isfile, join

org = 'C:/Users/Sumanta Kumar Panda/Downloads/project-2/'
file_list = os.listdir(org)
for files in file_list:
    ext= os.path.splitext(files)[-1].lower()
    if(ext == ".json"):
        org_name = files
        df = pd.read_json(org_name)
        ls = df.columns.tolist()

        compare_list = ['Name', 'Price', 'Age', 'Size', 'Description', 'Address', 'Phone Number', 'Gender', 'Quantity',
                        'Item Name']
        inp = [0] * 10
        for x in ls:
            for i in range(len(compare_list)):
                if (x == compare_list[i]):
                    inp[i] = inp[i] + 1
        # for j in range(len(inp)):
        #     print(inp[j])

        with open('model_pkl', 'rb') as f:
            lr_clf = pickle.load(f)

        y_pred = lr_clf.predict([inp])

        new_name = y_pred[0] + '.json'
        os.rename(org_name, new_name)

        get_files = os.listdir('C:/Users/Sumanta Kumar Panda/Downloads/project-2/')
        for g in get_files:
            if (g == new_name):
                shutil.move('C:/Users/Sumanta Kumar Panda/Downloads/project-2/' + g, 'C:/Users/Sumanta Kumar Panda/Downloads/nifi-1.15.3-bin/nifi-1.15.3/classified/')

    elif(ext == ".csv"):
        org_name = files
        df = pd.read_csv(org_name)
        ls = df.columns.tolist()

        compare_list = ['Name', 'Price', 'Age', 'Size', 'Description', 'Address', 'Phone Number', 'Gender', 'Quantity',
                        'Item Name']
        inp = [0] * 10
        for x in ls:
            for i in range(len(compare_list)):
                if (x == compare_list[i]):
                    inp[i] = inp[i] + 1
        # for j in range(len(inp)):
        #     print(inp[j])

        with open('model_pkl', 'rb') as f:
            lr_clf = pickle.load(f)

        y_pred = lr_clf.predict([inp])

        new_name = y_pred[0] + '.csv'
        os.rename(org_name, new_name)

        get_files = os.listdir('C:/Users/Sumanta Kumar Panda/Downloads/project-2/')
        for g in get_files:
            if (g == new_name):
                shutil.move('C:/Users/Sumanta Kumar Panda/Downloads/project-2/' + g, 'C:/Users/Sumanta Kumar Panda/Downloads/nifi-1.15.3-bin/nifi-1.15.3/classified/')







