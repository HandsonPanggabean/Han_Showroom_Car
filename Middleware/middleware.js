function isUserLogin (req, res, next) {
    if(req.session.isLogin) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = isUserLogin