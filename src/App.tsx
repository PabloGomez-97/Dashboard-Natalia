import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex vh-100">
      {isSidebarOpen && <Sidebar />}
      
      <div className="d-flex flex-column flex-grow-1">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-grow-1 overflow-auto">
          <div className="container py-5">
            <header className="text-center mb-4">
              <div className="d-flex justify-content-center gap-4 mb-3">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} alt="Vite logo" style={{ height: 96 }} />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} alt="React logo" style={{ height: 96 }} />
                </a>
              </div>
              <h1 className="display-5 fw-semibold">Vite + React</h1>
            </header>

            <div className="d-flex justify-content-center">
              <div className="card shadow-sm" style={{ maxWidth: 520 }}>
                <div className="card-body text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => setCount((c) => c + 1)}
                  >
                    count is {count}
                  </button>
                  <p className="mt-3 mb-0 text-muted">
                    Edita <code>src/App.tsx</code> y guarda para probar HMR
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center mt-4 text-body-secondary">
              Haz clic en los logos para saber más
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;