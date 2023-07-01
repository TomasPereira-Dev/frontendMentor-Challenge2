# Frontend Mentor - Newsletter sign-up form with success message solution

Hey what's up?

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

(free) junior challenge 1/27

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
This challenge consist in a simple form that once it gets validated throws a popup/modal to the user screen, it's a good project to learn about form validation and DOM manipulation with vanilla JS.

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message in amodal with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![challenge2-screenshot](https://github.com/TomasPereira-Dev/frontendMentor-Challenge2/assets/81960258/79113570-bb0c-4ba2-9b9e-cbca374f47a5)


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/newsletter-signup-using-vanilla-js-8Z3c6ejb83)
- Live Site URL: [Github Pages](https://tomaspereira-dev.github.io/frontendMentor-Challenge2/)

## My process

The first thing I do when it comes to do clones of images is looking at the image with attention and then starting to write the HTML, then I started with the CSS, the form component was pretty much 1 container with flex-direction: column; and a picture, there is a little bit of margin to the left of the form and a gap between it and the img.

most of the things i described until now are like a rutine for alot of projects, there is nothing fancy or that needs a ton of explaining.

After giving the title some gap between the text below I started working with the list, here I learned that you can use svgs as custom markers for the list using the ::marker pseudoelement, it's pretty cool!, I don't know too much about pseudoelements and selectors, so it was a suprise to me haha.

Now comes the form part, the input uses the :focus selector, when its clicked it will have a black border on it, and the :invalid selector, this is very handy to make it glow when the email doesn't match the Regex made in the JS code, but there is a problem here, if you load the page for the first time the :invalid selector will take the input as invalid, even before you write something, so you have to add also the :not selector, if you mix it with the :invalid and the selector that is not working currently, like input:invalid:not(:focus):not(placeholder-shown), you are telling the css that don't do nothing unless the focus is working and the placeholder not being shown shown in the input.
The submit button has a little transition made with :hover, but honestly I'm not very satisfied with it.

The mobile version of this component needed that the flex-direction changed to column-reverse and that the img changed to a smaller version than the original, so for this I used the picture element, it's the first time that i do something like this, so it's something new.

The design of the modal was pretty simple so I will skip this part.
I need to carify that this wasn't the best way to make a modal, what I should have done was create it with JS manipulating the DOM and remove it from the document when it's not in use, I will do it in a future solution for this challenge, instead of that I removed the modal and component using display: none; when clicking the buttons.

After all that I started with the JS, using the .toggle method you can add or remove classes from a element, if the class open-modal doesn't exist, the method will add it, return true and the modal will be shown, when the modal button is clicked .toggle is called again, if when the method is called the class already existed, it will remove it and return false, when this happens the modal will close and show the form component.

this is pretty much it, it's not too hard, probably the hardest thing the challenge could had was the regex, I used a generator for that, writing regular expressions is not one of my strenghts :P.

It took me 9:30 hours in total (19 pomodoros with the pomodoro technique).

### Built with

-Vanilla JS
-Flexbox

### What I learned

I learned mostly about pseudoelements and selectors and how to work with responsive images, I still don't get how to get srcset to work, its a pain honestly.

## Author

- Portfolio - [Tomas Pereira](https://tomaspereira-dev.github.io/Portfolio/)
- Frontend Mentor - [@TomasPereira-Dev](https://www.frontendmentor.io/profile/TomasPereira-Dev)
- Twitter - [@TomasPereira_JS](https://www.twitter.com/TomasPereira_JS)

