import { Router } from "express";
import studentController from "../../controller/student/index.js";
const router = Router();

router.get("/getStudents", studentController.getStd);
router.post("/createStudent", studentController.createStd);
router.delete("/deleteStudent", studentController.deleteStd);

export default router;
