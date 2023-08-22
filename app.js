const express = require("express")
const app = express()
const axios = require("axios")
app.get("/",(req,res)=>{
    res.send("Cultimax FetchPro")
})
const callApi = ()=>{
    axios.get("https://cultimaxcd.onrender.com").then((resp)=>console.log(resp.data)).catch((e)=>console.log(e));
    axios.get("https://cultimaxd2.onrender.com").then((resp)=>console.log(resp.data)).catch((e)=>console.log(e));    
    axios.get("https://cultimax.onrender.com").then((resp)=>console.log("cultimaxmain")).catch((e)=>console.log(e));    
    axios.get("https://fetchpro.onrender.com").then((resp)=>console.log(resp.data)).catch((e)=>console.log(e));    
}
setInterval(()=>{
    callApi()
},600000)

app.listen(5000,()=>{
    callApi()
    console.log('server is running on port 5000')
})