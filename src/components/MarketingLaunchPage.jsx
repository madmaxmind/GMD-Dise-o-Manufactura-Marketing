import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Megaphone, CheckCircle, BarChart, Users, Globe } from 'lucide-react';

const MarketingLaunchPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Marketing & Lanzamiento
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Posicionamos tu producto en el mercado con estrategias integrales que maximizan el impacto y las ventas
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Impulsar mis ventas
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
                <TrendingUp className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios de Marketing Integral
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde la identidad de marca hasta la generación de leads, cubrimos todos los aspectos del marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Branding */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Branding del Producto</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Identidad visual completa
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Posicionamiento estratégico
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Propuesta de valor única
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Manual de marca
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Digital</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Landing pages optimizadas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Videos promocionales
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Estrategia de contenidos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Campañas publicitarias
                </li>
              </ul>
            </div>

            {/* Lead Generation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Generación de Leads</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Estrategias de captación
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Automatización de marketing
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Nurturing de prospectos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Análisis de conversión
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estrategia de Lanzamiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada para introducir productos exitosamente en el mercado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Análisis de Mercado</h3>
              <p className="text-gray-600">
                Investigación profunda del mercado objetivo, competencia y oportunidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desarrollo de Marca</h3>
              <p className="text-gray-600">
                Creación de identidad visual y posicionamiento diferenciado en el mercado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Campaña de Lanzamiento</h3>
              <p className="text-gray-600">
                Ejecución de estrategias multicanal para maximizar el impacto inicial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimización Continua</h3>
              <p className="text-gray-600">
                Monitoreo y ajuste de estrategias basado en resultados y métricas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Herramientas Digitales
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Desarrollamos todas las herramientas digitales necesarias para el éxito de tu producto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Landing Pages Optimizadas</h4>
                    <p className="text-gray-600">Páginas web diseñadas específicamente para convertir visitantes en clientes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Megaphone className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Videos Promocionales</h4>
                    <p className="text-gray-600">Contenido audiovisual profesional que comunica el valor de tu producto.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Analytics y Seguimiento</h4>
                    <p className="text-gray-600">Herramientas de medición para optimizar el rendimiento de las campañas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <TrendingUp className="text-purple-600 mx-auto mb-6" size={80} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para vender?</h3>
                <p className="text-gray-600 mb-6">
                  Desarrollemos juntos la estrategia perfecta para posicionar tu producto en el mercado.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Solicitar estrategia
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-gray-600">
              Nuestras estrategias han ayudado a decenas de productos a alcanzar el éxito comercial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Incremento promedio en ventas</div>
              <p className="text-gray-600">Después de implementar nuestras estrategias de marketing</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Tasa de conversión</div>
              <p className="text-gray-600">En landing pages optimizadas por nuestro equipo</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">6 meses</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Tiempo promedio de ROI</div>
              <p className="text-gray-600">Para recuperar la inversión en marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Completa tu Transformación
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Has llegado al final del proceso. Tu idea ya es un producto real y exitoso en el mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/casos-de-exito"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              Ver casos de éxito
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Comenzar mi proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingLaunchPage;

