import Header from './Header';

const Layout = ({ children, className }) => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className={className}>
      {children}
    </main>
  </div>
);

export default Layout;