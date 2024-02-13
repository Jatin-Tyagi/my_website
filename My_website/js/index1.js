
// // adding skills on home page 
const skill = [{
    icon : 'Ph' ,
    name : 'photoshop'
},
{
    icon : 'Ai' ,
    name : 'Illustrator'
},
{
    icon : 'Ae' ,
    name : 'After Effects'
},
{
    icon : 'Pr' ,
    name : 'Premiere Pro'
},
{
    icon : 'Xd' ,
    name : 'Adobe Xd'
},
{
    icon : 'Lr' ,
    name : 'Lightroom'
},
{
    icon : 'Ac' ,
    name : 'Acrobat'
},{
    icon : 'Id' ,
    name : 'Indesign'
},
{
    icon : 'Fi' ,
    name : 'Figma'
},
{
    icon : 'Ms' ,
    name : 'MIcrosoft Office Suite'
},
{
    icon : 'H' ,
    name : 'HTML'
},
{
    icon : 'C' ,
    name : 'CSS'
},
{
    icon : 'Js' ,
    name : 'Javascript'
},
{
    icon : 'C' ,
    name : 'Canva'
},
{
    icon : 'Ph' ,
    name : 'Photography'
}];


let html = " ";
skill.forEach((kind) => {
    html +=`
    <div class="img1">
    <span class="myhov">${kind.icon}</span>
    <span class="h-btn">${kind.name}</span>
    </div>
    `;
    const hey = document.querySelector('.js_skills_grid');
    hey.innerHTML = html;
    
});


