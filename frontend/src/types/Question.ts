import { Answer } from './Answer';

export type Question = {
    id: number;
    title: string;
    text: string;
    date: string;
    answers: Answer[];
} | null | undefined;
  
  