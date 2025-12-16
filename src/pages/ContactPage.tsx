import {type JSX, useState} from "react";
import CLIForm from "../components/CLIForm.tsx";

const phases: {prompt: string, errorMessage: string, regex: RegExp}[] = [
    {prompt: "Please Enter Your Email", errorMessage: "Invalid Email", regex: /^\w+@\w+\.\w+$/},
    {prompt: "Please Enter Your Message", errorMessage: "Invalid Message", regex: /.+/}
]

export default function ContactPage(): JSX.Element {

    const [inputs, setInputs] = useState<string[]>([])

    console.log(inputs)

    function onValidInput(value: string) {
        setInputs((prevInputs) => [...prevInputs, value])
    }

    return <CLIForm phases={phases} endMessage="MESSAGE SENT" onValidInput={onValidInput} executedCommands={[{command: "cd", input: "contact"}, {command: "python3", input: "message.py"}]}/>
}