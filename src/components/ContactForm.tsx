import React, { useState } from 'react';

const ContactForm = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
    e.currentTarget.reset();
  };

  if (enviado) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✉️</div>
        <h3 className="text-2xl text-primary font-serif mb-4">¡Mensaje Enviado!</h3>
        <p className="text-text/70 mb-6">
          Gracias por contactarme. Te responderé lo antes posible.
        </p>
        <button 
          onClick={() => setEnviado(false)}
          className="text-primary hover:text-accent transition-colors duration-300"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text/70 mb-2">Nombre</label>
          <input 
            type="text" 
            name="nombre"
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text/70 mb-2">Apellido</label>
          <input 
            type="text" 
            name="apellido"
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Tus apellidos"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text/70 mb-2">Correo Electrónico</label>
        <input 
          type="email" 
          name="email"
          required 
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text/70 mb-2">Teléfono</label>
        <input 
          type="tel" 
          name="telefono"
          required 
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          placeholder="+57 (xxx) xxx-xxxx"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text/70 mb-2">Motivo de Contacto</label>
        <select 
          name="motivo"
          required 
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        >
          <option value="">Selecciona una opción</option>
          <option value="informacion">Información General</option>
          <option value="cita">Agendar Cita</option>
          <option value="precios">Información de Precios</option>
          <option value="urgencia">Consulta Urgente</option>
          <option value="otro">Otro Motivo</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-text/70 mb-2">Mensaje</label>
        <textarea 
          name="mensaje"
          required 
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          placeholder="¿En qué puedo ayudarte?"
        ></textarea>
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            name="privacidad"
            required
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
          />
        </div>
        <label className="ml-2 text-sm text-text/70">
          Acepto la política de privacidad y el tratamiento de mis datos personales
        </label>
      </div>

      <button 
        type="submit"
        className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
      >
        <span>Enviar Mensaje</span>
        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;