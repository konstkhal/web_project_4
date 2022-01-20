# Project 4: Around The U.S.

### Overview
* [Link to deployed project 4] (https://konstkhal.github.io/web_project_4/)

### Technology and tools used4

* [commitlint.io:] (https://commitlint.io/)
* [emoji as favicon] (https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)
* [I had fun with vanilla JavaScript!] (http://vanilla-js.com/ Vanilla JS)

#### TODO
* Header section for all @media queries
* Thematic break -//-
* Fonts / readability
* bugFix: Please note that different buttons should have different opacity values on hover, please check the design.
* bugFix: On desktop: "add" button has incorrect width.
* bugFix: incorrect margin between profile and elements
* Some git queue passed

← Start of left uncompleted
* Remove excessive commentaries from header block css
* Some git queue approching
* Make header for mobile (size of the logo image)
* Add correct image to the meta property og:image in the head part o a project page
* [Export images directly from Figma — Don't forget to optimize them → here] (https://tinypng.com/), so project will loads faster.
* [Make a page like in Figma Brief [Link to the project in Figma] (https://www.figma.com/file/SurN1jaeEQIhuZEDMhmWWf/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1) 
* Correct the meta property og:url in the head part of a project page
* [Arrange Readme.md instruction - link:] (https://practicum.yandex.com/trainer/web-practicum100/lesson/90beaee1-02f2-4eef-81c7-bc8fd31cbea5)
* [Deploy Project to GitHub Pages - instruction link:] (https://practicum.yandex.com/trainer/web-practicum100/lesson/6ca44095-4549-4a7a-9fc7-29d75ddd010b)

← End of left uncompleted

← I`m here
####Can be improved:
* You can use auto-fit and minmax keywords for Grid in cards section, to implement the wrapping and more "responsive" design, where the width of the cards will adapt to the container width. More about auto-fit: https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
* Almost all (except for the submit button) buttons do not have an accessible name. When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. Use aria-label attribute to give names. Learn more: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

#### Git Workflow used
##### Step-by-Step Instructions on Working with Branches Like a Professional
1. Merge all the code from main into develop before starting the new stage of development.
2. Create a feature branch from develop and name it like this: feature/feature-name.
3. Develop the new feature in the feature/feature-name branch.
4. Once it's finished, merge the code from feature/feature-name into develop.
5. Delete the feature/feature-name branch.
6. If you need to develop another feature, return to step 2.
7. Test and debug all the new features in the develop branch, and then merge them into main.
8. Send your project for review.
9. Once you get the reviewer's feedback, create the hotfix branch for fixing any errors found. Name the branch like this: hotfix/bug-name.
10. Once you're done with hotfixes, merge the code from hotfix/bug-name into main.
11. Delete the hotfix/bug-name branch.
12. If the reviewer returns the project with some more comments, return to step 9.
