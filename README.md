# REACT ENTERPRISE FRAMEWORK [WIP]

## MOTIVATION

We built plenty of React apps in the past. After building a few, we identified the common requirements & pitfalls of most
of the apps. Create-React app is a great starter project, However for Long Term enterprise grade apps we've to structure 
the codebase well to make it maintainable and performant. Here we are attempting to create a starter project which packs
all the bells and whistles we really need.


## FEATURES

* **New React APIs** React is even better after the intro of HOOKS. This f/w will make use of most of the new APIs including Lazy/Suspense, hooks etc to leverage maximum power of React.
* **Clean Code:** Create React app provides a structured project for you, But for larger enterprise grade apps, probably we need better directory structure.
* **Presentational & Container Based Architecture:** Maximum Reusability in mind, much cleaner code with better de-coupling of business logics from presentational components
* **Global state management** Recoil is :hearts:

* **Improved http client** Extending the native Fetch API to deal with common things like session management/token management/Request Cancellation (Most of you seen this the side effect while navigating from page-to-page).
* **Caching Mechanisms** TBD
* **Multi Language Handling mechanisms** Translations and configuration samples included.
* **Animation Libraries & High level wrappers** React-animate & React spring in consideration [TBD]

* **Global Event listeners** Listeners for events like route change, Resize Window, Scroll Window etc
* **Routing** Routes definition, samples, Lazy loaded components based on route.
* **Lazy Loading with robust fallback wrappers** Lazy loaded components, Fallback Helpers, Preload ghost images.
* **Path Aliasing** No more looong file references
* **Environment specific helpers** prod.env, dev.env, pre-prod.env - configurations added in webpack

* **ESLint Ready** Cherry picked ESLint Rules to Improve the Code Quality
* **CSS Best Practices with SCSS Ready** Best practices to handle CSS is included (SUIT/JSS TBD)
* **Flag/Role Managment helpers**
* **PWA Optimisations**

## Installation

NOT READY

## Documentation

* **Directory Structure**

 - Components
    - Container

        Container Components are almost always the parents of Presentational Components. In a way, they serve as a intermediary between Presentational Components and the rest of the application. Will contain business logics. 
        Nomenclature: {:ComponentName}Container, eg:- MenuContainer.js
    - Presentational
    
        Full devoid of business logics, Pure components. Just Render what i got(props)! That is the whole idea.
        Nomenclature: {SensibleCommonName}, eg:- Button.js/ Table.js


## Examples

WIP

## Contributing
TBD


### License

react-enterprise-framework is [MIT licensed](./LICENSE).
