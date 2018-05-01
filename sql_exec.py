import sqlite3

conn = sqlite3.connect('ncnu.db')
# print('Opened database successfully');

data_box = conn.execute('select * from ncnu_info')

print(data_box)
for row in data_box:
	print(row)

conn.close()