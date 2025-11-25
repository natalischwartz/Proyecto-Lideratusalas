export const sendEmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al enviar el mensaje');
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    return { 
      success: false, 
      error: error.message || 'Error de conexión con el servidor' 
    };
  }
};