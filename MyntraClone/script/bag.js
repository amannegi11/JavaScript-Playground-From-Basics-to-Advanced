
let bagItemObjects;
function onLoading() {
    loadBagItems();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
  let totalItems=0;
  let MRP=0;
  let DISCOUNT=0;
  const CONVENIENCE_FEE=99;
  
  bagItemObjects.forEach((item)=>{
    
    MRP+=item.original_price;
    DISCOUNT+=item.original_price-item.current_price;
  });
  totalItems=bagItemObjects.length;
  let TOTAL_AMOUNT= MRP-DISCOUNT+99;
  const bagSummaryElement=document.querySelector(".bag-summary");

  if(bagItemObjects.length>0){
  bagSummaryElement.innerHTML=`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems}Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${MRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${DISCOUNT}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${CONVENIENCE_FEE}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${TOTAL_AMOUNT}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;}
  else{
    const bag_page= document.querySelector(".bag-page");
    bag_page.innerHTML="<h2>NO ITEM FOUND</h2>"
  }
    
}
function loadBagItems(){
    console.log(bagItems);

    bagItemObjects=bagItems.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    })
    console.log(bagItemObjects);
}
onLoading()
function displayBagItems() {
    let containerElement = document.querySelector(".bag-items-container");
    let containerHTML = ``;
    bagItemObjects.forEach(element => {
        containerHTML+=generateItemHTML(element);
    });
  containerElement.innerHTML=containerHTML;
}

function generateItemHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">14 days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">10 Oct 2023</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`
}

function removeFromBag(itemId){
    bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId);
    localStorage.setItem("bagItems",JSON.stringify(bagItems));
    loadBagItems();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}
