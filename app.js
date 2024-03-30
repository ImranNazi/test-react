const heading = React.createElement("h1", { id: "head" }, "React code!!"); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render is basically converting object ie, 'const heading' here in to an html tag and is putting over in the window browser .
console.log(heading + "j");
/* Creating a React Element:

React.createElement("h1", {}, "React code!!"): This line creates a React
 element representing an <h1> heading with the text content "React code!!".
  The React.createElement() function is used to create React elements. 
  It takes three arguments:
The type of element to create (in this case, "h1" for heading level 1).
An optional object representing the element's properties or attributes (in this case, 
    it's an empty object {}).
The content of the element (in this case, the text "React code!!").

Creating a Root Instance:
const root = ReactDOM.createRoot(document.getElementById("root")): This line creates a root
 instance using ReactDOM.createRoot(). It takes the DOM element with the id "root" as 
 its argument. The root instance serves as the entry point for rendering React elements 
 into the DOM.

Rendering the React Element:
root.render(heading): This line renders the heading 
React element into the root container. 
The render() method of the root instance is used to render React elements. 
In this case,
 the heading element (representing an <h1> heading with the text "React code!!")
  will be rendered inside the <div> element with the id "root".
So, when this code runs, it creates a React element representing an 
<h1> heading with the text "React code!!", then renders this element into the DOM,
 specifically inside the <div> element with the id "root".
  As a result, you'll see the text "React code!!" displayed as a heading on the webpage
   wherever the <div> with the id "root" is located.



Rendering in React means taking your 
components (like buttons, text, etc.) and displaying them on the screen. 
It's like showing a picture you've drawn on a piece of paper to others. 
React efficiently updates only the parts of the screen that need to change based on 
updates to your data 
or application state, making your web app dynamic and responsive.
*/
