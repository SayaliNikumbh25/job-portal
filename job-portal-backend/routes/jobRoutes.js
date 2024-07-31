import { Router } from "express";
import job from "../controllers/jobController.js";
import validateNewJob from "../middlewares/verifyNewJob.js";
import verifyToken from "../middlewares/verifyToken.js"

const router = Router(); 

router.get('/', job.getJob)
router.get('/:id', job.findOneJob)
router.post('/add',verifyToken, validateNewJob, job.addJob)
router.put('/update/:id',verifyToken, validateNewJob, job.updateExistingJob)
router.delete('/delete/:id',verifyToken, job.deleteJob)


export default router