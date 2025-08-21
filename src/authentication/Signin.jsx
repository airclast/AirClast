import SignInForm from "../SignInForm";
import cloudBg from "../assets/cloud-background.jpg";

export default function Signin(){
    return (
        <div className="min-h-screen flex">
      {/* Left side - Background image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={cloudBg}
          alt="Atmospheric clouds background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8">
          <h1 className="text-white text-xl font-semibold">Weather wise</h1>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="w-full lg:w-1/2 bg-slate-900">
        <SignInForm />
      </div>
    </div>
    )
}