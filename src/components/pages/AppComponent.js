import React, { useState, useMemo, useCallback, forwardRef, useRef } from 'react';


export default function AppComponent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(c => c + 1), []);
  const double = useMemo(() => count * 2, [count]);
  const inputRef = useRef(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} />
    </div>
  );
}

// ForwardRef example
const Input = ({ placeholder }, ref) => (
  <input ref={ref} placeholder={placeholder} style={{ margin: '10px 0', padding: '5px' }} />
);
const ForwardedInput = forwardRef(Input);

// ================= PROP DRILLING CHAIN =================
// Component1 drills props down to Component5
const Component1 = ({ level, count, onAction }) => (
  <div style={{ border: '1px solid #ccc', margin: '5px', padding: '5px' }}>
    <h2>Component1 (Level {level})</h2>
    <Component2 level={level + 1} count={count} onAction={onAction} />
  </div>
);
const Component2 = ({ level, count, onAction }) => (
  <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
    <h3>Component2 (Level {level})</h3>
    <Component3 level={level + 1} count={count} onAction={onAction} />
  </div>
);
const Component3 = ({ level, count, onAction }) => (
  <div style={{ border: '1px dashed #bbb', margin: '5px', padding: '5px' }}>
    <h4>Component3 (Level {level})</h4>
    <Component4 level={level + 1} count={count} onAction={onAction} />
  </div>
);
const Component4 = ({ level, count, onAction }) => (
  <div style={{ border: '1px solid #999', margin: '5px', padding: '5px' }}>
    <h5>Component4 (Level {level})</h5>
    <Component5 level={level + 1} count={count} onAction={onAction} />
  </div>
);
const Component5 = ({ level, count, onAction }) => (
  <div style={{ border: '2px solid #666', margin: '5px', padding: '5px' }}>
    <h6>Component5 (Level {level})</h6>
    <p>Received count: {count}</p>
    <button onClick={onAction}>Trigger Action</button>
  </div>
);

// ================= useMemo & useCallback GROUP =================
function ComponentGroup({ memoValue, callback }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Component Group</h2>
      <MemoizedList items={[memoValue, memoValue + 1, memoValue + 2]} />
      <CallbackButton onAction={callback} />
    </div>
  );
}

const List = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i}>Item: {i}</li>
    ))}
  </ul>
);
const MemoizedList = React.memo(({ items }) => {
  const sorted = useMemo(() => [...items].sort(), [items]);
  return <List items={sorted} />;
});

const CallbackButton = ({ onAction }) => {
  const handleClick = useCallback(() => {
    console.log('CallbackButton clicked');
    onAction();
  }, [onAction]);

  return <button onClick={handleClick}>Callback Button</button>;
};

// ================= DYNAMIC FORM EXAMPLE =================
export function DynamicForm() {
  const [fields, setFields] = useState(['']);

  const addField = useCallback(() => setFields(f => [...f, '']), []);
  const updateField = (index, value) =>
    setFields(f => f.map((v, i) => (i === index ? value : v)));

  const result = useMemo(() => fields.join(', '), [fields]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Dynamic Form</h2>
        <p>Result: {result}</p>
        </div>
        )
    }

