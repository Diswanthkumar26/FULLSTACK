/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/


//1.getElementById

const heading=document.getElementById('main-heading');
console.log(heading);


//Finding value
console.log(heading.innerHTML); // outputs the  HTML content inside th element
console.log(heading.textContent); // outputs the  text content inside th element

//Changing value

heading.innerHTML = " hey, it's me Diswanth";
console.log(heading)
// heading.innerHTML = " hey, it's me Diswanth kumar";
function changeHeading(){
    setTimeout(() => {
        heading.textContent = " hey, it's me Diswanth kumar";
    },4000);
}
changeHeading();



// 2.getElementsByClassName

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

console.log(listItems.item(3));
console.log(listItems.item(3).innerHTML);

for(let i = 0; i<listItems.length; i++){
    console.log(listItems.item(i).innerHTML);
};

for(let i = 0; i<listItems.length; i++){
    listItems.item(i).innerHTML = `Modified Item ${i + 1}`;
};

const arrayItem = Array.from(listItems);
arrayItem.forEach((item)=>{
    console.log(item);
    console.log(item.textContent);
});


// // 3.getElementsByTagName

const contents = document.getElementById('content').getElementsByTagName('p');
console.log(contents);

function contentItem(){
    contents.item(1).style.color  = 'red';
    contents.item(0).style.fontSize = '14px';
    contents.item(2).style.fontWeight = '600';
    contents.item(3).style.backgroundColor = 'pink';
    contents.item(3).style.color = 'white';
};
contentItem();

function stylePadd(){
    for(let i = 0; i<contents.length;i++){
        contents.item(i).style.paddingBottom = '10px';
    };
};
stylePadd();

// Remove element from DOM

const massages = document.getElementById('message');

// massages.remove();
setTimeout(()=>{
    massages.remove();
},3000);

// Adding element from DOM

const newPara = document.createElement('h1');
newPara.textContent = 'hey its me Diswanth';
console.log(newPara);
newPara.style.color = 'green';
newPara.classList.add('new-paragraph');

const contrainer = document.getElementById('main');

/*
appendChild(); Adds a new element as last child of the parent element.
insertBefore(); Inserts a new element before an existing child element.
insertAdjacentHTML(); Inserts HTML content at a specified position relative to an element.
*/

contrainer.appendChild(newPara);
contrainer.insertBefore(newPara,heading);
contrainer.insertAdjacentHTML('afterbegin','<p>see me begin</p>');
contrainer.insertAdjacentHTML('afterend','<p>see me end</p>');
contrainer.insertAdjacentHTML('beforebegin','<p>see me beforebegin</p>');
contrainer.insertAdjacentHTML('beforeend','<p style="padding-top:20px">see me beforeend</p>');



// 4.querySelector
// selecting elements using querySelector (work both class or id more flexibility)

// const subtitle = document.querySelector('#subtitle');
// console.log(subtitle);
// console.log(subtitle.textContent);

// setTimeout(()=>{
//    subtitle.textContent="New subtitle from js "
// },4000);


// 5.querySelectorAll
// Selecting multiple elements using querySelectorAll

// const listItemsQuery = document.querySelectorAll('.list-item');
// console.log(listItemsQuery);

// listItemsQuery.forEach((item,index)=>{
//     item.textContent= `modified item ${index+2}` 
// })




