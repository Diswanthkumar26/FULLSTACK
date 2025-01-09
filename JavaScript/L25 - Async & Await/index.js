function fetchData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const data = {id : 1 , Name : 'Diswanth'}
            resolve(data);
        },2000)
    })
}
fetchData().then((result)=>{
    console.log(result)
});



// without async
function getUser(){
    console.log('Fetching Data...');
    try {
        const data = fetchData();
        console.log('Data Fetched : ',data);
    } catch (error) {
        console.log(error)
    }
}

getUser();



async function getAsyncUser(){
    console.log('Fetching Data...');
    try {
        const data = await fetchData();
        console.log('Data Fetched : ',data);
    } catch (error) {
        console.log(error)
    }
}

getAsyncUser();