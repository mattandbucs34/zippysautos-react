import { Sequelize } from "sequelize";
import VehicleMake from "../make";

export default {

  async getDistinctMakes() {
    try {
      const result = await VehicleMake.findAll({
        attributes:
        [
          
          [Sequelize.fn('DISTINCT', Sequelize.col('make')), "make"],
          "make_id"
        ],
        order: [["make", "ASC"]]
      })
      return result;
    } catch (error) {
      return error;
    }
  }
}