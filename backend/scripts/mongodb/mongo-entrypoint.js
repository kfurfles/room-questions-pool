var db = connect("mongodb://projectuser:password123@localhost:27017/admin");

db = db.getSiblingDB('questionspool'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "projectuser",
        pwd: "password123",
        roles: [ { role: "readWrite", db: "questionspool"} ],
        passwordDigestor: "server",
    }
)