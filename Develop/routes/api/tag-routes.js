const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ raw: true }).then((data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({ tag_name: req.body.tag_name }).then((data) => {
    res.json(data);
  });
});

// ???????????????????????????????
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    { tag_name: "orange" },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((data) => {
    res.json(data);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
