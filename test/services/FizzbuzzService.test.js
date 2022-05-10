const FizzbuzzService = require("../../app/lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzService", () => {

    test("1.- Validaciones para 'applyValidationInExplorer' SIN multiplo de 3 | 5", () => {
        const explorer1 = {name: "Carlo", score: 1 };
        // eslint-disable-next-line no-unused-vars
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(1);
    });
  
    test("2.- Validaciones para 'applyValidationInExplorer' CON multiplo de 3", () => {
        const explorer3 = {name: "Carlo", score: 3 };
        // eslint-disable-next-line no-unused-vars
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZ");
    });
  
    test("3.- Validaciones para 'applyValidationInExplorer' CON multiplo de 5", () => {
        // eslint-disable-next-line no-unused-vars
        const explorer5 = {name: "Carlo", score: 5 };
        // eslint-disable-next-line no-unused-vars
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5.trick).toBe("BUZZ");
    });
  
    test("4.- Validaciones para 'applyValidationInExplorer' CON multiplo de 3 Y 5", () => {
        const explorer15 = {name: "Carlo", score: 15 };
        // eslint-disable-next-line no-unused-vars
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });

});

describe("Unit Test for FizzbuzzService", () => {

    test("5. Validaciones para 'applyValidationInNumber' SIN multiplo de 3 Y 5", () => {
        const number1 = 1;
        const usuarioUno = FizzbuzzService.applyValidationInNumber(number1);
        expect(usuarioUno).toBe(1);
    });
    test("6. Validaciones para 'applyValidationInNumber' CON multiplo de 3", () => {
        const number3 = 3;
        const usuarioTres = FizzbuzzService.applyValidationInNumber(number3);
        expect(usuarioTres).toBe("FIZZ");
    });
    test("7. Validaciones para 'applyValidationInNumber' CON multiplo de 5", () => {
        const number5 = 5;
        const usuarioCinco = FizzbuzzService.applyValidationInNumber(number5);
        expect(usuarioCinco).toBe("BUZZ");
    });
    test("8. Validaciones para 'applyValidationInNumber' CON multiplo de 3 Y 5", () => {
        const number15 = 15;
        const usuarioQuince = FizzbuzzService.applyValidationInNumber(number15);
        expect(usuarioQuince).toBe("FIZZBUZZ");
    });
});
