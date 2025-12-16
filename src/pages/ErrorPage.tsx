import {Link} from "react-router"
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";

export default function ErrorPage() {
    return <div className="flex flex-col justify-center items-center min-h-screen w-full gap-5 px-2">
        <ExclamationTriangleIcon className="h-20 sm:h-28 text-rose-600"/>
        <h3 className="text-3xl sm:text-5xl">Error</h3>
        <div>
            <p className="text-base sm:text-lg text-center">These are not the droids you are looking for!</p>
            <p className="text-base sm:text-lg text-center">Something happened click below to navigate back to the home screen.</p>
        </div>
        <Link to="/">
            <button
                className="bg-white text-black text-xl px-8 py-2 rounded-md hover:bg-black hover:text-white outline cursor-pointer">Back
                to Home
            </button>
        </Link>
    </div>
}