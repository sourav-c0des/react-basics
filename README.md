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
```


## 14. Lifting State Up
---

Used when multiple components need to share the same state.

* Move shared state to the nearest common parent.
* Children receive state and setters via props.
* Prevents inconsistent or duplicated state.

Example:

~~~jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildInput value={text} setValue={setText} />
      <ChildDisplay value={text} />
    </>
  );
}
~~~

---

## 15. Conditional Rendering
---

Render UI based on conditions.

### Ternary

~~~jsx
{isLoggedIn ? <Dashboard /> : <Login />}
~~~

### Logical AND

~~~jsx
{show && <Message />}
~~~

### Early Return

~~~jsx
if (!data) return <Loader />;
~~~

Used for authentication flows, conditional UI, and loading states.

---

## 16. Lists & Keys
---

Render lists:

~~~jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
~~~

Key rules:

* Keys must be unique and stable.
* Avoid array index unless list is static.
* Keys help React match items across renders.

---

## 17. Custom Hooks
---

Extract reusable logic outside components.

Example:

~~~jsx
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
~~~

---

## 18. useMemo (Deep Dive)
---

Memoizes expensive calculations.

~~~jsx
const filtered = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);
~~~

Used for large lists, heavy calculations, and derived state.

---

## 19. useCallback (Deep Dive)
---

Memoizes function references.

~~~jsx
const increment = useCallback(() => {
  setCount(c => c + 1);
}, []);
~~~

Used when passing callbacks to memoized children.

---

## 20. useNavigate
---

Programmatic navigation in React Router.

~~~jsx
const navigate = useNavigate();
navigate("/dashboard");
~~~

Used for redirects after login or form submission.

---

## 21. Nested Routes
---

~~~jsx
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
~~~

Render child routes with:

~~~jsx
<Outlet />
~~~

Used for dashboards, multi-step forms, and nested pages.

---

## 22. useLayoutEffect
---

Runs **before** browser paint (unlike `useEffect`).

~~~jsx
useLayoutEffect(() => {
  const rect = boxRef.current.getBoundingClientRect();
}, []);
~~~

Use for DOM measurements, avoiding flicker, and synchronous layout updates.

---

## 23. Rendering Behavior in React
---

A component re-renders when:

* State changes  
* Props change  
* Context changes  
* Parent re-renders  

### Render vs Refresh

**Render** → React recalculates virtual DOM, state stays.  
**Refresh** → full app reload, all state resets.

---

## 24. Performance Optimization Summary
---

Tools:

* `React.memo` — memoizes component renders  
* `useMemo` — memoizes expensive values  
* `useCallback` — memoizes function references  

Used to reduce unnecessary re-renders and improve performance in heavy components.

---

## 25. Publisher–Subscriber Pattern
---

Event-driven communication:

* Publisher emits events  
* Subscribers listen and react  
* Components remain decoupled  

Example:

~~~js
const bus = {
  subs: {},
  subscribe(event, fn) {
    if (!this.subs[event]) this.subs[event] = [];
    this.subs[event].push(fn);
  },
  publish(event, data) {
    (this.subs[event] || []).forEach(fn => fn(data));
  }
};
~~~

Used in notifications, analytics, and real-time features.

---

## 26. Compound Components Pattern
---

Components working together as a unified API.

Example:

~~~jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab value="home">Home</Tabs.Tab>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="home">Home content</Tabs.Panel>
  <Tabs.Panel value="profile">Profile content</Tabs.Panel>
</Tabs>
~~~

Used in Tabs, Modals, Accordions, Dropdowns, and UI libraries like Headless UI and MUI.

---
