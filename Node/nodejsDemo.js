var cassandra = require('cassandra-driver');
var async = require('async');

//connect to cluster
var client = new cassandra.Client({ 
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace : 'skillsoft'
});

//Read and print to console
const query = "SELECT * FROM instructors WHERE id='2000' ";
 
client.execute(query)
  .then(result => console.log('User with dept %s', result.rows[0].dept));


client.execute("SELECT * FROM instructors WHERE id='2000'",
    function(err , result){
        //if(!err) 
        if(result.rows.length > 0){
            var user = result.rows[0];
            console.log("\n Lets see what we get from our query");
            console.log("----------------------------------------");
            console.log("%s %s %s %s", user.id, user.name, user.dept, user.region)
        }
        else {
            console.log("No results");
        }
    });
