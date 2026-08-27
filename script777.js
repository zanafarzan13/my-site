const hour = new Date().getHours();

const greeting = document.getElementById("greeting");

if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good Morning 🌞";
} 
else if (hour >= 12 && hour < 18) {
    greeting.textContent = "Good Afternoon ☀️";
} 
else {
    greeting.textContent = "Good Evening 🌙";
}

// آوردن پیام به پایین
setTimeout(() => {
    greeting.style.top = "30px";
}, 100);

// حذف بعد از 3 ثانیه
setTimeout(() => {
    greeting.style.top = "-80px";
}, 3000);


const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");

searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("show");
});


const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

cartIcon.addEventListener("click", function () {
    cartPanel.classList.toggle("show");
});

closeCart.addEventListener("click", function () {
    cartPanel.classList.remove("show");
});


let cart = [];
const addButtons = document.querySelectorAll(".add-to-cart");
const cartItemsDiv = document.getElementById("cartItems");

function renderCart() {
    const cartTotalP = document.getElementById("cartTotal");
    const cartCountSpan = document.getElementById("cartCount");
    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach(function (item, index) {
        cartItemsDiv.innerHTML += `
            <p>
                ${item.name} - $${item.price}
                <button class="remove-item" data-index="${index}">✕</button>
            </p>
        `;
        total = total + item.price;
    });

    cartTotalP.textContent = "Total: $" + total;
    cartCountSpan.textContent = cart.length;
}

addButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(product);
        renderCart();
    });
});

// حذف یه محصول از سبد خرید (Event Delegation)
cartItemsDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        renderCart();
    }
});


const shopNowBtn = document.getElementById("shopNowBtn");
const productsSection = document.querySelector(".products");

shopNowBtn.addEventListener("click", function () {
    productsSection.scrollIntoView({ behavior: "smooth" });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card");
        let found = false;

        cards.forEach(function (card) {
            const productName = card.querySelector("h3").textContent.toLowerCase().trim();

            if (productName.includes(searchTerm)) {
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                card.classList.add("highlight");

                setTimeout(function () {
                    card.classList.remove("highlight");
                }, 1500);

                found = true;
            }
        });

        if (!found) {
            alert("Product not found !");
        }
    }
});



const userIcon = document.getElementById("userIcon");
const userPanel = document.getElementById("userPanel");
const closeUser = document.getElementById("closeUser");

userIcon.addEventListener("click", function () {
    userPanel.classList.toggle("show");
});

closeUser.addEventListener("click", function () {
    userPanel.classList.remove("show");
});


const saveProfile = document.getElementById("saveProfile");
const welcomeMessage = document.getElementById("welcomeMessage");

saveProfile.addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;

    welcomeMessage.textContent = "Welcome, " + firstName + " " + lastName + "!";
});