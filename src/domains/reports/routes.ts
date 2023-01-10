import controller from "./index";
import auth from "../../middlewares/auth";

const path = "/report";

export default [
  {
    method: "post",
    path: `${path}`,
    middlewares: [auth],
    controller: controller.createDomain,
  },
  {
    method: "put",
    path: `${path}`,
    middlewares: [auth],
    controller: controller.updateDomain,
  },
  {
    method: "get",
    path: `${path}`,
    middlewares: [auth],
    controller: controller.readDomain,
  },
  {
    method: "get",
    path: `${path}/:id`,
    middlewares: [auth],
    controller: controller.readDomain,
  },
];
