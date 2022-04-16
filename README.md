#### `Note : Current Code is for demo purpose only it is not optimized and naming conventions are not follwed due to some time contraints. The Code will be improved as we will move forward. currently the code just describes the basic concept of plugin architecture in react`
# talawa-plugin-architecture-demo
Demo for the [plugin architecture project](https://palisadoesfoundation.github.io/talawa-docs/docs/internships/internship-ideas/#admin-web-portal-plugin-architecture)

# For Executing the Demo  : 
### Clone the project in your machine
## Open Terminal and run command 
```
cd talawa-plugin-architecture-demo/
npm i 
nodemon app.js
```
#### Output :
![image](https://user-images.githubusercontent.com/65951872/163688812-997ea4ac-5dc7-4114-894c-56c4aec97de6.png)

## Open 2nd terminal (Keep the 1st Running ) and run  following sampleCode :  
``` 
bash plugin.sh https://github.com/SiddheshKukade/sample-api.git thirdFunction third.js sampleclear
```
### Arguments Explained
1. $1 = github url to fetch the plugin, In this case ( `https://github.com/SiddheshKukade/sample-api.git`) 
2. $2 = base function name of the plugin, In this case ( `thirdFunction`)
3. $3 = fileName of the plugin to fetch, In this case ( `third.js`)
4. $4 = URL on which the plugin Should respond onto , In this case (`sampleClear`)

### Running this command will generate a new directory named as plugins in codebase and will attach the plugin code from the provided github URL 
 ![image](https://user-images.githubusercontent.com/65951872/163688365-9202ee40-ea3e-4921-a0c6-107e9cf097d0.png)
 
## After That you can observe that the some code is automatically generated in app.js file 
 ![image](https://user-images.githubusercontent.com/65951872/163688617-143fd639-5d20-413c-9538-270f288119c6.png)

## And a plugin folder is generated with the follwing file containing some code :
![image](https://user-images.githubusercontent.com/65951872/163688735-5bbe5346-f8fa-4eec-8f69-669ccd4499ec.png)

## Testing the URL by going to provided URL which is `sampleClear` in our example
![image](https://user-images.githubusercontent.com/65951872/163688892-b2880ae8-2d89-4d9f-9326-c3ce48ff01df.png)


# All of this plugin workflow is made possible  by  plugin.sh file : 
```
#!/bin/bash
# 1 - github url 2- export name /functionName 3- filename 4-url to respond
echo "Adding " $1 " to plugins"
# Added the Repository in my project
git  submodule add $1 plugins/$3 
# echo "exports."$2"= require('./external/"$3".js');" >> external/index.js
# Adding the file to app.js
sed -i "4 i   const "$2" = require('./plugins/"$3"/"$3"')" app.js
# Assigning the URL to  app.js
sed -i "15 i  app.get('/"$4"', (req, res ,next)=>"$2"(req, res, next) );" app.js
```
