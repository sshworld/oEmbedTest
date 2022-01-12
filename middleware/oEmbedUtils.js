const provider = require('../provider.json');
const url = require('url')

let providerUrl = []
for (var a of provider) {
    providerUrl.push(a.endpoints[0].url)
}

exports.getOEmbedUrl = async (urlStr) => {

    try {
        const uStr = url.parse(urlStr, true);
        let oembedUrl = ''
        let str = ''
        let hostname = uStr.hostname.split('.')

        hostname = hostname[hostname.length - 2]
        for (var host of providerUrl) {
            if (host.includes(hostname)) {
                str = host;
                break;
            }
        }

        if (str.includes("oembed.")) {
            str = str.replace("{format}", "json");
            oembedUrl = str + "?url=" + uStr.href
        } else {
            oembedUrl = str + '?format=json&url=' + uStr.href
        }

        return oembedUrl

    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}