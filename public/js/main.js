
    const generation = document.querySelector("#generate");
    const ThePassword = document.querySelector("#passwordGen");
    const lengthFetch = document.querySelector("#ABC");
    const yesSymbols = document.querySelector("#yesSymbols");
    const yesNumbers = document.querySelector("#yesNumbers");
    const uppercase = document.querySelector("#uppercase");
    const lowercase = document.querySelector("#lowercase");

    const genPwd = () => {
        
        
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
        
        let pwdlength = parseInt(lengthFetch.value, 10) || 0;
        let pwd = "";

        let characterPool = "";

        if (uppercase.checked) {
            characterPool += upperCase;
        }
        if (lowercase.checked) {
            characterPool += lowerCase;
        }
        if (yesNumbers.checked) {
            characterPool += "0123456789";
        }
        if (yesSymbols.checked) {
            characterPool += "!@#$%^&*()_+:?-=;,./";
        }

        if (characterPool === "") {
            ThePassword.value = "Select at least one option";
            return;
        }

        for (let i = 0; i < pwdlength; i++) {
            let randomNum = Math.floor(Math.random() * characterPool.length);
            pwd += characterPool[randomNum];
        }

        ThePassword.value = pwd;
        console.log(pwd);
    };

    generation.addEventListener("click", () => {
        genPwd();
    });

    const clipIt = document.querySelector("i");

    clipIt.addEventListener("click", () => {
        navigator.clipboard.writeText(ThePassword.value);
    });

