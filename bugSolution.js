```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect now only runs once after the component mounts
    // because of the empty dependency array
    console.log('Effect ran once');
  }, []);

  return <div>Count: {count}</div>;
}
```