import SideNav from "@/components/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <div className="flex h-screen">
            <SideNav/>
            <div className="flex-1 p-6 bg-gray-100">
              {children}
            </div>
          </div>
  );
}
