export interface AssociatesInterface {
    name: string;
    position: string;
    image: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        youtube?: string | undefined;
    }
}