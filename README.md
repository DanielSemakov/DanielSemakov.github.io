# DanielSemakov.github.io

A website to store my personal info, the ITIS 3135 course page, and the Mint Hill Chess Club page. The chess
club page advertises the club to newcomers, displays the event times, stores pertinent information for current 
attendees (such as a photo gallery), and allows users to contact the club owner.

## How It's Made:
Tech used: HTML/CSS, JavaScript, p5.js, Python, FastAPI, Uvicorn, SQLAlchemy, PyMySQL

I have been working on the front-end since the project started in August 2025. I am currently using
Python, FastAPI, Uvicorn, SQLAlchemy, and PyMySQL to create a back-end for the Chess Club page.
The back-end will allow users to securely create an account and write comments under events.

## How to access the website:

Personal Site: https://danielsemakov.github.io/front-end/ <br>
ITIS 3135 Course Site: https://danielsemakov.github.io/front-end/itis3135/ <br>
Mint Hill Chess Club Site: https://danielsemakov.github.io/front-end/itis3135/project/index.html

## Lessons Learned

This website showcases my progression in working with HTML, CSS, and JavaScript. The personal site displays 
my first efforts in using HTML and CSS to create a basic, presentable webpage. In my ITIS 3135 and Chess Club 
websites, I expand on this knowledge to create more fleshed-out websites that have multiple pages
and allowed for dynamic interaction using JavaScript.

One of the painful lessons I learned was how to use a single style.css doc to 
format the entire website in a visually appealing way. I learned that, rather than
styling one page at a time, I should focus on making my style.css doc internally
consistent. From that consistency, a well-structured and cohesive website would emerge. One way
I achieved internal consistency was by using the same properties for text-based elements,
such as font size, color, and line height. I also learned to watch out for browsers'
default property values, which can sneakily mess with one's styling. I overrode these
default values in the html, body, and main selectors.

I also learned how to use JavaScript to create an interactive photo gallery, data
validation for a contact form, and a countdown timer for chess club events.
Furthermore, I used the p5.js framework to create a Canvas with which
users can draw in different colors or clear the canvas. 

One issue I overcame was learning how to efficiently
change the paint brush color when any of the color buttons was pressed. I created an 
array containing all the buttons, iterated through the array, and called addEventListener().
Then I passed an event object and changed the paint brush color based on the name
of the pressed button. For the photo gallery, I grappled with how to zoom in on a picture when the user clicks
on it. I solved the issue by creating an empty &lt;div&gt; in HTML
and using JavaScript to nest the clicked-on image inside the &lt;div&gt;.


