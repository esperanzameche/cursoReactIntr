fetch("http://localhost:3000/")
.then(response=> response.json())
.then(data=> console.log(data));










/*function sendHTTPRequest(method,url,data) {
    return fecth(url,{
        method: method,
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
        },
    }).then((Response)=>{
        return Response.json();
    }); 
}
async function fecthPosts() {
    const responseData=await
    sendHTTPRequest("GET","http://localhost:3000/");
    console.log(responseData);
};
*/
