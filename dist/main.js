//Masalalar
//1-masala
function upperCaseKeys(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key.toUpperCase()] = value;
    }
    return result;
}
const data = { name: "Ali", age: 25, country: "Uzbekistan" };
console.log(upperCaseKeys(data));
//2-masala
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
console.log(fizzBuzz(17));
//3-masala
function getPermutations(str) {
    if (str.length <= 1)
        return [str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const rest = str.slice(0, i) + str.slice(i + 1);
        for (const perm of getPermutations(rest)) {
            result.push(char + perm);
        }
    }
    return result;
}
console.log(getPermutations("abc"));
//4-masala
function jsonDiff(obj1, obj2) {
    const diff = {};
    for (const key in obj2) {
        if (obj1[key] !== obj2[key]) {
            diff[key] = {
                old: obj1[key],
                new: obj2[key]
            };
        }
    }
    return diff;
}
const oldData = { name: "Ali", age: 25, city: "Toshkent" };
const newData = { name: "Ali", age: 26, country: "Uzbekistan" };
console.log(jsonDiff(oldData, newData));
//5-masala
function sortIPs(ips) {
    return ips.sort((a, b) => {
        const aParts = a.split(".").map(Number);
        const bParts = b.split(".").map(Number);
        for (let i = 0; i < 4; i++) {
            if (aParts[i] !== bParts[i]) {
                return aParts[i] - bParts[i];
            }
        }
        return 0;
    });
}
console.log(sortIPs([
    "192.168.1.1",
    "10.0.0.1",
    "172.16.0.1",
    "192.168.0.1"
]));
//6-masala
function compressString(str) {
    let result = "";
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
        else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    return result;
}
console.log(compressString("aaabbcddd")); // a3b2c1d3
console.log(compressString("hhhello")); // h3e1l2o1
console.log(compressString("abcd")); // a1b1c1d1
//7-masala
function isValidSudoku(board) {
    const seen = new Set();
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === 0)
                continue;
            const row = `r${r}-${num}`;
            const col = `c${c}-${num}`;
            const box = `b${Math.floor(r / 3)}${Math.floor(c / 3)}-${num}`;
            if (seen.has(row) || seen.has(col) || seen.has(box)) {
                return false;
            }
            seen.add(row);
            seen.add(col);
            seen.add(box);
        }
    }
    return true;
}
//8-masala
function groupAnagrams(words) {
    const map = {};
    for (const word of words) {
        const key = word.split("").sort().join("");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }
    return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
///Qo'shimchalar
//1 Array va Tuple bilan ishlash
//1
function numberSumsInArray(arr) {
    let result = 0;
    for (const element of arr) {
        result += element;
    }
    return result;
}
console.log(numberSumsInArray([1, 56, 8, 7, 12]));
//2
function lengthOfWords(str) {
    for (const word of str) {
        console.log(word.length);
    }
}
lengthOfWords(["salom", "macbook", "maclaren", "Rolce-Royce Cullinan"]);
const user = {
    name: "Azamat",
    age: 25,
    profession: "IT Developer"
};
export {};
//# sourceMappingURL=main.js.map