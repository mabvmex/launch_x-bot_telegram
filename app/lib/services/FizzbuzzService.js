/* 
Get a list of the explorers in node, 
  - if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, 
  - if is just divisible by 5 set the property trcik and the value BUZZ, 
  - if is just divisible by 3 set the property trick and the value FIZZ, 
  - otherwise set the property trick and the score value.
*/

class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
    
        if (explorer.score % 3 !== 0 && explorer.score % 5 !== 0) {
            explorer.trick = explorer.score;
            return explorer.trick;
        } 
        else if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer.trick;
        }

        else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer.trick;
        } 
    
        else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer.trick;
        } 
    }

}

module.exports = FizzbuzzService;
