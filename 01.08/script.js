$(document).ready( function() {
    $('div').each(function(index, element) {
        let n = $(this);
        // console.log( n.text())

        console.log($(this).attr('class'))

// DRY / KISS / wyswyg /
// $('div')
    });
} );


$('img').attr( {
    title: "Front End Developer",
    style: "border: 2px dotted black"
});



    $('img').each(function(index, element) {
        let n = $(this);
        
        // console.log($(this).attr(style))

        console.log($(this).attr('style'))

    });


    // append()/ appendTo()
    // prepend()/ prependTo()
    // remove()

// $('.class-5').append(`<span> class-5 content </span>`)
// $('<span> class-1 content </span>').appendTo('.class-1');

// $('div').append(' <strong>Multiple Append</strong> ')

// $('.class-3').prepend('<strong>Prepend Example</strong> ');

// $('#header').wrap(`<header class="header_block" />`)

// $('.class-2, .class-4').hide()

$("div").css('color', 'white');
$("div").css({
    'color' : 'white',
    'font-weight' : 'bold',
    'font-size' : '20px'
})


//addClass()
//hasClass()
//removeClass()
//toggleClass()

// $('div, h1').addClass('newClass');

// let headerh1 = $('h1')
// if( headerh1.hasClass('newClass') ) {
//     console.log("h1 has a newClass");
//     headerh1.removeClass('newClass');
// }


//jquery event shortcuts

/*

click()
blur()
focu()
mousemove()
keydown()

https://api.jquery.com/category/events/

*/


// $('#header').click( function(event) {
//     console.log(event)
//     $('#smallHeader').click();
// });

// $('#smallHeader').click( function(event) {
//     console.log('smallHeader was clicked')
// });

// $('div').on('click mouseenter mouseleave',function(){
//     console.log('header event')
//     $(this).toggleClass('hoverLike');
    
//     // $('#header').off('click');
// })

// $('div').on( {
//     mouseenter: function(){
//         $(this).addClass('hoverLike');
//     },
//     mouseleave: function(){
//         $(this).removeClass('hoverLike');

//     }
// } )

// $('div').hover(
//     function(){
//         $(this).addClass('hoverLike');
//     },
//     function(){
//         $(this).removeClass('hoverLike');

//     }
// );

//localstorage
//sessionstorage

let storage = window.localStorage;

$('#saveBtn').click( function() {
    let name = $('#name').val();
    let old = storage.getItem('userName')
    
    
    storage.setItem('userName', `${old} ${name}`);

// storage.length
// console.log(storage.key(0));
console.log(storage.getItem(userName));

})