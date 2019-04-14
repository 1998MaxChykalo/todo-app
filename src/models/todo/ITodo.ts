import { TodoStatus } from "./TodoStatus";

export default interface ITodo {
  id: number;
  text: string;
  status?: TodoStatus;
  createdAt: Date;
  tags?: string[];
  estimatedTime: number;
  timeTillEnd?: number;
}