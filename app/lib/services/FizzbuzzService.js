class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 3 !== 0 && explorer.score % 5 !== 0) {
            explorer.trick = explorer.score;
            return explorer.trick;
        } else if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer.trick;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer.trick;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer.trick;
        }
    }

    static applyValidationInNumber(number) {
        if (number % 3 !== 0 && number % 5 !== 0) {
            return number;    
        } else if (number % 3 === 0 && number % 5 === 0) {
            return "FIZZBUZZ";
        } else if (number % 3 === 0) {
            return "FIZZ";
        } else if (number % 5 === 0) {
            // number.trick = "BUZZ";
            return "BUZZ";
        }
    }
}

module.exports = FizzbuzzService;
