const init = () => {
    generateHtml();
}

const generateHtml = () => {
    let html = "";
    for (press in Press.slice(0,3)) {
        html += `<div>
                <img loading="lazy" src="${Press[press].image}" />
                <p>${Press[press].subtitle}</p>
                <h2>${Press[press].title}</h2>
                <p>${Press[press].description}</p>
                <a href="${Press[press].link}">${Press[press].linkTxt}</a>
            </div>
`
    }
    document.getElementById("pressReleases").innerHTML = html;
    html = "";
    for (press in Press) {
        html += `<div>
                <img loading="lazy" src="${Press[press].image}" />
                <p>${Press[press].subtitle}</p>
                <h2>${Press[press].title}</h2>
                <p>${Press[press].description}</p>
                <a href="${Press[press].link}">${Press[press].linkTxt}</a>
            </div>
`
    }
    document.getElementById("inThePress").innerHTML = html;
}


window.addEventListener("load", init);

const Press = [
    {
        title: "Frieze - London",
        subtitle: "Arne Quinze builds Lupine Tower for Frieze Sculpture, Regent's Park",
        image: "/static/img/press/press_img1.jpg",
        description: "This year, Frieze Sculpture returns to The Regent's Park from 5 - 18 October, featuring 12...",
        link: "",
        linkTxt: "Open press release"
    },
    {
        title: "The Beautiful Dreamer - Paris",
        subtitle: "The first permanent public art sculpture by Arne Quinze in France",
        image: "/static/img/press/press_img2.jpg",
        description: "Arne Quinze continues his journey to reshape our cities into more human environments with this..",
        link: "",
        linkTxt: "Open press release"
    },
    {
        title: "My secret Garden - Valencia",
        subtitle: "Arne Quinze press release",
        image: "/static/img/press/press_img3.jpg",
        description: "\"My Secret Garden Valencia\" presents a series of six public sculptures that will enter into...",
        link: "",
        linkTxt: "Open press release"
    },
    {
        title: "Financial Times about Frieze Sculpture",
        subtitle: "Frieze Sculpture Park opens its doors to nature",
        image: "/static/img/press/press_img4.jpg",
        description: "An upbeat free-to-wander exhibition combines playfulness with serious concerns of contemporary...",
        link: "https://www.arnequinze.com/assets/in_the_press/documents/financial-times-arne-quinze-screenshot.png",
        linkTxt: "download article"
    },
    {
        title: "My Secret Garden, Valencia — Extended",
        subtitle: "Visit Arne Quinze's Secret Garden until the 1st of March",
        image: "/static/img/press/press_img5.jpg",
        description: "Since February 2019, the open-air exhibition of Arne Quinze already attracted 3 million visitors!...",
        link: "http://www.viuvalencia.com/articulo/exposicion_valencia_febrero_gratis/590621076?fbclid=IwAR0eyzjukTOF_kIhXwi1yFWtUrk8kxOFNR4VMiOPd-UOUPjSlgYz5nTucqU",
        linkTxt: "visit website"
    },
    {
        title: "DJ Lefto in our studio",
        subtitle: "An inspirational tour with Belgian most famous hip hop DJ",
        image: "/static/img/press/press_img6.jpg",
        description: "In this RTBF series, Hadja Lahbib follows Lefto visiting some of his friends artists and...",
        link: "https://www.rtbf.be/auvio/detail_tout-le-baz-art?id=2576946&jwsource=fb&fbclid=IwAR23CB0dqzjvcTZVy3R0x-x-kGrr2kpLmDeEbm9_u4G5DXQQAepjLF07YBA",
        linkTxt: "visit website"
    }
]