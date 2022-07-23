const products = [
    {productsName: 'phone', price: 20000, color: 'black'},
    {productsName: 'laptop', price: 45000, color: 'black'},
    {productsName: 'watch', price: 5000, color: 'black-and-white'},
    {productsName: 'iPhone', price: 120000, color:'silver'},
    {productsName: 'Calculator', price: 1500, color: 'gray'},
    {productsName: 'Fan', price: 2900, color: 'smokeyWhite'}
];

const find = products.find(product => product.price == 5000);
console.log(find);