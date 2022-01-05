import { Sequelize } from "sequelize";
import { VehicleClass } from "../class";

export default {

  async getDistinctClasses() {
    try {
      const result = await VehicleClass.findAll({
        attributes:
        [
          
          [Sequelize.fn('DISTINCT', Sequelize.col('class')), "class"],
          "class_id"
        ],
        order: [["class", "ASC"]]
      })
      return result;
    } catch (error) {
      return error;
    }
  }
}