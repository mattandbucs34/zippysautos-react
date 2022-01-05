import { Sequelize } from 'sequelize';
import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zippysautos'
})

export const seqDB = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zippysautos',
  dialect: 'mysql'
}

export const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});
