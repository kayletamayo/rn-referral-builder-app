export const parseJSON = (response: any) => {
  try {
    if (response) {
      return JSON.parse(response);
    }

    // if blank response, return empty object
    return {}
  } catch (exception) {
    throw new Error(`Error parsing JSON response: ${response}`);
  }
}