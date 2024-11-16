
# 📝 SmartNote Live Link

**SmartNote Live Link** is a cutting-edge web application designed for **real-time collaboration** and **document management**. Built with modern technologies like **Next.js**, **TypeScript**, **Firebase Firestore**, **Clerk**, and **Liveblocks**, it provides a seamless, collaborative experience with robust authentication and real-time editing capabilities.

---

## ✨ Features

- 🔄 **Real-Time Collaboration**: Powered by Liveblocks, users can collaborate on documents with live cursors and rich text editing in real-time.
- 🖋️ **Rich Text Editor**: A sleek editor with support for conflict-free real-time editing.
- 🔐 **Authentication**: Secure and seamless user authentication via Clerk.
- 🚀 **Backend API**: Serverless API using Hono for scalable and secure backend operations with CORS protection.
- ☁️ **Cloud Storage**: User documents are stored and managed securely using Firebase Firestore.
- 🎨 **Modern UI/UX**: Built with Shadcn components for a responsive and user-friendly interface.

---

## 🛠️ Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/) (React Framework), TypeScript
- **Backend**: Serverless API with [Hono](https://hono.dev/)
- **Real-Time Collaboration**: [Liveblocks](https://liveblocks.io/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: [Firebase Firestore](https://firebase.google.com/products/firestore)
- **UI Components**: Shadcn and TailwindCSS
- **State Management**: Liveblocks and custom hooks

---

## 📂 Project Structure

```
SmartNote
├── actions                    # Action utilities
│   └── actions.ts
├── components.json            # UI components configuration
├── firebase-admin.ts          # Firebase Admin SDK configuration
├── firebase.ts                # Firebase client-side configuration
├── liveblocks.config.ts       # Liveblocks configuration
├── next.config.mjs            # Next.js configuration
├── next-env.d.ts              # TypeScript environment definitions
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── public                     # Public assets
│   ├── documents-dark.png
│   ├── documents.png
│   ├── logo-black.svg
│   ├── logo-white.svg
│   ├── reading-dark.png
│   └── reading.png
├── README.md                  # Project documentation
├── service_key.json           # Firebase service account key
├── src                        # Source code
│   ├── app                    # Next.js app router and pages
│   │   ├── auth-endpoint
│   │   │   └── route.ts       # Authentication API route
│   │   ├── doc
│   │   │   ├── [id]
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Main layout
│   │   └── page.tsx           # Homepage
│   ├── components             # Reusable components
│   │   ├── ui                 # UI components
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── tooltip.tsx
│   │   ├── Avatars.tsx
│   │   ├── Editor.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeProvider.tsx
│   ├── lib                    # Utility functions and hooks
│   │   ├── liveblocks.ts
│   │   ├── stringToColor.ts
│   │   ├── useOwner.ts
│   │   └── utils.ts
│   └── middleware.ts          # Middleware for request handling
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
└── types                      # TypeScript type definitions
    ├── globals.d.ts
    └── types.ts
```

---

## 📋 Key Files and Directories

- **`actions/actions.ts`**: Contains reusable server-side actions.
- **`src/components`**: Modular React components such as `Avatars.tsx`, `Editor.tsx`, and `Sidebar.tsx`.
- **`src/lib`**: Utility functions (`utils.ts`, `liveblocks.ts`) and custom hooks.
- **`firebase-admin.ts`** & **`firebase.ts`**: Firebase configuration for client and admin SDK.
- **`liveblocks.config.ts`**: Liveblocks configuration for real-time features.
- **`tailwind.config.ts`**: TailwindCSS configuration.
- **`tsconfig.json`**: TypeScript configuration file.

---

## 🚀 Getting Started

### Prerequisites

- 🖥️ **Node.js** (v16 or later)
- 🔥 **Firebase project**
- 🛡️ **Clerk account**
- 🌀 **Liveblocks API key**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/smartnote.git
   cd smartnote
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory with the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-api
   NEXT_PUBLIC_FIREBASE_CONFIG=your-firebase-config
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your-liveblocks-key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🌐 Deployment

The application is serverless and can be deployed to platforms like **Vercel** or **Netlify**. Ensure the appropriate environment variables are set up on your deployment platform.

---

## 🤝 Contributing

Contributions are welcome! Please **fork** the repository and create a **pull request** with your changes.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📸 Screenshots

| Feature                | Preview                          |
|------------------------|-----------------------------------|
| 🖋️ Document Editor      | ![Editor](public/documents.png)  |
| 🔄 Real-Time Collaboration | ![Collaboration](public/documents-dark.png) |

---

Enjoy coding! 🚀
```
