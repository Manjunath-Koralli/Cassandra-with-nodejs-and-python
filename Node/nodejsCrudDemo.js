var cassandra = require('cassandra-driver');
var async = require('async');
var assert = require('assert');

//connect to cluster
var client = new cassandra.Client({ 
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace : 'skillsoft'
});

//batch method to execute multiple statements
const queries = [
    {
        query : 'UPDATE instructors SET REGION = ? WHERE id = ?',
        params : ['IN','2000']
    },
    {
        query : 'INSERT INTO instructors (id,name,dept,region) VALUES (?,?,?,?)',
        params : ['2005','Lue Khoury','DB','US']
    },
    {
        query : 'DELETE FROM instructors WHERE ID = ?',
        params : ['2001']
    }
];

client.batch(queries, {prepare : true}, function(err) {
    assert.ifError(err);
    console.log('Data updated on Server');
    process.exit();
})