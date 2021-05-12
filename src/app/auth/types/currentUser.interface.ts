export interface ICurrentUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  token: string;
  bio: string | null;
  image: string | null;
}
