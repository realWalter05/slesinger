
function solarForm() {
    let pocetLidi = document.getElementById("solar_pocet_lidi").value;
    let solar_spotreba = document.getElementById("solar_spotreba").value;


    let strecha_select = document.getElementById("strecha_select").value;

    let solar_boiler = document.getElementById("solar_boiler").checked;


    const price = pocetLidi * 5000 * solar_spotreba * strecha_select;
    document.getElementById("solar_cena_output").innerText = "Vaše solární instalace bude stát " + price + " Kč"
}

function teploForm() {
    let pocetLidi = document.getElementById("teplo_pocet_lidi").value;

    let druhStavby = document.getElementById("teplo_druh_stavby").value;

    const price = pocetLidi * 250 * druhStavby;
    document.getElementById("teplo_cena_output").innerText = "Vaše tepelná instalace bude stát " + price + " Kč"
}