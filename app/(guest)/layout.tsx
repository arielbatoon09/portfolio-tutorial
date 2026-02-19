import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-6">
        {children}
      </div>
      <Footer />
    </main>
  );
}