from cassandra.cluster import cluster
cluster = Cluster(['127.0.0.1'])
session = cluster.connect('skillsoft')

session.execute("INSERT INTO instructors(id,name) VALUES ('2010','No Name Instructor')")

rows = session.execute('select * from instructors')
for vals in rows:
    print vals.id, vals.name, vals.dept, vals.region

session.execute("delete from instructors where id='2010' ")
rows = session.execute('select * from instructors')
for vals in rows:
    print vals.id, vals.name, vals.dept, vals.region

session.execute("Update instructors set dept = 'TBD', region = 'US' where id = '2000' ")
rows = session.execute('select * from instructors')
for vals in rows:
    print vals.id, vals.name, vals.dept, vals.region