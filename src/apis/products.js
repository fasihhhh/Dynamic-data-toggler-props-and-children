const URL = `https://dummyjson.com/products`

let Products = [];
async function fetchData() {
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data)
    Products = await [...data.products];
    // console.log(Products)
    // return data.products
}


fetchData()
// Products
export default Products