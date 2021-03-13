module.exports = function toReadable(number) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundred = ["hundred"];

    let numberString = String(number);
    if (number < 10) {
        let numberNew = Number(numberString);
        return numbers[numberNew];
    } else if (number < 21) {
        let numberNew = Number(numberString);
        return numbers[numberNew];
    } else if (number < 100 && number % 10 != 0) {
        let tenNew = Number(numberString[0]);
        let numberNew = Number(numberString[1]);
        return tens[tenNew - 2] + " " + numbers[numberNew];
    } else if (number < 100 && number % 10 == 0) {
        let tenNew = Number(numberString[0]);
        return tens[tenNew - 2];
    } else {
        let hundreds = Number(numberString[0]);
        number = Number(numberString[1] + numberString[2]);
        if (number == 0) {
            return numbers[hundreds] + " " + hundred;
        }
        if (number < 10) {
            let numberNew = Number(numberString[2]);
            return numbers[hundreds] + " " + hundred + " " + numbers[numberNew];
        } else if (number < 21) {
            let numberNew = Number(numberString[1] + numberString[2]);
            return numbers[hundreds] + " " + hundred + " " + numbers[numberNew];
        } else if (number < 100 && number % 10 != 0) {
            let tenNew = Number(numberString[1]);
            let numberNew = Number(numberString[2]);
            return (
                numbers[hundreds] +
                " " +
                hundred +
                " " +
                tens[tenNew - 2] +
                " " +
                numbers[numberNew]
            );
        } else if (number < 100 && number % 10 == 0) {
            let tenNew = Number(numberString[1]);
            return numbers[hundreds] + " " + hundred + " " + tens[tenNew - 2];
        }
    }
};
