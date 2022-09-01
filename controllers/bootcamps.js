const Bootcamp = require("../model/bootcamp");
//@desc get all bootcamps
//@Routes get/api/v1/bootcamps
//@acess pubvlic

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: " show all  bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `show bootcamp ${req.params.id}` });
};

//@desc create new bootcamp
//@Routes post/api/v1/bootcamps
//@acess private

exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(200).json({
    sucess: true,
    data: bootcamp,
  });
  //   console.log(req.body);
  //   res.status(200).json({ sucess: true, msg: "create a new bootcamps" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `update a bootcamps${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `delete a bootcamps${req.params.id}` });
};
