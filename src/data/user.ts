import { IRow } from '../exporter/exporter'

export class User implements IRow {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
  ) {}

  toRow(): string[] {
    return [this.id.toString(), this.name, this.email, this.phone]
  }
}

export const users = [
  new User(1, 'Alice', 'alice@email.com', '123-456-7890'),
  new User(2, 'Bob', 'bob@email.com', '123-456-7890'),
  new User(3, 'Charlie', 'charlie@email.com', '123-456-7890'),
]
