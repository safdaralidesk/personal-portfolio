import mongoose, { Schema, Document } from 'mongoose';

export interface ISettings extends Document {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  heroTitle: string;
  heroSubtitle: string[];
  profileImage?: string;
  resumeUrl?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'Your Name',
    },
    email: {
      type: String,
      required: true,
      default: 'your.email@example.com',
    },
    phone: {
      type: String,
      default: '+1 (555) 123-4567',
    },
    location: {
      type: String,
      default: 'Your City, Country',
    },
    bio: {
      type: String,
      default: 'Your bio goes here',
    },
    heroTitle: {
      type: String,
      default: 'Hi, I\'m',
    },
    heroSubtitle: [{
      type: String,
    }],
    profileImage: {
      type: String,
      default: '',
    },
    resumeUrl: {
      type: String,
      default: '',
    },
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      dribbble: String,
    },
    seo: {
      title: {
        type: String,
        default: 'Portfolio',
      },
      description: {
        type: String,
        default: 'Professional Portfolio',
      },
      keywords: [{
        type: String,
      }],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
