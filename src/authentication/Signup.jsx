// import {
//     Menubar,
//     MenubarCheckboxItem,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarRadioGroup,
//     MenubarRadioItem,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarSub,
//     MenubarSubContent,
//     MenubarSubTrigger,
//     MenubarTrigger,
// } from "@/components/ui/menubar"
// import {
//     Cloud,
//     CreditCard,
//     Github,
//     Keyboard,
//     LifeBuoy,
//     LogOut,
//     Mail,
//     MessageSquare,
//     Plus,
//     PlusCircle,
//     Settings,
//     User,
//     UserPlus,
//     Users,
// } from "lucide-react"

import SignUpForm from "../SignUpForm";

// import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuPortal,
//     DropdownMenuSeparator,
//     DropdownMenuShortcut,
//     DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { FaTruckRampBox } from "react-icons/fa6";

// import { IoMdNotifications } from "react-icons/io";
// //import Logo from '../assets/logo.jpg'
// import { Link } from "react-router-dom";
// //import { steadyContext } from "../authentication/Steadyprovider";
// import { useContext } from "react";
// import { FaShippingFast, FaTruckPickup } from "react-icons/fa"
// import { Contact2Icon } from "lucide-react"
// import { HomeIcon } from "lucide-react"
// import { BoxIcon } from "lucide-react"
// import axios from "axios"
// //import useAxiosSecure from "../mainpages/hooks/useAxiosSecure"
// import { useState } from "react"
// //import { useTheme } from "../../Theme-provider"
// import { Sun } from "lucide-react"
// import { Moon } from "lucide-react"
import cloudBg from "../assets/cloud-background.jpg";
const Signup = () => {
    
    return (
        <div className="min-h-screen flex">
      {/* Left side - Background image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cloudBg})` 
          }}
        />
        <div className="absolute top-8 left-8 z-10">
          <h1 className="text-white text-xl font-medium">Weather wise</h1>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full lg:w-1/2 bg-slate-900 flex items-center justify-center p-8">
        <SignUpForm></SignUpForm>
      </div>
    </div>
    );
};

export default Signup;