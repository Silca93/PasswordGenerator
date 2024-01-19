// var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var string_length = 8;
// var randomstring = '';
// for (var i=0; i<string_length; i++) {
//     var rnum = Math.floor(Math.random() * chars.length);
//     randomstring += chars.substring(rnum,rnum+1);
// }


let generation = document.querySelector("#generate");
let ThePassword = document.querySelector("#passwordGen");
let lenghtFetch = document.querySelector("#ABC")

let yesSymbols = document.querySelector("#yesSymbols")
let yesNumbers = document.querySelector("#yesNumbers")
console.log(yesNumbers);

let pwdlength = lenghtFetch.value
console.log(pwdlength);

let genPwd = () => {
    let includeNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let includeSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()_+:?-=;,./";
    let onlyChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789!@#$%^&*()_+:?-=;,./";
    let pwdlength = lenghtFetch.value
    let pwd = "";

    if (yesNumbers = true && yesSymbols == false) {
    for (let i = 0; i <= pwdlength; i++) {
        let randomNum = Math.floor(Math.random()*includeNumbers.length)
        pwd += includeNumbers.substring(randomNum,randomNum + 1 )
        ThePassword.value = pwd
        console.log(pwd);
    }
    }else if (yesSymbols = true) {
        for (let i = 0; i <= pwdlength; i++) {
            let randomNum = Math.floor(Math.random()*includeSymbols.length)
            pwd += includeSymbols.substring(randomNum,randomNum + 1 )
            ThePassword.value = pwd
            console.log(pwd);

  }
}


    
}


generation.addEventListener("click", () => {
    genPwd();
})