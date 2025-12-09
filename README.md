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

13. Lifting State Up

Used when multiple components need to share the same state.
Instead of duplicating state in children, move it to the nearest common parent.

Example Pattern
function Parent() {
  const [value, setValue] = useState("");

  return (
    <Child value={value} onChange={setValue} />
  );
}

Key Points

Prevents inconsistent UI

Centralizes shared logic

Child components receive state via props

14. Conditional Rendering

React conditionally displays UI using:

Ternary Operator
{isLoggedIn ? <Dashboard /> : <Login />}

Logical AND
{showMessage && <Message />}

Early Return
if (!data) return null;


Used for:

Authentication flows

Showing or hiding components

Dynamic rendering based on state

15. Lists & Keys

Rendering lists:

{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}

Why Keys Matter

Help React identify items during updates

Prevent incorrect matching and UI bugs

Should be stable, unique, and consistent

Avoid using array index unless list is static and unchanging.

16. Custom Hooks

Used to extract reusable logic from components.

Example: useLocalStorage
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

Benefits

Cleaner components

Reusable logic

Easy testing and maintainability

17. useMemo – Deep Dive

Used to memoize expensive computations.

const result = useMemo(() => computeHeavy(data), [data]);

When to Use

Sorting / filtering large lists

CPU-heavy operations

Expensive derived state

Avoid When

Computation is cheap

Over-optimization hurts readability

18. useCallback – Deep Dive

Memoizes function definitions to preserve reference identity.

const increment = useCallback(() => {
  setCount(c => c + 1);
}, []);

When Needed

Passing callbacks to memoized child components

Preventing unnecessary re-renders

Maintaining stable function references

19. Performance Optimization Summary
Tools

React.memo – Memoizes component rendering

useCallback – Memoizes functions

useMemo – Memoizes expensive values

Goals

Prevent unnecessary child re-renders

Skip computation-heavy logic

Stabilize props to memoized children

When Not to Use

For simple components

Without profiling

When optimization adds complexity

20. Rendering Behavior in React

React re-renders a component when:

State changes

Props change

Context value changes

Parent re-renders

Important

A render only recomputes the Virtual DOM.
It does not necessarily update the actual DOM.

Updates only occur after reconciliation.

21. Reconciliation (Virtual DOM Diffing)

React compares:

Previous Virtual DOM

Current Virtual DOM

Then updates only what changed.

Rules

Same element type → reuse DOM node

Different type → recreate DOM node

Keys help match list items

Minimizes DOM mutations

22. useLayoutEffect vs useEffect
useEffect

Runs after paint

Non-blocking

Used for:

API calls

Logging

Subscriptions

Timers

useLayoutEffect

Runs before paint

Blocking

Used for:

Measuring DOM size

Scroll/position adjustments

Preventing layout flicker

Synchronous DOM mutations

useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
}, []);

23. useNavigate (Programmatic Navigation)

Used to navigate in React Router without clicking a <Link>.

const navigate = useNavigate();
navigate("/about");
navigate(-1); // go back
navigate("/", { replace: true });

Use Cases

Navigating after form submit

Redirecting after login

Dynamic paths (/user/${id})

Replacing history entries

24. Nested Routes

Used for layouts, dashboards, and grouped pages.

<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<DashboardProfile />} />
</Route>


Child components render inside:

<Outlet />

25. Publisher–Subscriber Pattern

A communication pattern where:

Publishers broadcast events

Subscribers listen and react

Benefits

Decoupled architecture

Multiple independent listeners

Used in:

Notification systems

Chats

Analytics dashboards

Redux store internals

publish("eventName", data);
subscribe("eventName", callback);

26. Compound Components Pattern

Used to create flexible, declarative APIs.

Example:

<Tabs>
  <Tabs.List>
    <Tabs.Tab value="home" />
  </Tabs.List>

  <Tabs.Panel value="home">Home</Tabs.Panel>
</Tabs>

How It Works

Parent manages shared state

Children access it via React Context

No prop drilling

Used by libraries such as:

Radix UI

Material UI

Headless UI
