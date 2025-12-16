import {getShuffledIcons} from "../data/icons.ts";

export default function MobileIconCarousel() {

    const shuffledIcons: string[] = getShuffledIcons();

    return (<div
        className="flex flex-row sm:hidden col-span-8 justify-center items-center gap-4 w-full max-w-4xl h-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
        <IconRow icons={shuffledIcons}/>
        <IconRow icons={shuffledIcons} ariaHidden/>
        <IconRow icons={shuffledIcons} ariaHidden/>
        <IconRow icons={shuffledIcons} ariaHidden/>
        <IconRow icons={shuffledIcons} ariaHidden/>
        <IconRow icons={shuffledIcons} ariaHidden/>
        <IconRow icons={shuffledIcons} ariaHidden/>
    </div>)
}

function IconRow({icons, ariaHidden}: { icons: string[], ariaHidden?: boolean }) {

    return <ul
        className="w-fit mx-3 flex flex-row gap-8 items-center justify-center md:justify-start animate-infinite-row"
        aria-hidden={ariaHidden}
    >
        {icons.map((icon: string) => (<li key={icon} className="h-15 w-15 md:h-20 md:w-20 grayscale hover:grayscale-0">
            <img
                src={icon}
                alt={`${icon} icon`}
                className="h-full pointer-events-none select-none mx-auto"
            />
        </li>))}
    </ul>
}