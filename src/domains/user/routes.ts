import { createUser } from "./index";

const path = "/user";

export default [
  {
    method: "post",
    path: `${path}`,
    middlewares: [],
    controller: createUser,
  },
];
