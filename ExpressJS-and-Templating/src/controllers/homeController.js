const router = require('express').Router();

// const homeController = (req, res) => {
//     res.render("index");
// }

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
// module.exports = homeController;