/*
Syntax

try{
   code block
}catch(error){
   code block
}finally{
   code that runs no matter what
}
 */

class Bank{
    users = [
        {accountNo:29997,balance:12000,username:'diswanth',password:'diswa2603'},
        {accountNo:29998,balance:12378,username:'MonkeyD.Luffy',password:'Onepiece'},
        {accountNo:29999,balance:18903,username:'Aizen',password:'bleach'}
    ];
    getBalanceWithoutErrorHandling(accountNo){
        const result = this.users.find((x)=>x.accountNo === accountNo);

        console.log(`Balance : ${result.balance}, Account holder : ${result.username} `);
    }
    getBalance(accountNo,password){
        try{
            const result = this.users.find((x)=>x.accountNo === accountNo);
            if(!result){
                
                throw `Invalid account no ${accountNo}`;  
            }
            const isValidPassword = result.password === password;
            if(!isValidPassword){
                throw `Wrong password`;
            }
            return `Balance : ${result.balance} , Account holder : ${result.username}`;
        }catch(error){
            console.log(error);
            return error;
        }finally{
            console.log('process is completed');
        }
    }
}

let stateBank = new Bank();

console.log(stateBank.users);

// stateBank.getBalance(29998 ,'Onepiece');
// stateBank.getBalance(29999 ,'bleac');
// stateBank.getBalanceWithoutErrorHandling(29999);
// stateBank.getBalanceWithoutErrorHandling(2999);

const formElement = document.getElementById('formData');
const displayData = document.getElementById('displayMessage');

formElement.addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(this);
    const request = {accountNo : null,password : ''};

    formData.forEach((value,key)=>{
        request[key] = value;
    });

    let indianBank = new Bank();

    const reponse = indianBank.getBalance(
        Number(request.accountNo),
        request.password
    );

    displayData.innerHTML = reponse;

    formElement.reset();
});





// getBalance(accountNo,password){
//     try{
//         const result = this.users.find((x)=>x.accountNo === accountNo);
//         if(result){
//             const isValidPassword = result.password === password;
//             if(isValidPassword){
//                 console.log(`Balance : ${result.balance},Account Holder : ${result.username}`);
//                 return `Balance : ${result.balance},Account Holder : ${result.username}`;
//             }else{
//                 throw `Wrong password`;
//             }
//         }else{
//             throw `Invalid account no ${accountNo}`;
//         }
//     }catch(error){
//         console.log(error);
//         return error;
//     }finally{
//         console.log('process is completed');
//     }
// }