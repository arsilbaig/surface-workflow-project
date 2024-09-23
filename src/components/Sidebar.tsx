// /components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-8">surface labs</h1>
            <ul>
                <li className="py-2 px-4 bg-gray-200 rounded-lg mb-2">Getting started</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Overview</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Funnels</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Leads</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Segments</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Workflows</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Integrations</li>
                <li className="py-2 px-4 hover:bg-gray-200 rounded-lg">Settings</li>
            </ul>
            <div className="absolute bottom-6 left-6">
                <div className="flex items-center">
                    <img
                        src="/avatar.png"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                        <p>Chris Hood</p>
                        <p className="text-gray-500">hello@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
