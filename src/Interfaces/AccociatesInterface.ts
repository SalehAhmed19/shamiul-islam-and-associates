export interface AssociatesInterface {
    _id?: string;
    name: string;
    court: string;
    position: string;
    image: { url: string; public_id: string } | null;
}