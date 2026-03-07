const express = require("express");
const router = express.Router();
const Drive = require("../models/drives");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    let drives = await Drive.find({});
    res.json({
      success: true,
      message: "Drives",
      data: drives,
    });
  }),
);

router.post(
  "/",
  wrapAsync(async (req, res) => {
    const club = new Drive(req.body);
    await club.save();

    res.status(201).json({
      success: true,
      message: "Club created successfully",
      data: club,
    });
  }),
);

router.put(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let club = await Drive.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true },
    );
    if (!club) {
      console.log("dfghjk");
      next(new ExpressError(400, "Club not found"));
      return;
    }
    res.status(201).json({
      success: true,
      message: "Club Updated",
      data: club,
    });
  }),
);

router.delete(
  "/:id/delete",
  wrapAsync(async (req, res, next) => {
    const club = await Drive.findByIdAndDelete(req.params.id);
    if (!club) {
      console.log("dfghjk");
      next(new ExpressError(400, "Club not found"));
      return;
    }
    res.json({ success: true, message: "Club Deleted" });
  }),
);

module.exports = router;
