# clock
Creating a Simple Digital Clock with Javascript and CSS
HTML

The HTML file is the backbone of the project and includes the basic structure of the webpage. 
It includes a head section where the title of the webpage and a link to the CSS file is included. 
The body of the HTML file contains a div element with an id of "muda" and a class of "masaa". 
This div element is where the current time will be displayed. The JavaScript file is also linked in the body of the HTML file.

CSS

The CSS file is used to style the webpage. It includes a class called "masaa" which is used to style the div element in the HTML file. 
This class sets the background color to red, the text color to aliceblue, and sets various padding and border-radius properties.

JavaScript

The JavaScript file contains the function showTime() which is used to display the current time in the "muda" div element in the HTML file. 
The function uses the Date() object to get the current hours, minutes, seconds, and milliseconds. 
These values are then concatenated to create a string that represents the current time. 
The function then uses the innerHTML and textContent properties to update the "muda" div element with the current time. 
The function is also set to run every 100 milliseconds using the setInterval() function.


Execution
To run this project, simply open the HTML file in a web browser. 
The current time will be displayed in the "muda" div element and will update every 100 milliseconds.
