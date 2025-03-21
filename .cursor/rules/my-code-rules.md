# Persistence

when trying to read or write to the database, please first check existing persistence files inside the persitence directory that related to the new feature. If non exist, create one that match the name of the primary data model

# Use Cases

Make sure no front end code ever try to direction access the drizzle database object. Instead, they should be invoking use cases, and those use cases should be invoking persistence methods.

# Server Functions

In the react components, never try to call a use case directly; instead, please create a server action using the proper validators, middlewares, and handlers.

# UI / UX

Please make sure all async requests show some type of loading indicator. This often means using a useMutation and wrapping the server function so I get access to loading boolean which I Can use to show spinners. Disable the relevant buttons when the async action is running.

# Loaders

When a page is loading, please remember to add a loader to the route which should invoke a loader server function to fetch data. Do not try to invoke a use case directly from a tanstack loader.

# Loader & Server Functions

Here is a basic example of how to create a loader for a route, invoke a loader server function, fetch some data, and then access it in the route

```
const loaderFn = createServerFn().handler(async () => {
  const segments = await getSegments();
  return { segments };
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => loaderFn(),
});

function Home() {
  const { segments } = Route.useLoaderData();
```
