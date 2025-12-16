import resume from "../data/data.json"
import Job from "../components/Job.tsx";
import {getJobDir} from "../data/getJobDir.ts";
import {ScrollToHashElement} from "../ui/ScrollToHashElement.tsx";
import Certifications from "../components/Certifications.tsx";
import Cursor from "../components/Cursor.tsx";
import LSResumeItem from "../ui/LSResumeItem.tsx";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";

export default function ResumePage() {

    const currentDate: Date = new Date();

    return <>
        <ScrollToHashElement/>
        <div className="max-w-7xl w-full grid grid-cols-12 my-10 gap-y-6">
            <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-white">
                <ExecutedCommand command="cd" input="resume"/>
                <p>$ <span className="text-code-500">ls</span> -l -D "%b %Y" | <span
                    className="text-code-500">awk</span>{" '{ printf \"%s %s %s\\n\", $6, $7, $8}'"}</p>
                <ul className="flex flex-col gap-x-4 gap-y-0.5 mt-4">
                    <LSResumeItem date={currentDate} name="certifications"/>
                    {resume.map((job: {
                        from: string, company: string
                    }, index: number) => {
                        const fromDate: Date = new Date(job.from);
                        const dir: string = getJobDir(index, job.company)
                        return <LSResumeItem key={dir} date={fromDate} name={dir}/>
                    })}
                    <LSResumeItem date={currentDate} name="resume.pdf" type="download"/>
                    <LSResumeItem date={currentDate} name="skills.sh" type="none"/>
                </ul>
            </div>
            {resume.map(((job, index) => {

                const fileName: string = getJobDir(index, job.company)

                return <Job key={fileName} fileName={fileName} title={job.title} company={job.company}
                            startdate={job.from} enddate={job.to}
                            experience={job.experience} skills={job.skills}/>
            }))}
            <Certifications/>
            <Cursor/>
        </div>
    </>
}