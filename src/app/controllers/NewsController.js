//[GET]/news
class NewsController {
    index(req, res) {
        res.render('news');
    }

    //[GET]/news/:slug
    show(req, res) {
        res.send('NEWSDETAIL!!!');
    }
}

module.exports = new NewsController();
