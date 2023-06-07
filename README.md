# TodoList App with Supabase Integration (Next.js)

![](https://github.com/keiloktql/supabase-todo-app/blob/main/promotion/poster-1.png)

This repository contains a TodoList application built with [Next.js](https://nextjs.org/) and integrated with [Supabase](https://supabase.io/) for authentication and database functionalities. With this app, users can create, manage, and track their tasks easily.

## Core Features

- [x] User authentication using Supabase
- [x] Create new tasks
- [x] Mark tasks as complete
- [x] Delete tasks
- [x] Beautiful UI
- [ ] Progress bar at the top when navigating between pages
- [ ] User management with Clerk

## Technologies Used

- [NextJS](https://nextjs.org)
- [Supabase](https://supabase.com)
- [Figma](https://www.figma.com)
- [Untitled UI](https://www.untitledui.com)
- [Tailwindcss](https://tailwindcss.com)

## Getting Started

To run this TodoList app locally, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/todo-app-supabase-nextjs.git`
2. Navigate to the project directory: `cd supabase-todo-app`
3. Install the dependencies: `npm i`
4. Configure the Supabase project by updating the following values in the `.env.local` file:

```bash
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

> Note: Replace `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the appropriate values from your Supabase project.

5. Run the development server: `npm run dev`
6. Open your browser and visit `http://localhost:3000` to access the TodoList app.

> Note: Before running the app, make sure you have set up your Supabase project and obtained the necessary API keys. You can find detailed instructions on how to do this in the [Supabase documentation](https://supabase.io/docs/guides/api#api-access).

## License

This project is licensed under the [MIT License](LICENSE).

## More Images

![](https://github.com/keiloktql/supabase-todo-app/blob/main/promotion/poster-1.png)
