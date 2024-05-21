document.getElementById('solar_btn').addEventListener('click',
    function (event) {
        // Zpracování dat formuláře         
        event.preventDefault();
    });

document.getElementById('teplo_btn').addEventListener('click',
    function (event) {
        // Zpracování dat formuláře         
        event.preventDefault();
    });

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

    let solar_cil = document.getElementById("solar_cil").value;
    if (solar_cil == "Ohřev boileru") {
        cena = "90 000 Kč"
    }


    document.getElementById("solar_cena_output").innerHTML = "Vaše solární instalace bude stát: <b>" + cena + "</b>";
}

function teploForm() {
    let odhadovany_teplo = document.getElementById("odhadovany_teplo").value;
    let cena = "";

    if (odhadovany_teplo <= 10) {
        cena = "od 150 tisíc Kč"
    } else if (odhadovany_teplo > 10 && odhadovany_teplo < 20) {
        cena = "od 250 tisíc Kč";
    } else if (odhadovany_teplo > 20) {
        cena = "Cenu neurčíme ale upřesníme v nabídce";
    }

    document.getElementById("teplo_cena_output").innerHTML = "Vaše tepelná instalace bude stát: <b> " + cena + "</b>"
}

function closeModal(modal) {
    modal.classList.remove("show");
    modal.style.display = "none";
    modal.role = "";
    modal.ariaHidden = "false";

    document.getElementsByClassName("modal-backdrop")[0].remove();
    document.body.classList.remove("modal-open");
    document.body.style = "overflow: auto;";

    document.getElementById("contact").scrollIntoView();
}