# NexForm - Smart Form Management Tool

🚀 **Currently in active development** - A smart form management tool that allows users to create, manage, and share forms with advanced features for collecting and analyzing responses.

## Project Structure

src/
├── app/
│   ├── layout.tsx          (Main layout)
│   ├── page.tsx            (Dashboard - list forms)
│   ├── forms/
│   │   ├── new/
│   │   │   └── page.tsx    (Create new form)
│   │   └── [id]/
│   │       ├── page.tsx    (Edit form)
│   │       └── responses/
│   │           └── page.tsx (View responses)
│   └── preview/
│       └── [id]/
│           └── page.tsx    (Public form - for respondents)
│
├── components/
│   ├── FormBuilder.tsx     (Create/edit form)
│   ├── FormPreview.tsx     (Show form preview)
│   ├── QuestionEditor.tsx  (Edit one question)
│   └── FormList.tsx        (List of forms)
│
├── types/
│   └── index.ts            (All TypeScript interfaces)
│
└── lib/
    └── storage.ts          (localStorage functions for now)

## Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
