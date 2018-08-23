import requests
import os

URL = "https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=107&semester=1&unitId=all"

print('waiting...')

filepath = "./src/feed.xml"
response = requests.get(URL)

dirpath = "./src"
if not os.path.isdir(dirpath):
    os.mkdir(dirpath)

with open(filepath, 'wb') as file:
    file.write(response.content)

print('done.')
