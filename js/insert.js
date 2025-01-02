/**
 * Envoi des données au serveur PHP
 */
const form = document.querySelector('form').addEventListener('submit', function(event) {
    // Empêche le formulaire de recharger la page
    event.preventDefault()

    // Récupère les valeurs de mes champs de formulaire
    const artiste = document.querySelector('#artiste').value.trim();
    const album = document.querySelector('#album').value.trim();
    const year = document.querySelector('#year').value.trim();

    // Vérifie que tous les champs sont remplis
    if (!artiste || !album || !year) {
        Swal.fire({
            position: "bottom", 
            icon: 'warning',
            title: 'Attention',
            text: 'Remplissez tous les champs !',
            showConfirmButton: false,
            timer: 2000,
            width: '30%',
        });
        return;
    }

    fetch('insertion.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            artiste: artiste,
            album: album,
            year: year
        })
    })
        .then(response => response.json())
        .then(data => {
            
            if(data.success) {
            // Création d'une "li" et d'une "carte"
            const li = document.createElement('li');
            li.textContent = `${artiste} - ${album} (${year})`;

            const template = document.getElementById('template').content
            const card = document.importNode(template, true)
            card.querySelector('.card-title').textContent = artiste
            card.querySelector('.card-text').textContent = album
            card.querySelector('.card-small').textContent = year

            const cardPicture = document.querySelector(".card-back img");
            cardPicture.src = "https://picsum.photos/180/220";

            // Ajoute la "li" à la liste en place et une carte
            document.querySelector('#section ul').appendChild(li)
            document.querySelector('#vinyles').appendChild(card)
            
            // Réinitialise le formulaire
            document.querySelector('form').reset();

            Swal.fire({
                position: "top-end",
                icon: 'success',
                title: 'Bravo',
                text: 'Vinyle ajouté avec succès !',
                showConfirmButton: false,
                timer: 2000
            });
            }
            else {
                alert('Une erreur s\'est produite lors de l\'ajout du vinyle.');
            }
        })
        .catch(error => console.error(error))
        /*alert('Impossible de soumettre le formulaire pour le moment.');*/
});




// Sélectionne le formulaire et ajoute un écouteur pour l'événement "submit"
/*document.querySelector('form').addEventListener('submit', function (event) {
    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const artiste = document.querySelector('#artiste').value.trim();
    const album = document.querySelector('#album').value.trim();
    const year = document.querySelector('#year').value.trim();

    // Vérifie que tous les champs sont remplis
    if (!artiste || !album || !year) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Envoie les données au serveur via fetch
    fetch('insertion.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            artiste: artiste,
            album: album,
            year: year,
        }),
    })
        .then(response => response.json())
        .then(data => {
            // Si l'insertion a réussi, ajoute une nouvelle carte et un nouvel élément de liste
            if (data.success) { // Assurez-vous que l'API renvoie une clé "success"
                // Succès : affiche un message via alert
                alert(data.message || 'Vinyle ajouté avec succès !');
                // Création de l'élément "li"
                const li = document.createElement('li');
                li.textContent = `${artiste} - ${album} (${year})`;

                // Ajoute le "li" à la liste
                document.querySelector('ul').appendChild(li);

                // Clonage et mise à jour de la carte à partir du template
                //const template = document.querySelector('#template').content.cloneNode(true);
                //template.querySelector('.card-title').textContent = artiste;
                //template.querySelector('.card-text').textContent = album;
                //template.querySelector('.card-small').textContent = year;

                // Ajoute la carte à la grille
                //document.querySelector('#vinyles').appendChild(template);

                // Réinitialise le formulaire
                //document.querySelector('form').reset();
            } else {
                alert('Une erreur s\'est produite lors de l\'ajout du vinyle.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'insertion :', error);
            alert('Impossible de soumettre le formulaire pour le moment.');
        });
});*/

