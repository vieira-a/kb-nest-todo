export class PayloadDto {
  constructor(
    readonly id: string,
    readonly iat: number,
    readonly ext: number,
  ) {}
}
