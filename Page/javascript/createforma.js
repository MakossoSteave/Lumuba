function appele() {
    var desc = document.getElementById("description").value;
    var img = document.getElementById("image").value;
    var heure = document.getElementById("heure").value;
    var prix = document.getElementById("prix").value;
    var createur = document.getElementById("createur").value;
    var nom = document.getElementById("noms").value;

    donne = [nom, desc, img, heure, prix, createur]
    var xhr;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhr = new XMLHttpRequest();
        console.log("test")

    } else if (window.ActiveXObject) { // IE 8 and older
        console.log("teste")

        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var data = "donne=" + donne
    console.log(donne);
    console.log(data)

    xhr.open("POST", "../Db/request/createformation.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = display_data;

    function display_data() {
        if (xhr.readyState == 4) {
            console.log("teste1")

            if (xhr.status == 200) {
                console.log("teste2")

                document.getElementById("ter").innerHTML = xhr.responseText;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

function Edition() {
    var desc = document.getElementById("descriptionModifier").value;
    var img = document.getElementById("imageModifier").value;
    var heure = document.getElementById("heureModifier").value;
    var prix = document.getElementById("prixModifier").value;
    var nom = document.getElementById("nommodifier").value;

    donne = [nom, desc, img, heure, prix, createur]
    var xhr;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhr = new XMLHttpRequest();
        console.log("test")

    } else if (window.ActiveXObject) { // IE 8 and older
        console.log("teste")

        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var data = "donne=" + donne
    console.log(donne);
    console.log(data)

    xhr.open("POST", "../Db/request/editformation.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = display_data;

    function display_data() {
        if (xhr.readyState == 4) {
            console.log("editions")

            if (xhr.status == 200) {
                console.log("teste2")

                document.getElementById("ter").innerHTML = xhr.responseText;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}