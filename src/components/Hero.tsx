import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const whoisdata: string[] = ["w","h","o","a","m","i","?", " ", "l", "e", "t", "'", "s", " ", "s", "e", "e", "!"]

export default function Hero() {

    const [cursor, setCursor] = useState<boolean>(true);
    const [whoamiClicked, setWhoamiClicked] = useState<boolean>(false);  // Renamed for clarity (was 'whoamiClickeded')
    const [whoami, setWhoami] = useState<string[]>([]);
    const cursorClass: string = cursor ? "text-code-500 font-bold" : "font-bold opacity-0";

    const navigate = useNavigate();

    useEffect((): () => void => {
        const interval: number = setInterval((): void => {
            setCursor((prevState: boolean): boolean => !prevState);
        }, 500);

        return (): void => {
            clearInterval(interval);
        };
    }, [whoamiClicked]);

    useEffect((): () => void => {
        if (!whoamiClicked) return () => {};

        const interval: number = setInterval((): void => {
            setWhoami((prevState: string[]): string[] => {
                if (prevState.length >= whoisdata.length) {
                    clearInterval(interval);
                    return prevState;
                }
                return [...prevState, whoisdata[prevState.length]];
            });
        }, 100);

        return (): void => {
            clearInterval(interval);
        };
    }, [whoamiClicked]);

    useEffect(() => {
        if (whoami.length === whoisdata.length && whoami.length > 0) {
            setTimeout(() => navigate("/whoami"), 500);
        }
    }, [whoami, navigate]);

    return (
        <section className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute -z-20 w-full h-full bg-[url(/heroBackdrop.jpg)] bg-cover bg-center md:bg-top-right animate-bg-zoom" />
            <div  className="absolute -z-10 bg-radial from-black/50 sm:from-black/65 to-black backdrop-grayscale w-full h-full"/>
            <div className="flex flex-col justify-center items-start min-h-screen w-full max-w-4xl gap-6 sm:gap-4 font-code px-4">
                <h1 className="text-white text-left w-full text-[96px]/20 sm:text-[120px]/25">Hello World<span className={whoamiClicked ? "opacity-0" : cursorClass}>_</span></h1>
                <h1 className={`text-white text-left w-full text-4xl sm:text-5xl ${whoamiClicked ? "" : "hidden"}`}>{whoami.join("")}<span className={whoamiClicked ? cursorClass : "opacity-0"}>_</span></h1>
                <button 
                    className={`w-70.5 h-16.75 bg-black text-white text-xl sm:text-[32px] bg-black px-8 py-2 hover:bg-code-500 hover:text-black cursor-pointer ${whoamiClicked ? "hidden" : ""}`}
                    onClick={(): void => setWhoamiClicked(true)}
                >
                    {">$ whois liam"}
                </button>
            </div>
        </section>
    );
}