// 1) return the sum of all numbers in the input array
const sum = (input) => {
    return input.reduce((acc, curr) => acc + curr, 0);
};

// 2) return the sum of all numbers up to the given input
const sumTo = (input) => {
    if (input === 0) {
        return 0;
    } else {
        return sumTo(input - 1);
    }
};


