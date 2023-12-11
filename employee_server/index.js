const jsonserver = require('json-server')

const employeeServer = jsonserver.create()

const middleware = jsonserver.defaults()

const router = jsonserver.router('DB.json')

const port = 4000 || process.env.port

employeeServer.use(middleware)
employeeServer.use(router)

employeeServer.listen(port,()=>{
    console.log("Employee json server is online at port 4000");
})