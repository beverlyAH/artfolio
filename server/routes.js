const router = require('express').Router()
const controls = require('./controls.js')

router.route('/S3')
  .get(controls.getItemsFromS3)
router.route('/categories')
  .get(controls.getCategories)
router.route('/')
  .get(controls.getAllItems)
router.route('/:category')
router.route('/:id')

  
module.exports = router