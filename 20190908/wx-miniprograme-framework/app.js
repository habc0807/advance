var http = require('http');
var fs = require('fs');
var path = require('path');
const rootDir = '/Users/gaobingyan/Desktop/advance/20190908/wx-miniprograme-framework'

var app = http.createServer((req, res) => {
    const filePath = path.resolve(rootDir, req.url)
    fs.readFile(filePath, 'utf-8', (err, content) => {
        res.write(content)
        res.end()
    })
}); 

var app = http.createServer((req, res) => {
            const filePath = path.resolve(rootDir + req.url);
            fs.readFile(filePath, 'utf-8', (err, content) => {
                        if (err) {
                            res.write('');
                            res.end();
                            return;
                        }
res.write(content);
res.end();
});


});
app.listen(9003);