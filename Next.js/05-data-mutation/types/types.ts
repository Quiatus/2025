export interface User {
  id: number;
  firstName: string; 
  lastName: string;
  email: string
}

export interface Post {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number
}

export interface Like {
  userId: number;
  postId: number
}