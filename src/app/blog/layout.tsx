import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Write Blog",
  description: "Athena a place for Student",
};
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      {children}
      </>
    );
  }
  