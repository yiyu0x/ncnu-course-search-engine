#!/bin/python3
from bs4 import BeautifulSoup


soup = BeautifulSoup(open('feed.xml','r',encoding='utf-8').read(),'xml')
#f = open('feed.xml','r',encoding='utf-8').read()

lst = []
for i in soup.find_all('time'):
    if i not in lst:
        lst.append(i)

for i in lst:
    print(i)
