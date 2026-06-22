export interface FormMeal {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

export interface Meal extends Omit<FormMeal, 'image'> {
  id: string | number;
  title: string;
  image: string;
}

