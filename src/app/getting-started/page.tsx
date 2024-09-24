"use client";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function GettingStartedPage() {
  const [isFirstAccordionOpen, setIsFirstAccordionOpen] = useState(false);
  const [isSecondAccordionOpen, setIsSecondAccordionOpen] = useState(false);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copyMessage, setCopyMessage] = useState("");

  const codeString = `
    (function() {
      const surfaceTag = document.createElement('script');
      surfaceTag.src = "https://example.com/surface-tag.js";
      surfaceTag.async = true;
      document.head.appendChild(surfaceTag);
      
      surfaceTag.onload = function() {
        console.log('Surface Tag installed successfully!');
      };
    })();
  `;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/event");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopyMessage("Copied!"); 
      setTimeout(() => setCopyMessage(""), 1000); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Getting started</h2>

      <div className="mb-4">
        <div
          onClick={() => setIsFirstAccordionOpen(!isFirstAccordionOpen)}
          className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-4"
        >
          <div>
            <h3 className="font-semibold">Install Surface Tag on your site</h3>
            <p className="text-gray-500">Enable tracking and analytics.</p>
          </div>
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
            Install tag
          </button>
        </div>
        {isFirstAccordionOpen && (
          <div className="bg-gray-50 p-4 transition-all duration-300">
            <div className="flex flex-row justify-between">
            <p>
              Step 1: Add the following code to your website to install the
              Surface Tag:
            </p>
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-white" onClick={handleCopySnippet}>
            Copy Snippet
          </button>
          </div>
          {copyMessage && <p className="mt-2 text-green-600 flex justify-end">{copyMessage}</p>}
           
            <SyntaxHighlighter
              language="javascript"
              style={solarizedlight}
              showLineNumbers={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      <div className="mb-4">
        <div
          onClick={() => setIsSecondAccordionOpen(!isSecondAccordionOpen)}
          className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-4"
        >
          <div>
            <h3 className="font-semibold">Test Surface Tag Events</h3>
            <p className="text-gray-500">
              Test if the Surface Tag is properly emitting events.
            </p>
          </div>
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
            Test Tag
          </button>
        </div>
        {isSecondAccordionOpen && (
         <div className="bg-gray-50 p-4 transition-all duration-300">
         <table className="min-w-full table-auto rounded-lg bg-white shadow-md">
           <thead className="bg-gray-100 text-left">
             <tr>
               <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                 Event
               </th>
               <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                 Visitor
               </th>
               <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                 Metadata
               </th>
               <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                 Created at
               </th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-200 bg-white">
             {events?.events?.map((event, index) => (
               <tr key={index}>
                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                   {event.eventName}
                 </td>
                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                   {event.eventData ? event.eventData.elementId : "N/A"}
                 </td>
                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                   {event.eventData ? JSON.stringify({
                     elementType: event.eventData.elementType,
                     elementClass: event.eventData.elementClass,
                     url: event.eventData.url,
                   }) : "{}"}
                 </td>
                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                   {new Date(event.timestamp).toLocaleString("en-US", {
                     month: "numeric",
                     day: "numeric",
                     year: "numeric",
                     hour: "numeric",
                     minute: "numeric",
                     second: "numeric",
                     hour12: true,
                   })}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       
        )}
      </div>
    </div>
  );
}
