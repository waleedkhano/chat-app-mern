import mongoose from 'mongoose'

const connectToMongoDb = async() => {
  try {
    await mongoose.connect('mongodb://localhost:27017')
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log("Connection to database Failed!!!!!" ,error.message)
  }

}

export default connectToMongoDb