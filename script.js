document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', function() {
        this.classList.toggle('checked');
    });
});
