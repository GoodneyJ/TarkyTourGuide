# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## ABOUT

This is a project I've been working on for a little while now in between the others. It's app that allows a search through a database I made with MongoDB through Expressjs, the front-end framework I used was React. So far there's only 3 tabs to route through, but I plan on adding a few more.

Right now, you're able to:

  Search through ammos in the database and recieve basic information such as Damage, Penetration, Icons, Unlock & Barter info. There's also a bunch of buttons that render a modal that shows ammos by type such as 7.62x39, 5.45x39, 5.56x45, etc...
  
  Search through the keys in the database just like the ammos and get info like Loot Spawn info, Where the key goes on the map, durability of the key(if it has durability) and the icons. Just like the ammo buttons, there are also buttons that render a modal that shows keys by map, such as Customs, Interchange, Reserve, etc...
  
  On the third tab you're able to click by map and see my semi-functional(hopefully wholly functional soon...) implementation of React-LeafletJS. I'm still learning how to use the library, but for now my largest roadblock for this is being able to create or obtain clean(ones without markers on the image) hi res maps that I'm able to use.
  
 ## PLANNED
 
  - A LOT of clean up, when I started I had some bad habits that were noticeable enough by the time I came back fresh from about a months break on the project.(Was struggling with how I wanted the design, somewhat satisfied with it now)
  
  - Connecting to another tarky-coders API that's created by scanning every item in the game every 1.5 hours to provide realistic and current in-game price data about the ammos/keys as the price fluctuates quickly and often
  
  - Adding connection to the Tarkov Reddit, Twitter, Twitch Game Directory, etc.. to the homepage
  
  - Adding another tab for modding guns and displaying stats based on attachments used for gun builds on-the-go.
    i.e => $TotalPrice, $AvgPricePerPart, TotalErgonomics, TotalHorizonalRecoil, TotalVerticalRecoil, GunWeight, etc..
    There's a couple other sites that are out that do this currently and I think it'd be cool to see if I can do it myself, doesn't seem too hard, only time consuming as thats a lot of data to add to the DB.
  
  - Adding a new tab for tasks in the game, hopefully in the same aspect as Ammos/Keys, search for the title of the task or click on one of the buttons to render a modal of a list of tasks sorted by Vendor
  
  - Adding tab for Hideout section of the game same as above, search for the name of the section you're looking to upgrade, or click a button that sorts by section and displays required items needed for each Lvl.
  
  - Probably a tab for level based guides made by the community such as links to Pestilys channel, Antons Headset comparisons, VoxE's armor damage vid, etc.. not sure about this one. Basic idea is guides to follow for newer/first wipe players based on level i.e 1-10 -> do w/e..., 10-20 -> ..., 30-50 -> ..., 50+...
  
  - Keep updated by adding stuff as the development for the game progresses
  - Finishing touches on design, it's better than before but it definitely needs more
  - Deploy it For Hosting
  
  ## STUFF I USED
  
    Just gonna list any resources I used in making this in case someone is curious, will add more as I use more.
  
    MongoDB, ExpressJS, React & Node. Big enough names I shouldn't have to explain them.
    
    
    React Icons: https://react-icons.github.io/react-icons/
    A library of icons (FontAwesome, GameIcons, DevIcons, and a whole LOT more) that allows you to implement only the icons you want into your project rather than downloading a whole package
    
    React-LeafletJS: https://react-leaflet.js.org/
    A javascript library that lets you use Leaflet JS in react
    
    Axios: https://github.com/axios/axios
    An http client for node Js, kinda like fetch
    
    MongooseJS: https://mongoosejs.com/
    MongoDB object modeling for nodejs
    
    Figma: https://www.figma.com/
    For the initial design/mockups
    
    Gimp: https://www.gimp.org/
    Free to use photoediting software, from what I can tell its about as functional as PS, but way cheaper than PS. Only thing that gets in the way is the UI, but google.
    
    The "Bender": https://www.1001fonts.com/bender-font.html
    font thats used in the game, can be found on a plethera of sites, but I think I used the one above. Linked in-case anyone like myself would want to use it for a similar/related project.
    
    
   ## EXTRAS
   
   <img src="https://media2.giphy.com/media/3UZkENmUmGHdZ9OJt2/giphy.gif" width="500" >
   
   <img src="https://media3.giphy.com/media/vkeXPL1W9tOJNcLxTE/giphy.gif" width="500">
    
    
