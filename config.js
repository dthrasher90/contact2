var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGODB_URI || "mongodb://localhost/",
}
module.exports = config;
