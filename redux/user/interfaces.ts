export interface initialUserValue {
  user: User;
  token: Token;
  isLogged?: boolean;
};

interface Token {
  type: string;
  token: string;
  expires_at: string | Date;
}

export interface User {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string | null;
  token_created_at: Date | null;
  created_at: string | Date;
  updated_at: string | Date;
  picture?: null;
}