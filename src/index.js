module.exports = function check(str, bracketsConfig) {
    var arr = str.split("");
    if (arr.length % 2 !== 0) return false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if ((arr[i] === bracketsConfig[j][0]) && (arr[i + 1] === bracketsConfig[j][1])) {
                arr.splice(i, 2);
                i = -1;
            } else {
                continue;
            }
        }
    }
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
}