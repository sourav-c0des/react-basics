# React Practice App – Revision Notes

A complete summary of all React concepts learned so far. This document is designed to serve as a clear and professional reference, especially for interview preparation.

---

## 1. Components (Functional Components)

React applications are built using components.

* Functional components are the standard.
* They return JSX.
* They accept `props` and manage internal state using hooks.

---

## 2. Props vs State

### Props

* Passed from parent to child.
* Immutable.
* Used for configuration and data flow.

### State

* Internal data of a component.
* Updated using `useState`.
* Updating state triggers a re-render.

---

## 3. useState

Creates reactive component state.

```js
const [count, setCount] = useState(0);
```

Key points:

* Holds local component data.
* Changes trigger re-render.
* Resets on unmount unless lifted up.

---

## 4. useEffect

Manages side effects in components.

### Run Once on Mount

```js
useEffect(() => { ... }, []);
```

### Run on Dependency Change

```js
useEffect(() => { ... }, [value]);
```

### Cleanup

```js
useEffect(() => {
  return () => { ... };
}, []);
```

Common use cases:

* Fetching data
* Subscribing to events
* Managing timers

---

## 5. useRef

* Stores persistent values that do not trigger re-renders.
* Can reference DOM elements.

```js
const ref = useRef();
ref.current
```

Examples:

* Accessing input elements
* Storing previous state values
* Tracking non-reactive data

---

## 6. useMemo (Basic Usage)

Used to memoize expensive computations.

```js
const result = useMemo(() => compute(data), [data]);
```

Prevents recalculation unless dependencies change.

---

## 7. React.memo

Prevents unnecessary re-renders of child components when props do not change.

```js
export default React.memo(Child);
```

Useful when:

* Parent re-renders frequently
* Child props remain stable

---

## 8. useCallback

Memoizes functions to maintain stable reference identity.

```js
const handleClick = useCallback(() => {
  ...
}, []);
```

Necessary when passing callbacks to `React.memo` components.

---

## 9. Controlled vs Uncontrolled Components

### Controlled Inputs

React controls the value.

```js
value={name}
onChange={e => setName(e.target.value)}
```

### Uncontrolled Inputs

The DOM manages the value.

```js
const emailRef = useRef();
emailRef.current.value
```

Controlled inputs are used for reactive forms. Uncontrolled inputs are simpler but less flexible.

---

## 10. Context API

Used for global application state.
Steps:

1. Create context.
2. Create provider.
3. Wrap the application.
4. Consume via `useContext` or custom hooks.

Eliminates prop drilling.

---

## 11. React Router

### Basic Routing

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user/:id" element={<User />} />
</Routes>
```

### Dynamic Route Params

```js
const { id } = useParams();
```

### Navigation Links

```jsx
<Link to="/about">About</Link>
```

---

## 12. Error Boundaries

Catch rendering errors in React components.

* Implemented using class components.
* Use `getDerivedStateFromError` and `componentDidCatch`.
* Prevent the entire UI from crashing.

```jsx
class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() { ... }
  componentDidCatch(error) { ... }
}
```

---
## 13. Lifting State Up

Used when multiple components need to share the same state.

Key points:

* Prevents duplicate or inconsistent state.
* Parent owns the state; children receive it via props.
* Enables shared behavior across components.

Example:

```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildInput value={text} setValue={setText} />
      <ChildDisplay value={text} />
    </>
  );
}
