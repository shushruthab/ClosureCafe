### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React router is a library for client side routing. It is used to define routes in the application and the components that need to be rendered for those routes. 

- What is a single page application?
  An application that loads a single page and dynamically updates the page in response to user interactions. So no page reload is required. The advantage is a smoother and responsive user experience. 

- What are some differences between client side and server side routing?
  Client side routing:
    Routing logic is implemented on the client side using Javascript. This effectively means that when a user clicks on a link, the browser handles transition to the new route, updating the URL and rendering the appropriate page. A full reload is not required in this case. 
  
  Server side routing:
    Routing logic is implemented by the server. When a user clicks on a link, server receives a request and sends a response with the requested content. This requires a full page reload. 

- What are two ways of handling redirects with React Router? When would you use each?
  a. Use the ```useNavigate``` component: Redirect can be achieved in conjunction with useNavigate hook to redirect to a particular page. This is useful to navigate to a page as a response to a user interaction such as clicking a button. 

  b. Use the ```redirect``` component: The docs suggest using the ```redirect``` component in preference to ```useNavigate``` when responding to data or actions.  

- What are two different ways to handle page-not-found user experiences using React Router? 
  a. Use the ```Navigate``` component: React Router v6 has a ```Navigate``` component that has a replace attribute that can lead to user defined Not Found page if does not match any of the defined routes. 

  b. Use the ```useNavigate``` component: Redirect can be achieved in conjunction with useNavigate hook to render a 404 component defined by the user. 

- How do you grab URL parameters from within a component using React Router?
  URL parameters can be grabbed using the ```useParams``` hook which returns an object with the key value pairs of the URL parameters. 

- What is context in React? When would you use it?
  Context is a way to pass data through a component without the need for prop drilling. It is useful when an app requires sharing of values such as colors, fonts or theme info between components without have it to be passed down a tree of components.  

- Describe some differences between class-based components (or CBC) and function
  components (or FC) in React.
    a. Syntax: As the name suggests, CBC's use a class syntax and FC's use a function syntax

    b. State: CBC's have a state object that can be used to store data, FC's do not have state and must receive all data as props. 

    c. Lifecycle Methods: CBC's have lifecycle methods that are used to perform actions at specific points in a component's lifecycle. FC's do not have lifecycle methods.

    d. Performance: FC's are more performant as they do not have the overhead of a class and do not need to bind event handlers in the constructor.

- What are some of the problems that hooks were designed to solve?
    a. Usability: Class based components (or, CBC's) are difficult to reuse as they are tied to specific instance of a class. Hooks can be reused across multiple components making them easier to share logic between components.

    b. Complexity: CBC's are complex compared to function component's for the same outcome they set out to achieve. Hooks provide a way to use state and other features in function component's.

    c. Separation of concerns: In CBC's it can be difficult to separate the logic for handling state and side effects from rendering logic. Hooks help separate these concerns. 