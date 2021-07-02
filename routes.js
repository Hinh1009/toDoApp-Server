const express = require("express");
const router = new express.Router();

const handlers = require("./To_Do_Collections");

router.post("/api/task", handlers.create);
router.get("/api/task", handlers.getAll);
router.put("/api/task", handlers.update);
router.delete("/api/task/:id", handlers.delete);

module.exports = router;
