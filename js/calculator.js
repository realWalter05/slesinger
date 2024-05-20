
function solarForm() {
    let cena = "";
    let pocetLidi = document.getElementById("solar_pocet_lidi").value;
    let solar_spotreba = document.getElementById("solar_spotreba").value;

    if (solar_spotreba <= 6) {
        cena = "od 150 tisíc Kč"
    } else if (solar_spotreba > 6 && solar_spotreba < 15) {
        cena = "od 250 tisíc Kč";
    } else if (solar_spotreba > 15) {
        cena = "Cenu neurčíme ale upřesníme v nabídce";
    }


    document.getElementById("solar_cena_output").innerHTML = "Vaše solární instalace bude stát: <b>" + cena + "</b>";
}

function teploForm() {
    let pocetLidi = document.getElementById("odhadovany_teplo").value;
    let cena = "";

    if (pocetLidi <= 10) {
        cena = "od 150 tisíc Kč"
    } else if (pocetLidi > 10 && pocetLidi < 20) {
        cena = "od 250 tisíc Kč";
    } else if (pocetLidi > 20) {
        cena = "Cenu neurčíme ale upřesníme v nabídce";
    }
    
    document.getElementById("teplo_cena_output").innerHTML = "Vaše tepelná instalace bude stát: <b> " + cena + "</b>"
}