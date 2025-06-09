import { data } from './data'

export async function fetchData() {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const response = await Promise.resolve(data)
  return response
}
