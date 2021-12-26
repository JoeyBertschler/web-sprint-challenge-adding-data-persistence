// build your `/api/projects` router here
const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
    Projects.get()
        .then(projects => res.json(projects))
        .catch(next)
})

router.post("/", (req, res, next) => {
    const body = req.body
    Projects.create(body)
        .then(project => res.status(201).json(project))
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
      message: "Well, 500. This wasn't supposed to happen.",   
      error: err.message
    });
  });

// alts
router.get("/:project_id", (req, res, next) => {
    const project_id = req.params.project_id
    Projects.getById(project_id)
        .then(project => res.json(project))
        .catch(next) //this will be handled by the error handling middleware
})

router.put("/:project_id", (req, res, next) => {
    const project_id = req.params.project_id //could be req.body.project_id
    const body = req.body
    Projects.update(project_id, body)
        .then(project => res.json(project))
        .catch(next)
})

module.exports = router;
