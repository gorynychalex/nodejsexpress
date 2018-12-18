Youtube
Loft Blog
Кочергин
https://youtu.be/fHoKs66Z2qQ

API NodeJS

Basic App: Node.js Express.js

0. First of all we should 
Install node.js from nodejs.org
https://nodejs.org/en/download/
https://nodejs.org/en/download/package-manager/

>\# node

You can try also Node Version Manager
https://github.com/creationix/nvm
nvm

>\# nvm ls
>\# nvm install lts/carbon

1. Install express.js
expressjs.com
>\# npm install express --save

2. Create and run 'server.js'
>\# vi server.js
>\# node server.js

3. Insert add json-structure and routers 'server.js'

4. Install mongodb
 - 4.1. npm install
 - 4.2. include mongodb
 - 4.3. insert after 1.4 
 - 4.4. edit 3.3 app.post and define db.insert
 - 4.5. edit 2.2
 - 4.6. edit 2.3
 - 4.6.1. include ObjectID after 4.1
 - 4.6.2. insert findOne({ _id: ObjectID(req.params.id)}
 - 4.7. insert updateOne()

5. DB file
 - 5.1. Create db.js
 - 5.2. Add db = require('./db') as db.js
 - 5.3. var state in db.js
 - 5.4. MongoClient in db.js connect callback
 - 5.5. Erase 4.2 in server.js
 - 5.6. Modify 4.3 at server.js
 - 5.7. add exports.getState() at db.js
 - 5.8. replace db.collection in server.js to db.getState().collection
 - 5.9. Modify db.connect in server.js
   
6. Models and Controllers
 - 6.1. Create 'models' folder
 - 6.2. Create 'models/artists.js'
 - 6.3. include var db.js
 - 6.4. Add exports callback
 - 6.5. Create 'controllers' folder
 - 6.6. Create 'controllers/artists.js'
 - 6.7. import 'models/questions.js' to 'controllers/questions.js'
 - 6.8. exports all to controller.js that get models from 'models' 
 - 6.9. import questions controller to server.js
 - 6.10. remove 2.1 - Mock json structure
 - 6.11. modify 2.2. get all questions request
 - 6.12. modify 2.3. get question byId request
 - 6.13. exports findById from controllers
 - 6.14. import ObjectID to controllers
 - 6.15. exports findById from models
 - 6.16. import ObjectID
 - 6.17. exports create question 'models/questions.js'
 - 6.18. exports create question 'controllers/questions.js'
