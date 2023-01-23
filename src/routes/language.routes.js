import {request, Router} from "express";
import {methods as languageController} from "./../controlers/language.controller"

const router = Router();

router.get("/", languageController.getLanguages)
router.get("/:id", languageController.getLanguage)
router.post("/", languageController.registerLanguage)
router.delete("/:id", languageController.deleteLanguage)

export default router;