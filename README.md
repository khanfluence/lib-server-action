Build the library with `npm run build`, then run the dev server with
`npm run --prefix next-app dev`.

Visit `/app` for a working, inline server action. Visit `/lib` for a broken,
external one.

This error occurs with an external server action that uses `cookies()`:

```
Uncaught (in promise) Error: Invariant: cookies() expects to have requestAsyncStorage, none available.
```
