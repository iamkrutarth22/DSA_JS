// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


//approach is to traverse the string from the end ,
//check if the new character are empty,if so traverse entil a character is encountered
//then store the index of the end charater
//again run a loop untill a empty charater is encountered
//add the word to the result by ending substring of the current index-to-endindex
//then return the new string


let  s = "a good   example";
let i=s.length-1
let result=''
while(i>=0){
    //skiping empty strings
    while(s[i]===' ' && i>=0)
        i--;

    if(i<0)break;
    //storing latest char index
    let end=i;
    //traversing till the word ends
    while(s[i]!=' ' && i>=0)
        i--;
    //adding work to result  string
    result=result+s.slice(i+1,end+1);
    
    if(i>0)
        result=result+ ' ';
}

console.log(result)