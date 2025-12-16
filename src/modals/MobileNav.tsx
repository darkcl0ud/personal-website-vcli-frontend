import {type JSX, useEffect} from "react";
import {createPortal} from "react-dom";
import {NavLink} from "react-router";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";
import {XMarkIcon} from "@heroicons/react/24/solid";

export default function MobileNav({menuItems, onClose}: {menuItems: {command: string, input: string, link: string}[], onClose: () => void}): JSX.Element {

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return (): void => document.body.classList.remove("overflow-hidden");
    }, []);

    return <>
        {createPortal(
            <dialog className="fixed z-20 w-full h-screen top-0 left-0 text-code-500 bg-black/70 flex items-start justify-center px-4">
                <div className="w-full bg-black flex flex-col py-6 px-4">
                    <button className="h-8 w-8 text-code-500 ml-auto" onClick={onClose}><XMarkIcon/></button>
                    <ul className="flex flex-col gap-4">
                        {menuItems.map(({command, input, link}, index) => (
                            <li key={index} className="px-4 py-2">
                                <NavLink to={link} onClick={onClose}><ExecutedCommand command={command} input={input}/></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </dialog>
            , document.getElementById("modal") || document.body)}
    </>
}

