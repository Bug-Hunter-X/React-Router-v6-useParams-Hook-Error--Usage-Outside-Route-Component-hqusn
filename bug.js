In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This leads to an error because `useParams` relies on the routing context which is only available within the scope of a route. For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // Error! useParams is not available here
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```

The `useParams` hook must be called within `MyComponent` to function properly if `MyComponent` is rendered by a `Route` component.