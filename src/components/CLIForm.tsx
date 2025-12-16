import {type JSX, type KeyboardEvent, useEffect, useRef, useState} from "react";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";
import Cursor from "./Cursor.tsx";

type Command = { command: string, input: string }

export default function CLIForm({phases, executedCommands, endMessage, onValidInput}: {
    phases: { prompt: string, errorMessage: string, regex: RegExp }[],
    executedCommands: Command[],
    endMessage: string,
    onValidInput: (value: string) => void
}): JSX.Element {

    const [currentPhase, setCurrentPhase] = useState<number>(0)
    const [prevOutputs, setPrevOutputs] = useState<string[]>([phases[0].prompt])
    const input = useRef<HTMLInputElement | null>(null)
    const [inputDisabled, setInputDisabled] = useState<boolean>(false)

    const [displayedExecutedCommands, setDisplayedExecutedCommands] = useState<Command[]>([]);
    const [commandInCursor, setCommandInCursor] = useState<string>("");

    const allExecutedCommandsDisplayed: boolean = displayedExecutedCommands.length === executedCommands.length

    useEffect(() => {

        let interval: number | undefined = undefined

        if (executedCommands.length > displayedExecutedCommands.length) {
            interval = setInterval(() => {
                const indexToDisplay = displayedExecutedCommands.length;
                const currentCommandExecution = executedCommands[displayedExecutedCommands.length]
                const requiredCommand = currentCommandExecution.command + " " + currentCommandExecution.input

                setCommandInCursor(prevState => {
                    if (prevState === requiredCommand) {
                        setDisplayedExecutedCommands(prevState => {
                            if (prevState.length !== indexToDisplay) return prevState;
                            return [...prevState, currentCommandExecution]
                        })
                        return ""
                    } else {
                        return requiredCommand.slice(0, prevState.length + 1)
                    }
                })

            }, 100)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }

    }, [displayedExecutedCommands.length, executedCommands]);


    function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            const regexCheck: boolean = phases[currentPhase].regex.test(input.current!.value || "")
            const value = input.current!.value
            if (regexCheck) {
                onValidInput(value)
                if (currentPhase === (phases.length - 1)) {
                    setPrevOutputs((prevOutputs) => [...prevOutputs, value, endMessage])
                    setInputDisabled(true)
                } else {
                    setPrevOutputs((prevOutputs) => [...prevOutputs, value, phases[currentPhase + 1].prompt])
                    setCurrentPhase((prevPhase) => prevPhase + 1)
                }
            } else {
                setPrevOutputs((prevOutputs) => [...prevOutputs, phases[currentPhase].errorMessage])
            }
            input.current!.value = ""
            document.body.scrollIntoView({behavior: "smooth", block: "end"});
        }
    }

    return <div className="min-h-[calc(100vh-80px)] flex flex-col justify-end items-start pb-16">
        <div className="max-w-7xl w-full grid grid-cols-12 my-10 gap-y-6">
            <div
                className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-white flex flex-col gap-4 pointer-events-none select-none">
                {displayedExecutedCommands.map((item: Command, index: number): JSX.Element => <ExecutedCommand
                    key={index} command={item.command} input={item.input}/>)}
                {allExecutedCommandsDisplayed && prevOutputs.map((prevInput: string, index: number): JSX.Element => <p
                    key={index}>{prevInput}</p>)}
            </div>
            {allExecutedCommandsDisplayed &&
                <span className="text-white/30 col-start-2 md:col-start-3 col-end-12 md:col-end-11 flex flex-row gap-2">
                    <p className="pointer-events-none select-none">{">"}</p>
                    <input ref={input} className="outline-none text-white caret-code-500 w-full" onKeyDown={onKeyDown}
                           disabled={inputDisabled} autoFocus={true}/>
            </span>}
            {!allExecutedCommandsDisplayed && <Cursor command={commandInCursor}/>}
        </div>
    </div>
}