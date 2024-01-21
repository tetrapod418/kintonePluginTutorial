const express = require('express');
const router = express.Router();

// kintoneからのリクエストの受け取り
router.post('/api/data', (req, res, next) => {
  // ログの表示
  console.log(req.headers);
  res.send('send');
});

module.exports = router;
