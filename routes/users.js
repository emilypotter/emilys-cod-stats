const express = require('express');
const API = require('call-of-duty-api')();
const router = express.Router();

router.get('/stats', (req, res, next) => {
    API.login('emily_p123@hotmail.co.uk', 'N3llytheelephan!').then(() => {
        API.MWcombatwz('v%20reactionz%20x', API.platforms.xbl).then((output) => {
            return res.json({succes: true, body: output});
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
