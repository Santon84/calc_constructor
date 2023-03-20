export interface LibraryItem {
    id: number,
    component: LibraryComponents | null,
    order: number
}

export enum LibraryComponents  {
    Display = 'Display',
    Operators = 'Operators',
    Numbers = 'Numbers',
    EqualButton = 'EqualButton',
}