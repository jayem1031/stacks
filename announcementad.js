document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postText = document.getElementById('postText').value;
    const postMedia = document.getElementById('postMedia').files[0];
    const postsContainer = document.getElementById('posts');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    if (postMedia) {
        const mediaElement = document.createElement(postMedia.type.startsWith('video') ? 'video' : 'img');
        mediaElement.src = URL.createObjectURL(postMedia);
        mediaElement.controls = postMedia.type.startsWith('video');
        postDiv.appendChild(mediaElement);
    }

    const textElement = document.createElement('p');
    textElement.textContent = postText;
    postDiv.appendChild(textElement);

    postsContainer.prepend(postDiv);

    document.getElementById('postForm').reset();
});

document.querySelector('.back-button').addEventListener('click', function() {
    window.history.back();
});

