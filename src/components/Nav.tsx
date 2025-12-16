import {NavLink} from "react-router";
import {Bars3Icon} from "@heroicons/react/24/solid";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";
import {useState} from "react";
import MobileNav from "../modals/MobileNav.tsx";

const menuItems: {command: string, input: string, link: string}[] = [
    {command: "whoami", input: "", link: "/whoami"},
    {command: "cd", input: "resume", link: "/resume"},
    {command: "cd", input: "contact", link: "/contact"}
]

export default function Nav() {

    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

    return <>
        <div className="h-20 w-full"/>
        <nav
            className="w-full h-20 bg-black fixed top-0 left-0 flex flex-row justify-end sm:justify-between items-center px-8">
            <h1 className="text-xl hidden md:inline">print('L D Hughes')</h1>
            <ul className="hidden md:flex flex-row gap-2">
                {menuItems.map(({command, input, link}, index) => (
                    <li key={index} className="px-4 py-2">
                        <NavLink to={link}><ExecutedCommand command={command} input={input}/></NavLink>
                    </li>
                ))}
            </ul>
            <button className="md:hidden w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => setShowMobileNav(true)}>
                <Bars3Icon />
            </button>
            {showMobileNav && <MobileNav menuItems={menuItems} onClose={() => setShowMobileNav(false)}/>}
        </nav>
    </>
}