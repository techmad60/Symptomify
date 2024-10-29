// /app/signup/layout.tsx
export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        {children}
      </div>
    );
  }
  