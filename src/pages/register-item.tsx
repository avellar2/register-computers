import Layout from '../app/layout';
import { useState } from "react";

const RegisterItemPage = () => {
  const [item, setItem] = useState({
    type: '',
    brand: '',
    serialNumber: '',
    school: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(item);
  }

  return (
    <Layout>
      <h2>Registre o Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="type"
            value={item.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text"
            name='brand'
            value={item.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Número de serial:</label>
          <input
            type='text'
            name='serialNumber'
            value={item.serialNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Escola:</label>
          <input
            type="text"
            name='school'
            value={item.school}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Registar</button>
      </form>
    </Layout>

  );
}

export default RegisterItemPage;