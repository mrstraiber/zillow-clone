import Navbar from '@/components/layout/NavBar';
import Sidebar from '@/components/layout/SideBar';
import Footer from '@/components/layout/Footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-layout">
      <div className="[grid-area:header]">
        <Navbar />
      </div>
      <div className="[grid-area:sidebar]">
        <Sidebar />
      </div>
      <main className="[grid-area:main]">{children}</main>
      <div className="[grid-area:footer]">
        <Footer />
      </div>
    </div>
  );
}
