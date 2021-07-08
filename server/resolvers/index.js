// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const con = require('../config/mysql')


module.exports = resolvers = {
    Query: {
      users:async () => {
        
        let data = await con.query("SELECT * FROM users")
        console.log(data)
      },
    },
  };