const ShortUrl = require('../models/shortUrl')

const index = async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.json({ shortUrls })
}

const create = async (req, res) => {
    try {
        await ShortUrl.create({ full: req.body.fullUrl })
        res.json({ redirect: '/' })

    } catch (err) {
        console.log(err)
    }
}

const redirect = async (req, res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl })
    if(shortUrl == null ) {
        res.json({ redirect: '/404'})
        res.sendStatus(404)
    } else {
        res.json({ redirect: shortUrl.full })
    }
}

const remove = async (req, res) => {
    const id = req.params.shortUrl;
    
   ShortUrl.deleteOne({short: id}).then(result => res.json({ redirect: '/'}))
}

  module.exports = {
      index,
      create,
      redirect,
      remove
  }