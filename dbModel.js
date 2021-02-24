import mongoose from  'mongoose'

const dbSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String
})

// Collection -> tiktokVideos
export default mongoose.model('tiktokVideos',dbSchema)