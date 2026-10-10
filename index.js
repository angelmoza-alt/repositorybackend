const http = require('http')

function requestController(req, res) {
    console.log('Bienvenidos al curso')
    res.end('Bienvenidos al curso')
}

const server = http.createServer(requestController)

server.listen(4000, function () {
    console.log("Aplicacion corriendo en: 4000")
})
