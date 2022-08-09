// //EXAMINE THE DOCUMENT OBJECT//

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// // document.all[9].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


//GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
//var headerTitle =document.getElementById('header-title');
//var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent= 'hello';
// headerTitle.innerText='bye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML ='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';


// GETELEMENT BY CLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'hello 2';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor= 'yellow';

// // Gives error
// // items.style.backgroundColor = 'blue';

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor='blue';
// }

// GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent= 'hello 2';
// li[1].style.fontWeight= 'bold';
// li[1].style.backgroundColor= 'yellow';

// // Gives error
// // items.style.backgroundColor = 'blue';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor='blue';
// }


// QUERYSELECTOR //
// var header =document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
 
// var input = document.querySelector('input');
// input.value ='hello World';

// var submit =document.querySelector('input[type="submit"]');
// submit.value="send";

// var item =document.querySelector('.list-group-item');
// item.style.color ='red';

// var lastItem =document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color ='green';

//QUERYSELECTORALL //
// var titles =document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hello';

// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor ='blue';
//     even[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='blue';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ='green';
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='blue';

// FirstChild //
// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent='hello 1';
// itemList.lastElementChild.textContent='hello 4';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementsibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';

//createElement

// //Create a div
// var newDiv = document.createElement('div');

// // //Add Class
// newDiv.className ='hello';

// // //Add id
// newDiv.id='hello1';

// // //Add attr
// newDiv.setAttribute('title','hello Div');

// // //Create text node
// var newDivText = document.createTextNode('hello World');

// // //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 =document.querySelector('header h1');


// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);


// Events

// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent= 'changed';
//     // document.querySelector('#main').style.backgroundColor = 'blue';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML= '<h3>'+e.target.id+'</h3>';
    
//     // types of e
//     // console.log(e.type);

//     //position of the x axis
//     // console.log(e.clientX);
//     // console.log(e.clientY);
    
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);


// }

var button = document.getElementById('button');
var box = document.getElementById('box');
var select =document.querySelector('select');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove',runEvent);

var intemInput =document.querySelector('input[type="text"]');
var form = document.querySelector('form');

// intemInput.addEventListener('keydown', runEvent);
// intemInput.addEventListener('keyup', runEvent);
// intemInput.addEventListener('keypress', runEvent);

// intemInput.addEventListener('focus',runEvent);
// intemInput.addEventListener('blur',runEvent);


// intemInput.addEventListener('cut',runEvent);
// intemInput.addEventListener('paste',runEvent);

// intemInput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    console.log(e.target.value);
    
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'
    // output.innerHTML ='<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>'
    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    
     
}