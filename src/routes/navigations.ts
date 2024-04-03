export enum HomePaths {
  HOME = '/'
}

export const APP_ROUTES_PATHS = {
  ...HomePaths
} as const;

export type AppRouteType = typeof APP_ROUTES_PATHS;
