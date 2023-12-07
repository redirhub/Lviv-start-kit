export function NumberFormatter(num) {

    var result = 0;

    if(num > 999999999) {
        result = Math.floor(num / 1000000000);
        return result + 'B';
    }

    if(num > 999999) {
        result = Math.floor(num / 1000000);
        return result + 'M';
    }

    if(num > 999) {
        result = Math.floor(num / 1000);
        return result + 'K';
    }

    return num;
}
