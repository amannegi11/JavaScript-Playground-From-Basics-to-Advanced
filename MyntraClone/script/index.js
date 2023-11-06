
let bagItems;
onLoad();
function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayHomePage();
    displayBagIcon();
}


function addToBag(item) {
    bagItems.push(item);
    localStorage.setItem("bagItems",JSON.stringify(bagItems));
    displayBagIcon();
}   
function displayBagIcon(){
    let bgItemCount=document.querySelector(".bag-item-count");
    if(bagItems.length>0){
        bgItemCount.innerText=bagItems.length;
        bgItemCount.style.visibility="visible";
    }else{
        bgItemCount.style.visibility='hidden';
    }
}
function displayHomePage() {
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = "";
    items.forEach((item) => {
        innerHTML += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="img">
    <div class="rating">${item.rating.stars} | ${item.rating.count}k </div>
    <div class="company-name">
        ${item.company}
    </div>
    <div class="item-name">
        ${item.item_name}
    </div>
    <div class="price">
        <span class="current-price">
            Rs ${item.current_price} 
        </span>
        <span class="original-price">
            Rs ${item.original_price}
        </span>
        <span class="discount">
            (${item.discount_percentage}%OFF)
        </span>
    </div>
    <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
}


