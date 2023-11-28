import { performGraphqlQuery } from '$lib/utils/query'

export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
      {
        allBlogs {
    id
    titel
    _status
    _firstPublishedAt
  }
      }
    `
  })


  return responseData.data
}
