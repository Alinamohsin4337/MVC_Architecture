const productController = {
  getProduct: (req, res) => {
    return res.json({ msg: "get Products" });
  },
  createProduct: (req, res) => {
    return res.json({ msg: "created Product" });
  },
  deleteProduct: (req, res) => {
    return res.json({ msg: "deleted Product" });
  },
};
export default productController;
