import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Zap, Settings, CheckCircle, Wrench, Gauge, Award } from 'lucide-react';

const FabricationPrototypingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fabricación & Prototipado
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Convertimos diseños técnicos en productos físicos funcionales con precisión y calidad excepcional
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Fabricar mi producto
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
                <Cog className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tecnologías de Fabricación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos equipos de última generación para garantizar la máxima precisión y calidad en cada pieza
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corte Láser */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corte Láser de Precisión</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Tolerancias de ±0.1mm
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Múltiples materiales: acero, aluminio, acrílico
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Espesores hasta 25mm
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Acabados de alta calidad
                </li>
              </ul>
            </div>

            {/* Producción Personalizada */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Settings className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Producción Personalizada</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Piezas únicas y series cortas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Adaptación a especificaciones exactas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Procesos de manufactura optimizados
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Control de calidad en cada etapa
                </li>
              </ul>
            </div>

            {/* Armado Funcional */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Armado de Modelos Funcionales</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Prototipos completamente funcionales
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Pruebas de funcionamiento
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Ajustes y optimizaciones
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Documentación de ensamblaje
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proceso de Fabricación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología estructurada que garantiza resultados de calidad en tiempos optimizados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Análisis de Planos</h3>
              <p className="text-gray-600">
                Revisión detallada de especificaciones técnicas y optimización para fabricación.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preparación de Materiales</h3>
              <p className="text-gray-600">
                Selección y preparación de materiales según especificaciones del proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fabricación</h3>
              <p className="text-gray-600">
                Producción de piezas con tecnología de corte láser y procesos especializados.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ensamblaje y Pruebas</h3>
              <p className="text-gray-600">
                Armado del producto final y validación de funcionamiento completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Estándares de Calidad
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Cada producto que fabricamos cumple con los más altos estándares de calidad y precisión.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Gauge className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Control Dimensional</h4>
                    <p className="text-gray-600">Verificación de medidas con instrumentos de precisión calibrados.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Certificación de Materiales</h4>
                    <p className="text-gray-600">Uso exclusivo de materiales certificados con trazabilidad completa.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Pruebas Funcionales</h4>
                    <p className="text-gray-600">Validación completa del funcionamiento antes de la entrega.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center">
                <Cog className="text-green-600 mx-auto mb-6" size={80} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes planos listos?</h3>
                <p className="text-gray-600 mb-6">
                  Envíanos tus especificaciones y te proporcionaremos una cotización detallada.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Materiales Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con una amplia gama de materiales para satisfacer cualquier requerimiento técnico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Aceros</h4>
              <p className="text-sm text-gray-600">Inoxidable, al carbono, aleados</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Aluminios</h4>
              <p className="text-sm text-gray-600">6061, 7075, fundición</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Plásticos</h4>
              <p className="text-sm text-gray-600">Acrílico, POM, PEEK</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Compuestos</h4>
              <p className="text-sm text-gray-600">Fibra de carbono, kevlar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siguiente paso: Marketing & Lanzamiento
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Una vez fabricado tu producto, nuestro equipo de marketing te ayuda a posicionarlo en el mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios/marketing-lanzamiento"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              Ver Marketing & Lanzamiento
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FabricationPrototypingPage;

