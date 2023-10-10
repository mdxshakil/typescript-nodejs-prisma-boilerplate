import express from 'express';
import { demoController } from './demo.controller';
const router = express.Router();

router.get('/', demoController.demo);

export const DemoRoutes = router;
