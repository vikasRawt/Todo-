import mongoose from 'mongoose';
import config  from 'config';


async function DbConnect(){
    const dbUrl = config.get<string>("dbUrl");
  try {
    await mongoose.connect(dbUrl);
    console.log("db connected");
  } catch (error) {
    console.log("ERROR from db",error);
    process.exit(1);
  }

  
}

export default DbConnect;