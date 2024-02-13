// adding resources 
document.designMode= 'off';
const resources = [{
    imgLink : 'https://mobbin.com/favicon-32x32.png?v=2.1' ,
    siteLink : 'https://mobbin.com/',
    resTxt : 'mobbin'
},
{
    imgLink : 'https://scrnshts.club/wp-content/themes/wp-scrnshts/favicon-32x32.png' ,
    siteLink : 'https://scrnshts.club/',
    resTxt : 'Scrnshts'
},
{
    imgLink : 'https://assets.uigarage.net/content/uploads/2019/05/favicon-50x50.png' ,
    siteLink : 'https://uigarage.net/',
    resTxt : 'UIgarage'
},
{
    imgLink : 'https://appshots.design/favicon.png' ,
    siteLink : 'https://appshots.design/',
    resTxt : 'appshots'
},
{
    imgLink : 'https://uploads-ssl.webflow.com/5b0aa97815edac66febe3cef/5c7836b619bf088653637e98_Frame%206.1.png' ,
    siteLink : 'https://www.uisources.com/',
    resTxt : 'uisources'
},
{
    imgLink : 'https://uploads-ssl.webflow.com/5f438a2f5a9aef32cecd6876/5f46908c22f5a1cd57690dc0_Webp.net-resizeimage%20(1).png' ,
    siteLink : 'https://www.theappfuel.com/',
    resTxt : 'App Fuel'
},
{
    imgLink : 'https://pageflows.com/static/website/images/logo.png' ,
    siteLink : 'https://pageflows.com/',
    resTxt : 'Pageflows'
}];
resHtml = " ";
resources.forEach((resData) => {
    resHtml +=`
    <div class="img1">
        <img src="${resData.imgLink}" alt="">
        <span class="res_link"><a href="${resData.siteLink}" target="_blank">${resData.resTxt}</a></span>
    </div>
    `;
    const resRef = document.querySelector('.js_apps_grid');
    resRef.innerHTML = resHtml;
    
});
// learning resources
const learn = [{
    imgLink : 'https://mobbin.com/favicon-32x32.png?v=2.1' ,
    siteLink : 'https://lawsofux.com/',
    resTxt : 'laws of UX'
},
{
    imgLink : 'https://scrnshts.club/wp-content/themes/wp-scrnshts/favicon-32x32.png' ,
    siteLink : 'https://52weeksofux.com/',
    resTxt : '52 weeks of UX'
}
];
learnHtml = " ";
learn.forEach((learnData) => {
    learnHtml +=`
    <div class="img1">
        <img src="${learnData.imgLink}" alt="">
        <span class="res_link"><a href="${learnData.siteLink}" target="_blank">${learnData.resTxt}</a></span>
    </div>
    `;
    const learnRef = document.querySelector('.js_learn_grid');
    learnRef.innerHTML = learnHtml;
    
});
// Typo resources
const typo = [{
    imgLink : 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg' ,
    siteLink : 'https://fonts.google.com/',
    resTxt : 'google fonts'
},
{
    imgLink : 'https://www.dafont.com/img/favicon.ico' ,
    siteLink : 'https://www.dafont.com/',
    resTxt : 'dafont'
},
{
    imgLink : 'https://www.fontshare.com/static/favicon.png' ,
    siteLink : 'https://www.fontshare.com/',
    resTxt : 'fontshare'
},
{
    imgLink : 'https://www.fontsquirrel.com/favicon-32x32.png?v=2' ,
    siteLink : 'https://www.fontsquirrel.com/',
    resTxt : 'fontsquirrel'
},
{
    imgLink : 'https://www.cufonfonts.com/favicon.ico' ,
    siteLink : 'https://www.cufonfonts.com/',
    resTxt : 'cufontonts'
},
{
    imgLink : 'https://www.fontspace.com/favicon-32x32.png?v=00Bdv4Q5g6' ,
    siteLink : 'https://www.fontspace.com/',
    resTxt : 'fontspace'
}
];
typoHtml = " ";
typo.forEach((typoData) => {
    typoHtml +=`
    <div class="img1">
        <img src="${typoData.imgLink}" alt="">
        <span class="res_link"><a href="${typoData.siteLink}" target="_blank">${typoData.resTxt}</a></span>
    </div>
    `;
    const typoRef = document.querySelector('.js_typo_grid');
    typoRef.innerHTML = typoHtml;
    
});
// icons resources
const icons = [{
    imgLink : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAbFBMVEX////v7+/m5eUAAADJx8fg399lYWB9enm/vr5fWllybm2+vb3Z2NdjX164t7bOzcytq6qopqWzsbGhnp7p6OhwbGtHQT8+NzZaVlSOi4pWUU8XBQAoHhwsIyHz8/N6dnWIhYQRAAAeEg4OAAB0Uy2DAAAA00lEQVR4AazRA3YFQRQE0JpfY9ue/a8xRivOPWqjHv6ddcOnbqSNTzh0PfqfzQdAyAgfiJkAQMgURhldPAmZw6R4Gy4rC79TF03b9UP20XRAjmEykbMxC58vr3cC0jPNLyteVOQGhUUKVdgPLS1X3sPzVB6oFGk45D6Ki5ac6jFAtB2U+iunBqJgIiScAvmNE1dlQSj194NywLwqqR8pj7qRMSQ8LwgKdpBVPHahe1IraXswF3IdoGlJb32OdeQOg4GkWxVDy8mG0VqNJKfQx/3oCwCKcwn1OjknfAAAAABJRU5ErkJggg==',
    siteLink : 'https://icones.js.org/',
    resTxt : 'icones'
},
{
    imgLink : 'https://iconsax.io/logo-vuesax.svg' ,
    siteLink : 'https://iconsax.io/',
    resTxt : 'iconsax'
},
{
    imgLink : 'https://www.dafont.com/img/favicon.ico' ,
    siteLink : 'https://icons8.com/',
    resTxt : 'icons8'
},
{
    imgLink : 'https://feathericons.com/favicon-32x32.png' ,
    siteLink : 'https://feathericons.com/',
    resTxt : 'feathericons'
},
{
    imgLink : 'https://iconscout.com/favicon.ico' ,
    siteLink : 'https://iconscout.com/free-icons',
    resTxt : 'iconscout'
},
{
    imgLink : 'https://thenounproject.com/favicon-32x32.png' ,
    siteLink : 'https://thenounproject.com/',
    resTxt : 'the noun project'
}
];
iconHtml = " ";
icons.forEach((iconData) => {
    iconHtml +=`
    <div class="img1">
        <img src="${iconData.imgLink}" alt="">
        <span class="res_link"><a href="${iconData.siteLink}" target="_blank">${iconData.resTxt}</a></span>
    </div>
    `;
    const typoRef = document.querySelector('.js_icons_grid');
    typoRef.innerHTML = iconHtml;
    
});
// colors resources
const color = [{
    imgLink : 'data:image/png;base64,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' ,
    siteLink : 'https://coolors.co/',
    resTxt : 'Coolors'
},
{
    imgLink : 'https://www.khroma.co/assets/icons/fav.png' ,
    siteLink : 'https://www.khroma.co/',
    resTxt : 'khroma'
},
{
    imgLink : 'https://colorhunt.co/img/colorhunt-favicon.svg?2' ,
    siteLink : 'https://colorhunt.co/',
    resTxt : 'colorhunt'
},
{
    imgLink : 'https://colors.dopely.top/static/dc.png' ,
    siteLink : 'https://colors.dopely.top/',
    resTxt : 'color dopely top'
},
{
    imgLink : 'https://colors.muz.li/assets/images/favicon.png' ,
    siteLink : 'https://colors.muz.li/',
    resTxt : 'color muzli'
},
{
    imgLink : 'https://flatuicolors.com/static/favicon.ico ',
    siteLink : 'https://flatuicolors.com/',
    resTxt : 'flatuicolors'
}
];
colorHtml = " ";
color.forEach((colorData) => {
    colorHtml +=`
    <div class="img1">
        <img src="${colorData.imgLink}" alt="">
        <span class="res_link"><a href="${colorData.siteLink}" target="_blank">${colorData.resTxt}</a></span>
    </div>
    `;
    const colorRef = document.querySelector('.js_color_grid');
    colorRef.innerHTML = colorHtml;
    
});