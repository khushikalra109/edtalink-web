import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI?.trim()
    const resolvedUri = mongoUri || 'mongodb://127.0.0.1:27017/edtalink'

    const conn = await mongoose.connect(resolvedUri, {
      serverSelectionTimeoutMS: 10000,
    })

    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`)
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB
