export const prerender = true;
import { performGraphqlQuery } from '$lib/utils/query'
export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
      {
        allReviews {
          content
          name
          afbeelding {
            url
          }
        }
        homepage {
          gepubliceerdeVerhalen
          werkzaamheden
          afbeelding {
            url
          }
          introductie
          introducties {
            blocks
            value
          }
        }
      }
    `
  })
console.log(responseData.data)
  return responseData.data;
  
}
