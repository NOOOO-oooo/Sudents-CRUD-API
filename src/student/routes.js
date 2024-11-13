const { Router } = require("express");

const controller = require("./controller");
const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.Getstudent_Byid);
router.delete("/:id", controller.deletestudent_Byid);
router.post("/", controller.addStudent);
router.put("/:id", controller.update_Byname);
router.patch("/:id", controller.update_Email);

module.exports = router;
