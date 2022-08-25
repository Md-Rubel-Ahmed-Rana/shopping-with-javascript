
const buttons = document.getElementsByClassName("card-btn");
for( const button of buttons) {
    button.addEventListener("click", () => {
        const productName = button.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
        const productPrice = button.previousSibling.previousSibling.innerText;
        const table = document.getElementById("table");
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = productName;
        const td2 = document.createElement("td");
        td2.innerText = productPrice;

        // console.log(td2.innerText);
        
        // add the td tags to the tr tag
        tr.appendChild(td1)
        tr.appendChild(td2)

        // add the tr tag to the table tag
        table.appendChild(tr);

        const productPriceSpan = button.previousSibling.previousSibling;
        const getSpan = productPriceSpan.childNodes[1].innerText;
        const priceValue = parseInt(getSpan);

        // get total price element
        const totalPriceElement = document.getElementById("total-price");
        const priceString = totalPriceElement.innerText;
        const totalPrice = parseInt(priceString);

        const currentPrice = totalPrice + priceValue;
        totalPriceElement.innerText = currentPrice;

        // increase the product number
        const productCounterElement = document.getElementById("product-count");
        const productCounterString = productCounterElement.innerText;
        const productCounter = parseInt(productCounterString);
        productCounterElement.innerText = productCounter + 1;
    })
}
// console.log(buttons, cards);