import vehicleQueries from '../model/queries/vehicleQueries';

export default {
  async getAll(req: any, res: any) {
    const allVehicles = await vehicleQueries.getAllVehicles(); 
    res.send(allVehicles);
  }
}