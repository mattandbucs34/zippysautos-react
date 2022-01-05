import makeQueries from "../model/queries/makeQueries";

export default {
  async getDistinctMakes(req: any, res: any) {
    const distinct = await makeQueries.getDistinctMakes();
    res.send(distinct);
  }
}