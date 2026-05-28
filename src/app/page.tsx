'use client';

import { useState, useEffect } from 'react';
import { Form } from '@/types';
import FormList from '@/components/FormList';
import Link from 'next/link';

export default function Dashboard() {
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    // Load from localStorage (temporary - no backend yet)
    const saved = localStorage.getItem('forms');
    if (saved) {
      setForms(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Forms</h1>
          <Link href="/forms/new">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              + New Form
            </button>
          </Link>
        </div>
        
        {forms.length === 0 ? (
          <p className="text-gray-600">No forms yet. Create your first one!</p>
        ) : (
          <FormList forms={forms} />
        )}
      </div>
    </div>
  );
}