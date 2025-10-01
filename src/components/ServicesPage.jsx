import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Cog, TrendingUp, CheckCircle, Users, Award, Clock } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tres unidades especializadas trabajando en perfecta sincronía para transformar tu idea en un producto exitoso
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Diseño & Desarrollo */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Diseño & Desarrollo</h3>
              <p className="text-gray-600 mb-6">
                Transformamos conceptos en diseños técnicos viables, desde la investigación inicial hasta la validación completa.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Investigación de necesidades</h4>
                    <p className="text-sm text-gray-600">Análisis profundo del mercado y usuarios objetivo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diseño conceptual e ingeniería mecánica</h4>
                    <p className="text-sm text-gray-600">Desarrollo técnico y optimización estructural</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modelado 3D y validación técnica</h4>
                    <p className="text-sm text-gray-600">Design Audit completo y simulaciones</p>
                  </div>
                </div>
              </div>

              <Link
                to="/servicios/diseno-desarrollo"
                className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors duration-200 w-full justify-center"
              >
                Ver detalles
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Fabricación & Prototipado */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                <Cog className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Fabricación & Prototipado</h3>
              <p className="text-gray-600 mb-6">
                Convertimos diseños en productos físicos funcionales con tecnología de vanguardia y precisión artesanal.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Corte láser de precisión</h4>
                    <p className="text-sm text-gray-600">Tecnología avanzada para máxima exactitud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Producción de piezas personalizadas</h4>
                    <p className="text-sm text-gray-600">Fabricación adaptada a especificaciones únicas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Armado de modelos funcionales</h4>
                    <p className="text-sm text-gray-600">Prototipos listos para pruebas y validación</p>
                  </div>
                </div>
              </div>

              <Link
                to="/servicios/fabricacion-prototipado"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200 w-full justify-center"
              >
                Ver detalles
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Marketing & Lanzamiento */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Marketing & Lanzamiento</h3>
              <p className="text-gray-600 mb-6">
                Posicionamos tu producto en el mercado con estrategias integrales que maximizan el impacto y las ventas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Branding del producto</h4>
                    <p className="text-sm text-gray-600">Identidad visual y posicionamiento estratégico</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Landing page, video, estrategia de venta</h4>
                    <p className="text-sm text-gray-600">Herramientas digitales para conversión</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Generación de leads</h4>
                    <p className="text-sm text-gray-600">Estrategias para captar clientes potenciales</p>
                  </div>
                </div>
              </div>

              <Link
                to="/servicios/marketing-lanzamiento"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200 w-full justify-center"
              >
                Ver detalles
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir GMD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos el único partner que necesitas para llevar tu idea desde el concepto hasta el éxito comercial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipo Multidisciplinario</h3>
              <p className="text-gray-600">
                Ingenieros, diseñadores y especialistas en marketing trabajando en conjunto para tu proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Procesos certificados y estándares de calidad internacional en cada etapa del desarrollo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tiempo Optimizado</h3>
              <p className="text-gray-600">
                Metodología ágil que reduce tiempos de desarrollo sin comprometer la calidad del resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Cuéntanos tu idea y te mostraremos cómo podemos transformarla en realidad
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
          >
            Solicitar consulta gratuita
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

