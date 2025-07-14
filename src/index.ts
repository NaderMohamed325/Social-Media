import express from "express";
import { app } from "./app";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";


const port = 8000;

app.all("/api/auth/{*any}", toNodeHandler(auth));


app.use(express.json());

app.listen(port, () => {
  console.log(`Better Auth app listening on port ${port}`);
});
