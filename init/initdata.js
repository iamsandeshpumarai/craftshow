const mongoose = require('mongoose')
const initdatas = require('./sampledata.js')
const listing = require('../models/listing.js')
const url = "mongodb://127.0.0.1:27017/CraftShow";

async function main() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("Database connection failed: ", error);
    }
}
main();

const initdata = async () => {
    try {
    
      await listing.deleteMany({});
  
      
      initdatas.data = initdatas.data.map((obj) => ({
        ...obj,
        owner: "6747550f6204b4678b725c38",
      }));

      await listing.insertMany(initdatas.data);
  
      console.log("Data has been saved");
    } catch (error) {
      console.error("Error initializing data:", error.message);
    }
  };

  initdata();
  