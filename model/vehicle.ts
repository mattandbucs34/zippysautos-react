import { Sequelize, DataTypes } from 'sequelize';
import { VehicleClass } from './class';
import Make from './make';
import { VehicleType } from './type';
import { seqDB } from '../config/connection';
import VehicleMake from './make';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});

const Vehicle = sequelize.define('Vehicle', {
  vehicle_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  make_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {});

Vehicle.belongsTo(VehicleClass, {
  foreignKey: 'class_id',
  onDelete: 'CASCADE'
});

VehicleClass.hasOne(Vehicle, {
  foreignKey: 'class_id',
  onDelete: 'CASCADE',
});

Vehicle.belongsTo(Make, {
  foreignKey: 'make_id',
  onDelete: 'CASCADE',
  
});

Make.hasMany(Vehicle, {
  foreignKey: 'make_id',
  onDelete: 'CASCADE'
});

Vehicle.belongsTo(VehicleType, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
});

VehicleType.hasMany(Vehicle, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
});

export { Vehicle }