

export function ComputeButton (event: React.MouseEvent<Element, MouseEvent>) {
    const e = event.target as HTMLElement;
    console.log(e.innerText);
}