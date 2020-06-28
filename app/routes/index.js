const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`Origin Backend Take Home Assignment v${global.APPVERSION}`);
});

module.exports = router;