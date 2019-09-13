var http = require('http');
var fs = require('fs');
var app = http.createServer((req, res) => {
    if(/login/.test(req.url)) {
        // let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code'
        const code = /code=([^&]*)/.exec(req.url)[1];
        console.log('code: ' + code )
        https.get(
            `https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code`,
            function (resHandler) {
                var str = ''
                resHanler.on('data', (chunk) => {
                    str += chunk;
                })

                resHanler.on('end', function () {
                    res.write(JSON.stringify({
                        errMsg: JSON.stringify(code)
                    }))
                    res.end();
                })
            }
        )
    } else {
        const result = {}
    }
    
    fs.readFile(__dirname + '/list___all__.json', 'utf-8', function (err, content) {
        console.log('err:', err, content);
        res.write(content);
        res.end(); 
    }); 
}); 

app.listen(9000);