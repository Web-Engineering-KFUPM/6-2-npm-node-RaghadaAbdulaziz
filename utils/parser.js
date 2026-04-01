import _ from "loadsh";
export function parseNumber(input) {
    const numbers = _.map(input, (value) => Number(value));
    return _.compact(numbers);
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);

}