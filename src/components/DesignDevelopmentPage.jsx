import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Search, PenTool, CheckCircle, Target, Zap, Shield } from 'lucide-react';

const DesignDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Diseño & Desarrollo
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Transformamos ideas en diseños técnicos viables y optimizados para la fabricación exitosa
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Comenzar mi proyecto
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
                <Lightbulb className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de Diseño
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados técnicamente viables y comercialmente exitosos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Investigación */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Search className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Investigación de Necesidades</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Análisis del mercado objetivo
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Estudio de competencia
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Definición de requerimientos técnicos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Identificación de restricciones
                </li>
              </ul>
            </div>

            {/* Diseño Conceptual */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <PenTool className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Diseño Conceptual e Ingeniería</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Bocetos y conceptos iniciales
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Cálculos de ingeniería mecánica
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Selección de materiales
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Optimización estructural
                </li>
              </ul>
            </div>

            {/* Validación */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Modelado 3D y Validación</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Modelado 3D detallado
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Simulaciones y análisis FEA
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Design Audit completo
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  Documentación técnica
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beneficios de Nuestro Servicio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisión Técnica</h3>
              <p className="text-gray-600">
                Diseños optimizados que cumplen con todas las especificaciones técnicas y normativas aplicables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovación Aplicada</h3>
              <p className="text-gray-600">
                Incorporamos las últimas tecnologías y metodologías para crear soluciones verdaderamente innovadoras.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Validación Completa</h3>
              <p className="text-gray-600">
                Cada diseño pasa por rigurosas pruebas y validaciones antes de proceder a la fabricación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Entregables del Proyecto
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Al finalizar el proceso de diseño y desarrollo, recibirás un paquete completo de documentación técnica.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Planos técnicos detallados</h4>
                    <p className="text-gray-600">Documentación completa para fabricación</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modelos 3D editables</h4>
                    <p className="text-gray-600">Archivos CAD en formatos estándar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reportes de simulación</h4>
                    <p className="text-gray-600">Análisis de resistencia y comportamiento</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lista de materiales (BOM)</h4>
                    <p className="text-gray-600">Especificaciones completas de componentes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Manual de ensamblaje</h4>
                    <p className="text-gray-600">Instrucciones paso a paso</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <Lightbulb className="text-cyan-600 mx-auto mb-6" size={80} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes una idea?</h3>
                <p className="text-gray-600 mb-6">
                  Comencemos a trabajar juntos para convertir tu concepto en un diseño técnico viable.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors duration-200"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siguiente paso: Fabricación
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Una vez completado el diseño, nuestro equipo de fabricación convierte los planos en productos reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios/fabricacion-prototipado"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              Ver Fabricación & Prototipado
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

export default DesignDevelopmentPage;

