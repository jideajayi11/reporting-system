import bcrypt from "bcryptjs";

export const encode = (text:string) => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT as string));
  const hash = bcrypt.hashSync(text, salt);
  return hash;
}

export const verifyEncoding = (text:string, hash:string) => {
  return bcrypt.compareSync(text, hash);
}
