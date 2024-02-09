export interface MyComponentProps {
    text: string;
    image: ImageProps;
    products: Array<ProductProps>
}

export interface ImageProps {
    image: string;
    alt: string;
}

export interface ProductProps {
    id: string;
    title: string;
    image: string;
    shortdesc: string;
}