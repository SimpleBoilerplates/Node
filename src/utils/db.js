const Sequelize = require('sequelize');

const CONNECTION_STRING = process.env.DATABASE_URL || "postgres://postgres:secret@localhost:5432/lwhh";

const db = new Sequelize(CONNECTION_STRING);

const User = db.define('users',{
    name:Sequelize.TEXT,
    email:{
        type:Sequelize.TEXT,
        unique:true
    },
    password:Sequelize.TEXT
});

const Books = db.define('books',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    title:Sequelize.TEXT,
    //author: Sequelize.TEXT,
    subTitle:Sequelize.TEXT,
    description:Sequelize.TEXT,
    preview: Sequelize.TEXT
});

const Direction = db.define('directions',{
    user_id:Sequelize.NUMERIC,
    destination:Sequelize.TEXT,
    hash:Sequelize.TEXT
});

db.sync()
    .then(e=>{
        console.log(`Database Synced`)
    }).catch(e=>console.log(e.message));

module.exports = {
    db,User,Direction,Books
}