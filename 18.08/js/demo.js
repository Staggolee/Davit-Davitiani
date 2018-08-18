class Board {
    constructor(id){
        this._id = id;
        this._element = null;
    }

    init(){
        this._element = document.getElementById(this._id);
    }
    
    updateFontSize(fontSize){
        this._element.style.fontSize = fontSize;

    }

    updateColor(color){
        this._element.style.color = color;

    }
    updateBorderWidth(width){
        this._element.style.borderWidth = width;

    }
}

const board = new Board('board');
board.init();

console.log(board._element)