export const fetchWrapper = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const data = await fetch(
      `https://restcountries.com/v3.1${String(input)}`,
      {
        ...init,
        headers: {
          'Content-Type': 'application/json'
        }
      }
  )

  const result = await data.json()

  return result as T
}
