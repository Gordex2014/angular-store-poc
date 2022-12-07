/**
 * Truncates a string to a specified length
 * @param text The text to truncate
 * @param length The length to truncate the text to, defaults to 100
 * @returns The truncated text if the text is longer than the length, otherwise the original text
 */
export function truncateText(text: string, length: number = 100): string {
  if (text.length <= length) {
    return text;
  }

  // Add an ellipsis to the end of the truncated text
  return text.slice(0, length) + '\u2026';
}
