import { Sequelize, DataTypes } from 'sequelize';
import { seqDB } from '../config/connection';
import { Vehicle } from './vehicle';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});

export const VehicleType = sequelize.define('Type', {
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});
