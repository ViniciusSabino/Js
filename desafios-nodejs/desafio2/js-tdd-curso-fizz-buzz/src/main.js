const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const text = {
    fizz: "Fizz",
    buzz: "Buzz",
    divisivel: "Divisível",
    fizzbuzz: "FizzBuzz",
};

const verifyNumber = (valueInput) => {
    const results = numbers.map((number) => {
        if (valueInput % number === 0) {
            switch (number) {
                case 3:
                    return [number, "Fizz"];
                case 5:
                    return [number, "Buzz"];
                default:
                    return [number, "Divisível"];
            }
        } else {
            return [number, "Não divisível"];
        }
    });

    const filtered = results.filter((result) => result[1] === text.buzz || result[1] === text.fizz);

    if (!filtered.length) return valueInput;

    if (filtered.length === 2) return text.fizzbuzz;

    return filtered[0][1] === text.fizz ? text.fizz : text.buzz;
};

export { verifyNumber };
