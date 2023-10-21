
let card = document.getElementById('data');
fetch ('./comments.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            card.insertAdjacentHTML('beforeend',`
            <div id="carddesign" class="card text-white bg-primary mb-3 m-2 p-2" style="max-width: 18rem;">
            <div class="card-header text-center">${post.email}</div>
            <div class="card-body">
              <h5 class="card-title text-center">${post.name}</h5>
              <p class="card-text text-center">${post.body}</p>
            </div>
          </div>
        `);
            console.log(post)
        });
    })