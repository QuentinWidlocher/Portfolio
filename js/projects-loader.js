function createCard({name, description, picture, link, tags, gradientStart, gradientEnd, gradientAngle}) {
    let badges = '';

    if (tags) {
        tags.forEach(tag => {
            badges += `\n<div class="card__badge" style="background-color: #${gradientEnd}7F;">${tag}</div>`
        });
    }

    let gradient = `--gradientAngle: ${gradientAngle}deg; --gradientStart: #${gradientStart}; --gradientEnd: #${gradientEnd};`;

    let href = (link ? `href="${link}"` : '');

    let htmlString = `
        <a ${href}>
            <div class="card__gradient" style="${gradient}">
                <img class="card_image" src="${picture}" alt="${name} Logo" width="200">
            </div>
            <div class="card__info">
                <div class="card__title">
                    <h3>${name}</h3>
                    <span>${description}</span>
                </div>
                <div class="card__badges">
                    ${badges}
                </div>
            </div>
        </a>
    `

    let article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = htmlString;

    return article;
}


db.collection('projects').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        let newCard = createCard(doc.data());
        document.querySelector('section.projects__cards').append(newCard);
    });
});
