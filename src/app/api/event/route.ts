import { NextResponse } from 'next/server';
import { createEvent, getEvent } from '../../../server/eventService'; 
 
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { event, eventData } = await createEvent(data);
 
        return NextResponse.json({ message: 'Event created successfully', event, eventData }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create event' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const events = await getEvent()
        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch events' }, { status: 500 });
    }
}