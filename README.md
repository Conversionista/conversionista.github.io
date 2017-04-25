# Conversionista Apps

## Installation
1. Clone repo `git clone git@github.com:Conversionista/conversionista.github.io.git`
2. Enter folder and check out the source branch `cd conversionista.github.io && git checkout source`
3. Run `npm install && bower install`

## Develop
1. Run `gulp serve`to get live reload etc.

## Update
1. Update/make changes
	- to add a new app change/edit `app/scripts/main.js`
2. Add & commit changes
3. Run `rm -rf .tmp && rm -rf .publish && gulp build && gulp deploy`
