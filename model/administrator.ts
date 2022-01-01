import { Sequelize, DataTypes } from 'sequelize';
import { seqDB } from '../config/connection';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});

const Administrator = sequelize.define('Administrator', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})