const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const addCartButtons = document.querySelectorAll(".add-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartremove =document.getElementById('remove');

let cartItems = [];

cartToggle.addEventListener("click", () => {
	cart.classList.toggle("active");
});

addCartButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		const name = btn.dataset.name;
		const price = parseFloat(btn.dataset.price);

		const existingItem = cartItems.find(item => item.name === name);
		if (existingItem) {
			existingItem.quantity++;
		} else {
			cartItems.push({ name, price, quantity: 1 });
		}
		updateCart();
	});
});

function updateCart() {
	cartItemsList.innerHTML = "";
	let total = 0;
	let count = 0;

	cartItems.forEach((item, index) => {
		const li = document.createElement("li");
		li.classList.add("liShop");

		const paracontent = document.createElement("p");
		paracontent.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

		const para = document.createElement("p");
		para.innerHTML = "❌"; // You can change this to "-" or any icon
		para.classList.add("remove-btn");
		para.style.cursor = "pointer";

		// 🔹 Remove button event
		para.addEventListener("click", () => {
			if (item.quantity > 1) {
				item.quantity--;
			} else {
				cartItems.splice(index, 1); // remove item completely
			}
			updateCart();
		});

		li.appendChild(paracontent);
		li.appendChild(para);
		cartItemsList.appendChild(li);

		total += item.price * item.quantity;
		count += item.quantity;
	});

	cartTotal.textContent = total.toFixed(2);
	cartCount.textContent = count;
}

document.getElementById("checkout").addEventListener("click", () => {
	alert("Thank you for your purchase!");
	cartItems = [];
	updateCart();
	cart.classList.remove("active");
});
