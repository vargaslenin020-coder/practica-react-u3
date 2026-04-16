import React, { useState } from 'react';

const StatCard = ({ title, value, color }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    borderLeft: `5px solid ${color}`,
    flex: 1
  }}>
    <h4 style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{title}</h4>
    <p style={{ margin: '5px 0 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{value}</p>
  </div>
);

function App() {
  const [items, setItems] = useState([
    { id: 101, name: 'Desarrollo Web React', category: 'Software', status: 'Activo' },
    { id: 102, name: 'Mantenimiento de Sistemas', category: 'Hardware', status: 'Pendiente' },
    { id: 103, name: 'Consultoría Técnica', category: 'Servicios', status: 'Completado' }
  ]);

  // FUNCIÓN PARA EL BOTÓN
  const handleAgregar = () => {
    const nombre = prompt("Ingrese el nombre del nuevo proyecto:");
    if (nombre) {
      const nuevoItem = {
        id: items.length + 101,
        name: nombre,
        category: 'Software', // Valor por defecto
        status: 'Activo'
      };
      setItems([...items, nuevoItem]);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f7fe', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', padding: '30px' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#1b254b', fontSize: '1.8rem' }}>Dashboard de Gestión</h1>
          <p style={{ margin: 0, color: '#a3aed0' }}>Sistema Integrado de Control - Unidad 3</p>
        </div>
        {/* AQUÍ CONECTAMOS LA FUNCIÓN AL BOTÓN */}
        <button 
          onClick={handleAgregar}
          style={{ 
            backgroundColor: '#4318FF', color: 'white', border: 'none', 
            padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3311cc'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4318FF'}
        >
          + Nuevo Reporte
        </button>
      </header>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <StatCard title="Total Registros" value={items.length} color="#4318FF" />
        <StatCard title="Proyectos Activos" value={items.filter(i => i.status === 'Activo').length} color="#05CD99" />
        <StatCard title="Pendientes" value={items.filter(i => i.status === 'Pendiente').length} color="#FFB547" />
      </div>

      <section style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
        <h3 style={{ color: '#1b254b', marginBottom: '20px', paddingLeft: '10px' }}>Listado de Aplicaciones</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#a3aed0', borderBottom: '1px solid #e9edf7', fontSize: '0.85rem' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>NOMBRE DEL PROYECTO</th>
              <th style={{ padding: '15px' }}>CATEGORÍA</th>
              <th style={{ padding: '15px' }}>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f4f7fe', color: '#1b254b', fontWeight: '500' }}>
                <td style={{ padding: '15px' }}>#{item.id}</td>
                <td style={{ padding: '15px' }}>{item.name}</td>
                <td style={{ padding: '15px' }}>{item.category}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{ 
                    backgroundColor: item.status === 'Activo' ? '#e6f9f0' : (item.status === 'Pendiente' ? '#fff5e6' : '#f4f7fe'),
                    color: item.status === 'Activo' ? '#05CD99' : (item.status === 'Pendiente' ? '#FFB547' : '#1b254b'),
                    padding: '5px 12px', borderRadius: '20px', fontSize: '0.75rem'
                  }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#a3aed0', fontSize: '0.9rem' }}>
        © 2026 Sistema de Gestión Académica | Instituto Superior Tecnológico Japón
      </footer>
    </div>
  );
}

export default App;