export interface News {
    _id?: string;
    timestamp: number;
    text: string;
    title: string;
    images?: string[];
    videos?: string[];
}

export interface IClassNameProps {
    className?: string;
}