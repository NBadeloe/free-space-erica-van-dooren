export const prerender = true;
import { performGraphqlQuery } from '$lib/utils/query'
export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
      {
        allReviews {
            id
            content
            name
            afbeelding {
              url
            }
          }
      }
    `
  })
console.log(responseData)
  return responseData.data;
  
}
