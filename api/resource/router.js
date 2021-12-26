// build your `/api/resources` router here
const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
    Resources.get()
        .then(resources => res.json(resources))
        .catch(next)
})

router.post("/", (req, res, next) => {
    const body = req.body
    Resources.create(body)
        .then(resource => res.status(201).json(resource))
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
      message: "Well, this wasn't supposed to happen.",
      error: err.message
    });
  });

module.exports = router;
