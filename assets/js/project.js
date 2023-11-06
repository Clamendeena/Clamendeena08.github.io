document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    closeModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'none';
        });
    });
   
});
