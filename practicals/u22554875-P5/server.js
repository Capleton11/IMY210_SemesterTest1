const { MongoClient } = require('mongodb');
//u22554875
// Your MongoDB connection URL
const url = "mongodb+srv://u22554875:Capleton%40112004@imy220.l9iop.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.info("Connected to MongoDB");

        const db = client.db("DBExample");
        const collection = db.collection("events");

        const query = {
            locations: {
                $elemMatch: {
                    area: 'Brooklyn',  
                    capacity: { $gt: 20 },  
                    date: { 
                        $gt: "2022/10/08",  
                        $lt: "2022/10/26"  
                    }
                }
            }
        };

       
        const events = await collection.find(query, { projection: { name: 1, description: 1, _id: 0 } }).toArray();

        console.log(events);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);