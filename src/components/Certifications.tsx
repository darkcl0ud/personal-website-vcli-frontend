import {type JSX, useState} from "react";
import certifications from "../data/certifications.ts";
import CertificationImageWindow from "../modals/CertificationImageWindow.tsx";
import ExecutedCommand from "../ui/ExecutedCommand.tsx";

type certItem = {title: string, image: string}

export default function Certifications(): JSX.Element {

    const [selectedCert, setSelectedCert] = useState<certItem | null>(null);

    function handleClearSelectedCert() {
        setSelectedCert(null);
    }

    return <section className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-white" id="certifications">
        <ExecutedCommand command="cd" input="certifications"/>
        <ExecutedCommand command="ls" input=""/>
        <ul className="flex flex-col sm:flex-row gap-x-4 gap-y-0.5 sm:flex-wrap">
            {certifications.map(
                (cert: certItem): JSX.Element => <li onClick={() => setSelectedCert(cert)} key={cert.title} className="cursor-pointer hover:text-code-500">{cert.title}.jpg</li> )}
        </ul>
        {selectedCert && <CertificationImageWindow onClose={handleClearSelectedCert} {...selectedCert}/>}
    </section>
}