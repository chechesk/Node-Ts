import { Router, Request, Response } from "express";

const route = Router();

route.get("/", (req: Request, res: Response) => {
  console.log("Server is OK");
  res.status(200).send("Server is OK");
});

export default route; 
