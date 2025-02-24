import { CoreMessage, Message } from 'ai';

export type QueryMessage = CoreMessage[] | Omit<Message, 'id'>[];
