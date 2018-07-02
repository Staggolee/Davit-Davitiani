let a = document.querySelector('a');

// console.log(a.constructor.name)
// Console.LOG(a.tagName)

let textarea = document.createElement('textarea');
document.body.appendChild(textarea);
// console.log(a.attributes)

let atts = Array.from(a.attributes);

let br = document.createElement('br');
document.body.insertBefore(br, textarea)


// atts.forEach((attr)=>{
//     // console.log(attr);
//     // console.log(attr.nodeName);
//     // console.log(attr.nodeValue);
//     console.log(`${attr.nodeName}=${attr.nodeValue}`);
// });

textarea.style.resize='none'
textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);

//display:block|none
// .hide .show

// console.log(textarea.getAttribute('style'))

//classname classlist
a.className = 'a-style';  //gadaewereba
a.className += 'a-style';  //damateba


// console.log(a.classList);
// console.log(a.classList.item(0));
a.classList.add('a-style')
console.log(a.classList.contains('a-style'))
console.log(a.dataset.cardId)
a.dataset.count=0;
// let count = 0;
a.addEventListener('click',(event)=>{
    let count = parseInt(event.target.dataset.count);
    // event.preventDefault();
    // a.classList.toggle('a-style');
    if(count <= 4){
        event.preventDefault();
    
        event.target.dataset.count = count +1;
    }
    a.classList.toggle('a-style')

})
// textarea.removeAttribute("rows");
// textarea.removeAttribute("cols")

let input= document.querySelector('#name');

// console.log(input.value);

// input.value = ""
    

