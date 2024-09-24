module.exports = function toReadable (number) {
    
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number < 0 || number > 999) {
        return 'wrong number';
    }
    if (number < 10) {
        return ones[number];
    }
    if (number > 10 && number < 20) {
        return teens[number - 11];
    }
    if (number >= 10 && number < 100) {
        const tensNum0 = Math.floor(number / 10);
        const remainderTens = number % 10;
        if (remainderTens === 0) {
            return tens[tensNum0 - 1];
        } else {
            return `${tens[tensNum0 - 1]} ${ones[remainderTens]}`;
        }
    }
    if (number >= 100) {
        const hundreds = Math.floor(number / 100);
        const remainderHundred = number % 100;

        if (remainderHundred === 0) {
            return `${ones[hundreds]} hundred`;
        } else {
            return `${ones[hundreds]} hundred ${toReadable(remainderHundred)}`;
        }
    }
}
