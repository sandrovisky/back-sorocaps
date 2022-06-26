const Log = require("../model/Log");

module.exports = (req, res, next) => {
  async function logging() {
    console.log(res.statusCode)

    if (res.statusCode === 200) {
      if (req.method !== "GET") {
        await Log.create({
          userId: res.user.id,
          action: req.method,
          path: (req.baseUrl + req.path),
          body: JSON.stringify(req.body),
          params: JSON.stringify(req.query),
          table: req.baseUrl.replace('/', '')
        })
      }
    }
  }

  res.on("finish", logging);

  return next()
}