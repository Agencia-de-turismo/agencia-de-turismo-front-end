import '../../styles/registerpage.css';
export const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Registrarse</h2>
        <p>Registrarse como nuevo usuario</p>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="Jhon Doe" />
          
          <label>Correo</label>
          <input type="email" placeholder="example@gmail.com" />
          
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" />
          
          <a href="#">¿Olvidaste tu contraseña?</a>
          
          <button type="submit">registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <a href="#">Inicia sesión</a></p>
      </div>
      <div className="image-section">
        <img src="/img.jpeg" alt="Landscape" />
      </div>
    </div>
  );
};