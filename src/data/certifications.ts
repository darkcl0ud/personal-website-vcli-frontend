import awsANSImage from "../assets/certifications/aws-ans.png";
import awsCPImage from "../assets/certifications/aws-cp.png";
import awsAIPImage from "../assets/certifications/aws-aip.png";
import awsDAImage from "../assets/certifications/aws-da.png";
import awsDEAImage from "../assets/certifications/aws-dea.png";
import awsDOEPImage from "../assets/certifications/aws-doep.png";
import awsDSImage from "../assets/certifications/aws-ds.png";
import awsSAAImage from "../assets/certifications/aws-saa.png";
import awsSAPImage from "../assets/certifications/aws-sap.png";
import awsSOAImage from "../assets/certifications/aws-soa.png";
import awsSSImage from "../assets/certifications/aws-ss.png";
import azAAImage from "../assets/certifications/az-aa.png";
import azFundamentalsImage from "../assets/certifications/az-fundamentals.png";
import azSAEImage from "../assets/certifications/az-sae.png";
import azAIFundamentalsImage from "../assets/certifications/azure-ai-fundamentals.png";
import gcpCDL from "../assets/certifications/gcp-cdl.png";
import togafImage from "../assets/certifications/togaf.png";
import comptiaSec from "../assets/certifications/comptia-sec.svg";
import comptiaNet from "../assets/certifications/comptia-net.svg";
import comptiaProject from "../assets/certifications/comptia-project.svg";
import oswpImage from "../assets/certifications/oswp.svg";

const certifications: { title: string, image: string}[] = [
    {
        title: "AWS Certified Advanced Networking – Specialty",
        image: awsANSImage,
    },
    {
        title: "AWS Certified Cloud Practitioner",
        image: awsCPImage,
    },
    {
        title: "AWS Certified AI Practitioner",
        image: awsAIPImage,
    },
    {
        title: "AWS Certified Developer – Associate",
        image: awsDAImage,
    },
    {
        title: "AWS Certified: Data Engineer – Associate",
        image: awsDEAImage,
    },
    {
        title: "AWS Certified DevOps Engineer – Professional",
        image: awsDOEPImage,
    },
    {
        title: "AWS Certified Database – Specialty",
        image: awsDSImage,
    },
    {
        title: "AWS Certified Solutions Architect – Associate",
        image: awsSAAImage,
    },
    {
        title: "AWS Certified Solutions Architect – Professional",
        image: awsSAPImage,
    },
    {
        title: "AWS Certified SysOps Administrator – Associate",
        image: awsSOAImage,
    },
    {
        title: "AWS Certified Security – Specialty",
        image: awsSSImage,
    },
    {
        title: "Microsoft Certified: Azure Administrator Associate",
        image: azAAImage,
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        image: azFundamentalsImage,
    },
    {
        title: "Microsoft Certified: Azure Solutions Architect Expert",
        image: azSAEImage,
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals",
        image: azAIFundamentalsImage,
    },
    {
        title: "Cloud Digital Leader",
        image: gcpCDL,
    },
    {
        title: "The Open Group Certified: TOGAF® 9 Foundation",
        image: togafImage,
    },
    {
        title: "CompTIA Project+ Certification",
        image: comptiaProject,
    },
    {
        title: "CompTIA Network+ Certification",
        image: comptiaNet,
    },
    {
        title: "CompTIA Security+ Certification",
        image: comptiaSec,
    },
    {
        title: "OffSec Wireless Professional (OSWP)",
        image: oswpImage,
    },
];

export default certifications;