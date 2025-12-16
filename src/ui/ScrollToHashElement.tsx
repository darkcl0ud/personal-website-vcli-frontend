import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHashElement() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.slice(1); // remove '#'
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [hash]);

    return null;
}
