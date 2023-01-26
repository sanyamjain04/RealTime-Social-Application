import app from './app'

import http from 'http'

const server = http.createServer(app)

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`server running on port ${port}`);

})