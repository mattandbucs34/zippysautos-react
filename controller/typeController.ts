import typeQueries from "../model/queries/typeQueries";

export default {
  async getDistinctTypes(req: any, res: any) {
    const distinct = await typeQueries.getDistinctTypes();
    res.send(distinct);
  }
}