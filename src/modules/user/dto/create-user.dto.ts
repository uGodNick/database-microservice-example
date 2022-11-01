interface CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly passwordHash: string;
  readonly imageUrl?: string;
}
