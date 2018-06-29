import requests

URL = "https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=106&semester=2&unitId=all"

print('waiting...')

response = requests.get(URL)
with open('feed.xml', 'wb') as file:
    file.write(response.content)

print('done.')
