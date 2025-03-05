document.addEventListener('DOMContentLoaded', function () {
    // Obține toate cardurile
    const cityCards = document.querySelectorAll('.city-card');

    cityCards.forEach(card => {
        card.addEventListener('click', function () {
            const cityId = card.id;
            openCityPage(cityId);
        });
    });

    // Funcția care redirecționează utilizatorul la pagina orașului
    function openCityPage(cityId) {
        let url = '';

        switch(cityId) {
            case 'tokyo':
                url = 'tokyo.html'; // Fișierul HTML dedicat Tokyo
                break;
            case 'sendai':
                url = 'sendai.html';
                break;
            case 'hakodate':
                url = 'hakodate.html';
                break;
            case 'sapporo':
                url = 'sapporo.html';
                break;
            case 'akita':
                url = 'akita.html';
                break;
            case 'kanazawa':
                url = 'kanazawa.html';
                break;
            case 'busan':
                url = 'busan.html';
                break;
            case 'nagasaki':
                url = 'nagasaki.html';
                break;
            case 'kagoshima':
                url = 'kagoshima.html';
                break;
            case 'tokushima':
                url = 'tokushima.html';
                break;
            case 'mount-fuji':
                url = 'mount-fuji.html';
                break;
            default:
                console.log('Orașul nu a fost găsit.');
                return;
        }

        window.location.href = url; // Redirecționează utilizatorul la pagina respectivă
    }
});
