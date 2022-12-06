import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'gzyxscsf',
    dataset:'production',
    apiVersion:'2022-11-23',
    usecdn:'true',
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);