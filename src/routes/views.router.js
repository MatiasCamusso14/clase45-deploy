import { Router } from "express";
import { petsService } from "../services/index.js"

const router = Router();

router.get('/', async (req, res) => {
    res.render('home', {});
})

router.get('/pets', async (req, res) => {
    const pets = await petsService.getAll();
    res.render('pets', {pets});
})

export default router;