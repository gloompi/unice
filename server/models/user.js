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
  },
  birthDay: {
    type: Date,
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
