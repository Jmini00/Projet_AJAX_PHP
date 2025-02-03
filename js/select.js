
/**
 * Sélectionner les données issues d'une BDD
 */
fetch('selection.php')
    .then(response => response.json())
    .then(vinyles => {

        // Trier les vinyles par nom d'artiste (ordre alphabétique)
        //vinyles.sort((a, b) => a.artiste.localeCompare(b.artiste));

            const grid = document.getElementById('vinyles');
            const template = document.getElementById('template').content;
            const ul = document.querySelector('section ul');

                // Exécute le code dans X millisecondes
                setTimeout(() => {
                // Masquer le loader
                //document.querySelector('.loader').classList.add('fadeOut');
                document.querySelector('.loader').classList.add('hide');
                grid.style.animation = "fadeIn 5s";
                ul.style.animation = "fadeIn 3s";

        vinyles.forEach(vinyle => {
            const vinylNode = document.importNode(template, true)
            vinylNode.querySelector('.card').id = `vinyle-${vinyle.id}`
            vinylNode.querySelector('.card-title').textContent = vinyle.artiste
            vinylNode.querySelector('.card-text').textContent = vinyle.album
            vinylNode.querySelector('.card-small').textContent = vinyle.year 
            
            const li = document.createElement('li')
            li.textContent = `${vinyle.artiste} - Album "${vinyle.album}" - Sorti en ${vinyle.year}`

            grid.appendChild(vinylNode)
            ul.appendChild(li)
            
            })
            // Lance le moteur de recherche une fois que les cartes sont générées
            searchVinyl();
        },6000)
        clearTimeout();
    })
    .catch(error => console.error(error))

/**
 * Moteur de recherche par artiste
 */
function searchVinyl() {
    const search = document.getElementById('search');
    const vinyleCards = document.querySelectorAll('#vinyles .card');

    search.addEventListener('input', () => {
        const query = search.value.toLowerCase().trim();

        vinyleCards.forEach(vinyleCard => {
            const artistName = vinyleCard.querySelector('.card-title').textContent.toLowerCase();
            // Vérifie si l'artiste correspond à la recherche
            if (artistName.includes(query)) {
                vinyleCard.style.display = ''; // Affiche la carte
                //vinyleCard.classList.remove('hidden');
                //vinyleCard.classList.add('visible');
            } else {
                vinyleCard.style.display = 'none'; // Masque la carte
                //vinyleCard.classList.remove('visible');
                //vinyleCard.classList.add('hidden');
            }
        });
    });
}


/// Bouton menu slider
const menuSlider = document.getElementById('side-nav');
const btSlider = document.querySelector('.sliderbtn');
let i = 0;
btSlider.addEventListener('click', (e) => {
    btSlider.classList.toggle('change');

    if (i === 0) {
        menuSlider.style.animation = "anim-sidenav-on .7s forwards";
        i = 1;
    } else {
        menuSlider.style.animation = "anim-sidenav-off .7s forwards";
        i = 0;
    }
})

//Dark Mode
document.querySelectorAll('#dark-mode li').forEach(item => {
    item.addEventListener('click', darkMode);
  });
  
  function darkMode() {
    const picture = document.querySelector("#logo img");
    const cardPicture = document.querySelectorAll(".card-back img");
    
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
    
    if (mode === "dark") {
        picture.src = "public/assets/manBaW.webp";
        cardPicture.forEach(item => {
            item.src = "https://picsum.photos/180/220?grayscale";
        });
    } else {
        picture.src = "public/assets/man.svg";
        cardPicture.forEach(item => {
            item.src = "https://picsum.photos/180/220";
        });
    }
  }

/**
 * Créer une carte pour un vinyle
 */
/*function createVinyle(vinyle)
{
    const template = document.querySelector('#template').content.cloneNode(true)
    const card = template.querySelector('.card')

    // Ajoute les valeurs à l'image de la carte
    //card.querySelector('.card-img-top').src = vinyle.picture
    //card.querySelector('.card-img-top').alt = vinyle.album
    card.querySelector('.card-title').textContent = vinyle.artiste
    card.querySelector('.card-text').textContent = vinyle.album
    card.querySelector('.card-small').textContent = vinyle.year


    // Bouton réservation
    /*const reservedButton = card.querySelector('.btn-success')
    if (room.isReserved && reservedButton) {
        reservedButton.id = `room-id-${room.id}`
        reservedButton.disabled = true // Désactive le clic du bouton
        reservedButton.textContent = 'Déjà réservé' // Change le texte du bouton
        reservedButton.classList.replace('btn-success', 'btn-light') // Remplace une classe CSS par une autre
    } else if (!room.isReserved && reservedButton) {
        reservedButton.id = `room-id-${room.id}`
        reservedButton.addEventListener('click', function() {
            reservedRoom(room)
        })
    }

    // Bouton de suppression d'une réservation
    const deletedButton = card.querySelector('.btn-danger')
    if (deletedButton) {
        deletedButton.addEventListener('click', function() {
            deletedReservation(room, card)
        })
    }

    return card
}*/


