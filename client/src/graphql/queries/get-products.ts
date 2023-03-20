import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            image
            price
            name
            sellerName
            ... on SimpleProduct {
                inventory
            }
            ... on RentableProduct {
                availability
                rentalType
            }
            ... on SpaceProduct {
                availability
                location
            }
        }
    }
`;

export default GET_PRODUCTS;