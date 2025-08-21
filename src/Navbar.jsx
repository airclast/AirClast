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
//import Logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";
// import { steadyContext } from "../authentication/Steadyprovider";
// import { useContext } from "react";
// import { FaShippingFast, FaTruckPickup } from "react-icons/fa"
// import { Contact2Icon } from "lucide-react"
// import { HomeIcon } from "lucide-react"
// import { BoxIcon } from "lucide-react"
// import axios from "axios"
// import useAxiosSecure from "../mainpages/hooks/useAxiosSecure"
// import { useState } from "react"
// import { useTheme } from "../../Theme-provider"
// import { Sun } from "lucide-react"
// import { Moon } from "lucide-react"

const Navbar = () => {
    // const { setTheme } = useTheme()
    // const [role, setrole] = useState('');
    // const { user, loading, createuser, loginuser, logout, } = useContext(steadyContext);
    // const handlelogout = () => {
    //     logout()
    //         .then(res => { console.log('successful logout') })
    //         .catch(err => { console.log(err) })
    // }

    // const axiossecure = useAxiosSecure()
    // axiossecure.get(`/user/${user?.email}`)
    //     .then(res => setrole(res.data[0].role))
        
    // const Links = <>
    //     <MenubarMenu>
    //         <MenubarTrigger className='hidden md:block'><Link to={`/`} className="bg-black text-white shadow rounded-xl hover:bg-white hover:text-black h-9 px-4 py-2">Home</Link></MenubarTrigger>
    //     </MenubarMenu>
    //     <MenubarMenu>
    //         <MenubarTrigger className='hidden md:block'><Link to={`/contact`} className="bg-black text-white shadow rounded-xl hover:bg-white hover:text-black h-9 px-4 py-2">Contact Us</Link></MenubarTrigger>
    //     </MenubarMenu>
    //     <MenubarMenu>
    //         <MenubarTrigger className='hidden md:block'><Link to={`/about`} className="bg-black text-white shadow rounded-xl hover:bg-white hover:text-black h-9 px-4 py-2">About Us</Link></MenubarTrigger>
    //     </MenubarMenu>
    //     <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>

    //     {
    //         user ?
    //             <div className="flex gap-2">
    //                 <DropdownMenu>
    //                     <DropdownMenuTrigger asChild>
    //                         <Avatar>
    //                             <AvatarImage src={user.photoURL} />
    //                             <AvatarFallback>CN</AvatarFallback>
    //                         </Avatar>
    //                     </DropdownMenuTrigger>
    //                     <DropdownMenuContent className="w-56">
    //                         <DropdownMenuLabel><Link to={`myprofile`}>My Profile</Link></DropdownMenuLabel>
    //                         <DropdownMenuSeparator />
    //                         <DropdownMenuGroup>
    //                             <DropdownMenuItem>
    //                                 <User />
    //                                 <span>{user.displayName}</span>

    //                             </DropdownMenuItem>
    //                             <DropdownMenuItem className='md:hidden'>
    //                                 <HomeIcon></HomeIcon>
    //                                 <Link to={`/`}>Home</Link>
    //                                 <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //                             </DropdownMenuItem>

    //                             <DropdownMenuItem className='md:hidden'>
    //                                 <Contact2Icon></Contact2Icon>
    //                                 <Link to={`/contact`}>Contact Us</Link>
    //                                 <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //                             </DropdownMenuItem>
    //                             <DropdownMenuItem>
    //                                 <CreditCard />
    //                                 <Link to={`/dashboard`}>DASHBOARD</Link>
    //                                 <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //                             </DropdownMenuItem>
    //                             {
    //                                 role === 'user' && <div>
    //                                     <DropdownMenuItem>
    //                                         <FaShippingFast></FaShippingFast>
    //                                         <Link to={`booking`}>BOOK?ADD PARCEL</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`myparcel`}>MY PARCEL</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                 </div>
    //                             }
    //                             {role === 'admin' &&
    //                                 <div>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/users`}>All users</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/adminstatistics`}>Admin statistics</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/allparcel`}>All parcel</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/driver`}>All driver</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>

    //                                 </div>
    //                                 }
    //                             {role === 'driver' &&
    //                                 <div>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/alldeliveredparcel`}>Delivered parcel</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>
    //                                     <DropdownMenuItem>
    //                                         <FaTruckRampBox></FaTruckRampBox>
    //                                         <Link to={`/myreviews`}>All reviews</Link>
    //                                         <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    //                                     </DropdownMenuItem>

    //                                 </div>
    //                                 }


    //                         </DropdownMenuGroup>
    //                         <DropdownMenuSeparator />

    //                         <DropdownMenuItem>
    //                             <LogOut />
    //                             <button onClick={handlelogout}>Logout</button>
    //                             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //                         </DropdownMenuItem>
    //                         <DropdownMenuItem className='md:hidden'>
    //                             <BoxIcon></BoxIcon>
    //                             <Link to={`/about`}>About Us</Link>
    //                             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //                         </DropdownMenuItem>
    //                     </DropdownMenuContent>
    //                 </DropdownMenu>
    //             </div>
    //             :
    //             <>
    //                 <MenubarMenu>
    //                     <MenubarTrigger ><Link to={`login`} className="bg-black text-white shadow rounded-xl hover:bg-white hover:text-black h-9 px-4 py-2">Login</Link></MenubarTrigger>
    //                 </MenubarMenu></>
    //     }


    // </>
    // const Links = <><Link to={`/`} className="bg-black text-white shadow rounded-xl hover:bg-white hover:text-black h-9 px-4 py-2">Home</Link>
    // </>

    return (
        <div className="sticky top-0 z-50 bg-white dark:bg-black shadow-md  max-w-7xl flex justify-between lg:h-16 py-3 px-4">
            {/* <Menubar className="flex justify-start items-center p-4 "> */}
                {/* <img src={Logo} alt="" className="size-14 lg:size-16" /> */}
                <p className="font-bold text-lg">Weather Wise</p>
            {/* </Menubar>
            <Menubar> */}
                {/* {Links} */}
            {/* </Menubar> */}

        </div>
    );
};

export default Navbar;