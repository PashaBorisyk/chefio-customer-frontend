export class User {
  username: string;
  role: string;
  sale: number;

  isAdmin(): boolean {
    return this.role == 'ROLE_ADMIN';
  }
}
