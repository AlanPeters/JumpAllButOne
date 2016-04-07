//jump solver
//
//blank spaces = -1

//  0 1 2 3 4
//0 0
//1 1 2
//2 3 4 5
//3 6 7 8 9
//4 A B C D E
var tries = 0;

function makeBoard(emptySpot){
    emptySpot = emptySpot || 0;
    var board = [];
    var tee = 0;
    for(var i = 0; i < 5; i++){
        board[i] = [];
        for(var k = 0; k <= i; k++ ){
            board[i][k] = tee;
            if(tee === emptySpot) board[i][k] = -1;
            tee++;
        }
    }
    return board;
}

function startPlay(board){
    play(board, 0);
}

function play(board, depth){
    if(depth === 13){
        console.log("played full game");
        console.log("Solved in "+ tries + " tries");
        //return true;
        return board[0][0] !== -1;
        //return board[0][0] === 4;
    }
    tries++;
    //check available moves
    for(var i = 0; i < 5; i++){
        for(var k = 0; k<=i; k++){
            if(board[i][k] === -1) continue;
            //jump right
            if(k + 2 <= i && board[i][k+2] == -1 && board[i][k+1] != -1){
                //console.log(board[i][k]+" can jump right");
                var jumped = board[i][k+1];
                board[i][k+1] = -1;
                board[i][k+2] = board[i][k];
                board[i][k] = -1;
                if(play(board, depth+1)){
                    console.log("Jump right from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i][k+2];
                    board[i][k+2] = -1;
                    board[i][k+1] = jumped;
                }
            }
            //jump left
            if(k - 2 >= 0 && board[i][k-2] == -1 && board[i][k-1] != -1){
                //console.log(board[i][k]+" can jump left");
                var jumped = board[i][k-1];
                board[i][k-1] = -1;
                board[i][k-2] = board[i][k];
                board[i][k] = -1;
                if(play(board,depth+1)){
                    console.log("Jump left from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i][k-2];
                    board[i][k-2] = -1;
                    board[i][k-1] = jumped;
                }
            }
            //jump right up
            if(k <= i-2 && board[i-2][k] == -1 && board[i-1][k] != -1){
                //console.log(board[i][k]+" can jump right up");
                var jumped = board[i-1][k];
                board[i-1][k] = -1;
                board[i-2][k] = board[i][k];
                board[i][k] = -1;
                if(play(board,depth+1)){
                    console.log("Jump right up from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i-2][k];
                    board[i-2][k] = -1;
                    board[i-1][k] = jumped;
                }
            }
            //jump left down
            if(i+2 < 5 && board[i+2][k] == -1 && board[i+1][k] != -1){
                //console.log(board[i][k]+" can jump left down");
                var jumped = board[i+1][k];
                board[i+1][k] = -1;
                board[i+2][k] = board[i][k];
                board[i][k] = -1;
                if(play(board,depth+1)){
                    console.log("Jump left down from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i+2][k];
                    board[i+2][k] = -1;
                    board[i+1][k] = jumped;
                }
            }
            //jump right down
            if(i+2 < 5 && board[i+2][k+2] == -1 && board[i+1][k+1] != -1){
                //console.log(board[i][k]+" can jump right down");
                var jumped = board[i+1][k+1];
                board[i+1][k+1] = -1;
                board[i+2][k+2] = board[i][k];
                board[i][k] = -1;
                if(play(board,depth+1)){
                    console.log("Jump right down from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i+2][k+2];
                    board[i+2][k+2] = -1;
                    board[i+1][k+1] = jumped;
                }
            }
            //jump left up
            if(k-2 >= 0 && board[i-2][k-2] == -1 && board[i-1][k-1] != -1){
                //console.log(board[i][k]+" can jump left up");
                var jumped = board[i-1][k-1];
                board[i-1][k-1] = -1;
                board[i-2][k-2] = board[i][k];
                board[i][k] = -1;
                if(play(board,depth+1)){
                    console.log("Jump left up from row "+i+" col "+k);
                    return true;  //figure out a way to return path.
                }else{ //reset
                    board[i][k] = board[i-2][k-2];
                    board[i-2][k-2] = -1;
                    board[i-1][k-1] = jumped;
                }
            }
        }
    }
    //console.log("no more moves found");
    if(depth === 0){
        console.log("Cannot be solved. Tries "+ tries);
    }

    return false;
    //for each
        //play first found
        //if found add move to list and return
        //if not found return false
}

var board = makeBoard(0);

console.log(board);

console.log(startPlay(board));
console.log(board);

