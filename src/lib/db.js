
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb+srv://khanabdurrehman981_db_user:MyvGdVYk1a2PnWnA@cluster0.jelb5o7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || 'mongodb://localhost:27017/bookmycure', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
