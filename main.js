

const getTextElementValue = (elementId) => {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);

    return elementValue;
}

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

        const priceElement = button.previousSibling.previousSibling;
        const getPriceText = priceElement.childNodes[1].innerText;
        const priceValue = parseInt(getPriceText);

        // get total price
        const totalPrice = getTextElementValue("total-price");
        // get total price element
        const totalPriceElement = document.getElementById("total-price");
        const currentPrice = totalPrice + priceValue;
        totalPriceElement.innerText = currentPrice;

        // get product amount
        const productCounter = getTextElementValue("product-count");
        // get product counter element
        const productCounterElement = document.getElementById("product-count");
        // increase the product number
        productCounterElement.innerText = productCounter + 1;
    })
}
// console.log(buttons, cards);