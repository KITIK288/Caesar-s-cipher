const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

const lowercaseLetters = [ 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

function check(symbol) {
    for (let i = 0; i < uppercaseLetters.length; i++) {
        if (uppercaseLetters[i] === symbol) {
            return 1;
        }
    }
    return 0;
}

check("F");

function cipher(cod) {
    let password = "";
    for (let x = 0; x < cod.length; x++) {
        if (cod[x] === " ") {
            password += " ";
        } if (cod[x] === ".") {
            password += ".";
        } else if (check(cod[x]) === 1) {
            for (let y = 0; y < uppercaseLetters.length; y++) {
                if (uppercaseLetters[y] === cod[x]) {
                    password += uppercaseLetters[y + 3];
                }
            }
        } else if (check(cod[x]) === 0) {
            for (let k = 0; k < lowercaseLetters.length; k++) {
                if (lowercaseLetters[k] === cod[x]) {
                    password += lowercaseLetters[k + 3];
                }
            }
        }
    }
    return password;
}

console.log(cipher("In a hole in the ground there lived a hobbit."));

function test(password) {
    if (cipher("In a hole in the ground there lived a hobbit.") === "Lq d kroh lq wkh jurxqg wkhuh olyhg d kreelw.") {
        return 1;
    } else {
        return 0;
    }
}

console.log(test());
