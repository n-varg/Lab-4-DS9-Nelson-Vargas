import { useState } from 'react';
import axios from 'axios';
/**
* Componente de formulario para enviar datos al backend.
*/
const Form = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 apellido: '',
 edad: '',
 telefono: '',
 });
 const [message, setMessage] = useState('');
 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData({ ...formData, [name]: value });
 };
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 const response = await axios.post('http://localhost:5000/api/form',
formData);
 console.log('Form submitted successfully:', response.data);
 setMessage(response.data.message); // Actualiza el estado del mensaje con la respuesta del servidor
 } catch (error) {
 console.error('Error submitting form:', error);
 setMessage('Error submitting form'); // Muestra un mensaje de error si ocurre un problema
 }
 };
 return (
 <form onSubmit={handleSubmit}>
 <div>
 <label>
 Nombre:
 <input type="text" name="name" value={formData.name}
onChange={handleChange}/>
 </label>
 </div>

 <div>
 <label>
 Apellido:
 <input type="name" name="apellido" value={formData.apellido}
 onChange={handleChange} />
 </label>
 </div>

 <div>
 <label>
 Email:
 <input type="email" name="email" value={formData.email}
onChange={handleChange} />
 </label>
 </div>

<div>
 <label >
 Edad:
 <input type="number" name="edad" value={formData.edad}
 onChange={handleChange} />
 </label>
</div>

<div>
 <label>
 Telefono:
 <input type="phone" name="telefono" value={formData.telefono}
 onChange={handleChange} />
 </label>
</div>

 <button type="submit">Submit</button>
 {message && <p>{message}</p>} {/* Muestra el mensaje del servidor */}
 </form>
 );
};
export default Form;