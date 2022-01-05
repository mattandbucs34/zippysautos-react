import { Sequelize } from "sequelize"
import { VehicleType } from "../type"

export default {

  async getDistinctTypes() {
    try {
      const result = await VehicleType.findAll({
        attributes:
        [
          [Sequelize.fn('DISTINCT', Sequelize.col('type')), "type"],
          "type_id"
        ],
        order: [["type", "ASC"]]
      })
      return result;
    } catch (error) {
      return error;
    }
  }
}