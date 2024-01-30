import { performGraphqlQuery } from '$lib/utils/query'
export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
      {
        allArticles {
          typeofpost
          slug
          id
          titel
        }
      }
    `
  })
  console.log(responseData)

  return responseData.data;
}
