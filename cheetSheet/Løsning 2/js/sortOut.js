'use strict';
console.log("Hello You");

const elements = document.querySelectorAll('article'); //all articles

const all = document.querySelectorAll('button')[0]; //All butto
const html = document.querySelectorAll('button')[1]; //HTML button
const css = document.querySelectorAll('button')[2]; //CSS button
const js = document.querySelectorAll('button')[3]; //JS button
const seo = document.querySelectorAll('button')[4]; //SEO button
const program = document.querySelectorAll('button')[5]; //program button
const tech = document.querySelectorAll('button')[6]; //teknologi button
let buttons = [all, html, css, js, seo, program, tech] //insert them in an array

buttons.forEach(button => { 
    button.addEventListener('click', function() {
        let selectedFilter = button.innerHTML.toLowerCase(); //get the value from the buttonsand make them lowercase
        let itemsToHide = document.querySelectorAll(`article:not(.${selectedFilter})`); //find the elements on the site
        let itemsToShow = document.querySelectorAll(`.${selectedFilter}`);

        if (selectedFilter == 'all') { //if the user choose all
        itemsToHide = [];
        itemsToShow = document.querySelectorAll(`article`);
        }
        itemsToHide.forEach(el => { //if the user choose one, then hide everything else
            el.classList.add('hide');
            el.classList.remove('show');
        });
        itemsToShow.forEach(el => { //if the user choose one, then show it
            el.classList.remove('hide');
            el.classList.add('show'); 
        });
    });
});