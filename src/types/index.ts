// ts interfaces for the NexForm 
// shape of data

export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Form {
  id: string;
  user_id: string;
  title: string;
  description: string;
  is_published: boolean;
  fields: FormField[];
  created_at: string;
}

export interface FormField {
  id: string;
  form_id: string;
  label: string;
  field_type: 'text' | 'email' | 'multiple_choice' | 'checkbox' | 'date';
  required: boolean;
  options?: string[];  // For multiple choice
  order_index: number;
}

export interface FormResponse {
  id: string;
  form_id: string;
  answers: ResponseAnswer[];
  submitted_at: string;
}

export interface ResponseAnswer {
  field_id: string;
  value: string;
}