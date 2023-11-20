const studentController = {
  getStd: (req, res) => {
    return res.json({ msg: "get all students" });
  },
  createStd: (req, res) => {
    return res.json({ msg: "created student" });
  },
  deleteStd: (req, res) => {
    return res.json({ msg: "deleted student" });
  },
};
export default studentController;
