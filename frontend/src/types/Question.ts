import { Answer } from './Answer';

export interface Question {
    id: number;
    title: string;
    text: string;
    date: string;
    answers: Answer[];
}
  
  