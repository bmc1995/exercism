export function hey(message: string): string {
  message = message.replace(/[\d|\s]/g, "");

  const isQuestion: boolean = message.endsWith("?");
  const onlyLetters = message.replace(/[^\w]/g, "");
  const isYelledAt: boolean =
    onlyLetters !== "" && onlyLetters === onlyLetters.toUpperCase();

  if (!message) return "Fine. Be that way!";
  if (isQuestion && !isYelledAt) return "Sure.";
  if (isYelledAt && isQuestion) return "Calm down, I know what I'm doing!";
  if (isYelledAt) return "Whoa, chill out!";

  return "Whatever.";
}
