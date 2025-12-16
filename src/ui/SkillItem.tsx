export default function SkillItem({skill}: { skill: string }) {

    return <li
        className={`px-4 py-2 text-center text-sm sm:text-base bg-linear-to-t bg-code-500/12 text-code-500 hover:text-black hover:bg-code-500`}>#{skill}</li>
}