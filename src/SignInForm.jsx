import { Eye, EyeOff, Mail } from "lucide-react"
import { useState } from "react"

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Sign in submitted:", formData)
    }
    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-2">SIGN IN</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email field */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">Sign in with email address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="Yourname@gmail.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    {/* Password field */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Yourname@gmail.com"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className="w-full pl-12 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot password link */}
                    <div className="text-right">
                        <a href="#" className="text-white text-sm hover:text-blue-400 transition-colors">
                            Forget Password ?
                        </a>
                    </div>

                    {/* Sign in button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
                    >
                        Sign in
                    </button>

                    {/* Social login divider */}
                    <div className="text-center">
                        <span className="text-gray-400 text-sm">Or continue with</span>
                    </div>

                    {/* Social login buttons */}
                    <div className="grid grid-cols-2 gap-4">
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

                    {/* Register link */}
                    <div className="text-center">
                        <span className="text-gray-400 text-sm">
                            Don't you've account ?{" "}
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Register
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}