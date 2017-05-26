The Psychometrics Centre
========================
Task to complete for front-end developer in the recruitment process. 

By pushing your changes here you retain all the rights to it, in other words we won't use  your design/code for any 
of our products without your knowledge.

If you have any technical questions - please use the issue tracker here.

Preparations
------------

1. Fork and clone this repository locally
2. Create a branch with your name or initials i.e. `jsmith`
 
Next, choose to complete **one** of the tasks below, pick one that better suits your expertise.
 
Task #1
-------
The objective here is to demonstrate the ability to design something that is good-looking, and writing valid and usable HTML5/CSS3 at the same time. This is a design-focused task, and this aspect is most important here. Any code handling front-end logic (i.e. JavaScript) won't be evaluated by us, if you'd like to demostrate this ability please do Task#2.

Requirements:
1. Design a static web page using HTML5, CSS3 (SASS suggested), UI library of choice, that:
 - shows one question (could be html with an image) and possible answers (could be html with an image), you could use the list provided below or invent own question
 - has ability to click an answer or skip the question (UI feature only, not logic)
 - has some sort of progress indicator (UI feature only)
 - allows to visually identify it with The Psychometrics Centre brand, creative take on the subject is encouraged
 - is mobile and ultra-wide friendly
 - has some sort of site-wide navigation component
 - has a footer with information we're required to put it in (please check our websites)
 - show us some typography too (can be separate subpage, for text lorem ipsum is ok)
2. Put your work in `tpc-frontend-task-static` module only, it's already in the repository.
3. Use NPM to manage 3rd party dependencies and to automate the process of creating output artifacts, if applicable.
4. Create a `README.md` and describe how to run it
5. Create a pull request with your changes to this repository

Evaluation criteria:
* **Aesthetics** - do a random sample of office mates say it's pleasing,
* **HTML5** - does it conform to the specs and chosen UI library best practices, is the markup used meaningful and 
necessary, can other human being understand and further work with it,
* **CSS** - does it conform to the specs, are the rules meaningful and necessary, can other human being understand 
and further work with it,
* **Output** - is there a set process to automatically generate it, does it load fast, are the resources minified, 
does it work on current version of mainstream browsers,
* **GIT** - is commit history meaningful, do the commits contain only source code and none of 3rd party dependencies, 
output artifacts or IDE-specific files. 

Example of questions:

      '<p>Is my hovercraft full of eels?</p>'
      '<p>I deserve special treatment from others</p>'
      '<p>I find it difficult to approach others</p>'
      '<p>I pay attention to details</p>'
      '<p>I find rabbits confusing</p>'
    
Possible answers:    
    
      ['Strongly agree', 'Agree', 'Neither agree nor disagree', 'Disagree', 'Strongly disagree']
      ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
      ['Yes', 'No']
      ['Not at all probable', 'Slightly probable', 'Moderately probable', 'Very probable', 'Completely probable']
      ['Very confusing', 'Not confusing', 'Prefer not to say']

Task #2
-------
The objective here is to demonstrate the ability to create front-end code and communicate with a backend using same tech stack that we use in our products. This is in addition to you showing your design/CSS3/HTML5 skills, it still needs to be pleasing.

There is a `tpc-frontend-task-service` module which is a standard ExpressJS app. When started, each request to 
`http://localhost:3000/questions/next`  serves random question as JSON. 

1. Similar to Task#1 in terms of design, but instead of static web page, the goal is to create an Angular app (version preferred >2.0, allowed >1.5) with SASS pre-processor and UI library of your choice, that:
 - connects to the backing service, reads and shows a question with possible answers
 - has ability to click an answer or skip the question
 - has some sort of working progress indicator
 - after 20 questions it shows a thank you page and logs `[question number, answer number]` pairs to the console
 - allows to visually identify it with The Psychometrics Centre brand, creative take on the subject is encouraged
 - is mobile and ultra-wide friendly
2. Put your work in `tpc-frontend-task-ng` module only (you need to create it).
3. You can use either NPM or NPM with `@angular/cli` to manage the process of generating output artifacts.
4. Create a `README.md` and describe how to run it
5. Create a pull request with your changes to this repository

Evaluation criteria:
* **Aesthetics** - do a random sample of office mates say it's pleasing,
* **Angular/JavaScript/Typescript** - does it follow Angular's code convention, how the code is organized, are the 
components meaningful and does the design allow to further develop the app, 
what happens if the backing service is not available.
* **HTML5** - does it conform to the specs and chosen UI library best practices, is the markup used meaningful and 
necessary, can other human being understand and further work with it,
* **CSS** - does it conform to the specs, are the rules meaningful and necessary, can other human being understand 
and further work with it,
* **Output artifact** - is there a set process to automatically generate it, does it load fast, are the resources minified, 
does it work on current version of mainstream browsers,
* **GIT** - is commit history meaningful, do the commits contain only source code and none of 3rd party dependencies, 
output artifacts or IDE-specific files.
