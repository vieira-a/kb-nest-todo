export class LoadTaskDTO {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly status: string,
    readonly createdAt: string,
    readonly updatedAt: string,
  ) {}
}
