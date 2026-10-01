import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Activity, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100">
        <span className="text-2xl font-bold tracking-tight text-fuchsia-900">
          MARINA<span className="text-rose-500">.</span>
        </span>
        <Link 
          to="/evaluacion" 
          className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-5 py-2.5 rounded-full font-medium transition shadow-sm hover:shadow-md"
        >
          Aplica Ahora
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-fuchsia-900 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-rose-500" />
          Dietista & Entrenadora Online
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Desinflama tu cuerpo, aprende a comer y construye tu físico en <span className="bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">reloj de arena</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Un método 100% personalizado diseñado para ayudarte a transformar tu cuerpo sin dietas restrictivas ni pasar hambre.
        </p>
        <Link 
          to="/evaluacion" 
          className="bg-gradient-to-r from-fuchsia-600 to-rose-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-95 transition flex items-center gap-3 transform hover:-translate-y-0.5"
        >
          Aplica a mi Asesoramiento
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Beneficios */}
      <section className="bg-white py-16 border-y border-rose-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
            <Heart className="w-10 h-10 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Pérdida de Grasa</h3>
            <p className="text-gray-600">Aprende a comer según las necesidades de tu cuerpo para reducir inflamación y quemar grasa.</p>
          </div>
          <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
            <Activity className="w-10 h-10 text-fuchsia-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Entrenamiento Eficiente</h3>
            <p className="text-gray-600">Rutinas focalizadas en tonificar glúteos y cintura para moldear tu figura.</p>
          </div>
          <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
            <CheckCircle className="w-10 h-10 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Acompañamiento 1 a 1</h3>
            <p className="text-gray-600">Resolución de dudas continuas por WhatsApp y mentorías personalizadas.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">¿Lista para empezar tu cambio?</h2>
        <p className="text-gray-600 mb-8">Completa el formulario de valoración para analizar tu caso.</p>
        <Link 
          to="/evaluacion" 
          className="inline-block bg-fuchsia-800 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-fuchsia-900 transition"
        >
          Comenzar Evaluación
        </Link>
      </section>
    </div>
  );
}