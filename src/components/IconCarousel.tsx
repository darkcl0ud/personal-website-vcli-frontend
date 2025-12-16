import {getShuffledIcons} from "../data/icons.ts";

export default function IconCarousel({reverse = false}: { reverse?: boolean }) {

    const shuffledIcons: string[] = getShuffledIcons();

    const divClass: string = "hidden sm:flex sm:flex-col col-span-1 justify-center items-center gap-4 w-full max-w-4xl h-full overflow-hidden mask-[linear-gradient(to_top,transparent_0,black_512px,black_calc(100%-200px),transparent_100%)]"

    return (<div
        className={divClass}>
        <IconRow reverse={reverse} icons={shuffledIcons}/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
        <IconRow reverse={reverse} icons={shuffledIcons} ariaHidden/>
    </div>)
}

function IconRow({reverse = false, icons, ariaHidden}: { reverse?: boolean, icons: string[], ariaHidden?: boolean }) {

    let scrollClass: string = "w-fit mx-3 flex flex-col gap-8 items-center justify-center md:justify-start animate-infinite-scroll"

    if (reverse) {
        scrollClass = "w-fit mx-3 flex flex-col gap-8 items-center justify-center md:justify-start animate-infinite-reverse"
    }

    return <ul
        className={scrollClass}
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