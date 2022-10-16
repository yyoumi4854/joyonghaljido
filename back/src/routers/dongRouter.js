const { Router } = require("express");
const dongService = require("../services/dongService");

const dongRouter = Router();

dongRouter.get("/:dongId", async (req, res, next) => {
  try {
    const { dongId } = req.params;
    const foundDong = await dongService.getDongById(dongId);
    res.status(200).json(foundDong);
  } catch (error) {
    next(error);
  }
});

module.exports = dongRouter;
