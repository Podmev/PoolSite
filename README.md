# PoolSite
Site for Aqua Fitness

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
