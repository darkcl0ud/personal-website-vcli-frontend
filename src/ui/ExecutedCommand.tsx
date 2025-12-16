import {type JSX} from "react";

export default function ExecutedCommand({command, input}: { command: string, input: string }): JSX.Element {
    return <p className="text-white">$ <span className="text-code-500">{command}</span> {input}</p>
}