import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  age: number;
  hobbies: string[];
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number, 
      required: true,
    },
    hobbies: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
