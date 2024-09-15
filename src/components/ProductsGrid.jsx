import React from 'react';

const ProductsGrid = () => {
  const productos = [
    { id: 1, nombre: 'Taladro', precio: '$50', img: 'taladro.jpg' },
    { id: 2, nombre: 'Martillo', precio: '$10', img: 'martillo.jpg' },
    {
      id: 3,
      nombre: 'Destornillador',
      precio: '$8',
      img: 'destornillador.jpg',
    },
    { id: 4, nombre: 'Sierra', precio: '$30', img: 'sierra.jpg' },
  ];

  return (
    <section id="productos" style={sectionStyle}>
      <h2>Nuestros Productos</h2>
      <div style={gridStyle}>
        {productos.map((producto) => (
          <div key={producto.id} style={cardStyle}>
            <img src={producto.img} alt={producto.nombre} style={imgStyle} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '1rem',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

export default ProductsGrid;
