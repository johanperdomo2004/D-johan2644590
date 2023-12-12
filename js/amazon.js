let calificacion1 = document.getElementById('calificacion1');
let calificacion2 = document.getElementById('calificacion2');
let calificacion3 = document.getElementById('calificacion3');
let calificacion4 = document.getElementById('calificacion4');
let calificacion5 = document.getElementById('calificacion5');
let progressBar1 = document.getElementById('progressBar1');
let progressBar2 = document.getElementById('progressBar2');
let progressBar3 = document.getElementById('progressBar3');
let progressBar4 = document.getElementById('progressBar4');
let progressBar5 = document.getElementById('progressBar5');
let btnGraficar = document.getElementById('btnGraficar');

btnGraficar.addEventListener('click', function () {
    let sumaCalificacion =
        Number(calificacion1.value) +
        Number(calificacion2.value) +
        Number(calificacion3.value) +
        Number(calificacion4.value) +
        Number(calificacion5.value);
    alert(sumaCalificacion);

    // Hallar el porcentaje de cada calificación
    let porcentajecal1 = (Number(calificacion1.value) * 100) / sumaCalificacion;
    document.getElementById('porcentaje1').innerHTML = porcentajecal1 + '%';
    progressBar1.value = porcentajecal1;

    let porcentajecal2 = (Number(calificacion2.value) * 100) / sumaCalificacion;
    document.getElementById('porcentaje2').innerHTML = porcentajecal2 + '%';
    progressBar2.value = porcentajecal2;

    let porcentajecal3 = (Number(calificacion3.value) * 100) / sumaCalificacion;
    document.getElementById('porcentaje3').innerHTML = porcentajecal3 + '%';
    progressBar3.value = porcentajecal3;

    let porcentajecal4 = (Number(calificacion4.value) * 100) / sumaCalificacion;
    document.getElementById('porcentaje4').innerHTML = porcentajecal4 + '%';
    progressBar4.value = porcentajecal4;

    let porcentajecal5 = (Number(calificacion5.value) * 100) / sumaCalificacion;
    document.getElementById('porcentaje5').innerHTML = porcentajecal5 + '%';
    progressBar5.value = porcentajecal5;
});
