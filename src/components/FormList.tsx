'use client';  // Makes this an interactive component

import { Form } from '@/types';
import Link from 'next/link';

interface FormListProps {
  forms: Form[];
}

export default function FormList({ forms }: FormListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {forms.map((form) => (
        <Link href={`/forms/${form.id}`} key={form.id}>
          <div className="p-4 border rounded-lg hover:shadow-lg cursor-pointer transition">
            <h3 className="text-lg font-bold">{form.title}</h3>
            <p className="text-sm text-gray-600">{form.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              {form.fields.length} questions
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}