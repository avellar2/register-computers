// filepath: /C:/Projetos/register-computers/src/pages/_app.tsx

import { SessionProvider } from 'next-auth/react';
import ProtectedRoute from '../components/ProtectedRoute';
import '../app/globals.css';

const noAuthRequired = ['/', '/login'];
function MyApp({ Component, pageProps, router }) {
  return (
    <SessionProvider session={pageProps.session}>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </SessionProvider>
  );
}

export default MyApp;
