// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Tips Menghasilkan Uang dari Internet is ready!");

    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('click', function() {
            alert(`You clicked on: ${this.querySelector('h3').innerText}`);
        });
    });
});
