
CREATE DATABASE IF NOT EXISTS gestion_proyectos;
USE gestion_proyectos;

CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_proyecto VARCHAR(100) NOT NULL,
    categoria ENUM('Software', 'Hardware', 'Servicios') NOT NULL,
    estado VARCHAR(20) DEFAULT 'Activo',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO proyectos (nombre_proyecto, categoria, estado) VALUES 
('Desarrollo Web React', 'Software', 'Activo'),
('Mantenimiento de Sistemas', 'Hardware', 'Pendiente'),
('Consultoría Técnica', 'Servicios', 'Completado');