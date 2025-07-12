import "../../style/globals.css";
// app/auth/layout.tsx


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="fa" dir="rtl" >
      <body >
        <div>
          {children}
        </div>
      </body>
    </html>

  );
}

