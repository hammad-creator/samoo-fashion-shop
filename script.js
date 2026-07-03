// Live Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            let name = product.querySelector("h3").textContent.toLowerCase();

            if (name.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Add to Cart
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Product Added To Cart!");
    });
});

// Wishlist
const heart = document.querySelector(".fa-heart");

if (heart) {
    heart.addEventListener("click", () => {
        alert("❤️ Added To Wishlist!");
    });
}

// Login Button
const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        alert("👋 Login Feature Coming Soon!");
    });
}

// Contact Form
const contactBtn = document.querySelector(".contact button");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("✅ Your message has been sent!");
    });
}
// Cursor Golden Light

const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
    if(cursorLight){
        cursorLight.style.left = e.clientX + "px";
        cursorLight.style.top = e.clientY + "px";
    }
});
const popup = document.getElementById("productPopup");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupWhatsapp = document.getElementById("popupWhatsapp");

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {

        const img = card.querySelector("img").src;
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector(".price").innerText;

        popup.style.display = "flex";
        popupImg.src = img;
        popupTitle.innerText = title;
        popupPrice.innerText = price;

        popupWhatsapp.href =
        "https://wa.me/923112468478?text=Hello, I want to order " +
        encodeURIComponent(title);

    });

});

document.querySelector(".close-popup").onclick = () => {
    popup.style.display = "none";
};