// Fonction 1 : Vérification année bissextile
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const result = isLeapYear(year)
        ? `${year} est une année bissextile.`
        : `${year} n'est pas une année bissextile.`;
    document.getElementById("leapYearResult").innerText = result;
}

// Fonction 2 : Tarification des billets
function getTicketPrice(age) {
    if (age <= 12) return "Prix du billet : 10 $";
    if (age <= 17) return "Prix du billet : 15 $";
    return "Prix du billet : 20 $";
}

function checkTicketPrice() {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = getTicketPrice(age);
    document.getElementById("ticketResult").innerText = result;
}

// Fonction 3 : Fibonacci (récursif)
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function showFibonacci() {
    const n = parseInt(document.getElementById("fiboInput").value);
    const result = fibonacci(n);
    document.getElementById("fiboResult").innerText = `Fibonacci(${n}) = ${result}`;
}

// Fonction 4 : Vérification de palindrome (récursif)
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function check(s, start, end) {
        if (start >= end) return true;
        if (s[start] !== s[end]) return false;
        return check(s, start + 1, end - 1);
    }

    return check(str, 0, str.length - 1);
}

function checkPalindrome() {
    const str = document.getElementById("palindromeInput").value;
    const result = isPalindrome(str)
        ? `"${str}" est un palindrome.`
        : `"${str}" n'est pas un palindrome.`;
    document.getElementById("palindromeResult").innerText = result;
}
