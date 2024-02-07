export function extractPage(text: string){
    const regex = /(&page=)([0-9]*)/g;
    const matches = text.matchAll(regex).next().value;
    return matches[2] ?? false;
}
