const { Router } = require('express')
const router = Router()

router.use('/ping', (req, res) => {
  res.json({
    message: 'Ping!'
  })
})

module.exports = router