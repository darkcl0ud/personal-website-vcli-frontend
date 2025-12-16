import IconCarousel from "../components/IconCarousel.tsx";
import MobileIconCarousel from "../components/MobileIconCarousel.tsx";
import profile from "../assets/profile.jpg"

export default function WhoAmIPage() {
    return <div className="snap-y h-[calc(100vh-80px)] overflow-y-scroll snap-mandatory scroll-smooth">
        <section className="h-[calc(100vh-80px)] w-full bg-black grid grid-cols-8 justify-between items-center gap-4 snap-start snap-always p-4 overflow-hidden">
            <div className="flex flex-col justify-center items-center gap-8 col-span-8 sm:col-span-5">
                <img src={profile} alt="Profile Picture" className="pointer-events-none select-none mask-[radial-gradient(circle_at_center,black_0,black_40%,transparent_60%,transparent_10%)] w-48 h-48 md:w-64 md:h-64"/>
                <h1 className="text-3xl sm:text-8xl text-white text-center">Liam Hughes</h1>
                <h3 className="text-base sm:text-xl text-white/50 text-center"><span className="hover:text-code-500">Senior Cloud Architect</span>, <span className="hover:text-code-500">Developer</span>, <span className="hover:text-code-500">Amateur Web Developer</span></h3>
            </div>
            <IconCarousel reverse/>
            <IconCarousel />
            <IconCarousel reverse/>
            <MobileIconCarousel />
        </section>
        <section className="min-h-[calc(100vh-80px)] w-full bg-white flex flex-col justify-center items-center gap-4 snap-start snap-always">
            <h1 className="text-6xl sm:text-8xl text-black text-center">Not all who wander are lost</h1>
        </section>
    </div>
}