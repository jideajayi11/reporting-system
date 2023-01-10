import Controller from "../../utilities/controller";
import readRequest from "../../utilities/controller/readRequest";

export default new Controller({
  domain: "reports",
  name: "report",
  updateWhere: ({ body }):Array<string> => ["id", body?.id],
  readRequest,
});
