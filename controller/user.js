exports.test = async (req, res, next) => {
  res.send("Hello");
  res.end();
};

exports.practice = async (req, res, next) => {
  res.status(200).json({ message: "Success" });
};
