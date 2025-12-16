import aws from "../assets/icons/aws.svg";
import azure from "../assets/icons/azure.svg";
import cloudflare from "../assets/icons/cloudflare.svg";
import go from "../assets/icons/go.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import gitlab from "../assets/icons/gitlab.svg";
import terraform from "../assets/icons/terraform.svg";
import opentofu from "../assets/icons/opentofu.svg"
import certifications from "./certifications.ts";

const icons: string[] = [aws, azure, cloudflare, go, python, react, tailwind, gitlab, terraform, opentofu, ...certifications.map(c => c.image)]

export function getShuffledIcons(): string[] {
    const shuffledIcons: string[] = [...icons]

    for (let i: number = shuffledIcons.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [shuffledIcons[i], shuffledIcons[j]] = [shuffledIcons[j], shuffledIcons[i]];
    }

    return shuffledIcons;
}