-- =========================================
-- BASE DE DATOS CAFETERÍA
-- =========================================

CREATE DATABASE cafeteria_db;

USE cafeteria_db;

-- =========================================
-- TABLA PRODUCTOS
-- =========================================

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255),
    categoria VARCHAR(50),
    stock INT DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- DATOS DE EJEMPLO
-- =========================================

INSERT INTO productos 
(nombre, descripcion, precio, imagen, categoria, stock)
VALUES

(
'Cappuccino Premium',
'Café espresso con leche cremosa y espuma suave',
12000,
'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
'Bebidas',
20
),

(
'Latte Vainilla',
'Delicioso latte con esencia natural de vainilla',
14000,
'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
'Bebidas',
15
),

(
'Cheesecake',
'Postre artesanal con salsa de frutos rojos',
10000,
'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop',
'Postres',
10
);