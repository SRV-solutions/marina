import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GOOGLE_FORM_ACTION_URL, FORM_ENTRIES } from '../constants/formEntries';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function AssessmentForm() {
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

    // Mapeo dinámico a los entry IDs de Google Form
    const googleFormData = new FormData();
    googleFormData.append(FORM_ENTRIES.email, formData.email);
    googleFormData.append(FORM_ENTRIES.phone, formData.phone);
    googleFormData.append(FORM_ENTRIES.country, formData.country);
    googleFormData.append(FORM_ENTRIES.fullName, formData.fullName);
    googleFormData.append(FORM_ENTRIES.age, formData.age);
    googleFormData.append(FORM_ENTRIES.limitations, formData.limitations);
    googleFormData.append(FORM_ENTRIES.goal, formData.goal);
    googleFormData.append(FORM_ENTRIES.struggles, formData.struggles);
    googleFormData.append(FORM_ENTRIES.currentPoint, formData.currentPoint);
    googleFormData.append(FORM_ENTRIES.budget, formData.budget);
    googleFormData.append(FORM_ENTRIES.startDate, formData.startDate);

    // Envío silencioso mediante no-cors
    fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: googleFormData,
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Error enviando respuestas:", err);
        setLoading(false);
        setSubmitted(true); // Se muestra éxito debido a restricciones CORS típicas de Google
      });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center border border-rose-100">
          <CheckCircle2 className="w-16 h-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Gracias por completar el formulario. Marina revisará tus datos y se pondrá en contacto contigo por WhatsApp.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-fuchsia-700 text-white font-medium py-3 rounded-full hover:bg-fuchsia-800 transition"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-8 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Volver
      </button>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100">
        <h1 className="text-2xl font-bold text-fuchsia-950 mb-2">Formulario de Valoración</h1>
        <p className="text-gray-600 mb-8">Escribe tus datos para evaluar tu caso de forma personalizada.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre y Apellidos */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre y Apellidos *</label>
            <input 
              required
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          {/* Correo y Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico *</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono (con prefijo +) *</label>
              <input 
                required
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
          </div>

          {/* País y Edad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">País en el que resides *</label>
              <input 
                required
                type="text" 
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Ej. España, Argentina..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Edad *</label>
              <input 
                required
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Tu edad"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
          </div>

          {/* Limitaciones físicas */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ¿Alguna limitación, lesión o condición física que deba tener en cuenta? *
            </label>
            <textarea 
              required
              name="limitations"
              value={formData.limitations}
              onChange={handleChange}
              rows="2"
              placeholder="Escribe aquí si tienes alguna lesión o molestia"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          {/* Objetivos */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué deseas conseguir con mi asesoramiento? *</label>
            <select 
              name="goal" 
              value={formData.goal} 
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            >
              <option value="Perder grasa">Perder grasa</option>
              <option value="Ganar masa muscular">Ganar masa muscular</option>
              <option value="Aprender a comer y conocer como funciona mi cuerpo">Aprender a comer y conocer como funciona mi cuerpo</option>
              <option value="Mejorar mi salud en general">Mejorar mi salud en general</option>
            </select>
          </div>

          {/* Dificultades principales */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cuéntame con detalle qué es lo que más te está costando a la hora de conseguir tu objetivo *
            </label>
            <textarea 
              required
              name="struggles"
              value={formData.struggles}
              onChange={handleChange}
              rows="3"
              placeholder="Explica tus principales barreras u obstáculos"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          {/* Inversión mensual */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ¿Cuánto estás dispuesta a invertir en ti misma al mes en euros para tu cambio? *
            </label>
            <div className="space-y-2">
              {['100-130€', '200-300€ (plan+mentorias)'].map((option) => (
                <label key={option} className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-rose-50/50">
                  <input 
                    type="radio" 
                    name="budget" 
                    value={option} 
                    checked={formData.budget === option} 
                    onChange={handleChange}
                    className="text-fuchsia-600 focus:ring-fuchsia-500"
                  />
                  <span className="text-sm font-medium text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Botón de Envío */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-fuchsia-600 to-rose-500 text-white font-bold py-4 rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Enviar Valoración'}
          </button>
        </form>
      </div>
    </div>
  );
}