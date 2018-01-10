function autoExpandTextareas() {
    const textareas = [...document.querySelectorAll('textarea')];

    function autoExpand(area) {
        const initialHeight = area.offsetHeight;

        area.addEventListener('input', function(e) {
            area.style.height = '1px';
            area.style.height = area.scrollHeight > initialHeight ? area.scrollHeight + 'px' : initialHeight + 'px';
        });
    }

    textareas.forEach(autoExpand);
}

document.addEventListener('DOMContentLoaded', autoExpandTextareas);
