-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventData" (
    "id" SERIAL NOT NULL,
    "elementId" TEXT,
    "elementType" TEXT,
    "elementClass" TEXT,
    "url" TEXT,
    "eventId" INTEGER,

    CONSTRAINT "EventData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventData_eventId_key" ON "EventData"("eventId");

-- AddForeignKey
ALTER TABLE "EventData" ADD CONSTRAINT "EventData_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
