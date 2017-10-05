//require mysql
var  mysql = require("mysql"); 
var connection;


if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 8889, 
		host: "localhost", 
		user: "root", 
		password: "root", 
		database: "burgers_db"
	})
}


//connect to the database
connection.connect(function(err) {
	if (err) {
		console.error("error connection: " + err.stack);
		return; 
	} 
	console.log("connected as id" + connection.threadId); 
}); 

//export connection 
module.exports = connection; 