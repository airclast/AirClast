import { Search, Menu, MapPin } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "./Sidebar"

export function NavigationHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <>
            <header className="bg-slate-800 border-b border-slate-700">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between gap-4">
                        {/* Left section - Menu and location */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded-md transition-colors">
                                <Menu className="h-5 w-5 " />
                            </button>

                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-slate-400" />
                                <span className="text-slate-200">Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        {/* Center section - Search */}
                        <div className="flex-1 max-w-md mx-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search City"
                                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Right section - User profile */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">U</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /></>

    )
}
