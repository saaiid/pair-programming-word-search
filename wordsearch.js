/* const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}

module.exports = wordSearch */

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const verticalArr = [];
    let checkString = ""
    for (let i = 0; i < letters[0].length; i++) {
        for (let j = 0; j < letters.length; j++) {
            checkString += letters[j][i];
        }
        if (checkString.includes(word)) {
            return true;
        }
        checkString = ""
    }
    return false;
}

module.exports = wordSearch