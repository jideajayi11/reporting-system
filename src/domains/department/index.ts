import Controller from "../../utilities/controller";
import readRequest from "../../utilities/controller/readRequest";

export default new Controller({
  domain: "departments",
  name: "department",
  updateWhere: ({ body }):Array<string> => ["id", body?.id],
  readRequest,
});
