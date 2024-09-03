import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        </div>
        <nav className="mt-10">
          <Link href="/admin" className={`nav-link ${pathname === '/admin' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link href="/admin/coffee-list" className={`nav-link ${pathname === '/admin/coffee-list' ? 'active' : ''}`}>
            Coffee List
          </Link>
          <Link href="/admin/coffee/add-coffee" className={`nav-link ${pathname === '/admin/coffee/add-coffee' ? 'active' : ''}`}>
            Add Coffee
          </Link>
          <Link href="/admin/edit-coffee" className={`nav-link ${pathname === '/admin/edit-coffee' ? 'active' : ''}`}>
            Edit Coffee
          </Link>
        </nav>
      </aside>
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
