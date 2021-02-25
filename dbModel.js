import mongoose from  'mongoose'

const dbSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: Number,
    messages: Number,
    description: String,
    shares: Number
})

// Collection -> tiktokVideos
export default mongoose.model('tiktokVideos',dbSchema)