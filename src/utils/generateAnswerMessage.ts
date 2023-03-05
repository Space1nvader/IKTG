import { NEGATIVE_MESSAGES, POSITIVE_MESSAGES } from 'constant';

function generateRandomInteger(messages: Array<string>) {
  return messages[Math.floor(Math.random() * messages.length)];
}

export const generateAnswerMessage = (isPositive: boolean) =>
  generateRandomInteger(isPositive ? POSITIVE_MESSAGES : NEGATIVE_MESSAGES);
