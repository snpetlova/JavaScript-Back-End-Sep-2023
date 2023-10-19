const router = require('express').Router();
const creatureService = require('.././services/creatureService');

router.get('/all-posts', (req, res) => {
    res.render('post/all-posts');
});

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.post('/create', async (req, res) =>{
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    const payload = { name, species, skinColor, eyeColor, image, description, owner: req.user };

    await creatureService.create(payload);

    res.redirect('/posts/all-posts');
})

router.get('/profile', (req, res) => {
    res.render('post/profile');
});

module.exports = router;