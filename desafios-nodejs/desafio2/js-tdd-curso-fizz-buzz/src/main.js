const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const text = {
    fizz: "Fizz",
    buzz: "Buzz",
    divisivel: "Divisível",
    fizzbuzz: "FizzBuzz",
    naoDivisivel: "Não divisível",
};

const verifyNumber = (valueInput) => {
    const results = numbers.map((number) => {
        if (valueInput % number === 0) {
            switch (number) {
                case 3:
                    return [number, text.fizz];
                case 5:
                    return [number, text.buzz];
                default:
                    return [number, text.divisivel];
            }
        } else {
            return [number, text.naoDivisivel];
        }
    });

    const filtered = results.filter((result) => result[1] === text.buzz || result[1] === text.fizz);

    if (!filtered.length) return valueInput;

    if (filtered.length === 2) return text.fizzbuzz;

    return filtered[0][1] === text.fizz ? text.fizz : text.buzz;
};

const foo = () => "bla";

export { verifyNumber, foo };
