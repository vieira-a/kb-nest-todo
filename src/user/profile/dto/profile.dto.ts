export class ProfileDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly username: string,
    readonly email: string,
    readonly createdAt: string,
    readonly updatedAt: string,
  ) {}
}
