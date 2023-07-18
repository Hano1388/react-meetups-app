import classNames from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={classNames.main}>{children}</main>
    </>
  );
};

export default Layout;
