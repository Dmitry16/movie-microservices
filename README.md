Frontend.

I used this (https://github.com/flexdinesh/react-redux-boilerplate) boilerplate because it seemed to me a rather good setup and it has enough stars at github to be considered as well. It uses React v16.4 which has a lot of great features such as the fiber under the hood (async rendering of the DOM), PureComponent, better ref and context apis, better error handling with ErrorBoundary, Fragments, Portals etc. It uses react-router v4.3 which has the component api design. Also other popular libraries from the react ecosystem which permit better development and testing within the best practices such as immutable, redux-saga, reselect, lodash, etc. Besides of that I also like the feature-based project structure and TDD approach as well.

The High Level Design overview: the project has feature-based structure, redux for the state management of the app and react-router for routing. Components are devided separating concerns into 2 categories. The containers are concerned with providing the data flow and making things to work, and the components concerned with presentation. External Api calls are performed from redux-saga which design permits better testing and managing of side effects. 
Babel is used as a transpiler in order to use all features of ES6. Webpack is used as a modules, plugins and loaders bundler. Npm as package manager and task runner.
The feature-based approach and redux abstracted data store permits better reusability of the components due to loose coupling design. 

Backend.

I used express-generator boilerplate.
Defining the interface for working with external api I made use of ES6 classes, factory and dependency injection (injecting axios) patterns in order to get the logic abstracted from the http client and be able to better test side effects.