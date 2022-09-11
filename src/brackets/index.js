const str = '{{[[]]}}({})()';

function isValid(str) {
    let bracketArray = [];
    // Check for non-bracket characters
    for (let i = 0; i <= str.length; i++) {
        let b = str[i];
        if (b == '{' || b == '[' || b == '(' || b == ')' || b == ']' || b == '}' || b == undefined)
            continue;
        else {
            console.log("only brackets are allowed, exiting...");
            return;
        }
    }
    //check brackets for equality and order
    for (let i = 0; i <= str.length; i++) {
        let b = str[i];

        if (b == '{' || b == '(' || b == '[') {
            bracketArray.push(b);

            continue;
        }
        else if (b == '}') {

            if (bracketArray[bracketArray.length - 1] == '{') {
                bracketArray.pop();

                continue;
            }
            console.log("not balanced");
            return;
        }
        else if (b == ']') {

            if (bracketArray[bracketArray.length - 1] == '[') {
                bracketArray.pop();

                continue;
            }
            console.log("not balanced");
            return;
        }
        else if (b == ')') {

            if (bracketArray[bracketArray.length - 1] == '(') {
                bracketArray.pop();

                continue;
            }
            console.log("not balanced");
            return;
        }

    }
    //'str' supplied is balanced if all items pushed into 'brackets' array have been popped
    if (bracketArray.length == 0)
        console.log("Valid");
    else
        console.log("Invalid");

}
//
isValid(str);

