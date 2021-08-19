const products = [
    'oppo mobile phone',
    'samsung laptop',
    'lg mobile phone',
    'dell laptop',
    'lenevo camera Phone'
]
const searching = 'phone';

let newArray = [];
// String searching in traditional method
// for(const product of products){
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         newArray.push(product);
//     }
// }
// console.log(newArray);

// String searching by including method 
// for(const product of products){
//     if(product.toLowerCase().includes(searching.toLowerCase())){
//         newArray.push(product);
//     }
// }

// console.log(newArray);



//Check starting with or not
// const starting = 'dell';
// for(const product of products){
//     if(product.toLowerCase().startsWith(starting.toLowerCase())){
//         newArray.push(product);
//     }
// }
// console.log(newArray);


//Check ending with or not
const ending = 'laptop';
for(const product of products){
    if(product.toLowerCase().endsWith(ending.toLowerCase())){
        newArray.push(product);
    }
}
console.log(newArray);

