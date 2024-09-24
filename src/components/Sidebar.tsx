// /components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 p-6">
            <div className='my-2'>
            <img src="/images/logo/SurfaceLab.png" alt='surface labs' />
            </div>
            
            <div className="relative text-left mb-4">
            <div>
                <button
                type="button"
                className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                >
                <div className="flex items-center">
                    <img src='/images/icons/CustomersMajor.png' alt="User icon" className="mr-2" />
                    My Workspace
                </div>
                </button>
            </div>
            </div>
            <ul>
                <li className="flex items-center justify-between py-2 px-4 bg-gray-200 rounded-lg mb-2 bg-black text-white">
                    <div className="flex items-center">
                    <img src='/images/icons/circle-line.png' className="mr-2" alt="Getting started icon" />
                    Getting started
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/HomeMajor.png' className="mr-2" alt="Overview icon" />
                    Overview
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/FormsMajor.png' className="mr-2" alt="Funnels icon" />
                    Funnels
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/Leads.png' className="mr-2" alt="Leads icon" />
                    Leads
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/FolderMajor.png' className="mr-2" alt="Segments icon" />
                    Segments
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/ExchangeMajor.png' className="mr-2" alt="Workflows icon" />
                    Workflows
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/AppsMajor.png' className="mr-2" alt="Integrations icon" />
                    Integrations
                    </div>
                </li>
                <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 rounded-lg">
                    <div className="flex items-center">
                    <img src='/images/icons/SettingsMajor.png' className="mr-2" alt="Settings icon" />
                    Settings
                    </div>
                </li>
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
