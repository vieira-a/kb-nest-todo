export class TaskEntity {
  id: string
  title: string;
  description: string;
  status: 'open' | 'doing' | 'done';
}

