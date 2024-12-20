let addto = document.querySelector(".addTo .containerr");

function getCart() {
    addto.innerHTML = ""; 
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
        cart.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("apple");
            div.innerHTML = `<div class="succes">
                            <i onclick="removeItem(${item.id})" class="fa-solid fa-xmark"></i>
                             <img src="${item.image}" alt="">
                             <p>"${item.title}" </p>
                             <p>"${item.price}" </p>
                             <button onclick="addTocart('${item.id}')">cc</button>
                            </div>`;
            addto.appendChild(div);
        });
    }
}

window.onload = () => {
    getCart();
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newcart = [];
    if (id && cart) {
        cart.forEach((item) => {
            if (item.id != id) {
                newcart.push(item);
            }
        });
        localStorage.setItem("cart", JSON.stringify(newcart));

        
        getCart();
    }
}
