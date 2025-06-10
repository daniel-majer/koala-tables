# React + Vite

Hey, I created 2 versions of design patterns. Please check both branches (main, V2). Difference is that V2 use Compound design pattern - so all table logic is encapsulated in one component and less files in folder structure.

Tables are reusable, flexible and supported arbitrary number of child types, with more generic rendering.

Things to do if more time available:
- exist more advanced solutions for tables like Tanstack Tables etc., so consider use it
- when fetch data, consider add loading spinner, tanstack query for handling remote state etc.
- fix issues with duplicate ID's, this may cause unexpected component behavior
- deeply nested children are currently supported, but rendering performance might degrade if the data tree becomes too large, so definitively consider performance optimization
- redesign and add responsivity
- build with TypeScript for type safety
- if app will be bigger, consider advanced state management (Redux, Zustand)


I spent few hours of building it, but no more than one day :)
