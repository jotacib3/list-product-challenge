export interface IProduct {
    id: string;
    name: string;
    sellerName: string;
    image: string;
    price: number;
    __typename_: string
}

export interface ISimpleProduct extends IProduct {
    inventory: number;
}

enum RentalType {
    NIGHT,
    HOUR,
}

export interface IRentableProduct extends IProduct {
    rentalType: RentalType;
    availability: string;
}

export interface ISpaceProduct extends IProduct {
    location: string;
    availability: string;
}

export type IDetailedProduct = ISimpleProduct | IRentableProduct | ISpaceProduct;

export interface IProductResponse {
    products: IDetailedProduct[]
}