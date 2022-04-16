#!/bin/bash
# 1 - github url 2- export name /functionName 3- filename 4-url to respond
echo "Adding " $1 " to plugins"
# Added the Repository in my project
git  submodule add $1 plugins/$3 
# echo "exports."$2"= require('./external/"$3".js');" >> external/index.js
# Adding the file to app.js
sed -i "4 i   const "$2" = require('./plugins/"$3"/"$3"')" app.js
# Assigning the URL to  app.js
sed -i "9 i  app.get('/"$4"', (req, res ,next)=>"$2"(req, res, next) );" app.js
