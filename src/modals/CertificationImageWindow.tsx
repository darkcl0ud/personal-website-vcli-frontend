import {type JSX, useEffect} from "react";
import {createPortal} from "react-dom";

export default function CertificationImageWindow({title, image, onClose}: {title: string, image: string, onClose: () => void},): JSX.Element {

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return (): void => document.body.classList.remove("overflow-hidden");
    }, []);

    return <>
        {createPortal(
            <dialog className="fixed z-20 w-full h-screen top-0 left-0 text-code-500 bg-black/70 flex items-center justify-center px-4">
                <div className="max-w-96 bg-code-500/30 gap-y-6 grid grid-cols-12 pb-6 select-none">
                    <nav className="w-full bg-code-500/60 h-8 col-span-12 grid grid-cols-12 justify-center items-center">
                        <button onClick={onClose} className="col-start-1 col-end-2 font-bold"><p>X</p></button>
                        <p className="col-start-2 col-end-12 text-nowrap text-white text-center overflow-hidden">{title}</p>
                    </nav>
                    <img className="col-start-2 col-end-12 pointer-events-none" src={image} alt={title}/>
                </div>
            </dialog>
        , document.getElementById("modal") || document.body)}
    </>
}

