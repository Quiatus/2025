export interface User {
  id: number;
  userFirstName: string; 
  userLastName: string;
  email: string
}

export interface Post {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  userFirstName: string;
  isLiked: boolean;
}

export interface UploadPost {
  userId: number;
  imageUrl: string;
  title: string;
  content: string;
}


export interface Like {
  userId: number;
  postId: number
}