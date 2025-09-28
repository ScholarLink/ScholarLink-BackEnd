import express from "express"
import pkg from "../package.json" with { type: 'json' };

const app = express()

app.get("/", (req, res) => {
  res.json({
    name: "ScoolarLink API",
    status: "Running",
    version: pkg.version,
    author: pkg.author
  })
})

app.listen(3000, (e) => {
  console.log("Server running on port 3000");
  
})