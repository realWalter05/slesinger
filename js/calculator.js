
function solarForm() {
    let cena = "";
    let pocetLidi = document.getElementById("solar_pocet_lidi").value;
    let solar_spotreba = document.getElementById("solar_spotreba").value;

    if (solar_spotreba < 6) {
        cena = "od 150 tisíc Kč"
    } else if (solar_spotreba > 6 && solar_spotreba < 15) {
        cena = "od 250 tisíc Kč";
    } else if (solar_spotreba > 15) {
        cena = "Cenu neurčíme ale upřesníme v nabídce";
    }


    document.getElementById("solar_cena_output").innerHTML = "Vaše solární instalace bude stát: <b>" + cena + "</b>";
}

function teploForm() {
    let pocetLidi = document.getElementById("teplo_pocet_lidi").value;

    let druhStavby = document.getElementById("teplo_druh_stavby").value;

    const price = pocetLidi * 250 * druhStavby;
    document.getElementById("teplo_cena_output").innerText = "Vaše tepelná instalace bude stát " + price + " Kč"
}