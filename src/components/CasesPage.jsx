import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const CasesPage = () => {
  const cases = [
    {
      id: 1,
      title: "Sistema de Automatización Industrial",
      client: "AutoTech Solutions",
      industry: "Automotriz",
      challenge: "Necesitaban automatizar su línea de producción para aumentar la eficiencia y reducir costos operativos.",
      solution: "Diseñamos e implementamos un sistema completo de automatización con sensores IoT, control centralizado y interfaz de usuario intuitiva.",
      results: [
        "Incremento del 45% en productividad",
        "Reducción del 30% en costos operativos",
        "ROI recuperado en 8 meses"
      ],
      testimonial: "GMD transformó nuestra idea en un producto exitoso que ahora lidera el mercado. Su enfoque integral nos permitió ir desde el concepto hasta la implementación sin contratiempos.",
      testimonialAuthor: "Carlos Mendoza, Director de Operaciones",
      image: "industrial-automation",
      color: "cyan"
    },
    {
      id: 2,
      title: "Dispositivo Médico Innovador",
      client: "MedTech Innovations",
      industry: "Salud",
      challenge: "Desarrollar un dispositivo médico portátil para monitoreo de signos vitales con certificaciones internacionales.",
      solution: "Proceso completo desde investigación y diseño hasta fabricación y estrategia de lanzamiento, incluyendo certificaciones FDA y CE.",
      results: [
        "Certificación FDA obtenida en tiempo récord",
        "Lanzamiento exitoso en 3 países",
        "Ventas superiores a las proyecciones en 200%"
      ],
      testimonial: "El proceso integral de GMD nos permitió llegar al mercado en tiempo récord. Su experiencia en regulaciones médicas fue fundamental para nuestro éxito.",
      testimonialAuthor: "Dra. Ana Rodríguez, CEO",
      image: "medical-device",
      color: "green"
    },
    {
      id: 3,
      title: "Producto de Consumo Masivo",
      client: "EcoHome Products",
      industry: "Consumo",
      challenge: "Rediseñar un producto existente para mejorar su funcionalidad y posicionamiento en el mercado competitivo.",
      solution: "Rediseño completo del producto, optimización de fabricación, nueva identidad de marca y estrategia de marketing digital integral.",
      results: [
        "Incremento del 300% en ventas",
        "Expansión a 5 nuevos mercados",
        "Reconocimiento como 'Producto del Año'"
      ],
      testimonial: "Las ventas se incrementaron 300% después de trabajar con GMD. Su visión estratégica y ejecución impecable superaron todas nuestras expectativas.",
      testimonialAuthor: "Miguel Torres, Gerente de Marketing",
      image: "consumer-product",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        icon: "text-cyan-600",
        iconBg: "bg-cyan-100",
        button: "bg-cyan-600 hover:bg-cyan-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        iconBg: "bg-green-100",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Proyectos reales donde aplicamos todo nuestro proceso: desde el diseño hasta la venta exitosa
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Proyectos Completados</div>
              <p className="text-gray-600">Desde el concepto hasta el mercado</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Tasa de Éxito</div>
              <p className="text-gray-600">Productos exitosos en el mercado</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">ROI Promedio</div>
              <p className="text-gray-600">Retorno de inversión para clientes</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Meses Promedio</div>
              <p className="text-gray-600">De idea a producto en el mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((caseStudy, index) => {
              const colors = getColorClasses(caseStudy.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={caseStudy.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.icon}`}>
                        {caseStudy.industry}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{caseStudy.client}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Desafío</h3>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solución</h3>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Resultados</h3>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className={`${colors.icon} mr-2 mt-1 flex-shrink-0`} size={16} />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual/Testimonial */}
                  <div className={`${colors.bg} rounded-2xl p-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="text-center mb-8">
                      <div className={`w-24 h-24 ${colors.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <TrendingUp className={colors.icon} size={48} />
                      </div>
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{caseStudy.testimonial}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{caseStudy.testimonialAuthor}</div>
                        <div className="text-sm text-gray-600">{caseStudy.client}</div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro Proceso Probado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La metodología que garantiza el éxito de cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investigación Profunda</h3>
              <p className="text-gray-600">
                Entendemos a fondo las necesidades del mercado y los usuarios antes de diseñar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ejecución Experta</h3>
              <p className="text-gray-600">
                Combinamos diseño técnico, fabricación precisa y estrategias de marketing efectivas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resultados Medibles</h3>
              <p className="text-gray-600">
                Monitoreamos el éxito y optimizamos continuamente para maximizar el impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a las empresas que han transformado sus ideas en productos exitosos con GMD
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
          >
            Comenzar mi proyecto
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CasesPage;

