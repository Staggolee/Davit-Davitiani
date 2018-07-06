function showSomething (title ="Untitled", width=200, height=200, items=[]) {
    console.log(`title=${title}, width=${width}, height=${height}`, items)
    
}

function showSomethingV2 ({
    title ="Untitled", 
    width=200,
    height=200, 
    items=[]
})  {
        console.log(`title=${title}, width=${width}, height=${height}`, items);
}

let options = {
    title: "My title",
    items: ['item1', 'item2']
}



showSomething("My title", 150, 300, ['item1', 'item2']);
showSomethingV2(options);






let user = {
    name:"John",
    years: 30,

}

let{name, years:age, isAdmin = false} = user;
console.log(name, age, isAdmin)




