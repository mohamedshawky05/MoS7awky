const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
const addProductButton = document.getElementById('addProduct');

let products = [
    { name: "Light Brown Shoes", price: "$49.00" },
    { name: "Brown Shoes", price: "$59.00" }
];

function renderTable() {
    productTable.innerHTML = '';
    products.forEach((product, index) => {
        const row = productTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = product.name;
        cell2.textContent = product.price;
        cell3.innerHTML = `<button onclick="editProduct(${index})">Edit</button> <button onclick="deleteProduct(${index})">Delete</button>`;
    });
}

function addProduct() {
    const name = prompt("Enter product name:");
    const price = prompt("Enter product price:");
    if (name && price) {
        products.push({ name, price });
        renderTable();
    }
}

function editProduct(index) {
    const name = prompt("Edit product name:", products[index].name);
    const price = prompt("Edit product price:", products[index].price);
    if (name && price) {
        products[index] = { name, price };
        renderTable();
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderTable();
}

addProductButton.addEventListener('click', addProduct);

renderTable();
