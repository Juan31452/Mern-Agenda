import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
  mydate: {
    type: Date,
    default: Date.now,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    default: 'pendiente',
  },
},
{
  timestamps: true,
});

export default mongoose.model('Diary', diarySchema);
