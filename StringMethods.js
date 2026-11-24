const str = "JavaScript is a programming language . it is a dynamic language";
const strarray = str.split(" ");
const strArraysortreversed = strarray.sort().reverse();
for (let x of strArraysortreversed) {
    console.log(x);
}
const set1 = new Set();
for (let x of strarray) {
    set1.add(x);
}
//const strArraywithoutDuplicate= [...new Set(...strarray)]
// console.log(strArraywithoutDuplicate)
console.log(set1);
const map1 = new Map();
for (let x of strarray) {
    if (map1.has(x)) {
        map1.set(x, map1.get(x) + 1);
    }
    else {
        map1.set(x, 1);
    }
}
console.log(map1);
// for (let x of map1)
// {
//   console.log(map1[x])
// }
map1.forEach(function (value, key) {
    if (value > 1) {
        console.log(key);
    }
});
const fruitSet = new Set();
fruitSet.add("apple");
fruitSet.add("mango");
//   fruitSet.forEach(function(f){
//      console.log(f.padEnd(7, "es"))
//   })
console.log(map1.get("programming") + " " + map1.get("Program"));
const map2 = new Map();
map2.set("emp1", { name: "ram", age: 30, city: "Pune", deptDetails: { deptNo: 101, deptName: "Engineering" } });
map2.set("emp2", { name: "Shyam", age: 31, city: "Pune", deptDetails: { deptNo: 101, deptName: "Engineering" } });
map2.set("emp3", { name: "Sita", age: 25, city: "Mumbai", deptDetails: { deptNo: 102, deptName: "HR" } });
map2.set("emp4", { name: "Radha", age: 29, city: "Pune", deptDetails: { deptNo: 101, deptName: "Engineering" } });
map2.set("emp5", { name: "Virat", age: 35, city: "Mumbai", deptDetails: { deptNo: 102, deptName: "HR" } });
//console.log(map2)
const mapValueiteratorObject = map2.values();
//console.log(mapValueiteratorObject);
for (let x of mapValueiteratorObject) {
    console.log(x);
}
const str1 = "JavaScript is a 123programming language . it is a 45dynamic lang129uage";
const strnumericArray = str1.match(/\b(?=[0-9]+[A-Za-z0-9]+|[a-zA-z]+[0-9]+)[a-zA-z0-9]+/g);
console.log(strnumericArray);
const stringArray = str1.match(/\b[a-zA-Z]+\b/g);
console.log(stringArray);
//- one lowercase, one upper case, 1 number, 1 special character, 8 digit
//const strPasswordRegex= new RegExp("\b((?=[a-z]+)(?=[A-Z]+)(?=[0-9]+)(?=\W))[a-zA-Z0-9]+){8,}");
//const isPasswordValid=strPasswordRegex.test("Password@1234")
const strPasswordRegex1 = /^(?!.*([0-9])\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,}$/;
const isPasswordValid1 = strPasswordRegex1.test("Password@4321");
console.log(" Password is valid " + isPasswordValid1);
/*const phoneNumberValidation= /^(\+91)-[789][0-9]{9}$/
const isPhoneNumberValid=phoneNumberValidation.test("+91-8023905616")
console.log("Phone number is valid "  +isPhoneNumberValid)*/
let regexp = new RegExp("^(\\+91)-[789][0-9]{9}$");
console.log("Phone number is valid " + regexp.test("+91-8023905616"));
"devendra.jain2@gmail.co.in";
const emailValidationRegEx = /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9-]+\.[a-za-z]{2,}(\.[a-zA-z]{2,})?$/;
const isEmailValid = emailValidationRegEx.test("test%+123@example.com");
console.log("Is entered email id valid " + isEmailValid);
const str5 = "JavaScript_% is+ a@ 123programming language . it_ is a 45dynamic lang129uage  and lang123 90la45";
const regExpalphnumeric = /(?=[0-9]+[a-zA-Z]+|[a-zA-z]+[0-9]+([a-zA-Z]+)?)[a-zA-Z0-9]+/g;
console.log(str5.match(regExpalphnumeric));
const regExpalphabetic = /\b[a-zA-Z%+_@-]+/g;
console.log(str5.match(regExpalphabetic));
//023-456-7890, (123) 456-7890, 1234567890)
//const regExpUSPhone= /(((123)[0-9]{3}|[1-9]{3}-[0-9]{3})-[0-9]{4})|[1-9][0-9]{9}/
//const regExpUSPhone= /^\([1-9]{3}\)[0-9]{3}-[0-9]{4}$/
const regExpUSPhone = /\(?[1-9]{3}\)?\s?\-?[0-9]{3}\-?[0-9]{4}$/;
const isValidUSPhoneNumber = regExpUSPhone.test("(181)745-6089");
console.log("Is US Phone number  valid " + isValidUSPhoneNumber);
const articleText = "The project costs $450, but the upgrade costs $1200 or 1500$ or 1500. Contact us at support@dev.com.";
const regExpPrice = /[$]?[0-9]+[$]?/g;
//const regExpPrice= /(\d+(?=[$])|[$](?=\d+))/g
//const regExpPrice= /(?<=\$)\d+/g
const priceArray = articleText.match(regExpPrice);
console.log(priceArray);
//YYYY-MM-DD 
const regExpDate = /(\d{4})-(\d{2})-(\d{2})/g;
const dateformat = regExpDate.exec("System initialized on 2026-08-13 at midnight.");
if (dateformat) {
    console.log(dateformat[0] + " " + dateformat[1] + " " + dateformat[2] + " " + dateformat[3]);
}
const secretMessage = "My password is 'Secret123' and my pin is '4432'.";
console.log(secretMessage.replace(/\d/g, "*"));
const codeSnippet = "I love JavaScript because JavaScript is flexible. JavaScript is good Programming language";
console.log(codeSnippet.replace(/javascript/ig, "JS"));
const CSVData = "Apple, Banana; Orange  | Mango , Grape";
console.log(CSVData.split(/[,;|]\s*/));
const text = "India is my great country Country and is densely densely populated. It is largest";
const regExpConsecutiveDuplicateWords = /\b([a-zA-Z]+)\b\s+\1\b/gi;
console.log(text.replace(regExpConsecutiveDuplicateWords, "$1"));
const text1 = "I love JavaScript because JavaScript is flexible. JavaScript is good Programming language";
const textArray = text1.split(" ");
const textArrayLowerCase = textArray.map(e => e.toLowerCase());
console.log(`test array elements converted to lowercase ${textArrayLowerCase}`);
const textArraySet = [...new Set(textArrayLowerCase)];
console.log(textArraySet);
const testwithoutDuplicate = textArraySet.join(" ");
console.log(testwithoutDuplicate);
const url = "we studied javascript thrugh https://example.com .it is very good website otherwise use https://geeksforgeeks.org ";
const urlRegExp = /https[:]\/\/\w+\.(com|org)/g;
const urlArray = url.match(urlRegExp);
console.log(urlArray);
const urlRegExpCaptureGroup = /https[:]\/\/(\w+)\.(com|org)/g;
let urlSubPattern;
while ((urlSubPattern = urlRegExpCaptureGroup.exec(url)) !== null) {
    console.log(urlSubPattern[1] + " " + urlSubPattern[2]);
}
const textsample = "banana is ban";
const regexpattern = /(ba)(?=\w+)/g;
console.log(textsample.match(regexpattern));
const prices = "The items cost $10, $20, and $50.";
const regExpprice = /(?<=\$)\d+/g;
const pricesstr = prices.replaceAll(regExpprice, (pricevalue) => {
    const updatedPrice = Number(pricevalue) * 2;
    return String(updatedPrice);
});
console.log(pricesstr);
const cardNumber = "5476-1234-3456-9281";
//XXXXXXXXXXX9281
const regExpCardNumber = /(\d{4}-)/g;
const maskedCardNumber = cardNumber.replaceAll(regExpCardNumber, '****');
console.log(maskedCardNumber);
console.log(maskedCardNumber.length);
console.log(cardNumber.slice(-4));
//racecar
function isPalindrome(x) {
    let y = x.trim().toLowerCase();
    let str = "";
    for (let i = y.length - 1; i >= 0; i--) {
        str = str + y.charAt(i);
    }
    if (y === str) {
        return true;
    }
    else {
        return false;
    }
}
console.log("given string is palindrome " + isPalindrome("abbaca"));
function removeDuplicateFromString(str) {
    const setArray = [...new Set(str)];
    console.log(setArray);
    return setArray.join("");
}
console.log(removeDuplicateFromString("abbaca"));
const text5 = "I love JavaScript because javaScript is flexible. JavaScript is good Programming language";
const text5Array = [...new Set(text5.split(" "))];
console.log(text5Array);
const regExpWordCount = /\b\w+\b/g;
const array1 = text5Array.join(" ").match(regExpWordCount);
console.log(array1?.length);
console.log(array1?.includes("love"));
const array2 = array1?.slice(1, -1);
console.log(array2);
//console.log(text5Array.forEach((e)=> e.toLowerCase()))
//console.log(text5Array)
const fruits = ['apple', 'mango', "lemon", "banana"];
fruits.forEach((e) => console.log(e.concat('->', "nutritous")));
fruits.forEach((value, index) => console.log(`${value} -> ${index}`));
let i = -1;
const newFruits = fruits.map((e) => e.concat('->', `${++i}`));
console.log(newFruits);
const setnew = new Set([10, 20, 30, 40, 50, 60]);
setnew.add(7);
setnew.forEach(e => console.log(e * 10));
export {};
//# sourceMappingURL=StringMethods.js.map