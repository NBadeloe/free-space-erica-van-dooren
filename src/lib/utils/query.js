import { PUBLIC_DATOCMS_READ_ONLY_API_TOKEN } from '$env/static/public'
export async function performGraphqlQuery({query, variables = {}}) {
  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_READ_ONLY_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  return await response.json()
}