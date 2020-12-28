const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require('./schema/schema')

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (req, res) => res.json({ msg: "hello graphql" }));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening @ localhost:${PORT}`);
});
