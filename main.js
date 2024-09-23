const axios = require("axios")

let servers = {}

let t = 2
let t1 = 0
console.log("查询程序已启动！")

setInterval(() => {
    t1++
    console.log("已查询一次 总共：" + t1)
    axios({
        method: 'get',
        url: 'https://api.alobgames.com/api/classifiedsite/servers/list?search=&page=1&region=Asia',
    }).then(res => {
        res.data.data.forEach(e =>{
            servers[e.name.toString()] += e.players
        })

        console.log(servers)
    })
}, 1000 * 60)

setInterval(() => {
    for(let i in servers){
        console.log(`${i} : ${servers[i] / t}`) 
    }
    
    setTimeout(()=>{
        console.clear()
    })
    t++
}, 1000 * 60 * 60)

axios({
    method: 'get',
    url: 'https://api.alobgames.com/api/classifiedsite/servers/list?search=&page=1&region=Asia',
}).then(res => {
    res.data.data.forEach(e =>{
        servers[e.name.toString()] = e.players
    })

    console.log(servers)
})