const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8888 || PORT.env
const con = require('./config/mysql')
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs/users')
const resolvers = require('./resolvers/index')
const server = new ApolloServer({ typeDefs, resolvers });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!")
})

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});