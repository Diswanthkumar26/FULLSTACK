/*Promise Syntax
let promise = new promise((resolve,reject)=>{
     if(true){
        resolve(); 
     }else{
        reject();
     }       
});*/

let data = 5

let pro = new Promise((resolve, reject) => {
    if(typeof data === 'number'){
        resolve('success');
    }else{
        reject('Failed');
    }
})

pro
.then((result)=>{
   console.log(`On Resolve : ${result}`);
}).catch((error)=>{
    console.log(`On Reject : ${error}`)
});




function fetchData(){
    return new Promise((resolve, reject) => {
        console.log('Fetching Data....')
        setTimeout(()=>{
            const datas = {Name:'Diswanth', age : 21};
            const RandomValue = Math.random();
            console.log(`Random : ${RandomValue}`);
            const success = RandomValue > 0.5;
            if(success){
                resolve(datas);
            }else{
                reject('Failed to fetch data');
            }
        },1000);
    })
}

fetchData()
.then((result)=>{
    console.log(`Data Fetched : `, result)
}).catch((error)=>{
    console.log('Error : ',error)
});

// Example 3

let pro1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('pro 1 result');
    }, 2000);
});

let pro2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('pro 2 result');
    }, 1000);
});

let pro3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('pro 3 result');
    }, 3000);
});

// pro1.then((result)=>{
//     console.log(result);
// });
// pro2.then((result)=>{
//     console.log(result);
// })
// pro3.then((result)=>{
//     console.log(result);
// })

// Promise.all([pro1,pro2,pro3]).then((result)=>{
//     console.log(`All promise resolved`, result);
// }).catch((error)=>{
//     console.log('error',error)
// })


//Using promise.race to return as soon as the first promise completes 
Promise.race([pro1,pro2,pro3]).then((result)=>{
    console.log(`All promise resolved`, result);
}).catch((error)=>{
    console.log('error',error)
})