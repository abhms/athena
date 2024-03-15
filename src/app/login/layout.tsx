import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login Your Account",
  description: "Athena a place for Student",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
