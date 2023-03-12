const express = require("express");
const { db } = require("../db/dbutils");
var router = express.Router();

router.get("/test", (req, res) => {
  db.all("select * from `message`", [], (err, row) => {
    res.send(row);
  });
});

router.get("/list", (req, res) => {
  db.all("select * from `message`", [], (err, row) => {
    res.send(row);
  });
});

router.post("/add", (req, res) => {
  let { title, content } = req.body;
  let create_time = new Date().getTime();
  db.run(
    "INSERT INTO `message`(`title`, `content`, `create_time`) VALUES(?, ?, ?)",
    [title, content, create_time],
    (err, rows) => {
      if (err == null) {
        res.send({
          code: 200,
          message: "添加成功",
        });
      } else {
        res.send({
          code: 500,
          message: "添加失败",
          error: err,
        });
      }
    }
  );
});

router.delete("/delete", (req, res) => {
  const deleteId = req.query.id;
  res.send({
    code: 500,
    message: "暂无权限删除留言",
  });

  // BACKUP
  // db.all("delete from `message` where `id` = ?", [deleteId], (err, rows) => {
  //   if (err == null) {
  //     res.send({
  //       code: 200,
  //       message: "删除成功",
  //     });
  //   } else {
  //     res.send({
  //       code: 500,
  //       message: "删除失败",
  //     });
  //   }
  // });
});

module.exports = router;
