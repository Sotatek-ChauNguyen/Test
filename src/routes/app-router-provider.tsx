import { Suspense, useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazyImport } from '../utils';
import { APP_ROUTES_PATHS } from './navigations';
import { PublicRoute } from './PublicRoute';
import { RootLayout } from '@/components/layout';

const { HomePage } = lazyImport(() => import('@/module'), 'HomePage');
const { ErrorPage } = lazyImport(
  () => import('@/components/layout'),
  'ErrorPage'
);
const { NotFoundPage } = lazyImport(
  () => import('@/components/layout'),
  'NotFoundPage'
);

export function AppRouterProvider() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          errorElement: <ErrorPage />,
          element: <RootLayout />,
          children: [
            {
              path: '/',
              element: <PublicRoute />,
              children: [
                {
                  index: true,
                  path: APP_ROUTES_PATHS.HOME,
                  element: <HomePage />
                },
                {
                  path: '*',
                  element: <NotFoundPage />
                }
              ]
            }
          ]
        }
      ]),
    []
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider
        router={router}
        fallbackElement={<></>}
      />
    </Suspense>
  );
}
