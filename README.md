# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Documentation

Here I'll briefly explain process behind building the page way it was built.  

### Project structure
Project is divied into sever directories:

- __assets__ _self-explanatory_
- components
- constants
- __hooks__ _self-explanatory_
- modules
- pages
- __styles__ _self-explanatory_
- __utils__ _self-explanatory_

#### Components

This folder contains components (obviously). Since I am using CSS modules, each component consists of two files: the code and the styling.

Components are NOT used by the page directly but are used by the modules.

#### Constants

This folder contains various constant definitions. It includes several type definitions, interfaces, and few values. It would contain action definitions if I used Redux which I didn't.

#### Modules

This folder contains Modules. Modules are composed of Components and Pages are composed of Modules. In this hierarchy pages **do not** include components directly. 

Modules compose parts of the page, such as heading, footing, content containers, etc. They are made of components and can be reused on several pages. Components can be reused in several modules.

I find this approach to be cleaner in the long run for two reasons:

1. I know where to look for the problems. If there is a problem with the page then it's a faulty module. If there is a problem within a page section it's a faulty component.

2. There is a difference between simple components and components made of components. This makes code organization and maintenance easier.

If modules repeat in similar composition across pages they can be used as layout in the Layouts folder (I didn't need it in this case).

#### Pages / Views

Pages / Views go here. In this app, however, I used the same page for multiple routes. Reason being that the page is the same across all routes but shows different content depending on the route. Using multiple pages would lead to code duplication.

Since only content changes, it makes more sense to manage it within the module, not the page.

### Design decisions

I opted out of Redux, it seems like overkill in this case. 

The Context seems to be easier. I also didn't use *useReducer* even though I was tempted to.

I was unsure how to handle CSS constants since there were many of them (the design was good) so I was inconsistent with them. If the project had more than two views, each view would get its file of SCSS constants and they would be included on a per-file basis.

An alternative way of handling the navigation would be to use the entire page as a Layout. I decided I don't wanna go that route for this project. If there were more pages with different compositions then this would be a better approach.

#### Reflection

I'm not completely happy with my CSS code. Component code is okay, but module code is messy in few places. I should have used classes more often and maybe have broken down the modules further?  
I tried changing it a bit and it seems to be maintainable but if the application grew it could be a problem.

It was my first Typescript React App. I always use it on the backend but it was interesting to see how it works with React. It helped a lot with Axios.

All in all, it was a satisfying project.