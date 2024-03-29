// function loading() {
//     var img = document.getElementById("image");
//     var bgImage = document.getElementById('background');
//     var data = new Date();
//     var msge = document.getElementById("msg");
//     var hora = data.getHours();
//     // var hora = 18
//     if (hora >= 0 && hora < 12) {
//         //bom dia
//         msge.innerHTML = `Bom Dia!`;
//         bgImage.style.backgroundImage = "url('assets/morning.webp')";
//         img.src = "assets/morning.png";
//         document.body.style.background = "#5A7E96";
//     } else if (hora >= 12 && hora < 18) {
//         //boa tarde
//         msge.innerHTML = `Boa Tarde!`;
//         bgImage.style.backgroundImage = "url('assets/afternoon.webp')";
//         img.src = "assets/afternoon.png";
//         document.body.style.background = "#CF8752";
//     } else {
//         msge.innerHTML = `Boa Noite!`;
//         //boa noite
//         bgImage.style.backgroundImage = "url('assets/night.webp')";
//         img.src = "assets/night.png";
//         document.body.style.background = "#221A26";
//     }
// }

function showHour() {
    var horas = document.getElementById("horas");
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var msge = document.getElementById("msg");
    var bgImage = document.getElementById("background");
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    horas.innerHTML = time;

    setTimeout(showHour, 1000);

    if (h >= 6 && h < 12 || time == "00:00:00") {
      //bom dia
      msge.innerHTML = `Bom Dia!`;
      bgImage.style.backgroundImage = "url('assets/morning.webp')";
    } else if ((h >= 12 && h < 18) || time == "11:00:00") {
      //boa tarde
      msge.innerHTML = `Boa Tarde!`;
      bgImage.style.backgroundImage = "url('assets/afternoon.webp')";
    } else if (h >= 18 || time == "18:00:00") {
      msge.innerHTML = `Boa Noite!`;
      //boa noite
      bgImage.style.backgroundImage = "url('assets/night.webp')";
    } else if (h >= 0 || time == "00:00:00") {
      msge.innerHTML = `Boa Madrugada!`;
      //boa madrugada
      bgImage.style.backgroundImage = "url('assets/early-morning.webp')";
    }
}