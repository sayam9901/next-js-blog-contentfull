// services/contentful.js
import { createClient } from 'contentful';

const client = createClient({
    space : "pm52tved2ub7" ,
    accessToken: "miz9Vpz3QcXel3DSRKgHnLKzQNtmamZL3M_RZYHs_QQ"
});

export const getEntriesByType = async (type:any) => {
  try {
    const response = await client.getEntries({
      content_type: type,
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return [];
  }
};

export const getBlogPosts = async () => {
    const results = await getEntriesByType('blog')
    const blogPosts = results.map((blog) => blog.fields)
    return blogPosts
  }
