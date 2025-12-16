import {type JSX, useEffect, useState} from "react";

export default function Cursor({command = ""}: {command?: string}): JSX.Element {

    const [cursor, setCursor] = useState<boolean>(true)

    useEffect((): () => void => {
        const interval: number = setInterval((): void => {
            setCursor((prevState: boolean): boolean => !prevState)
        }, 1000)

        return (): void => clearInterval(interval)
    }, []);

    const cursorClass: string = cursor ? "text-code-500 font-bold" : "font-bold opacity-0";

    return <p className="col-start-2 md:col-start-3 col-end-12 md:col-end-11">visitor@ldhughes.cloud:~$ {command}<span
        className={cursorClass}>█</span></p>
}