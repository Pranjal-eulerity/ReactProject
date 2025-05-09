import React, { useState, useMemo, useCallback, forwardRef, useRef } from 'react';

// Root App component demonstrating prop drilling, useMemo, useCallback, and forwardRef
export default function App() {
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
      <h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={increment}>Increment</button>
      <ForwardedInput ref={inputRef} placeholder="Type here..." />
      <Component1 level={1} count={count} onAction={increment} />
      <ComponentGroup memoValue={double} callback={increment} /><h1>App Component</h1>
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
const Component6 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component7 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component8 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component9 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component10 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component11 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component12 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component13 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component14 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );const Component15 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />
    </div>
  );
  const Component16 = ({ level, count, onAction }) => (
    <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
      <h3>Component2 (Level {level})</h3>
      <Component3 level={level + 1} count={count} onAction={onAction} />


      const Component2 = ({ level, count, onAction }) => (
  <div style={{ border: '1px dotted #aaa', margin: '5px', padding: '5px' }}>
    <h3>Component2 (Level {level})</h3>
    <Component3 level={level + 1} count={count} onAction={onAction} />
  </div>
);</div>
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
      {fields.map((val, idx) => (
        <div key={idx} style={{ marginBottom: '5px' }}>
          <input
            type="text"
            value={val}
            onChange={e => updateField(idx, e.target.value)}
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
      ))}
      <button onClick={addField}>Add Field</button>
      <p>Result: {result}</p>
    </div>
  );
}

// ================= CUSTOM HOOK EXAMPLE =================
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
}

export function ToggleComponent() {
  const [on, toggle] = useToggle();
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Toggle Component</h2>
      <p>Status: {on ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

// ================= CONTEXT API EXAMPLE =================
const ThemeContext = React.createContext('light');

export function ThemedSection() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => setTheme(t => (t === 'light' ? 'dark' : 'light')), []);
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ marginTop: '20px' }}>
        <h2>Context API Example</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemeConsumer />
        <div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div><div>
      <h2>Main Title</h2>
      <p>
        <span>Welcome to the simplified component example.</span>
      </p>
      <div>
        <h2>Introduction Section</h2>
        <p>
          <span>This section uses only div, h2, p, and span tags for content display.</span>
        </p>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          <span>Feature 1: Minimal markup.</span>
        </p>
        <p>
          <span>Feature 2: Consistent structure.</span>
        </p>
        <p>
          <span>Feature 3: Easy to style and maintain.</span>
        </p>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          <span>End of simplified content example.</span>
        </p>
      </div>
    </div>
    </div>
    </div>
    </div>
      </div>
    </ThemeContext.Provider>
  );
}
function ThemeConsumer() {
  const theme = React.useContext(ThemeContext);
  return <p>Current theme via context: {theme}</p>;
}

// ================= PORTAL EXAMPLE =================
import { createPortal } from 'react-dom';
export function PortalExample() {
  return createPortal(
    <div style={{ position: 'fixed', top: 20, right: 20, background: '#fff', padding: 10, border: '1px solid #000' }}>
      <p>This is rendered via Portal</p>
    </div>,
    document.body
  );
}

// ================= ERROR BOUNDARY EXAMPLE =================
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// ================= SUSPENSE & LAZY LOADING EXAMPLE =================
const LazyComponent = React.lazy(() => import('./LazyLoadedComponent'));
export function SuspenseExample() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}

// ================= HIGHER-ORDER COMPONENT (HOC) EXAMPLE =================
function withLogger(Wrapped) {
  return function Logger(props) {
    useEffect(() => {
      console.log('Props:', props);
    }, [props]);
    return <Wrapped {...props} />;
  };
}

const SimpleDisplay = ({ message }) => <p>{message}</p>;
export const DisplayWithLogger = withLogger(SimpleDisplay);

// ================= RENDER PROPS EXAMPLE =================
export function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = useCallback(e => setPos({ x: e.clientX, y: e.clientY }), []);
  return (<div onMouseMove={handleMove} style={{ height: '100px', border: '1px solid #000', marginTop: '20px' }}> {render(pos)} </div>);
}

// ================= USAGE OF RENDER PROPS =================
export function TrackerUsage() {
  return (
    <MouseTracker render={({ x, y }) => <p>Mouse at ({x}, {y})</p>} />
  );
}

// End of extended component examples
