let container = document.querySelector(".containerProduct")


async function getApi() {
    try {
        let loading = true;
        if (loading) {
            container.innerHTML = `<h1>loading..</h1>`
        }
        //   limit=limit+4
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        loading = false
        container.innerHTML = ""
     visiable(data)
    } catch (error) {
        console.log(error);

    }
}
getApi()

let input = document.getElementById("searchInput")
// let srcBtn = document.getElementById("srcBtn")

input.addEventListener("input", getSearch)
async function getSearch() {
    try {
        container.innerHTML=""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.filter((item) => item.title.toLowerCase().includes(input.value.toLowerCase()));
        visiable(result)
       if (result.length !=0) {
       
       } else {
        container.innerHTML="<h1>Mövcud deyil</h1>"
       }
    } catch (error) {
        console.log(error);

    }
}
let az=document.getElementById("az");
let za=document.getElementById("za");
let expencive=document.getElementById("expencive");
let cheap=document.getElementById("cheap");
let def=document.getElementById("default");


az.addEventListener("click",alfabe)
za.addEventListener("click",befal)
expencive.addEventListener("click",expenciveto)
cheap.addEventListener("click",cheapto)
def.addEventListener("click",getSearch)
async  function alfabe(){
    try {
        container1.innerHTML=""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a,b)=> a.title.localeCompare(b.title))

       visiable(result)
    } catch (error) {
        console.log(error);

    }
}
async  function befal(){
    try {
        container.innerHTML=""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a,b)=> b.title.localeCompare(a.title))

    visiable(result)
    } catch (error) {
        console.log(error);

    }
}
async  function expenciveto(){
    try {
        container.innerHTML=""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a,b)=> b.price-a.price);

     visiable(result) 
    } catch (error) {
        console.log(error);

    }
}
async  function cheapto(){
    try {
        container.innerHTML=""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a,b)=> a.price-b.price);

       visiable(result)
    } catch (error) {
        console.log(error);

    }
}

function visiable(result){
    container.innerHTML=""
    result.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("apple")
        div.innerHTML = `<div class="succes">
                 <img src="${item.image}" alt="">
                 <p>${item.title}</p>
                 <p>${item.price}</p>
                 <button>c</button>
                `
        container.appendChild(div)
    })
}