document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('[data-include]');

    includes.forEach(function(div) {
        const file = div.getAttribute('data-include');

        fetch(file)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('File not found or unable to fetch');
                }
                return response.text();
            })
            .then((data) => {
                div.innerHTML = data;
            })
            .catch((error) => {
                console.error('Error loading the file:', error);
            });
    });
});