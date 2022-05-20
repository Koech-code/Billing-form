// let addButton=document.querySelector("button");
// let addTable=document.querySelector("table")

// let descriptionInput=document.querySelector("#description");
// let costInput=document.querySelector("#cost");
// let quantityInput=document.querySelector("#quantity");
// let vatInput=document.querySelector("#vat");
// let totalsInput=document.querySelector("#total");

// addButton.addEventListener("click", () =>{
//     let description=descriptionInput.value;
//     let cost=cost.value;
//     let quantity=quantityInput.value;
//     let vat=vatInput.value;
//     let totals=totalsInput.value;

//     let template = `
//     <tr>
//         <td>${description}</td>
//         <td>${cost}</td>
//         <td>${quantity}</td>
//         <td>${vat}</td>
//         <td>${totals}</td>
//         // <td>Actions</td>

//     `;

//     addTable.innerHTML +=template;
// })

function myFunction() {
    document.getElementById("myTable").deleteRow(0);
  }