import { parseJSON } from '@utils/helpers';

interface FetchRequest {
  url: string;
  method: "POST" | "GET";
  body?: any;
}

interface FetchResponse {
  response?: any;
  error?: any;
}

export const useFetch = () => {
  const getHeaders = () => {
    return {
      Accept: "application/json",
      "Content-Type": 'application/json',
    };
  }

  const fetchAPI = ({
    url,
    method,
    body,
  }: FetchRequest): Promise<FetchResponse> => {
    const headers = getHeaders();
    return fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    })
      .then(async(response) => {
        const data = await response.text();
        const result = parseJSON(data);
        return { response: result };
      })
      .catch((error) => {
        return { error };
      });
  };

  return {
    fetchAPI
  }
}