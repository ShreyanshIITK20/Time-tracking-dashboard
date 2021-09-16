# Frontend Mentor - Time tracking dashboard solution

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects and collaborate with greatest developers around the world.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size (solution is created for best viewing on Desktop size-1440px and Mobile size-375px)
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Javascript functionality to extract JSON data](https://raw.githubusercontent.com/ShreyanshIITK20/Time-tracking-dashboard/main/screenshots/JS.png?token=ATKRF43GUQBQIS6GJCMQCUTBJRHQQ)
![Custom CSS](https://raw.githubusercontent.com/ShreyanshIITK20/Time-tracking-dashboard/main/screenshots/CSS.png?token=ATKRF4Z6J7DE37B2RZVHKXTBJRHNC)
![HTML structure](https://raw.githubusercontent.com/ShreyanshIITK20/Time-tracking-dashboard/main/screenshots/HTML.png?token=ATKRF4Z4F24CJH5XKAGBQ7LBJRHQA)


### Links

- Solution URL: [Git repo](https://github.com/ShreyanshIITK20/Time-tracking-dashboard)
- Live Site URL: [Time tracking dashboard](https://shreyanshiitk20.github.io/Time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Javascript ES6
- Desktop-first workflow


### What I learned

This project was mainly based on the use of CSS grid boxes, a feature I never used before to handle layouts. For such purposes, I always chose Bootstrap's grid system and its cards, but I took this as a challenge to work entirely with CSS and don't depend on Bootstrap's classes. Since this was my first work with grid systems, it was kinda hard to adapt to its working and syntax initially. Secondly, I took the optional challenge to use data.json as my primary data file wherein I struggled a lot to fetch the contents and use them dynamically in my HTML file. For this, I used fetch() and forEach looping, alongside with restructured data file.

```html
<div class="wrapper">
```
```css
.wrapper{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1em;
    /* grid-auto-rows: minmax(250px,auto); */
    color: white;
}
.child{
    display: grid;
    grid-template-columns: 1fr;
}
```
```js
containers.forEach(function(container){
        var containerClass = '.'+container.title
        $(containerClass+" .content_value").html(container['timeframes'][clickedState]['current']+" hrs")
        $(containerClass+" .content_prev").html(prevName + container['timeframes'][clickedState]['previous']+" hrs")
      })
```


### Continued development

While working on this project I used raw HTML and CSS to develop the frontend, but later realised the need of using ReactJS's components which could have made everything so much smoother and simpler since most of the code I wrote in HTML was redundant with minor changes. I will try to work on similar projects using React to increase the efficiency of my code.

### Useful resources

- [MDN docs: Using Fetch - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - I struggled a bit to work with JSON data in my JS file and this document helped a lot to sort it out.
- [w3schools CSS grid layours](https://www.w3schools.com/css/css_grid.asp) - It helped a lot to understand different properties than can be used along with grid layouts in CSS


## Author

- [Frontendmentor profile](https://www.frontendmentor.io/profile/ShreyanshIITK20)
- [Instagram profile](https://www.instagram.com/_shreyanshagarwal_/)
- [LinkedIn profile](https://www.linkedin.com/in/shreyansh-agarwal-9a0482131/)
- [Twitter account](https://twitter.com/_Shreyansh13_)
