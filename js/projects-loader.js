function createCard({name, description, picture, link, tags, gradientStart, gradientEnd, gradientAngle}) {
    let badges = '';
    tags.forEach(tag => {
        badges += `\n<span class="card__badge" style="background-color: #${gradientEnd}7F;">${tag}</span>`
    });

    let gradient = `
        background: #${gradientStart};
        background: -moz-linear-gradient(${gradientAngle}deg, #${gradientStart} 0%, #${gradientEnd} 100%);
        background: -webkit-linear-gradient(${gradientAngle}deg, #${gradientStart} 0%, #${gradientEnd} 100%);
        background: linear-gradient(${gradientAngle}deg, #${gradientStart} 0%, #${gradientEnd} 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#${gradientStart}', endColorstr='#${gradientEnd}', GradientType=1);
    `;

    let htmlString = `
        <a href="${link}">
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
