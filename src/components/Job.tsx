import {type JSX} from "react";
import SkillItem from "../ui/SkillItem.tsx";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";


export default function Job({title, company, startdate, enddate, experience, skills, fileName}: {
    title: string,
    company: string,
    startdate: string,
    enddate: string,
    experience: string[],
    skills: string[],
    fileName: string
}): JSX.Element {

    return <section className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-white" id={fileName}>
        <ExecutedCommand command="cd" input={fileName}/>
        <ExecutedCommand command="cat" input="experience.txt"/>
        <h5 className="font-bold text-xl">{title} - {company}</h5>
        <h6 className="text-white/60 text-lg">{startdate} - {enddate}</h6>
        <ul className="list-disc list-inside">{experience.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <div className="my-6 flex flex-col gap-4">
            <ExecutedCommand command="../skills.sh" input="--input skills.json"/>
            <ul className="flex w-full flex-row flex-wrap gap-4">
                {skills.map((item, index) => <SkillItem key={index} skill={item}/>)}
            </ul>
        </div>
        <ExecutedCommand command="cd" input=".."/>
    </section>
}