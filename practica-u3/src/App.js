import React, { useState } from 'react';

function App() {
  // Estado para manejar el contenido dinámico de los módulos
  const [moduloActual, setModuloActual] = useState({
    titulo: "Página de Inicio",
    subtitulo: "Selecciona una opción del menú para ver el módulo"
  });

  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para cambiar de módulo
  const navegar = (titulo, sub) => {
    setModuloActual({ titulo: titulo, subtitulo: sub });
    setMenuAbierto(false);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      
      {/* BARRA DE NAVEGACIÓN (SISTEMA DE MÓDULOS) */}
      <nav style={{ 
        backgroundColor: '#243b55', 
        display: 'flex', 
        padding: '0 10px', 
        borderRadius: '8px 8px 0 0',
        color: 'white',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {/* MÓDULO INICIO CON SUBMÓDULOS */}
        <div 
          onMouseEnter={() => setMenuAbierto(true)}
          onMouseLeave={() => setMenuAbierto(false)}
          style={{ position: 'relative', cursor: 'pointer', padding: '15px 20px', fontWeight: '600' }}
        >
          Inicio ▼
          {menuAbierto && (
            <div style={{ 
              position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', 
              color: '#333', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '180px', zIndex: 10, borderRadius: '0 0 5px 5px'
            }}>
              <div onClick={() => navegar("Bienvenida", "Bienvenido al sistema de gestión académica.")} style={itemStyle}>Bienvenida</div>
              <div onClick={() => navegar("Acerca de", "Desarrollado por Lenin para la Unidad 3.")} style={itemStyle}>Acerca de</div>
              <div onClick={() => navegar("Misión y Visión", "Nuestra misión es innovar en el desarrollo web.")} style={itemStyle}>Misión y Visión</div>
            </div>
          )}
        </div>

        {/* OTROS MÓDULOS REQUERIDOS */}
        <div onClick={() => navegar("Información", "Módulo de Información General del Estudiante")} style={navItemStyle}>Información ▼</div>
        <div onClick={() => navegar("Proyectos", "Listado de proyectos desarrollados en el semestre")} style={navItemStyle}>Proyectos ▼</div>
        <div onClick={() => navegar("Recursos", "Repositorio de materiales y documentación técnica")} style={navItemStyle}>Recursos ▼</div>
        <div onClick={() => navegar("Soporte", "Centro de ayuda y contacto técnico")} style={navItemStyle}>Soporte ▼</div>
      </nav>

      {/* ÁREA DE CONTENIDO DINÁMICO (VISTA DE MÓDULOS) */}
      <div style={{ 
        backgroundColor: 'white', 
        border: '1px solid #ddd', 
        padding: '100px 40px', 
        textAlign: 'center',
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{ color: '#243b55', fontSize: '3rem', margin: '0 0 15px 0', fontWeight: '700' }}>
          {moduloActual.titulo}
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.2rem', fontWeight: '400' }}>
          {moduloActual.subtitulo}
        </p>
      </div>

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#95a5a6', fontSize: '0.8rem' }}>
        Práctica Realizada con React - 2026
      </footer>
    </div>
  );
}

const navItemStyle = { padding: '15px 20px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: '600', transition: '0.3s' };
const itemStyle = { padding: '12px 20px', borderBottom: '1px solid #f1f1f1', cursor: 'pointer', fontSize: '0.9rem' };

export default App;