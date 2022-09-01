const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updatEBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootcamps).post(createBootcamp)
//   .route("/:id")
//   .get(getBootcamps)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

// router.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `show all bootcamps${req.params.id}` });
// });
// router.get("/:id", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "show all bootcamps" });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "create  a new bootcamps" });
// });

// router.put("/", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `update  bootcamps${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ sucess: true, msg: `show bootcamps${req.params.id}` });
// });

module.exports = router;
