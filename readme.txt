Updates/Objectives/Notes for Akkadian website
12th October 
-------Landing Page----------
#Change the "contact us" button text to "Help" - objective completed;
#Navigation links should be at medium gray at default and white on hover - objective complete;
#Change text colors to rgb(214, 211, 211) to match background; -objective complete;
#change tab items boxes color from white to #eee; - objective complete
#change all font-colors on landing page to reflect background color - objective completed;
#change the background and font-color of the about us read more button; - objective complete;
#add a banner section below the projects section; --objective completed;
#create a reviews section -below the stats section; - objective in progress;
--There is script conflict between the projects slider and the new testimonials slider;
--Therefore, create the second slider in a different directory and merge;
/buildingprojects/feedback/index.html
#reduce the border-radius of buttons; -- objective complete;
#Add working file paths to footer links; - Objective completed;
#Add external pages - 
#add video as background element in the header;
 --------------
 31/october/2022
 --create media query for phone  - display sizes less than 600px;
 --landing page 
 --phone media query complete;
 --tablet - 
 --2-November-2022
 --still wotking on media queries;
 //the landing page has 5 media queries
 --@max-width:600px,  
 @min-width:600px, 
 @min-width:768px, 
 @min-width: 992px, - 
 @min-width:1200px - my laptop screen - complete

//--3-11-2022
--The above media queries will be complex to figure out while using this site;
--Therefore - Try them first with smaller sites and then scale on to this;

--For now, just use the media queries you are comfortable with, that is phone, tablet and laptop;

//7-Nov-2022
//we need to have this site up and running by end of today;
 //9 November
 //show the navbar as a side panel in mobile display;
//Website hosted on github pages - 
--a bug - the page loads and disappears
--the same bug appears on xampp apache server;
-----bug 001
---the script.js file is the problem;
----Transient solution
--remove script file
---permanent solution
------Procudure -problem solving - debugging
-the script.js file has two functions
a. openTab for tab sections
b. showSlides for carousel;
--either of these is the problem;
--strategy
-remove either at each time
--The openTab function is the problem
--what exactly in openTab(), or why?
--Note: The faq script has tab function too, but it works just fine;
--Thus - there must be something in the script file openTab function that is causing conflict with the server, 
--my thought is  - #a conflict of the openTab function with something in the server;
--why - the script runs just fine in browser, so the script is fine.
--so the question is: 
--what in the openTab function is causing conflict witch whatever it is, it is conflicting with;

---solution
--change the anchor tags to p elements
---my theory
--the anchor tags hrefs were empty, and every time the function openTab was run, they reloaded back to the parent dir of the server;
--current status:
--all pages working as expected;
----Another bug 002;
--clicking the buttons to show the next image in the carousel reloads the page back to parent directory, when the anchor tag href is empty;
----solution 002a;
--using ids that target the link;
----result;
--onclick, there is an unitended responsive effect;
--p elements have solved the issue;


----Iphone 6 responsive layout - incorrect;
--


 ------------------Help center - chat platform --------------
 --media query; --objective completed;


------------FAQ ---------------------
--media query
--the navigation bar  - get website btn has an issue - start bysolving this;






-----------My blog-----------
#Increase height of the right side bar and remove scroll effect; - show all items; - objective completed;
#Increase the height of the collapsed sidenavpanel; objective completed;

---------colorSchemes---------------
#create a black,light, color scheme - see image akkad-intro-3.jpg; --objective completed;
#Color schemes added into the root declaration in styles.css; - objective completed;

----------Log in page ---------------
#Use the created color scheme for the sign in page; --objective completed;
#inherit color of the akkadian body-head and change that of text; -objective complete
#Increase font-size, weight and change inherit its color from the parent container; --objective complete
#change "contact us" text to "help";  - Objective Completed
#change the "No account?" link to a span element; - objective complete; 
#reduce the border-radius of buttons; --objective complete;
#change icons in sign in container; - Objective completed;

27-october - 2022
#Our products page - cloned from firefox
-Inherit navigation bar and footer from blog.html;
-Naviagtion breadcrumbs - o.c
-Product title - O.c
-Search form - o.c
-products wrapper - objective in progress;

31/october/2022
Our products:
#-the scroll products container uses white-space: nowrap; and overflow: auto or scroll; for the boxes to scroll as needed;
-However, we had to use line breaks, <br> since text overflows to the next container;



#services page - created - using products template;

# January 7th 2023
- We've made tremendous progress so far

--change svg ids for service & products pages


## January 10 2023
- 404 page 
--problem
--- @media 996px, sign in button has a small width and is separated from the theme button by far

## the navigation bar is inherited from home
--while at home, the navigation works just fine
--log-bx width is 20px;

--possible causes
--ihnfi

causes
---I had set a class that added the bthemebtn to the theme btn on large display

--solution
--remove class


## Bug NO_X
--The rate at which the next/previous btn for templates is clicked sets the pace at which the carousel plays

//possible cause
--onclick, the number of s is changed - current no of s = 5000s 
--currently unknown

//possible solution
--unknown

## design issue NO_X
--the services boxes svgs are mal aligned


//possible cause
--the mal alignment is caused by varying sizes of text

//possible solution
--use div boxes to house each cat of elements

//actual solution




