## Documnetation

There you will find 2 folders `markdowneditorclient` and `mardkdownServer`

### The markdowneditorclient

This folder contains a react app that has all the visual part of the application you can run this app in the next way

```
    $ cd markdowneditorclient
    $ npm install
    $ npm start
```

This will open your browser with the address `localhost:3000` and will show you the front end app



### The mardkdownServer

This folder contains the api used in the application consist of and server bubild in nodejs and a mongodb database runing in a docker container for this you will need docker in your pc, to run this app bellow are the steps

```
    $ cd mardkdownServer
    $ docker-compose up -d
    $ npm run dev
```

this will raise up a mongodb server and the  hhttp server in the port 3001


## Video
Pending...
