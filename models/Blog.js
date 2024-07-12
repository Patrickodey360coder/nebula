import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
}, {
  timestamps: true
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);