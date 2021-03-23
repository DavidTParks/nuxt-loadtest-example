const { Router } = require('express')
const router = Router()

router.use('/ping', (req, res) => {
  res.json('Ping!')
})

module.exports = router