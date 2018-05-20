

/*
 * TO-DO list:
 * player1 wins game with 1 card: "2", "1" -> Player1 wins 1 to 0
 * player2 wins game with 1 card: "1", "2" -> Player2 wins 1 to 0
 * tie: "1", "1" -> "Tie"
 * player1 wins with several cards
 * error cases
*/

var cardRank = "123456789TJQK";

var chai = require('chai');
var expect = chai.expect;


function whoWins(pack1, pack2){
    var scorePlayer1 = 0, scorePlayer2 = 0;

    calculateScores();
    return humanReadableWinnerInfo();

    function calculateScores() {
        var i = 0;
        for(i = 0;i < pack1.length;i++){
            if(cardRank.indexOf(pack1[i]) < cardRank.indexOf(pack2[i])){
                ++scorePlayer2;
            } else if(cardRank.indexOf(pack1[i]) > cardRank.indexOf(pack2[i])){
                ++scorePlayer1;
            }
        }
    };

    function humanReadableWinnerInfo() {
        if(scorePlayer2 > scorePlayer1){
            return "Player2 wins 1 to 0";
        } else if(scorePlayer1 > scorePlayer2){
            return "Player1 wins 1 to 0";
        } else {
            return "Tie";
        }
    };

    
}

describe("the cards game", function(){
    it("wins with the highest card in a single card game", function(){
        expect(whoWins(['1'],['2'])).to.equal('Player2 wins 1 to 0');
    });

    it("wins with the highest card in the other pack in a single card game", function(){
        expect(whoWins(['2'],['1'])).to.equal('Player1 wins 1 to 0');
    });
    
    it("ties", function(){
        expect(whoWins(['1'], ['1'])).to.equal('Tie');
    });

    it("knows the card ranking which not always matches the ascii order", function(){
        expect(whoWins(['K'], ['Q'])).to.equal('Player1 wins 1 to 0');
    });

    it("wins with several cards", function() {
        expect(whoWins(['1','2'], ['1', '1'])).to.equal("Player1 wins 1 to 0");
    });
});

