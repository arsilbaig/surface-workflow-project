"use client"
// /app/getting-started/page.jsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function GettingStartedPage() {
    const [isFirstAccordionOpen, setIsFirstAccordionOpen] = useState(false);
    const [isSecondAccordionOpen, setIsSecondAccordionOpen] = useState(false);

    // JavaScript code to display in the accordion
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

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Getting started</h2>

            {/* First Accordion - Install Surface Tag */}
            <div className="mb-4">
                <div
                    onClick={() => setIsFirstAccordionOpen(!isFirstAccordionOpen)}
                    className="cursor-pointer bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                >
                    <div>
                        <h3 className="font-semibold">Install Surface Tag on your site</h3>
                        <p className="text-gray-500">Enable tracking and analytics.</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Install tag
                    </button>
                </div>
                {isFirstAccordionOpen && (
                    <div className="bg-gray-50 p-4 transition-all duration-300">
                        <p>Step 1: Add the following code to your website to install the Surface Tag:</p>
                        <SyntaxHighlighter language="javascript" style={solarizedlight}  showLineNumbers={true}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                )}
            </div>

            {/* Second Accordion - Test Surface Tag Events */}
            <div className="mb-4">
                <div
                    onClick={() => setIsSecondAccordionOpen(!isSecondAccordionOpen)}
                    className="cursor-pointer bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                >
                    <div>
                        <h3 className="font-semibold">Test Surface Tag Events</h3>
                        <p className="text-gray-500">Test if the Surface Tag is properly emitting events.</p>
                    </div>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                        Test Tag
                    </button>
                </div>
                {isSecondAccordionOpen && (
                    <div className="bg-gray-50 p-4 transition-all duration-300">
                        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Visitor</th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Metadata</th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Track</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">37d272f6-877b-47c6-98e5-5156f</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`{}`}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9/15/2024, 5:08:56 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Page</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">e7ef515a-7a5b-4949-9f28-8ae34</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`{"page_url": "https://withsurface.com/page-1"}`}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9/15/2024, 5:09:35 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Identity</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">42d467c8-3bd1-4519-9ae6-bfb0</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`{"user_id": "42d467c8-3bd1-4519-9ae6-bfb00adcc01c"}`}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9/15/2024, 5:12:19 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Click</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">aa731c78-c4e0-4e4f-b515-6525c</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`{"element_id": "button-element"}`}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9/15/2024, 5:17:35 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
