function load_messages() {
    let messages = document.getElementById('messages');
    let randomNumber = Math.floor(Math.random() * 10) + 1
    messages.innerHTML = ''

    let loadingSection = document.getElementById('loading');

    loadingSection.innerHTML += `
        <div class="loading"></div>
    `;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${randomNumber}`)
        .then(response => response.json())
        .then(json => {
            loadingSection.innerHTML = ''

            json.forEach(comment => {
                let review_item = document.querySelector('#message');
                let clone = review_item.content.cloneNode(true);

                let title = clone.querySelector('div .title');
                let text = clone.querySelector('div .body');

                title.innerHTML = comment.title;
                text.innerHTML = comment.body;

                messages.appendChild(clone);
            })
        })
        .catch(() => {
            loadingSection.innerHTML = ''

            let message = document.querySelector('#message');
            let clone = message.content.cloneNode(true);
            let title = clone.querySelector('div .title');

            title.innerHTML = 'something went wrong';

            messages.appendChild(clone);
        });
}

function setButtonOnClickHandler() {
    let getButton = document.getElementById('button');
    getButton.addEventListener('click', event => load_messages());
}

document.addEventListener('DOMContentLoaded', event => setButtonOnClickHandler())