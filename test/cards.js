

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
    

    return humanReadableWinnerInfo.call(this, 
           calculateScores(pack1.slice(0), pack2.slice(0)));

    function calculateScores(pack1, pack2) {
        var score = 0;
        while(pack1.length > 0){
            var card1 = pack1.shift();
            var card2 = pack2.shift();

            if(cardRank.indexOf(card1) < cardRank.indexOf(card2)){
                return calculateScores(pack1, pack2) + 1;
            } else if(cardRank.indexOf(card1) > cardRank.indexOf(card2)){
                return calculateScores(pack1, pack2) - 1;
            } else {
                return calculateScores(pack1, pack2);
            }
        }
        return 0;
    };

    function humanReadableWinnerInfo(score) {
        if(score > 0){
            return "Player2 wins 1 to 0";
        } else if(score < 0){
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

