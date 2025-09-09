jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios.get('/api/materials').then(res => setMaterials(res.data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Materials Lookup</h1>
      <ul>
        {materials.map(m => (
          <li key={m.id}><strong>{m.name}</strong> — {m.category}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
