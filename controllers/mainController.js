const mainService = require('../services/mainService')
const request = require('request')
const httpStatus = require('http-status-codes')

exports.searchData = async (req, res) => {

    try {
        const urlStr = req.query.url
        
        let oembedUrl = await mainService.SearchData(urlStr)

        request(oembedUrl, (err, response, body) => {
            var json = JSON.parse(body)
            res.status(httpStatus.OK).send(json)
        })
    } catch (err) {
        console.error(err, "searchData api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Invalid address.")
    }
}