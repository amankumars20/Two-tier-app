const express = require("express");
const Feedback = require("../db")

const router = express.Router();

router.post("/Enter_data", async (req, res) => {
    console.log(req.body);
    try {
        const feedback_table = await Feedback.create({
            name: req.body.name,
            email: req.body.email,
            mob_num: req.body.mob_num,
            problem: req.body.problem,
            description: req.body.description
        })
        const feedback_id = feedback_table._id;
        console.log(feedback_id);
        res.json({
            message: "Your complain successfully submitted"
        })
    } catch (e) {
        console.log(e);
        res.json({
            message: "something went wrong"
        })
    }
})

module.exports = router;