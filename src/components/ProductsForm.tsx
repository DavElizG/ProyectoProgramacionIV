import React, { useState } from 'react';

const ProductForm: React.FC<{
  onSubmit: (values: { title: string; price: number; description: string; categoryId: number; images: string[] }) => void;
  onCancel: () => void;
}> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState(['https://placeimg.com/640/480/any']);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ title, price, description, categoryId, images });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Category ID:
        <input type="number" value={categoryId} onChange={e => setCategoryId(Number(e.target.value))} />
      </label>
      <label>
        Images:
        <input type="text" value={images.join(',')} onChange={e => setImages(e.target.value.split(','))} />
      </label>
      <button type="submit">Aceptar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default ProductForm;