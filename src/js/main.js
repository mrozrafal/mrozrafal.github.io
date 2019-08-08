"use strict";
console.log(`Hey, it's nice you looked here ;-)`);


const list = document.querySelector('.project--js');



fetch('https://api.github.com/users/mrozrafal/repos?sort=updated&direction=desc')
.then(resp => resp.json())
.then(resp => {
  const repos = resp;
for (const repo of repos){
  const {description, html_url, name, homepage} = repo;
list.innerHTML+= `

<li class="project__item">
            <div class="project__container">
              <img class="project__logo" src="assets/img/Github Icon.svg" alt="">
              <h3 class="project__title">${name}</h3>
              <p class="project__description">${description ? description : "no description" } </p>
            </div>
            <div class="project__footer">
             
            
            
           
            ${
              homepage ? `<a class="project__link project__link--demo" target="blank" rel="nofollow noreferrer" href="${homepage}">demo</a>` : '' 
            }
            
            <a class="project__link project__link--code" target="blank" rel="nofollow noreferrer"  href="${html_url}">github</a>
          </div>
          </li>
`;
}
})

.catch(err =>{
  console.log(err);
})

