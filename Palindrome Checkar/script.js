const btn = document.querySelector(".btn");
const result = document.querySelector(".status");
console.log(result);
function palindrome(){
    let word = document.querySelector(".store").value;
    let orword=word;
    word=word.split("");
    let rev = word.reverse();
    rev = rev.join("");
    word = word.join("");
    if(orword==rev)
    result.textContent="Palindrome";
    else
    result.textContent="Not Palindrome";
    
}
btn.addEventListener('click',palindrome);

