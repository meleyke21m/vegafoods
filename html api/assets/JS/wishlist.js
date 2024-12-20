let addto = document.querySelector(".addTo .containerTo"); 

function getCart() {
    addto.innerHTML = ""; 
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist) {
        wishlist.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("apple");
            div.innerHTML = `<div class="succes">
                            <i onclick="removeItem('${item.id}')" class="fa-solid fa-xmark"/>
                             <img src="${item.image}" alt="">
                             <p> "${item.title}"</p>
                             <p> "${item.price}"</p>
                             <button onclick="addTocart('${item.id}')">cc</button>
                            </div>`;
            addto.appendChild(div);
        });
    }
}

window.onload = () => {
    getCart();
}

function removeItem (id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let newcart = [];
    if (id && wishlist) {
        wishlist.forEach((item) => {
            if (item.id != id) {

                newcart.push(item);
            }
        });
        localStorage.setItem("wishlist", JSON.stringify(newcart));

     
        
        getCart();
    }
}


