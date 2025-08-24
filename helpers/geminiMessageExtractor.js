export function geminiMessageExtractor(apiResponse) {
  return apiResponse.candidates[0].content.parts.map((part) => part.text);
}
