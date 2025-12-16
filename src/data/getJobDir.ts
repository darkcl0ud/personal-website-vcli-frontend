export function getJobDir(idx: number, company: string): string {

    return `job${idx}_${company.replace(/ /g, "_").toLowerCase()}`;
}