import json
from xml.etree import ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()

box = {'time': [], 'location': [], 'teacher': []}

for ele in root:

    #time
    # print(ele[9].text)
    if ele[9].text not in box['time']:
        box['time'].append(ele[9].text)
    #location
    # print(ele[10])
    if ele[10].text not in box['location']:
        box['location'].append(ele[10].text)

    #teacher
    # print(ele[11])
    if ele[11].text not in box['teacher']:
        box['teacher'].append(ele[11].text)

box['time'] = sorted(box['time'])
box['location'] = sorted(box['location'])
box['teacher'] = sorted(box['teacher'])


d1 =  json.dumps(box,sort_keys = True ,indent = 4 )
print(d1)
