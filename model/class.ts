import { Sequelize, DataTypes } from 'sequelize';
import { seqDB } from '../config/connection';
import { Vehicle } from './vehicle';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});

export const VehicleClass = sequelize.define( 'Class', {
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'classes',
  timestamps: false
});