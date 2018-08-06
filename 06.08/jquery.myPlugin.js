//bad
// $.fn.myPlugin = function(){
//     //logic
//     console.log("myPlugin");
// }


/*
( function($){

    $.fn.myPlugin = function(){
        console.log("myPlugin");
    }
})(jQuery)
*/

// ( function($){

//    $.extend($.fn, {
//        myPlugin(){
//            console.log("myplugin better way");
//        },
//        myPlugin2(){
//            console.log("hello myplugin2")
//        }
//    })
// })(jQuery)

/*
( function($){

    $.fn.styleElement = function(customText){
       return this.each( function() {
            // console.log(this)
            $(this).text(customText);
        });
    }
})(jQuery)
*/

( function($){

    $.fn.styleElement = function(options){

        let config = $.extend( {
            text: 'styleElement Default text',
            color: 'red',
            fontStyle: null,
            fontSize: '16px',
            backgroundColor: 'purple',
            padding: '7px'

        }, options );

       return this.each( function() {
            $(this).text(config.text);
            if( config.color ){
                $(this).css('color', config.color);
            };
            if( config.fontSize ){
                $(this).css('font-size', config.fontSize);
            }
            if( config.fontStyle ){
                $(this).css('font-style', config.fontStyle);
            }
            if( config.backgroundColor ){
                $(this).css('background-color', config.backgroundColor);
            }
            if( config.padding ){
                $(this).css('padding', config.padding);
            }
        });
    }
})(jQuery)