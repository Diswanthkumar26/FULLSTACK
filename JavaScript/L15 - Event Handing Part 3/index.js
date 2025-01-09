const feedBackForm = document.getElementById('feedbackForm');
const responseDiv = document.getElementById('response');

console.log(feedBackForm);

feedBackForm.addEventListener('submit',function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    console.log(formData);

    const formDataJson = {};
    formData.forEach((value,key) => {
       formDataJson[key] = value;  
    });

    console.log(formDataJson);

    const jsonString = JSON.stringify(formDataJson,null,2);

    responseDiv.innerHTML =`<pre>${jsonString}</pre>`;

    feedBackForm.reset();

});
