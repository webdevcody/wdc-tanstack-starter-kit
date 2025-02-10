/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AboutImport } from './routes/about'
import { Route as DashboardRouteImport } from './routes/dashboard/route'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as CoursesIndexImport } from './routes/courses/index'
import { Route as DashboardFoodImport } from './routes/dashboard/food'
import { Route as CoursesAddImport } from './routes/courses/add'
import { Route as DashboardExerciseIndexImport } from './routes/dashboard/exercise.index'
import { Route as CoursesCourseIdIndexImport } from './routes/courses/$courseId/index'
import { Route as DashboardExerciseAddImport } from './routes/dashboard/exercise.add'
import { Route as CoursesCourseIdSegmentsSegmentIdImport } from './routes/courses/$courseId/segments.$segmentId'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const CoursesIndexRoute = CoursesIndexImport.update({
  id: '/courses/',
  path: '/courses/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardFoodRoute = DashboardFoodImport.update({
  id: '/food',
  path: '/food',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const CoursesAddRoute = CoursesAddImport.update({
  id: '/courses/add',
  path: '/courses/add',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExerciseIndexRoute = DashboardExerciseIndexImport.update({
  id: '/exercise/',
  path: '/exercise/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const CoursesCourseIdIndexRoute = CoursesCourseIdIndexImport.update({
  id: '/courses/$courseId/',
  path: '/courses/$courseId/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardExerciseAddRoute = DashboardExerciseAddImport.update({
  id: '/exercise/add',
  path: '/exercise/add',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const CoursesCourseIdSegmentsSegmentIdRoute =
  CoursesCourseIdSegmentsSegmentIdImport.update({
    id: '/courses/$courseId/segments/$segmentId',
    path: '/courses/$courseId/segments/$segmentId',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/courses/add': {
      id: '/courses/add'
      path: '/courses/add'
      fullPath: '/courses/add'
      preLoaderRoute: typeof CoursesAddImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/food': {
      id: '/dashboard/food'
      path: '/food'
      fullPath: '/dashboard/food'
      preLoaderRoute: typeof DashboardFoodImport
      parentRoute: typeof DashboardRouteImport
    }
    '/courses/': {
      id: '/courses/'
      path: '/courses'
      fullPath: '/courses'
      preLoaderRoute: typeof CoursesIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/exercise/add': {
      id: '/dashboard/exercise/add'
      path: '/exercise/add'
      fullPath: '/dashboard/exercise/add'
      preLoaderRoute: typeof DashboardExerciseAddImport
      parentRoute: typeof DashboardRouteImport
    }
    '/courses/$courseId/': {
      id: '/courses/$courseId/'
      path: '/courses/$courseId'
      fullPath: '/courses/$courseId'
      preLoaderRoute: typeof CoursesCourseIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/exercise/': {
      id: '/dashboard/exercise/'
      path: '/exercise'
      fullPath: '/dashboard/exercise'
      preLoaderRoute: typeof DashboardExerciseIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/courses/$courseId/segments/$segmentId': {
      id: '/courses/$courseId/segments/$segmentId'
      path: '/courses/$courseId/segments/$segmentId'
      fullPath: '/courses/$courseId/segments/$segmentId'
      preLoaderRoute: typeof CoursesCourseIdSegmentsSegmentIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardFoodRoute: typeof DashboardFoodRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardExerciseAddRoute: typeof DashboardExerciseAddRoute
  DashboardExerciseIndexRoute: typeof DashboardExerciseIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardFoodRoute: DashboardFoodRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardExerciseAddRoute: DashboardExerciseAddRoute,
  DashboardExerciseIndexRoute: DashboardExerciseIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/courses/add': typeof CoursesAddRoute
  '/dashboard/food': typeof DashboardFoodRoute
  '/courses': typeof CoursesIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/exercise/add': typeof DashboardExerciseAddRoute
  '/courses/$courseId': typeof CoursesCourseIdIndexRoute
  '/dashboard/exercise': typeof DashboardExerciseIndexRoute
  '/courses/$courseId/segments/$segmentId': typeof CoursesCourseIdSegmentsSegmentIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/courses/add': typeof CoursesAddRoute
  '/dashboard/food': typeof DashboardFoodRoute
  '/courses': typeof CoursesIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/exercise/add': typeof DashboardExerciseAddRoute
  '/courses/$courseId': typeof CoursesCourseIdIndexRoute
  '/dashboard/exercise': typeof DashboardExerciseIndexRoute
  '/courses/$courseId/segments/$segmentId': typeof CoursesCourseIdSegmentsSegmentIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/courses/add': typeof CoursesAddRoute
  '/dashboard/food': typeof DashboardFoodRoute
  '/courses/': typeof CoursesIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/exercise/add': typeof DashboardExerciseAddRoute
  '/courses/$courseId/': typeof CoursesCourseIdIndexRoute
  '/dashboard/exercise/': typeof DashboardExerciseIndexRoute
  '/courses/$courseId/segments/$segmentId': typeof CoursesCourseIdSegmentsSegmentIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/about'
    | '/login'
    | '/courses/add'
    | '/dashboard/food'
    | '/courses'
    | '/dashboard/'
    | '/dashboard/exercise/add'
    | '/courses/$courseId'
    | '/dashboard/exercise'
    | '/courses/$courseId/segments/$segmentId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/courses/add'
    | '/dashboard/food'
    | '/courses'
    | '/dashboard'
    | '/dashboard/exercise/add'
    | '/courses/$courseId'
    | '/dashboard/exercise'
    | '/courses/$courseId/segments/$segmentId'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/about'
    | '/login'
    | '/courses/add'
    | '/dashboard/food'
    | '/courses/'
    | '/dashboard/'
    | '/dashboard/exercise/add'
    | '/courses/$courseId/'
    | '/dashboard/exercise/'
    | '/courses/$courseId/segments/$segmentId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  AboutRoute: typeof AboutRoute
  LoginRoute: typeof LoginRoute
  CoursesAddRoute: typeof CoursesAddRoute
  CoursesIndexRoute: typeof CoursesIndexRoute
  CoursesCourseIdIndexRoute: typeof CoursesCourseIdIndexRoute
  CoursesCourseIdSegmentsSegmentIdRoute: typeof CoursesCourseIdSegmentsSegmentIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  AboutRoute: AboutRoute,
  LoginRoute: LoginRoute,
  CoursesAddRoute: CoursesAddRoute,
  CoursesIndexRoute: CoursesIndexRoute,
  CoursesCourseIdIndexRoute: CoursesCourseIdIndexRoute,
  CoursesCourseIdSegmentsSegmentIdRoute: CoursesCourseIdSegmentsSegmentIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/about",
        "/login",
        "/courses/add",
        "/courses/",
        "/courses/$courseId/",
        "/courses/$courseId/segments/$segmentId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard/route.tsx",
      "children": [
        "/dashboard/food",
        "/dashboard/",
        "/dashboard/exercise/add",
        "/dashboard/exercise/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/courses/add": {
      "filePath": "courses/add.tsx"
    },
    "/dashboard/food": {
      "filePath": "dashboard/food.tsx",
      "parent": "/dashboard"
    },
    "/courses/": {
      "filePath": "courses/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/exercise/add": {
      "filePath": "dashboard/exercise.add.tsx",
      "parent": "/dashboard"
    },
    "/courses/$courseId/": {
      "filePath": "courses/$courseId/index.tsx"
    },
    "/dashboard/exercise/": {
      "filePath": "dashboard/exercise.index.tsx",
      "parent": "/dashboard"
    },
    "/courses/$courseId/segments/$segmentId": {
      "filePath": "courses/$courseId/segments.$segmentId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
