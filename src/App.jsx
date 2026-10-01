import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// URL de envío directa de Google Forms
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd8MmwLF5iiZlSIM4Jv_0N-LrCh3hubJhn3s3sQwxdgZgF6hA/formResponse";

// Mapeo de TODOS los campos del Google Form
// (Asegúrate de colocar los IDs numéricos exactos de las entradas en tu HTML)
const FORM_ENTRIES = {
  email: "entry.1266728217",         // 1. Correo
  phone: "entry.1998309007",         // 2. Teléfono WhatsApp
  country: "entry.1482220595",       // 3. País
  fullName: "entry.136562466",        // 4. Nombre y Apellidos
  age: "entry.429865773",             // 5. Edad
  limitations: "entry.814214625",     // 6. Limitaciones/Lesiones
  goal: "entry.111111111",            // 7. ¿Qué deseas conseguir?
  struggles: "entry.222222222",       // 8. ¿Qué te está costando más?
  currentPoint: "entry.333333333",    // 9. ¿En qué punto estás?
  budget: "entry.444444444",          // 10. ¿Cuánto estás dispuesta a invertir?
  startDate: "entry.555555555"        // 11. ¿Cuándo te gustaría empezar?
};

// ==========================================
// PÁGINA PRINCIPAL / LANDING PAGE
// ==========================================
function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0e13',
      color: '#ffffff',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* HEADER */}
      <header style={{
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #221f2d',
        backgroundColor: 'rgba(15, 14, 19, 0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '1px', color: '#fff' }}>
          MARINA<span style={{ color: '#ec4899' }}>.</span>
        </div>
        <Link to="/evaluacion" style={{
          backgroundColor: '#db2777',
          color: '#ffffff',
          padding: '10px 22px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 14px rgba(219, 39, 119, 0.35)',
          transition: 'all 0.2s'
        }}>
          Aplica Ahora
        </Link>
      </header>

      {/* HERO SECTION */}
      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 20px 40px 20px',
        textAlign: 'center',
        flex: 1
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#281726',
          color: '#f472b6',
          padding: '6px 18px',
          borderRadius: '50px',
          fontSize: '13px',
          fontWeight: '600',
          marginBottom: '28px',
          border: '1px solid #471d3d'
        }}>
          ✨ Dietista & Entrenadora Online
        </div>

        <h1 style={{
          fontSize: '42px',
          lineHeight: '1.25',
          fontWeight: '800',
          marginBottom: '24px',
          color: '#ffffff',
          letterSpacing: '-0.5px'
        }}>
          Desinflama tu cuerpo, aprende a comer y construye tu físico en{' '}
          <span style={{
            background: 'linear-gradient(90deg, #ec4899, #f43f5e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            reloj de arena
          </span>.
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#a1a1aa',
          lineHeight: '1.6',
          maxWidth: '680px',
          margin: '0 auto 36px auto'
        }}>
          Un método 100% personalizado diseñado para ayudarte a transformar tu cuerpo sin dietas restrictivas ni pasar hambre.
        </p>

        <Link to="/evaluacion" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #db2777, #e11d48)',
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: '700',
          padding: '16px 36px',
          borderRadius: '50px',
          textDecoration: 'none',
          boxShadow: '0 10px 25px rgba(219, 39, 119, 0.4)',
          marginBottom: '60px'
        }}>
          Aplica a mi Asesoramiento →
        </Link>

        {/* BENEFICIOS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px',
          textAlign: 'left'
        }}>
          <div style={{ backgroundColor: '#181622', padding: '28px', borderRadius: '20px', border: '1px solid #282536' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>❤️</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>Pérdida de Grasa</h3>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
              Aprende a comer según las necesidades de tu cuerpo para reducir la inflamación y quemar grasa.
            </p>
          </div>

          <div style={{ backgroundColor: '#181622', padding: '28px', borderRadius: '20px', border: '1px solid #282536' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>Entrenamiento Eficiente</h3>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
              Rutinas focalizadas en tonificar glúteos y cintura para moldear tu figura.
            </p>
          </div>

          <div style={{ backgroundColor: '#181622', padding: '28px', borderRadius: '20px', border: '1px solid #282536' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>💬</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>Acompañamiento 1 a 1</h3>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
              Resolución de dudas continuas por WhatsApp y mentorías personalizadas.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{
          marginTop: '60px',
          padding: '40px 20px',
          backgroundColor: '#15131e',
          borderRadius: '24px',
          border: '1px solid #282438'
        }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '10px' }}>¿Lista para empezar tu cambio?</h2>
          <p style={{ fontSize: '15px', color: '#9ca3af', marginBottom: '24px' }}>Completa el formulario de valoración para analizar tu caso.</p>
          <Link to="/evaluacion" style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#0f0e13',
            fontSize: '15px',
            fontWeight: '700',
            padding: '12px 30px',
            borderRadius: '50px',
            textDecoration: 'none'
          }}>
            Comenzar Evaluación
          </Link>
        </div>
      </main>
    </div>
  );
}

// ==========================================
// PÁGINA CON EL FORMULARIO COMPLETO (11 PREGUNTAS)
// ==========================================
function AssessmentForm() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    country: '',
    fullName: '',
    age: '',
    limitations: '',
    goal: 'Perder grasa',
    customGoal: '',
    struggles: '',
    currentPoint: 'Quiero empezar ya y hacerlo bien',
    budget: '100-130€',
    startDate: 'Lo antes posible'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const finalGoal = formData.goal === 'Otro' ? formData.customGoal : formData.goal;

    const googleFormData = new FormData();
    googleFormData.append(FORM_ENTRIES.email, formData.email);
    googleFormData.append(FORM_ENTRIES.phone, formData.phone);
    googleFormData.append(FORM_ENTRIES.country, formData.country);
    googleFormData.append(FORM_ENTRIES.fullName, formData.fullName);
    googleFormData.append(FORM_ENTRIES.age, formData.age);
    googleFormData.append(FORM_ENTRIES.limitations, formData.limitations);
    googleFormData.append(FORM_ENTRIES.goal, finalGoal);
    googleFormData.append(FORM_ENTRIES.struggles, formData.struggles);
    googleFormData.append(FORM_ENTRIES.currentPoint, formData.currentPoint);
    googleFormData.append(FORM_ENTRIES.budget, formData.budget);
    googleFormData.append(FORM_ENTRIES.startDate, formData.startDate);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: googleFormData,
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch(() => {
        setLoading(false);
        setSubmitted(true);
      });
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#0f0e13',
    border: '1px solid #2d293d',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#d1d5db',
    marginBottom: '8px'
  };

  const optionCardStyle = (selected) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    backgroundColor: selected ? '#251726' : '#0f0e13',
    border: selected ? '1px solid #ec4899' : '1px solid #2d293d',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: '#fff',
    fontSize: '14px'
  });

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0f0e13',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}>
        <div style={{
          maxWidth: '450px',
          width: '100%',
          backgroundColor: '#181622',
          padding: '40px 30px',
          borderRadius: '24px',
          border: '1px solid #282536',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '16px' }}>🎉</div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>¡Solicitud Enviada!</h2>
          <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
            Gracias por completar el formulario. Marina revisará tus datos y se pondrá en contacto contigo por WhatsApp.
          </p>
          <button onClick={() => navigate('/')} style={{
            width: '100%',
            backgroundColor: '#db2777',
            color: '#ffffff',
            fontWeight: '700',
            padding: '14px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '15px'
          }}>
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0e13',
      color: '#ffffff',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <button onClick={() => navigate('/')} style={{
          background: 'none',
          border: 'none',
          color: '#9ca3af',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          ← Volver al inicio
        </button>

        <div style={{
          backgroundColor: '#181622',
          padding: '36px 30px',
          borderRadius: '24px',
          border: '1px solid #282536'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '6px' }}>ASESORIAS VIVAMARIINA</h1>
          <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5', marginBottom: '28px' }}>
            Trabajo con asesoramientos personalizados y plazas limitadas para obtener el objetivo deseado. Este proceso es para personas que quieren comprometerse con su mejor versión 🎯
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* 1. Correo */}
            <div>
              <label style={labelStyle}>Correo *</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Tu dirección de correo electrónico" style={inputStyle} />
            </div>

            {/* 2. Teléfono */}
            <div>
              <label style={labelStyle}>Numero de teléfono (con prefijo +) para contactarte por WhatsApp *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ej. +34 600 000 000" style={inputStyle} />
            </div>

            {/* 3. País */}
            <div>
              <label style={labelStyle}>Pais en el que resides *</label>
              <input required type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Tu respuesta" style={inputStyle} />
            </div>

            {/* 4. Nombre y apellidos */}
            <div>
              <label style={labelStyle}>Nombre y apellidos *</label>
              <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Tu respuesta" style={inputStyle} />
            </div>

            {/* 5. Edad */}
            <div>
              <label style={labelStyle}>Edad *</label>
              <input required type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Tu respuesta" style={inputStyle} />
            </div>

            {/* 6. Limitaciones físicas */}
            <div>
              <label style={labelStyle}>¿Alguna limitación, lesión o condición física que deba de tener en cuenta para tu entrenamiento? *</label>
              <textarea required name="limitations" value={formData.limitations} onChange={handleChange} rows="2" placeholder="Tu respuesta" style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            {/* 7. ¿Qué deseas conseguir? */}
            <div>
              <label style={labelStyle}>¿Que deseas conseguir con mi asesoramiento? *</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Perder grasa',
                  'Ganar masa muscular',
                  'Aprender a comer y conocer como funciona mi cuerpo',
                  'Mejorar mi salud en general',
                  'Otro'
                ].map((option) => (
                  <label key={option} style={optionCardStyle(formData.goal === option)}>
                    <input
                      type="radio"
                      name="goal"
                      value={option}
                      checked={formData.goal === option}
                      onChange={handleChange}
                      style={{ accentColor: '#ec4899' }}
                    />
                    <span>{option}</span>
                  </label>
                ))}

                {formData.goal === 'Otro' && (
                  <input
                    type="text"
                    name="customGoal"
                    value={formData.customGoal}
                    onChange={handleChange}
                    placeholder="Escribe tu respuesta..."
                    style={{ ...inputStyle, marginTop: '6px' }}
                  />
                )}
              </div>
            </div>

            {/* 8. Dificultades */}
            <div>
              <label style={labelStyle}>Cuéntame con detalle que es lo que mas te esta costando a la hora de conseguir tu objetivo. *</label>
              <textarea required name="struggles" value={formData.struggles} onChange={handleChange} rows="3" placeholder="Tu respuesta" style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            {/* 9. ¿En qué punto estás? */}
            <div>
              <label style={labelStyle}>¿En que punto estas ahora mismo? *</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Quiero empezar ya y hacerlo bien',
                  'Me interesa, pero quiero ver como funciona',
                  'Solo estoy informandome'
                ].map((option) => (
                  <label key={option} style={optionCardStyle(formData.currentPoint === option)}>
                    <input
                      type="radio"
                      name="currentPoint"
                      value={option}
                      checked={formData.currentPoint === option}
                      onChange={handleChange}
                      style={{ accentColor: '#ec4899' }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 10. Presupuesto */}
            <div>
              <label style={labelStyle}>¿Cuanto estas dispuesta a invertir en ti misma al mes en euros para tu cambio? *</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  '100-130€',
                  '200-300€ (plan+mentorias)'
                ].map((option) => (
                  <label key={option} style={optionCardStyle(formData.budget === option)}>
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={formData.budget === option}
                      onChange={handleChange}
                      style={{ accentColor: '#ec4899' }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 11. ¿Cuándo empezar? */}
            <div>
              <label style={labelStyle}>¿Cuando te gustaría empezar? *</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Lo antes posible',
                  'En las próximas semanas',
                  'Mas adelante'
                ].map((option) => (
                  <label key={option} style={optionCardStyle(formData.startDate === option)}>
                    <input
                      type="radio"
                      name="startDate"
                      value={option}
                      checked={formData.startDate === option}
                      onChange={handleChange}
                      style={{ accentColor: '#ec4899' }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* BOTÓN DE ENVÍO */}
            <button type="submit" disabled={loading} style={{
              width: '100%',
              background: 'linear-gradient(90deg, #db2777, #e11d48)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '700',
              padding: '16px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px',
              boxShadow: '0 6px 20px rgba(219, 39, 119, 0.35)',
              opacity: loading ? 0.6 : 1
            }}>
              {loading ? 'Enviando...' : 'Enviar Valoración'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// ROUTER PRINCIPAL
// ==========================================
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluacion" element={<AssessmentForm />} />
      </Routes>
    </Router>
  );
}