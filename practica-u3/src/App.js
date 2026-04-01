import React, { useState } from 'react';

function App() {
  const [seccion, setSeccion] = useState("Página de Inicio");
  const [subSeccion, setSubSeccion] = useState("Selecciona una opción del menú");
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarSeccion = (titulo, subtitulo) => {
    setSeccion(titulo);
    setSubSeccion(subtitulo);
    setMenuAbierto(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px' }}>
      
      {/* BARRA DE NAVEGACIÓN OSCURA */}
      <nav style={{ 
        backgroundColor: '#2c3e50', 
        display: 'flex', 
        padding: '0 20px', 
        borderRadius: '5px 5px 0 0',
        color: 'white',
        alignItems: 'center',
        height: '50px'
      }}>
        <div 
          onMouseEnter={() => setMenuAbierto(true)}
          onMouseLeave={() => setMenuAbierto(false)}
          style={{ position: 'relative', cursor: 'pointer', padding: '15px', fontWeight: 'bold' }}
        >
          Inicio ▼
          {menuAbierto && (
            <div style={{ 
              position: 'absolute', top: '50px', left: 0, backgroundColor: 'white', 
              color: '#333', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', width: '150px', zIndex: 10 
            }}>
              <div onClick={() => cambiarSeccion("Bienvenida", "Contenido de bienvenida")} style={itemStyle}>Bienvenida</div>
              <div onClick={() => cambiarSeccion("Acerca de", "Información sobre nosotros")} style={itemStyle}>Acerca de</div>
              <div onClick={() => cambiarSeccion("Misión y Visión", "Nuestros objetivos y metas")} style={itemStyle}>Misión y Visión</div>
            </div>
          )}
        </div>
        <div style={navItemStyle}>Información ▼</div>
        <div style={navItemStyle}>Proyectos ▼</div>
        <div style={navItemStyle}>Recursos ▼</div>
        <div style={navItemStyle}>Soporte ▼</div>
      </nav>

      {/* CAJA CENTRAL (CONTENT) */}
      <div style={{ 
        backgroundColor: 'white', 
        border: '1px solid #ddd', 
        padding: '80px 20px', 
        textAlign: 'center',
        borderRadius: '0 0 5px 5px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>{seccion}</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>{subSeccion}</p>
      </div>
    </div>
  );
}

// Estilos rápidos para los ítems
const navItemStyle = { padding: '15px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' };
const itemStyle = { padding: '10px 15px', borderBottom: '1px solid #eee', cursor: 'pointer', fontSize: '0.85rem' };

export default App;