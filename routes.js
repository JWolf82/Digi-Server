var router = require('express').Router(),
  menuControl = require('./menus')

router.route('/menus')
  .get(menuControl.all)
  .post(menuControl.create)
router.route('/menus/:id')
  .put(menuControl.update)
  .delete(menuControl.delete)
  .get(menuControl.showOne)

module.exports = router
