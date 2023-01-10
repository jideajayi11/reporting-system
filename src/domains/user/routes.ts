import controller, { userLogin } from "./index";
import auth, { encryptPayloadPassword } from "../../middlewares/auth";

const path = "/user";

export default [
  {
    method: "post",
    path: `${path}`,
    middlewares: [encryptPayloadPassword],
    controller: controller.createDomain,
  },
  {
    method: "put",
    path: `${path}`,
    middlewares: [auth, encryptPayloadPassword],
    controller: controller.updateDomain,
  },
  {
    method: "post",
    path: `${path}/login`,
    middlewares: [],
    controller: userLogin,
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
