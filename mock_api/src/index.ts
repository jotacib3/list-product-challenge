import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  interface Product {
    id: ID!
    name: String!
    sellerName: String!
    image: String!
    price: Float!
  }

  type SimpleProduct implements Product {
    id: ID!
    name: String!
    sellerName: String!
    image: String!
    price: Float!
    inventory: Int!
  }
  
  type RentableProduct implements Product {
    id: ID!
    name: String!
    sellerName: String!
    image: String!
    price: Float!
    rentalType: RentalType!
    availability: String!
  }

  type SpaceProduct implements Product {
    id: ID!
    name: String!
    sellerName: String!
    image: String!
    price: Float!
    location: String!
    availability: String!
  }
  
  enum RentalType {
    NIGHT
    HOUR
  }

  type Query {
    products: [Product!]!
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Product: {
        // en este caso decidí implementar el resolver type de esta manera en
        // lugar de definir una propiedad type para cada producto.
        __resolveType(product) {
            if (product.inventory !== undefined) return 'SimpleProduct';
            if (product.rentalType !== undefined) return 'RentableProduct';
            return 'SpaceProduct';
        },
    },
    Query: {
        products: () => [
            {
                id: '1',
                name: 'Bebida',
                sellerName: 'Vendedor 1',
                image: 'https://www.shbarcelona.es/blog/es/wp-content/uploads/2014/07/19273634_xl.jpg',
                price: 10.99,
                inventory: 100,
            },
            {
                id: '2',
                name: 'Mesa',
                sellerName: 'Vendedor 2',
                image: 'https://th.bing.com/th/id/R.33867c8c85fb35973ea942deb1affaa2?rik=Gg55%2f2eMKMm3tg&riu=http%3a%2f%2fwww.pokerproductos.com%2fWebRoot%2fStoreES%2fShops%2f61976209%2f4D3F%2f07EA%2f8A46%2fF9B0%2f3645%2fC0A8%2f29BB%2fBFC4%2fMesa_de_poker_redonda_CAIMAN_OCIO_negra_c.jpg&ehk=k2wZMR7EQfWAmVHegvKg1yOSaiLsS0b24gYhkFD4Zo0%3d&risl=&pid=ImgRaw&r=0',
                price: 5.99,
                rentalType: 'HOUR',
                availability: '2022-01-01',
            },
            {
                id: '3',
                name: 'Salón de fiestas',
                sellerName: 'Vendedor 3',
                image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                price: 200.99,
                location: 'Ciudad de México',
                availability: '2022-01-01',
            },
        ],
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Run index
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);