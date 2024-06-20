document.addEventListener("DOMContentLoaded", () => {
    const btnCount = document.querySelector(".btn");
    const btnReset = document.querySelector(".reset");
    const result = document.querySelector(".result");

    const countVowel = () => {
        const word = document.querySelector(".input-text").value.trim();

        if (word === "") {
            result.innerHTML = "Please enter a word.";
            return;
        }

        let vowelCount = 0;
        let wordVal = word.toLowerCase();

        for (let i = 0; i < wordVal.length; i++) {
            let letter = wordVal[i];
            if (letter.match(/[aeiou]/)) {
                vowelCount++;
            }
        }

        result.innerHTML = `${word.toUpperCase()} has ${vowelCount} vowels`;
    };

    const resetForm = () => {
        document.querySelector(".input-text").value = "";
        result.innerHTML = "Enter a word to count vowels";
    };

    btnCount.addEventListener("click", countVowel);
    btnReset.addEventListener("click", resetForm);
});
