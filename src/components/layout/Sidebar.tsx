import { useState, type JSX } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems: MenuItem[] = [
    { 
      id: 'home', 
      label: 'Principal',
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
      )
    },
    { 
      id: 'financiero', 
      label: 'Financiero',
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086Z"/>
        </svg>
      )
    }
  ];

  return (
    <div 
      className="bg-dark text-white d-flex flex-column" 
      style={{ width: '250px', minHeight: '100vh' }}
    >
      <div className="p-3 border-bottom border-secondary">
        <h5 className="mb-0">Menú</h5>
      </div>

      <nav className="flex-fill">
        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link text-white w-100 text-start d-flex align-items-center ${
                  activeItem === item.id ? 'bg-primary' : ''
                }`}
                onClick={() => setActiveItem(item.id)}
                style={{
                  border: 'none',
                  background: activeItem === item.id ? undefined : 'transparent',
                  padding: '12px 20px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (activeItem !== item.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeItem !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="me-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 border-top border-secondary">
        <small className="text-muted">Dashboard v1.0</small>
      </div>
    </div>
  );
};

export default Sidebar;