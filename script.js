//Compiler
function runCode(){
    let HTMLCode = document.getElementById("HTMLCode").value;
    let CSSCode = document.getElementById("CSSCode").value;
    let JSCode = document.getElementById("JSCode").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = HTMLCode+"<style>"+CSSCode+"</style>";
    output.contentWindow.eval(JSCode);
}

//CopyCode
document.getElementById("copyCode").onclick = function(){
    let copyText = document.getElementById("copyText");
    document.querySelector("textarea").select();
    document.execCommand('copy');
    copyText.style.visibility = "visible";
    setTimeout(function(){
        copyText.style.visibility = "hidden";
    },1000);
}