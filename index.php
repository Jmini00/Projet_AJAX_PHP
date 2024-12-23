<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AJAX PHP (fetch then/catch)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="public/css/loader.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">-->
    <script src="js/select.js" defer></script>
    <script src="js/insert.js" defer></script>

</head>

<body class="poppins-regular" data-theme="light">

    <div id="side-nav">
        <form>
            <label for="artiste">Artiste</label>
            <input type="text" id="artiste" name="artiste">
            <label for="album">Album</label>
            <input type="text" id="album" name="album">
            <label for="year">Année</label>
            <input type="number" id="year" name="year">
            <button id="button">Ajouter</button>
        </form>
    </div>

    <div class="sliderbtn">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>

    <header>
        <ul id="dark-mode">
            <li data-mode="light">Light</li>
            <li data-mode="dark">Dark</li>
        </ul>
        <div id="logo">
            <img src="public/assets/logo_boiteavinyles2.webp" alt="logo La Boite à Vinyles">
            <h1 class="lobster-two-regular-italic">La Boîte à Vinyles (liste)</h1>
        </div>
    </header>

    <section>
        <ul></ul>
    </section>

    <!--<section>
        <form>
            <label for="artiste">Artiste</label>
            <input type="text" id="artiste" name="artiste">
            <label for="album">Album</label>
            <input type="text" id="album" name="album">
            <label for="year">Année</label>
            <input type="number" id="year" name="year">
            <button id="button">Ajouter</button>
        </form>
    </section>-->

    <section>
        <div class="loader">
            <img src="https://www.pngmart.com/files/6/Vinyl-PNG-Transparent-Image.png" alt="Loading..." />
            <p><strong>Loading...</strong></p>
        </div>
        <div id="vinyles"></div>
    </section>

    <!-- Template pour les vinyles -->
    <template id="template">
        <div class="card">
            <div>
                <div>
                    <img src="" class="card-img-top" alt="">
                </div>
                <div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <p><small class="card-small"></small></p>
                        <button type="button">Plus d'infos</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

</body>

</html>