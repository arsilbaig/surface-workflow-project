import { db } from './db';
 
export async function createEvent(data: {
    eventName: string;
    elementId?: string;
    elementType: string;
    elementClass?: string;
    url: string;
}) {
    const event = await db.event.create({
        data: {
            eventName: data.eventName,
        },
    });
    const eventData = await db.eventData.create({
        data: {
            elementId: data.elementId,
            elementType: data.elementType,
            elementClass: data.elementClass,
            url: data.url,
            eventId: event.id,
        },
    });
    return { event, eventData };
}



export async function getEvent() {
    const events = await db.event.findMany({
        include: {
            eventData: true,
        },
    });
   
 
    return { events };
}