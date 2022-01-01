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