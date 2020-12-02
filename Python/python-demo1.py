from cassandra.cluster import Cluster
#cluster = Cluster(['127.0.0.1:9042'])
cluster = Cluster(['127.0.0.1'])
session = cluster.connect('skillsoft')
rows = session.execute('select * from instructors')
for vals in rows:
    print vals.id, vals.name, vals.dept, vals.region


