export interface RequirePost {
  body: string;
  title: string;
}

export interface Post extends RequirePost {
  id: number;
  userId: number;
}

export type KeyofPost = keyof RequirePost;

export interface Filter {
  sort: KeyofPost | null;
  query: KeyofPost | null;
}

export interface Comments {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface AuthContextType {
  isAuth: number;
  setIsAuth: (number: number) => void | undefined;
}
