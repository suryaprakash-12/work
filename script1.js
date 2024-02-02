import { MongoClient } from "mongodb";

const client= new MongoClient(
    "mongodb://127.0.0.1:27017"
);
await client.connect();
const  db =  client.db("TodoApp");
const product = db.collection("product");
await product.insertOne({
    id:7,
    name:"download.jpg",
});

await client.close();
