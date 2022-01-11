$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("focus650.json", 
            function (data) {
        var newdata = JSON.stringify(data);
        let obj = JSON.parse(newdata);
        document.getElementById("focus650").innerHTML = 'rok produkcji: <span class="text-color">' + obj.rok_produkcji + '</span><br>';
        document.getElementById("focus650").innerHTML += 'liczba osób: <span class="text-color">' + obj.liczba_osob + '</span><br>';
        document.getElementById("focus650").innerHTML += 'port stacjonowania: <span class="text-color">' + obj.port_stacjonowania + '</span><br>';
        document.getElementById("focus650").innerHTML += 'długość: <span class="text-color">' + obj.dlugosc + '</span><br>';
        document.getElementById("focus650").innerHTML += 'typ miecza: <span class="text-color">' + obj.typ_miecza + '</span><br>';
        document.getElementById("focus650").innerHTML += 'silnik: <span class="text-color">' + obj.silnik + '</span><br>';
        document.getElementById("focus650").innerHTML += 'wyposażenie: <span class="text-color">' + obj.wyposazenie + '</span><br>';
        document.getElementById("focus650").innerHTML += 'cena za dobę: <span class="text-color">' + obj.cena_za_dobe + '</span><br>';
        document.getElementById("focus650").innerHTML += '<a href="mailto:test@test.com?subject='+ obj.model +' wynajem">Kliknij tutaj aby zarezerować</a>';
    });
    $.getJSON("phila880.json", 
            function (data) {
        var newdata = JSON.stringify(data);
        let obj = JSON.parse(newdata);
        document.getElementById("phila880").innerHTML = 'rok produkcji: <span class="text-color">' + obj.rok_produkcji + '</span><br>';
        document.getElementById("phila880").innerHTML += 'liczba osób: <span class="text-color">' + obj.liczba_osob + '</span><br>';
        document.getElementById("phila880").innerHTML += 'port stacjonowania: <span class="text-color">' + obj.port_stacjonowania + '</span><br>';
        document.getElementById("phila880").innerHTML += 'długość: <span class="text-color">' + obj.dlugosc + '</span><br>';
        document.getElementById("phila880").innerHTML += 'typ miecza: <span class="text-color">' + obj.typ_miecza + '</span><br>';
        document.getElementById("phila880").innerHTML += 'silnik: <span class="text-color">' + obj.silnik + '</span><br>';
        document.getElementById("phila880").innerHTML += 'wyposażenie: <span class="text-color">' + obj.wyposazenie + '</span><br>';
        document.getElementById("phila880").innerHTML += 'cena za dobę: <span class="text-color">' + obj.cena_za_dobe + '</span><br>';
        document.getElementById("phila880").innerHTML += '<a href="mailto:test@test.com?subject='+ obj.model +' wynajem">Kliknij tutaj aby zarezerować</a>';
    });

    $.getJSON("sasanka660.json", 
            function (data) {
        var newdata = JSON.stringify(data);
        let obj = JSON.parse(newdata);
        document.getElementById("sasanka660").innerHTML = 'rok produkcji: <span class="text-color">' + obj.rok_produkcji + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'liczba osób: <span class="text-color">' + obj.liczba_osob + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'port stacjonowania: <span class="text-color">' + obj.port_stacjonowania + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'długość: <span class="text-color">' + obj.dlugosc + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'typ miecza: <span class="text-color">' + obj.typ_miecza + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'silnik: <span class="text-color">' + obj.silnik + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'wyposażenie: <span class="text-color">' + obj.wyposazenie + '</span><br>';
        document.getElementById("sasanka660").innerHTML += 'cena za dobę: <span class="text-color">' + obj.cena_za_dobe + '</span><br>';
        document.getElementById("sasanka660").innerHTML += '<a href="mailto:test@test.com?subject='+ obj.model +' wynajem">Kliknij tutaj aby zarezerować</a>';
    });

});