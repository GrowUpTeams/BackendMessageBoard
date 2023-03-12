const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  // 设置允许跨域的域名， *代表允许任何域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method == "OPTIONS") res.sendStatus(200);
  else next();
});

app.use("/message", require("./router/MessageRouter"));
app.use(express.static(path.join(__dirname, "public")));
const port = 8080;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`服务器端运行成功: http://localhost:${port}`);
});
