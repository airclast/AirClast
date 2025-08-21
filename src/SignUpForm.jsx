
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    Eye,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

//import { Button } from "@/components/ui/button"


import { useState } from "react"


const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }



    return (
        <div className="w-full max-w-md space-y-8">
            {/* Mobile header */}
            <div className="lg:hidden text-center mb-8">
                <h1 className="text-white text-xl font-medium">Weather wise</h1>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-white text-4xl font-bold mb-8">SIGN Up</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                        <div className="text-white text-sm font-medium">
                            FULL Name
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Name"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                className="bg-slate-800/50 border-slate-700 text-white w-full placeholder-gray-400 pl-12 h-12 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <div className="text-white text-sm font-medium">
                            Sign in with email address
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                id="email"
                                type="email"
                                placeholder="Yourname@gmail.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="bg-slate-800/50 border-slate-700 w-full text-white placeholder-gray-400 pl-12 h-12 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="text-white text-sm font-medium">
                            Password
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Yourname@gmail.com"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className="bg-slate-800/50 border-slate-700 w-full text-white placeholder-gray-400 pl-12 pr-12 h-12 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div >
                        <button type="button" className="text-white text-sm hover:text-blue-400 transition-colors">
                            Forget Password ?
                        </button>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200"
                    >
                        Sign up
                    </button>

                    {/* Social Login */}
                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm ">Or continue with</p>

                        <div className="grid grid-cols-2  gap-4 ">
                            <button className="flex items-center justify-center gap-2 h-12 bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-700 rounded-lg px-4">
                                <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                                    <path fill="#4285F4" d="M533.5 278.4c0-17.2-1.4-33.8-4-49.8H272v94.2h146.9c-6.3 34-25 62.9-53.6 82v68.3h86.7c50.7-46.7 80-115.5 80-194.7z" />
                                    <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24 178-65.2l-86.7-68.3c-24.1 16.2-55 25.8-91.3 25.8-70.3 0-129.8-47.5-151.2-111.2H32v69.9C76.3 488 168 544.3 272 544.3z" />
                                    <path fill="#FBBC05" d="M120.8 331.6c-5.6-16.7-8.8-34.5-8.8-52.6s3.2-35.9 8.8-52.6V156.5H32C11.2 197.2 0 242.2 0 278.9s11.2 81.7 32 122.4l88.8-69.7z" />
                                    <path fill="#EA4335" d="M272 109.5c37.3 0 70.7 12.8 97 33.9l72.8-72.8C405.5 35.6 344.6 12 272 12 168 12 76.3 68.3 32 156.5l88.8 69.9C142.2 157 201.7 109.5 272 109.5z" />
                                </svg>
                                Google
                            </button>


                            <button className="flex items-center justify-center gap-2 h-12 bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-700 rounded-lg px-4">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                                Facebook
                            </button>

                        </div>
                    </div>

                    {/* Terms */}
                    <p className="text-gray-400 text-xs ">
                        By registering you with our{" "}
                        <button className="text-blue-400 hover:text-blue-300 underline">Terms and Conditions</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;