function createCard({name, description, picture, link, tags, gradientStart, gradientEnd, gradientAngle}) {
    let badges = '';

    let badgeBgColor = getMiddleColor("#" + gradientStart, "#" + gradientEnd);
    let badgeTextColor = getTextColor(badgeBgColor);
    let badgeStyle = `--badge-text-color: ${badgeTextColor}; --badge-bg-color: ${badgeBgColor}`;

    if (tags) {
        tags.forEach(tag => {
            badges += `\n<div class="card__badge" style="${badgeStyle}">${tag}</div>`
        });
    }

    let gradientStyle = `--gradientAngle: ${gradientAngle}deg; --gradientStart: #${gradientStart}; --gradientEnd: #${gradientEnd};`;

    let href = (link ? `href="${link}"` : '');

    let image = picture ? `<img class="card__image" src="${picture}" alt="${name} Logo">` : ""

    let htmlString = `
        <a ${href}>
            <div class="card__gradient" style="${gradientStyle}">
                ${image}
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

function getMiddleColor(colorA, colorB) {
    let c = "#";
    for (let i = 0; i < 3; i++) {
        let sub1 = colorA.substring(1 + 2 * i, 3 + 2 * i);
        let sub2 = colorB.substring(1 + 2 * i, 3 + 2 * i);
        let v1 = parseInt(sub1, 16);
        let v2 = parseInt(sub2, 16);
        let v = Math.floor((v1 + v2) / 2);
        let sub = v.toString(16).toUpperCase();
        let padsub = ('0' + sub).slice(-2);
        c += padsub;
    }
    return c;
}

function getTextColor(bgColor) {
    let m = bgColor.substr(1).match(bgColor.length == 7 ? /(\S{2})/g : /(\S{1})/g);
    if (m) {
        let r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
        let brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;

        return (brightness > 150 ? "black" : "white")
    }
    return "black";
}


db.collection('projects').orderBy("editionDate", "desc").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        let newCard = createCard(doc.data());
        document.querySelector('section.projects__cards').append(newCard);
    });
});
