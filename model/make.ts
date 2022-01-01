import { Sequelize, DataTypes } from 'sequelize';
import { seqDB } from '../config/connection';
import { Vehicle } from './vehicle';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});

const VehicleMake = sequelize.define('Make', {
  make_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
    references: 'make_id'
  }
}, {
  tableName: 'makes',
  timestamps: false
});

export default VehicleMake;