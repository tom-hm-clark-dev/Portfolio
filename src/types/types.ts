export interface Project {
    slug: string;
    platform: string;
    title: string;
    subtitle?: string;
    excerpt: string;
    url: string;
    hero?: string;
    images?: string[];
    roles?: string[];
    tech?: string[];
    content?: {
        type: string;
        text: string;
    }[]

}