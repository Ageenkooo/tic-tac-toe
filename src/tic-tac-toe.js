class TicTacToe {
    constructor() {
        this.turns = 0;
        this.winner = 0;
        this.player = 0;
        this.arr = [];
        for(var i=0; i < 3; i++){
            this.arr[i] = [];
            for(var j=0; j<3; j++){
                this.arr[i][j] = 'E';
            }
        }
    }

    getCurrentPlayerSymbol() {
        switch(this.player){
            case 0:
                return 'x';
                break;
            case 1:
                return 'o';
                break;
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.arr[rowIndex][columnIndex] == 'E'){
            this.arr[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            switch(this.player){
            case 0:
                this.player = 1;
                break;
            case 1:
                this.player = 0;
                break;
            }
        }
    }

    isFinished() {
        if(this.getWinner() == 'x' || this.getWinner() == 'o' || this.isDraw()){
            return true;
        }
        else{
            return false;
        }
    }

    getWinner() {
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if(j == 1){
                    if(this.arr[i][j] == this.arr[i][j-1] && this.arr[i][j] == this.arr[i][j+1]){
                        if(this.arr[i][j] == 'x'){
                            return 'x';
                        }
                        if(this.arr[i][j] == 'o'){
                            return 'o';
                        }
                    }
                }
                if(i == 1){
                    if(this.arr[i][j] == this.arr[i-1][j] && this.arr[i][j] == this.arr[i+1][j]){
                        if(this.arr[i][j] == 'x'){
                            return 'x';
                        }
                        if(this.arr[i][j] == 'o'){
                            return 'o';
                        }
                    }
                }
                if(i==1 && j==1){
                    if((this.arr[i][j] == this.arr[i-1][j-1] && this.arr[i][j] == this.arr[i+1][j+1]) ||
                        (this.arr[i][j] == this.arr[i+1][j-1] && this.arr[i][j] == this.arr[i-1][j+1])){
                        if(this.arr[i][j] == 'x'){
                            return 'x';
                        }
                        if(this.arr[i][j] == 'o'){
                            return 'o';
                        } 
                    }
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
               if(this.arr[i][j] == 'E'){
                    this.turns = 1;
                    break;
                } 
            }
        }
        if(!this.turns ){
            return true;
        }
        else{
            this.turns = 0;
            return false;
        }
        
    }

    isDraw() {
        var k = 0;
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if(this.arr[i][j] == 'E'){
                    k++;
                }
            }
        }
        if(!k && this.getWinner() == null){
            return true;
        }
        if(k || this.getWinner() == 'x' || this.getWinner() == 'o'){
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.arr[rowIndex][colIndex] != 'E'){
            return this.arr[rowIndex][colIndex];
        }
        else {
            return null;
        }
    }
}

module.exports = TicTacToe;
