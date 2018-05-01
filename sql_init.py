#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('ncnu.db')
print('Opened database successfully');

conn.execute("DROP TABLE ncnu_info;")
conn.execute('''CREATE TABLE ncnu_info
       (ID            INTEGER     PRIMARY KEY AUTOINCREMENT,
        faculty       TEXT    NOT NULL,
        year          INT     NOT NULL,
        semester      INT     NOT NULL,
        department    TEXT    NOT NULL,
        edepartment   TEXT    NOT NULL,
        cousre_id     CHAR(10) NOT NULL,
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

conn.close()