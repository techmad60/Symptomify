// /app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col bg-white min-h-screen justify-center items-center">
        {children}
      </div>
    );
  }
  