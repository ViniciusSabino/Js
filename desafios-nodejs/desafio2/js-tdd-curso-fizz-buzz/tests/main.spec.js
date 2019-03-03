/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

- Se o número for divisivel por 3, no lugar do número escreva 'Fizz'
- Se o número for divísivel por 5, no lugar do número escreva 'Buzz'
- Se o número for dívisivel por 3 e 5, no lugar do número escreva 'FizzBuzz'
- Se não for múltiplo de nada, retorna o número

*/

import { expect } from "chai";
import { verifyNumber } from "../src/main";

describe("Main - Verify Number", () => {
    it("should return 'Fizz' when the value of 9 is passed", () => {
        expect(verifyNumber(9)).to.equal("Fizz");
    });

    it("should return 'Buzz' when the value of 25 is passed", () => {
        expect(verifyNumber(25)).to.equal("Buzz");
    });

    it("should return 'FizzBuzz' when the value of 15 is passed", () => {
        expect(verifyNumber(15)).to.equal("FizzBuzz");
    });

    it("should return the value itself when the value of 11,3 is passed", () => {
        expect(verifyNumber(11.3)).to.equal(11.3);
    });
});
