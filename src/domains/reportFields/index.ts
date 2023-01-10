import Controller from "../../utilities/controller";
import readRequest from "../../utilities/controller/readRequest";

export default new Controller({
  domain: "reportFields",
  name: "report field",
  updateWhere: ({ body }):Array<string> => ["id", body?.id],
  readRequest,
});
