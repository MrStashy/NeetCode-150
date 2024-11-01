const testInput = "racecar";

function isPalindrome(string) {
  const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, "");
  return (
    cleanedStr.toLowerCase().split("").reverse().join("") ===
    cleanedStr.toLowerCase().split("").join("")
  );
}

console.log(isPalindrome(testInput));
