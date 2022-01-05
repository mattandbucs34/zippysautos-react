import classQueries from "../model/queries/classQueries";

export default {
  async getDistinctClasses(req: any, res: any) {
    const distinct = await classQueries.getDistinctClasses();
    res.send(distinct);
  }
}