import xml.etree.cElementTree as ET
import sqlite3
conn = sqlite3.connect('ncnu.db')
print('Opened database successfully');

root = ET.parse("feed.xml")

book_node = root.getiterator('item')

data_dict = {}

sql_statment = '''INSERT INTO ncnu_info (faculty,year,
                                         semester,department,
                                         edepartment,cousre_id,
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
    # print(node[0].text)
    # for element in node:
    #     conn.execute('''INSERT INTO ncnu_info (faculty,year,
    #                                            semester,department,
    #                                            edepartment,cousre_id,
    #                                            class,course_cname,
    #                                            course_ename,classtime,
    #                                            location,teacher,
    #                                            eteacher,division,
    #                                            edivision,course_credit) 
    #                     VALUES (1, 'Paul', 32, 'California', 20000.00 )
    #                     ''');
    #     print(element.tag,element.text)
    #     print(i.tag,i.text,)
    #     pass
conn.commit()
conn.close()

