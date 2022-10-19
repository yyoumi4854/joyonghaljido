const rateLimit = require("express-rate-limit");

const postRequestLimiter = rateLimit({
//   windowMs: 20 * 1000, //20seconds
//   max: 1,
//   handler: (req, res) => {
//     return res.status(429).send("20초 당 한 건의 리뷰만 등록할 수 있습니다.");
//   },
});

module.exports = postRequestLimiter;
