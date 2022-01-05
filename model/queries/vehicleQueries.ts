import { Sequelize } from 'sequelize';
import { VehicleClass } from '../class';
import Make from '../make';
import { VehicleType } from '../type';
import { Vehicle } from '../vehicle';
import { seqDB } from '../../config/connection';
const sequelize = new Sequelize(seqDB.database, seqDB.user, seqDB.password, {dialect: "mysql"});


export default {
  async getAllVehicles() {
    try {
      const result = await sequelize.query(
        "SELECT * FROM vehicles INNER JOIN types t ON t.type_id = vehicles.type_id INNER JOIN makes m ON m.make_id = vehicles.make_id INNER JOIN classes c ON c.class_id = vehicles.class_id ORDER BY price DESC"
      )
      return result;
    }catch(err) {
      return err;
    }
  }
}