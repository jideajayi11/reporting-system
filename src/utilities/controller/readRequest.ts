import { Request } from "express";

export default ({ params: {id}, query }: Request) => {
  const { limit="", offset=0, ...restQuery } = query;
  const whereFunc = (builder:any) => {
    if (id) {
      return builder.where(restQuery).where({id});
    }
    return builder.where(restQuery);
  }

  if (id) {
    return {
      limit: null,
      offset: null,
      whereFunc,
    }
  }
  return {
    limit,
    offset,
    whereFunc,
  }
}
