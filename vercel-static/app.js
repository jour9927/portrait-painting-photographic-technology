const products = {
  mini: { name: "微光肖像", price: 1800 },
  classic: { name: "經典人像", price: 4200 },
  memory: { name: "記憶修復", price: 3200 },
};

const cart = [];
const money = new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 });
const cartPanel = document.querySelector("#cart");
const scrim = document.querySelector("#scrim");

function renderCart() {
  const items = document.querySelector("#cart-items");
  const empty = document.querySelector("#empty-cart");
  const total = document.querySelector("#cart-total");
  const checkout = document.querySelector("#checkout");
  const count = document.querySelector("#cart-count");
  count.textContent = cart.length ? `(${cart.length})` : "";
  empty.hidden = cart.length > 0;
  total.hidden = cart.length === 0;
  checkout.hidden = cart.length === 0;
  items.innerHTML = cart.map((id) => `<div><span>${products[id].name}</span><b>${money.format(products[id].price)}</b></div>`).join("");
  document.querySelector("#total-price").textContent = money.format(cart.reduce((sum, id) => sum + products[id].price, 0));
}

function setCartOpen(open) {
  cartPanel.hidden = !open;
  scrim.hidden = !open;
  cartPanel.setAttribute("aria-hidden", String(!open));
}

document.querySelectorAll(".add-cart").forEach((button) => button.addEventListener("click", () => {
  cart.push(button.dataset.id);
  renderCart();
  setCartOpen(true);
}));
document.querySelector("#open-cart").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
scrim.addEventListener("click", () => setCartOpen(false));
document.querySelector("#checkout").addEventListener("click", () => alert("正式上線後，這裡會連接安全付款與照片上傳流程。"));
renderCart();
