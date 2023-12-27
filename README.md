# PoolSite
Site for RS Aqua Fitness

[Dashboard](https://trello.com/b/syyDKl42/pool-site)

[Pool site](https://rsaquafitness.com.br)

[Temporary pool site](https://podmev.github.io/poolsite)

# Website folder structure

![Website folder structure](https://github.com/Podmev/PoolSite/blob/master/images/WebsiteFolderStructure.png?raw=true)

Note: except for the Project (Root) Folder all files and folders should be (a) lower case, (b) have no spaces in the name, (c) start with a letter or number and not a special character.

**Project (Root) Folder**: This is the main folder for the project and contains ALL other files and folders. On the web it’s called the root folder. It’s not shown in the image above; consider it the grey box around everything.

**HTML files**: these are all the files that end with .html. These should be directly in the Project/Root folder and not in any sub folders. Doing that makes it easy to see all of your files and makes all of the paths to resources (images, css files) the same. The only required file is index.html but your sites will all have more .html files.

**CSS Folder**: all .css files go here. In this class we will not write css either in style elements on the web page or in attributes of elements. Instead all CSS will go in external stylesheets and those will be put in the css folder. You will need to have at least one stylesheet called either main.css or style.css. I will generally use main, but some of my tutorials and others use style.css so it’s OK if you use that. But don’t use both. Other CSS files should have names referring to what they are styling.

**Images Folder**: all images go here (.jpg, .png, .gif, etc). You can name the folder images or img.

**JavaScript Folder**: all JavaScript files go here. They end in .js. You can name the folder javascript or js.

## [More details here](https://webexpe.com/blog/folder-structure-for-web-development/)

# Git

### Git flow
1. Main branch is master, it should be stable
2. Developing should be in separate branches for small features
3. After finishing feature, branch should be merged to master branch
4. For next feature should be used new branch, created from actual master
5. It is easier if separate developers work on different features in different branches

### How to use git in main branch:
1. git pull, before changes - it needed to get all updates
2. git add . , to add all
3. git commit -m "*commit message*"
4. git push

### How to develop in own branch:
1. git checkout -b "*branch-name*"
2. usual commits and push to branch
3. git push –set-upstream origin branchName*, on first push
4. when feature of branch is finished it should be merged to main branch

### How to merge branch to master
1. git checkout *branch*
2. git merge master
3. maybe fix merge conflicts and commit and push them  (in branch)
4. git checkout master
5. git merge *branch*

### sites for stock images
1. https://create.vista.com/ru/photos/water-aerobics/
2. https://www.pexels.com/pt-br/
3. https://unsplash.com/pt-br

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

