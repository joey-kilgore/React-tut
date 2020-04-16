# Functional (Greet.js) vs Class (Welcome.js)  
Funcs  
 - use func components when possible
 - absense of 'this' keyword
 - you can optionally use hooks but otherwise normally functions has no state

Class
 - maintain state
 - complex UI logic
 - provide lifecycle hooks


# JSX  
JavaScript XML  
JSX tagsx have a tag name, attributes, and children  
write XML-like code for elements and components  
not a necessity to write React  
makes your react code simpler and elegant  
transpiled to JS  

# props vs state  
props
- get passed to the component  
- props are immutable
- use props in functional components and this.props in class components

state    
- state managed within component
- state can be changed  
- useState Hook in functional components and this.state in class components  
- note that setState is asyncronous
