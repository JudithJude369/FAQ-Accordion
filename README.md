# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![faq-accordion](https://github.com/user-attachments/assets/7210e4c9-6cb3-42a3-8572-2fc078a3daff)

### Links

-  [Solution URL](https://github.com/JudithJude369/FAQ-Accordion)
-  [Live Site URL](https://judithjude369.github.io/FAQ-Accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned
This project really thought me alot, especially in the aspect of using vanilla javascript to build projects. Looping through nodelist with the foreach and replacing an existing image with javascript.


```css
.answers {
  display: none;
  max-height: 15rem;
  transition: max-height 0.3s ease-in-out;
}

```
```js
 if (!isOpen) {
      answer.classList.add("open");
      icon.src = "images/icon-minus.svg";
    }
```

### Continued development
I hope to build more with vanilla Javascript, and hopefully improve my javascript knowledge and responsive design with CSS.

## Author

- Frontend Mentor - [@JudithJude369](https://www.frontendmentor.io/profile/JudithJude369)
- Twitter - [@JudithJ08832378](https://x.com/JudithJ08832378)

## Acknowledgments
I would like to really acknowledge freecodecamp for making learning easy and resources accessible for everyone.
