

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

describe("the cards game", function(){
    it("wins with the highest card in a single card game", function(){
        expect(whoWins(['1'],['2'])).to.equal('Player2 wins 1 to 0');
    });
});