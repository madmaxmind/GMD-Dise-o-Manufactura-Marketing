import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Cog, TrendingUp, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Sección 1: Héroe */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformamos ideas en{' '}
              <span className="text-cyan-400">productos reales</span>,{' '}
              <span className="text-cyan-400">listos para venderse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              GMD - Ingeniería Creativa Integral. No vendemos "solo diseño" o "solo corte". 
              Vendemos la transformación completa de tu idea en un producto visible y vendible.
            </p>
            <Link
              to="/servicios"
              className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Explora nuestras soluciones
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 2: ¿Qué hacemos? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Diseño · Fabricación · Posicionamiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una sola línea de desarrollo, con GMD como eje central de tu transformación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Diseño e Ingeniería */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diseño e Ingeniería</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Investigación de necesidades
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Diseño conceptual e ingeniería mecánica
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Modelado 3D y validación técnica (Design Audit)
                </li>
              </ul>
            </div>

            {/* Fabricación y Prototipado */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Cog className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fabricación y Prototipado</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Corte láser de precisión
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Producción de piezas personalizadas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Armado de modelos funcionales
                </li>
              </ul>
            </div>

            {/* Marketing y Lanzamiento */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing y Lanzamiento</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Branding del producto
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Landing page, video, estrategia de venta
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Generación de leads para posicionarlo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Entradas por tipo de cliente */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Desde dónde quieres comenzar?
            </h2>
            <p className="text-xl text-gray-600">
              Cada cliente tiene un punto de partida diferente. Nosotros nos adaptamos a ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tengo una idea */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "Tengo una idea y necesito que me ayuden a desarrollarla"
              </h3>
              <p className="text-gray-600 mb-6">
                Comenzamos desde cero. Investigamos, diseñamos, fabricamos y te ayudamos a vender.
              </p>
              <Link
                to="/servicios?tipo=idea"
                className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors duration-200"
              >
                Desarrollar mi idea
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Ya tengo el diseño */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "Ya tengo el diseño, quiero fabricar"
              </h3>
              <p className="text-gray-600 mb-6">
                Perfecto. Validamos tu diseño, fabricamos prototipos y te ayudamos con el lanzamiento.
              </p>
              <Link
                to="/servicios?tipo=fabricacion"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Fabricar mi producto
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Ya tengo el producto */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "Ya tengo el producto, quiero vender más"
              </h3>
              <p className="text-gray-600 mb-6">
                Excelente. Creamos la estrategia de marketing y las herramientas para maximizar tus ventas.
              </p>
              <Link
                to="/servicios?tipo=marketing"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Impulsar mis ventas
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Casos de éxito */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Proyectos donde aplicamos todo el proceso: desde el diseño hasta la venta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Caso 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <Cog className="text-cyan-600" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sistema de Automatización Industrial</h3>
                <p className="text-gray-600 mb-4">
                  Diseño completo, fabricación de componentes y estrategia de lanzamiento para empresa del sector automotriz.
                </p>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  "GMD transformó nuestra idea en un producto exitoso que ahora lidera el mercado."
                </p>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <Lightbulb className="text-green-600" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dispositivo Médico Innovador</h3>
                <p className="text-gray-600 mb-4">
                  Desde el concepto inicial hasta la comercialización exitosa en el sector salud.
                </p>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  "El proceso integral de GMD nos permitió llegar al mercado en tiempo récord."
                </p>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <TrendingUp className="text-purple-600" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Producto de Consumo Masivo</h3>
                <p className="text-gray-600 mb-4">
                  Rediseño completo, optimización de fabricación y estrategia de marketing digital.
                </p>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  "Las ventas se incrementaron 300% después de trabajar con GMD."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/casos-de-exito"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Ver todos los casos
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 5: CTA - "Hablemos de tu idea" */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu idea
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Cuéntanos en qué punto estás. Nosotros nos encargamos del resto.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto o idea..."
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/1234567890"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200"
            >
              <Phone className="mr-2" size={20} />
              WhatsApp directo
            </a>
            <a
              href="mailto:contacto@gmd.com"
              className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-600 transition-colors duration-200"
            >
              <Mail className="mr-2" size={20} />
              Enviar email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

