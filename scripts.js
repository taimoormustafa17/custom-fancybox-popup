document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-img');
    const popup = document.getElementById('popup');
    const popupImg = document.querySelector('.popup-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.getElementById('closeBtn');

    let currentImageIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentImageIndex = index;
            showPopup(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showPopup(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showPopup(currentImageIndex);
    });

    closeBtn.addEventListener('click', closePopup);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    function showPopup(index) {
        const imageURL = images[index].getAttribute('src');
        popupImg.setAttribute('src', imageURL);
        popup.style.display = 'block';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

});