import { Role } from './role';

export class User {
  username: string;
  role: Role;
  token?: string;
  firstName?: string;
  lastName?: string;
  trades: number;
  earnings: number;
  wins: number;
  wagered: number;
  available: number;
}
