

                             // ! Task 1

//?  Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.



// function capaVerilen() { 
//     let capEdilenEdedler=[];
//     for ( let i=10; i<100; i++ ) {
//         let qaliq=i%10;
//         let tam=Math.floor(i/10)

//         if (qaliq===tam) {
//             capEdilenEdedler.push(i);
//         }
//     }
//     return capEdilenEdedler;
// }

//  let capaVerlienEdedler= capaVerilen()
// console.log(capaVerlienEdedler);



                             // ! Task 4

//  const products = [
//     {
//       id: 1,
    //   title: "Smartphone",
    //   description: "A high-end smartphone with the latest features.",
    //   price: 799.99,
    // },
    // {
    //   id: 2,
    //   title: "Laptop",
    //   description: "Powerful laptop with a large screen and fast processor.",
    //   price: 1299.99,
    // },
    // {
    //   id: 3,
    //   title: "Coffee Maker",
    //   description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
                  
                        
// ? product arrayindəki producların qiymətləri cəmini və ortalamasını tapın.

// let sumPrice= products.reduce((sum, product) => sum + product.price,0);
// let average= sumPrice / products.length-1;

// console.log("Qiymetlerin umumi cemi : " + sumPrice);    
// console.log("Qiymetlerin ededi ortasi : "+ average);



                             // ! Task 7
                             


// iki array muqayise eden ve eynidirse, true qaytaran funksiya yazin. 
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true


// function isEqual(array1, array2) {
    
//     if (array1.length === array2.length) {
//         return true;
//     }else {
//         return false;
//     }
    
// }
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) //-> //true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) //-> //false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) //-> //false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))// -> //true








































