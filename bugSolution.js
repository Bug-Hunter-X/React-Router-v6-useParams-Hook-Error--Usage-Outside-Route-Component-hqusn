The solution is to move the `useParams` hook inside the component that is rendered within a route. For example:

```javascript
// Correct usage
function MyComponent() {
  const params = useParams();
  const id = params.id; // Access the parameter
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```
Now, `useParams` is properly utilized within `MyComponent`, which is rendered via a `Route`.  The parameter `:id` will be accessible and the error is resolved.