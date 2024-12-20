let container = document.querySelector(".apple")

let page=1;
let limit=4;
let Alldata;
async function getApi() {
    try {
      let loading=true;
      if(loading){
        container.innerHTML=`<h1>loading..</h1>`
      }
      limit=limit+4
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`)
        loading=false
        Alldata=data;
        
        container.innerHTML=""
        data.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("apple")
            div.innerHTML = `<div class="succes">
                             <i onclick="addTowish(${item.id})" class="fa-solid fa-heart"></i>
                             <img src="${item.image}" alt="">
                             <p>"${item.title}" </p>
                             <p>"${item.price}" </p>
                             <button onclick="addTocart('${item.id}')">cc</button>
                            `
            container.appendChild(div)
        })
    } catch (error) {
        console.log(error);

    }
}
getApi()

let button=document.getElementById("button")
button.addEventListener("click",getApi)

function addTocart(id){
  
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  if(id){
    let result1 =cart.find((item)=>item.id==id);
    if(result1){
      alert("bu mehsul sebetinizde movcuddur")
      return
    }
    let result = Alldata.find((item)=>item.id==id);
    if(result){
      cart.push(result)
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  }

}


function addTowish(id){
  
  let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
  if(id){
    let result1 =wishlist.find((item)=>item.id==id);
    if(result1){
      alert("bu mehsul sebetinizde movcuddur")
      return
    }
    let result = Alldata.find((item)=>item.id==id);
    if(result){
      wishlist.push(result)
      localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }
  }

}



function dateTime(){
  let date = new Date(); 
  let day = document.getElementById("day");
  let hours = document.getElementById("hours");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  
  day.innerHTML = date.getDate();
  hours.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  second.innerHTML = date.getSeconds();
}

setInterval(dateTime, 1000); 
