const oEmbedUtils = require('../middleware/oEmbedUtils')

exports.SearchData = async (urlStr) => {

    try {
        let oembedUrl = await oEmbedUtils.getOEmbedUrl(urlStr)
        return oembedUrl
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
    
}