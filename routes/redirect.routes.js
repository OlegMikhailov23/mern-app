const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

router.get('/:code', async (req, res) => {
    try {
        const link = await Link.findOne({code: req.params.code})

        if (link) {
            link.clicks += 1
            await link.save()
            return res.redirect(link.from)
        }

        res.status(404).json('No anchor here')
    } catch (e) {
        res.status(500).json({message: 'Oops, something goes wrong'});
    }
})

module.exports = router
