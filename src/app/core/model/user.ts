export class User {
  username: string;
  role: string;

  isAdmin(): boolean {
    return this.role == 'ROLE_ADMIN';
  }
}
