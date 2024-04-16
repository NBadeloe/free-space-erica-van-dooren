export const prerender = true;
import { performGraphqlQuery } from '$lib/utils/query'
export async function load({}) {
 
  const responseData = await performGraphqlQuery({
    query: `
      {
        copywriter {
            content
          }
          redactie {
            manuscript
            redigeren
            text4
            text5
            text6
            text7
            redactieProeflezen
            redactieWebsite
          }
          schrijfcoach {
            content
          }
      }
    `
  })

  return responseData.data;
  
}
