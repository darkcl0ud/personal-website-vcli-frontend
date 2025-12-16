import {Link} from "react-router";

export default function LSResumeItem({date, name, type = "link"}: { date: Date, name: string, type?: "link" | "none" | "download" }) {

    const monthFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
    });

    const formattedMonth: string = monthFormatter.format(date);

    return <li className="grid grid-cols-6 sm:grid-cols-12 gap-x-0.5">
        <p className="col-start-1 col-end-2">{formattedMonth}</p>
        <p className="col-start-2 col-end-3">{date.getFullYear()}</p>
        {type === "link" && <Link to={`#${name}`}
                       className="cursor-pointer hover:text-code-500">{name}</Link>}
        {type === "none" && <p className="col-start-3 col-end-6 sm:col-end-12 cursor-not-allowed">{name}</p>}
        {type === "download" && <a href={`/${name}`} download className="col-start-3 col-end-6 sm:col-end-12 cursor-pointer hover:text-code-500">{name}</a>}
    </li>
}