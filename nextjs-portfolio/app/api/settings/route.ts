import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Settings from '@/models/Settings';
import { isAdmin } from '@/lib/auth';

// GET settings (public)
export async function GET() {
  try {
    await dbConnect();
    let settings = await Settings.findOne();

    // Create default settings if none exist
    if (!settings) {
      settings = await Settings.create({
        name: 'Your Name',
        email: 'your.email@example.com',
        phone: '+1 (555) 123-4567',
        location: 'Your City, Country',
        bio: 'Your bio goes here',
        heroTitle: 'Hi, I\'m',
        heroSubtitle: [
          'Full Stack Developer',
          'UI/UX Designer',
          'Problem Solver',
        ],
        socialLinks: {},
        seo: {
          title: 'Portfolio',
          description: 'Professional Portfolio',
          keywords: [],
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PUT update settings (admin only)
export async function PUT(request: Request) {
  try {
    const admin = await isAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();

    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create(body);
    } else {
      settings = await Settings.findOneAndUpdate({}, body, {
        new: true,
        runValidators: true,
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
