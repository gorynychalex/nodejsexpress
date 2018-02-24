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
# node

You can try also Node Version Manager
https://github.com/creationix/nvm
nvm
# nvm ls
# nvm install lts/carbon

1. Install express.js
expressjs.com
# npm install express --save

2. Create and run 'server.js'
# vi server.js
# node server.js

3. Insert add json-structure and routers 'server.js'

4. Install mongodb
4.1. npm install
4.2. include mongodb
4.3. insert after 1.4 
4.4. edit 3.3 app.post and define db.insert
4.5. edit 2.2
4.6. edit 2.3
4.6.1. include ObjectID after 4.1
4.6.2. insert findOne({ _id: ObjectID(req.params.id)}
4.7. insert updateOne()
