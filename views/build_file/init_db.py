import xml.etree.cElementTree as ET
import sqlite3
import requests
import html
from bs4 import BeautifulSoup


##########################################################################################
conn = sqlite3.connect('./src/ncnu.db')
print('Opened database successfully');
##########################################################################################
# DROP old table and create new table
conn.execute("DROP TABLE ncnu_info;")
conn.execute('''CREATE TABLE ncnu_info
       (ID            INTEGER     PRIMARY KEY AUTOINCREMENT,
        faculty       TEXT    NOT NULL,
        year          INT     NOT NULL,
        semester      INT     NOT NULL,
        department    TEXT    NOT NULL,
        edepartment   TEXT    NOT NULL,
        course_id     CHAR(10) NOT NULL,
        class         CHAR(2) NOT NULL,
        course_cname  TEXT    NOT NULL,
        course_ename  TEXT    NOT NULL,
        classtime     CHAR(20) NOT NULL,
        location      CHAR(20) NOT NULL,
        teacher       CHAR(20) NOT NULL,
        eteacher      CHAR(20) NOT NULL,
        division      CHAR(20) NOT NULL,
        edivision     CHAR(20) NOT NULL,
        course_credit CHAR(20) NOT NULL);
        ''')
print('Table created successfully');
##########################################################################################
# insert data to table
root = ET.parse("feed.xml")
book_node = root.getiterator('item')
sql_statment = '''INSERT INTO ncnu_info (faculty,year,
                                         semester,department,
                                         edepartment,course_id,
                                         class,course_cname,
                                         course_ename,classtime,
                                         location,teacher,
                                         eteacher,division,
                                         edivision,course_credit) 
                         VALUES ('''
                         # 1, 'Paul', 32, 'California', 20000.00 )
                         # ''');

for node in book_node:
    # this indent is seperate "item" tag
    print('*'*50)

    # if node[0].tag == faculty_set
    sql_statment_pre = sql_statment
    sql_statment_pre += "'" + node[0].text + "'" + ','
    sql_statment_pre += node[1].text + ','
    sql_statment_pre += node[2].text + ','
    sql_statment_pre += "'" + node[3].text + "'" +','
    sql_statment_pre += '"' + str(node[4].text) + '"' + ','
    sql_statment_pre += "'" + node[5].text + "'" + ','
    sql_statment_pre += "'" + node[6].text + "'" + ','
    sql_statment_pre += "'" + node[7].text + "'" + ','
    sql_statment_pre += '"' + node[8].text + '"' + ','
    sql_statment_pre += "'" + node[9].text + "'" + ','
    sql_statment_pre += "'" + node[10].text + "'" + ','
    sql_statment_pre += "'" + node[11].text + "'" + ','
    sql_statment_pre += "'" + str(node[12].text) + "'" + ','
    sql_statment_pre += "'" + node[13].text + "'" + ','
    sql_statment_pre += "'" + node[14].text + "'" + ','
    sql_statment_pre += "'" + node[15].text + "'"  
    sql_statment_pre += ');'
    print(sql_statment_pre)
    conn.execute(sql_statment_pre)
conn.commit()
##########################################################################################
conn.close()
print("#"*100)
print("initilize successfully !!!")