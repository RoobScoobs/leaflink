export const toggleUserDetails = (event) => {
    const box = event.target;

    if (box.classList.contains('user__info') && box.dataset.expanded === 'false') {
        box.dataset.expanded = 'true';
    } else if (box.classList.contains('user__info')) {
        box.dataset.expanded = 'false';
    }
};