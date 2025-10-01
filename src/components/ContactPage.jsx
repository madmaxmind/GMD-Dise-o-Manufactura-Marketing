import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+52 (55) 1234-5678", "+52 (55) 8765-4321"],
      action: "tel:+525512345678"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contacto@gmd.com", "ventas@gmd.com"],
      action: "mailto:contacto@gmd.com"
    },
    {
      icon: MapPin,
      title: "Oficina",
      details: ["Av. Innovación 123", "Ciudad de México, CDMX 01234"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 9:00 - 14:00"],
      action: null
    }
  ];

  const projectTypes = [
    "Tengo una idea y necesito desarrollarla",
    "Ya tengo el diseño, quiero fabricar",
    "Ya tengo el producto, quiero vender más",
    "Consultoría técnica",
    "Otro"
  ];

  const budgetRanges = [
    "Menos de $50,000 MXN",
    "$50,000 - $100,000 MXN",
    "$100,000 - $250,000 MXN",
    "$250,000 - $500,000 MXN",
    "Más de $500,000 MXN"
  ];

  const timelines = [
    "Urgente (menos de 1 mes)",
    "Corto plazo (1-3 meses)",
    "Mediano plazo (3-6 meses)",
    "Largo plazo (6+ meses)",
    "Sin prisa, explorando opciones"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              ¿Tienes una idea? Hablemos. Estamos aquí para transformarla en realidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cuéntanos sobre tu proyecto
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Mensaje enviado!</h3>
                    <p className="text-gray-600">
                      Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+52 (55) 1234-5678"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de proyecto *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Selecciona una opción</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Presupuesto estimado
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Selecciona un rango</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline deseado
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Selecciona un timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cuéntanos sobre tu proyecto *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Describe tu idea, los desafíos que enfrentas, tus objetivos, o cualquier información relevante que nos ayude a entender mejor tu proyecto..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send className="mr-2" size={20} />
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="text-cyan-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-gray-600 mb-1">
                          {info.action ? (
                            <a 
                              href={info.action} 
                              className="hover:text-cyan-600 transition-colors duration-200"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacto Rápido</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/525512345678"
                    className="flex items-center w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="mr-3" size={20} />
                    WhatsApp
                  </a>
                  
                  <a
                    href="mailto:contacto@gmd.com"
                    className="flex items-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Mail className="mr-3" size={20} />
                    Email directo
                  </a>
                  
                  <a
                    href="tel:+525512345678"
                    className="flex items-center w-full bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Phone className="mr-3" size={20} />
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Cuánto tiempo toma desarrollar un producto completo?
              </h3>
              <p className="text-gray-600">
                El tiempo varía según la complejidad del proyecto, pero típicamente toma entre 6-12 meses 
                desde la idea inicial hasta el lanzamiento al mercado. Proyectos más simples pueden completarse 
                en 3-4 meses, mientras que productos muy complejos pueden tomar hasta 18 meses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Trabajan con empresas de cualquier tamaño?
              </h3>
              <p className="text-gray-600">
                Sí, trabajamos con startups, emprendedores individuales, PyMEs y grandes corporaciones. 
                Adaptamos nuestro enfoque y metodología según las necesidades y recursos de cada cliente.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Qué incluye el servicio integral?
              </h3>
              <p className="text-gray-600">
                Nuestro servicio integral incluye: investigación de mercado, diseño conceptual, ingeniería 
                detallada, prototipado, fabricación, branding, desarrollo de landing page, estrategia de 
                marketing y lanzamiento al mercado.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Ofrecen garantías en sus productos?
              </h3>
              <p className="text-gray-600">
                Sí, ofrecemos garantía en todos nuestros diseños y productos fabricados. Además, 
                proporcionamos soporte post-lanzamiento para asegurar el éxito continuo de tu producto 
                en el mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No esperes más. Tu idea puede ser el próximo producto exitoso en el mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/gmd-consultation"
              className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
            >
              <Calendar className="mr-2" size={20} />
              Agendar consulta gratuita
            </a>
            <a
              href="https://wa.me/525512345678"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

