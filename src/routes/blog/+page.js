import { performGraphqlQuery } from '$lib/utils/query'
export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
      {
        allArticles {
          id
          titel
          slug
          publicationDate: _firstPublishedAt
        }
      }
    `
  })

  return responseData.data;
}
