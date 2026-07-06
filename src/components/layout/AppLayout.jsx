import Sidebar from './Sidebar';
import Header from './Header';

function AppLayout({ children }) {
  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;