export interface User {
  id: string;
  email: string;
  password_hash: string;
  name?: string;
  bio: string | null;
  profile_picture: string | null;
}
