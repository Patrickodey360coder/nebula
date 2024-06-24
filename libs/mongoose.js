const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mrrobot:mrrobot@cluster0.7zm6chn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Create a MongoClient with a MongoCLientOptions object to set the Stable API Version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export default async function run() {
  try {
    //Connect the client to the server
    await client.connect();
    //send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 });
    console.log("Pingged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

run().catch(console.dir);
