const WHATSAPP_NUMBER = "5548999999999"; // Troque pelo número real: 55 + DDD + número, sem espaços.

const products = [
  {id:"mussarela",name:"Mussarela",category:"Tradicionais",description:"Molho de tomate, mussarela, orégano e azeitonas.",price:39.90,image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"},
  {id:"calabresa",name:"Calabresa",category:"Tradicionais",description:"Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.",price:42.90,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"},
  {id:"frango",name:"Frango com Catupiry",category:"Tradicionais",description:"Frango desfiado temperado, mussarela e creme de Catupiry.",price:46.90,image:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"},
  {id:"portuguesa",name:"Portuguesa",category:"Tradicionais",description:"Presunto, ovos, cebola, ervilha, milho, mussarela e azeitonas.",price:47.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"marguerita",name:"Marguerita",category:"Tradicionais",description:"Mussarela, tomate, manjericão fresco e azeite.",price:44.90,image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"},
  {id:"milho-bacon",name:"Milho com Bacon",category:"Tradicionais",description:"Mussarela, milho, bacon crocante e orégano.",price:46.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"quatro-queijos",name:"Quatro Queijos",category:"Especiais",description:"Mussarela, provolone, parmesão e gorgonzola.",price:52.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"pepperoni",name:"Pepperoni",category:"Especiais",description:"Mussarela, pepperoni fatiado e orégano.",price:54.90,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"},
  {id:"carne-seca",name:"Carne Seca com Catupiry",category:"Especiais",description:"Carne seca desfiada, cebola, mussarela e Catupiry.",price:56.90,image:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80"},
  {id:"strogonoff",name:"Strogonoff de Frango",category:"Especiais",description:"Frango cremoso, mussarela, champignon e batata palha.",price:54.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"bacon",name:"Bacon Especial",category:"Especiais",description:"Mussarela, bacon, cheddar cremoso e cebola caramelizada.",price:55.90,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"},
  {id:"camarao",name:"Camarão Cremoso",category:"Especiais",description:"Camarões temperados, mussarela e creme especial.",price:64.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"parma",name:"Parma & Rúcula",category:"Premium",description:"Mussarela, presunto parma, rúcula e parmesão.",price:62.90,image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"},
  {id:"brie",name:"Brie com Geleia de Pimenta",category:"Premium",description:"Queijo brie, mussarela e toque de geleia de pimenta.",price:61.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"file",name:"Filé Mignon com Cheddar",category:"Premium",description:"Tiras de filé mignon, mussarela, cheddar e cebola.",price:69.90,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"},
  {id:"chocolate",name:"Chocolate",category:"Doces",description:"Chocolate cremoso e granulado.",price:42.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"choc-morango",name:"Chocolate com Morango",category:"Doces",description:"Chocolate cremoso, morangos e chocolate branco.",price:47.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"banana",name:"Banana com Canela",category:"Doces",description:"Banana, açúcar, canela e leite condensado.",price:39.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"romeu",name:"Romeu e Julieta",category:"Doces",description:"Queijo cremoso e goiabada.",price:43.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:"coca-lata",name:"Coca-Cola lata 350ml",category:"Bebidas",description:"Refrigerante gelado em lata.",price:6.00,image:"https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=700&q=80"},
  {id:"coca-2l",name:"Coca-Cola 2L",category:"Bebidas",description:"Refrigerante Coca-Cola para compartilhar.",price:13.00,image:"https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=700&q=80"},
  {id:"guarana",name:"Guaraná Antarctica 2L",category:"Bebidas",description:"Refrigerante para acompanhar sua pizza.",price:12.00,image:"https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=700&q=80"},
  {id:"agua",name:"Água mineral 500ml",category:"Bebidas",description:"Água mineral.",price:4.00,image:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80"},
  {id:"suco",name:"Suco natural 1L",category:"Bebidas",description:"Suco natural refrescante.",price:14.00,image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"},
  {id:"combo-individual",name:"Combo Individual",category:"Combos",description:"Pizza pequena + refrigerante lata.",price:34.90,image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"},
  {id:"combo-casal",name:"Combo Casal",category:"Combos",description:"Pizza média + refrigerante 2L.",price:54.90,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"},
  {id:"combo-familia",name:"Combo Família",category:"Combos",description:"Pizza grande + refrigerante 2L + sobremesa.",price:79.90,image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"}
];

let cart = JSON.parse(localStorage.getItem("vitorCart") || "[]");
let selectedProduct = null;
let selectedSize = "Média";
const sizes = { "Broto":0, "Pequena":5, "Média":10, "Grande":20, "Família":30 };

const $ = (s) => document.querySelector(s);
const money = (v) => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function renderProducts(){
  const category = document.querySelector(".category.active")?.dataset.category || "Todos";
  const search = $("#searchInput").value.toLowerCase().trim();
  const list = products.filter(p => (category==="Todos" || p.category===category) && (!search || (p.name+" "+p.description).toLowerCase().includes(search)));
  $("#productsGrid").innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-category">${p.category}</span></div>
      <div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-button" data-product="${p.id}" aria-label="Adicionar ${p.name}">+</button></div></div>
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", list.length > 0);
  document.querySelectorAll(".product-card").forEach(card => card.addEventListener("click", e => {
    if(!e.target.closest(".add-button")) openProduct(card.querySelector("[data-product]")?.dataset.product || list.find(p=>p.name===card.querySelector("h3").textContent).id);
  }));
  document.querySelectorAll(".add-button").forEach(btn => btn.addEventListener("click", e => {e.stopPropagation(); openProduct(btn.dataset.product);}));
}
function openProduct(id){
  selectedProduct = products.find(p=>p.id===id); selectedSize="Média";
  $("#modalImage").src=selectedProduct.image; $("#modalImage").alt=selectedProduct.name;
  $("#modalCategory").textContent=selectedProduct.category; $("#modalName").textContent=selectedProduct.name; $("#modalDescription").textContent=selectedProduct.description;
  $("#modalNotes").value="";
  $("#sizeOptions").innerHTML = selectedProduct.category==="Bebidas" ? `<span class="size-option active">Único</span>` : Object.keys(sizes).map(s=>`<button class="size-option ${s==="Média"?"active":""}" data-size="${s}">${s}</button>`).join("");
  document.querySelectorAll("[data-size]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-size]").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedSize=b.dataset.size;updateModalPrice();}));
  updateModalPrice(); $("#productModal").classList.add("show");
}
function updateModalPrice(){ $("#modalPrice").textContent=money(selectedProduct.price+(sizes[selectedSize]||0)); }
function addToCart(product,size="Média",notes=""){
  const price=product.price+(sizes[size]||0); const key=product.id+"-"+size+"-"+notes;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.quantity++; else cart.push({key,id:product.id,name:product.name,size,notes,price,image:product.image,quantity:1});
  saveCart(); showToast("Produto adicionado ao carrinho!"); closeModals();
}
function saveCart(){localStorage.setItem("vitorCart",JSON.stringify(cart));renderCart();}
function renderCart(){
  const count=cart.reduce((a,i)=>a+i.quantity,0); $("#cartCount").textContent=count;
  $("#cartItems").innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-item-main"><h4>${i.name}</h4><small>${i.size}${i.notes?` · ${i.notes}`:""}</small><div class="cart-item-line"><div class="quantity"><button data-minus="${i.key}">−</button><span>${i.quantity}</span><button data-plus="${i.key}">+</button></div><b>${money(i.price*i.quantity)}</b></div></div></div>`).join(""):`<div class="cart-empty">🍕<h3>Seu carrinho está vazio</h3><p>Escolha uma pizza deliciosa para começar.</p></div>`;
  const subtotal=cart.reduce((a,i)=>a+i.price*i.quantity,0), delivery=cart.length?5:5;
  $("#cartSubtotal").textContent=money(subtotal);$("#deliveryFee").textContent=money(delivery);$("#cartTotal").textContent=money(subtotal+delivery);
  document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>changeQty(b.dataset.plus,1));document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>changeQty(b.dataset.minus,-1));
}
function changeQty(key,delta){const i=cart.find(x=>x.key===key);if(!i)return;i.quantity+=delta;if(i.quantity<=0)cart=cart.filter(x=>x.key!==key);saveCart();}
function openCart(){ $("#cartPanel").classList.add("open");$("#overlay").classList.add("show");}
function closeCart(){ $("#cartPanel").classList.remove("open");$("#overlay").classList.remove("show");}
function closeModals(){document.querySelectorAll(".modal-backdrop").forEach(m=>m.classList.remove("show"))}
function showToast(text){$("#toast").textContent=text;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),2500)}
function orderMessage(data){
  const items=cart.map(i=>`• ${i.quantity}x ${i.name} (${i.size}) — ${money(i.price*i.quantity)}`).join("\n");
  const subtotal=cart.reduce((a,i)=>a+i.price*i.quantity,0);
  return `Olá! Quero fazer um pedido na Vitor Pizzaria 🍕\n\n*Pedido:*\n${items}\n\n*Subtotal:* ${money(subtotal)}\n*Entrega:* ${money(5)}\n*Total:* ${money(subtotal+5)}\n\n*Cliente:* ${data.name}\n*Telefone:* ${data.phone}\n*Endereço:* ${data.address}\n*Pagamento:* ${data.payment}\n*Troco para:* ${data.change||"Não se aplica"}\n*Observações:* ${data.notes||"Nenhuma"}`;
}
$("#categories").addEventListener("click",e=>{if(e.target.classList.contains("category")){document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));e.target.classList.add("active");renderProducts();}});
$("#searchInput").addEventListener("input",renderProducts);
$("#openCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#overlay").onclick=closeCart;
$("#heroOrder").onclick=()=>document.querySelector("#cardapio").scrollIntoView();
$("#clearCart").onclick=()=>{cart=[];saveCart();showToast("Carrinho limpo.");};
$("#modalAdd").onclick=()=>addToCart(selectedProduct,selectedSize,$("#modalNotes").value.trim());
document.querySelectorAll("[data-close-modal]").forEach(b=>b.onclick=closeModals);
$("#checkoutButton").onclick=()=>{if(!cart.length){showToast("Adicione algum produto primeiro.");return}closeCart();$("#checkoutModal").classList.add("show");};
$("#checkoutForm").onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage(data))}`,"_blank");};
$("#contactWhatsapp").href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido na Vitor Pizzaria.")}`;
document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{const p=products.find(x=>x.id===b.dataset.add);if(p)addToCart(p,"Grande","");});
$("#menuButton").onclick=()=>$("#nav").classList.toggle("open");
renderProducts();renderCart();