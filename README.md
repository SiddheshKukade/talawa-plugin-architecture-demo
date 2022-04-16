# talawa-plugin-architecture-demo
Demo for the plugin architecture project 

# For Execution : 

## Open Terminal and run command 
```
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



