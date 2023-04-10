const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
const baht = document.querySelector("#baht"),
dolla = document.querySelector("#dolla");


window.addEventListener("load", () => centimeter.focus());

centimeter.addEventListener("input", () =>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});

inch.addEventListener("input", () =>{
    centimeter.value = (inch.value * 2.54).toFixed(4);
    if(!inch.value) centimeter.value = "";
});

baht.addEventListener("input", () =>{
    dolla.value = (baht.value * 0.02910).toFixed(5);
    if(!baht.value) dolla.value = "";
});

dolla.addEventListener("input", () =>{
    baht.value = (dolla.value * 34.36500).toFixed(5);
    if(!dolla.value) baht.value = "";
});