const studentController = {
  getStd: (req, res) => {
    return res.json({ msg: "get students" });
  },
  createStd: (req, res) => {
    return res.json({ msg: "created student" });
  },
  deleteStd: (req, res) => {
    return res.json({ msg: "deleted student" });
  },
};
export default studentController;
