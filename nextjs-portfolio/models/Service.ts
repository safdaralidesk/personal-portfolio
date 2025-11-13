import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a service title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a service description'],
    },
    icon: {
      type: String,
      required: [true, 'Please provide an icon'],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
