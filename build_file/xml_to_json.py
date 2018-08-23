import json
import os
from xml.etree import ElementTree as ET

tree = ET.parse('./src/feed.xml')
root = tree.getroot()

box = {'faculty': [], 'department': [], 'time': [], 'location': [], 'course_id': [], 'teacher': []}

for ele in root:
    #faculty
    if ele[0].text not in box['faculty']:
        box['faculty'].append(ele[0].text)    
    #department
    if ele[3].text not in box['department']:
        box['department'].append(ele[3].text)  
    #time
    if ele[9].text not in box['time'] and ele[9].text:
        box['time'].append(ele[9].text)
    #location
    if ele[10].text not in box['location'] and ele[10].text:
        box['location'].append(ele[10].text)
    #course_id
    if ele[5].text not in box['course_id']:
        box['course_id'].append(ele[5].text)
    #teacher_name
    if ele[11].text not in box['teacher']:
        box['teacher'].append(ele[11].text)

# debug
# for i in box['time']:
#     print(type(i),i)

box['time'] = sorted(box['time'])
box['location'] = sorted(box['location'])

j =  json.dumps(box,sort_keys = True ,indent = 4 )
# print(j)

filepath = "../public/feed.json"
if os.path.isfile(filepath):
    print('deleted old file')
    os.remove(filepath) 

f = open(filepath, 'w')
print('writing string length : ',f.write(j))
