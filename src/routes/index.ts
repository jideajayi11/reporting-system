import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const relativePath = "../domains";
const pathToRouteFolders = path.join(__dirname, relativePath);
const allRouteFolders = fs.readdirSync(pathToRouteFolders);
const routeFilename = "routes.ts";

try {
  allRouteFolders.forEach(async routeFolder => {
    const folderRoutesPath = `${pathToRouteFolders}/${routeFolder}/${routeFilename}`;
    let folderRoutes = [];

    if(fs.existsSync(folderRoutesPath)) {
      folderRoutes = (await import(`${pathToRouteFolders}/${routeFolder}/${routeFilename}`)).default;
    }

    folderRoutes?.length && folderRoutes.forEach(singleRoute => {
      router[singleRoute.method](
        singleRoute.path,
        ...(singleRoute?.middlewares?.length ? (singleRoute?.middlewares) : []),
        singleRoute.controller,
      );
    });
  });
} catch (error) { console.log('error reading route folder', error) }

export default router;
