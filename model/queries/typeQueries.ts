import { Sequelize } from "sequelize/dist"
import { VehicleType } from "../type"

export default {

  async getDistinctTypes() {
    const result = await VehicleType.findAll({
      attributes:
      [
        [Sequelize.fn('DISTINCT', Sequelize.col('type')), 'type']
      ]
    })
  }
}