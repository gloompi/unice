import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  encryptedPassword: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'member'],
    default: 'member',
  }
})

UserSchema.virtual('name').get(function() {
  return this.firstname + ' ' + this.lastname;
});

export const User = mongoose.model('User', UserSchema)
