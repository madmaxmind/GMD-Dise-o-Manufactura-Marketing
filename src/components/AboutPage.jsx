import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Lightbulb, Cog, TrendingUp, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jorge Vallejo",
      role: "Fundador & Director de Diseño",
      description: "Ingeniero Mecánico con más de 15 años de experiencia en diseño industrial y desarrollo de productos innovadores.",
      expertise: ["Diseño Mecánico", "Ingeniería de Producto", "Gestión de Proyectos"]
    },
    {
      name: "María González",
      role: "Directora de Fabricación",
      description: "Especialista en procesos de manufactura y control de calidad con certificaciones internacionales.",
      expertise: ["Manufactura Avanzada", "Control de Calidad", "Optimización de Procesos"]
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Marketing",
      description: "Estratega de marketing digital con experiencia en lanzamiento de productos tecnológicos.",
      expertise: ["Marketing Digital", "Estrategia de Marca", "Generación de Leads"]
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Proyectos",
      description: "Coordinadora de proyectos multidisciplinarios con enfoque en metodologías ágiles.",
      expertise: ["Gestión de Proyectos", "Metodologías Ágiles", "Coordinación de Equipos"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precisión Técnica",
      description: "Cada diseño cumple con los más altos estándares de ingeniería y calidad."
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Aplicamos las últimas tecnologías y metodologías en cada proyecto."
    },
    {
      icon: Users,
      title: "Colaboración Integral",
      description: "Trabajamos como una extensión de tu equipo, no como un proveedor externo."
    },
    {
      icon: Award,
      title: "Excelencia Comprobada",
      description: "Nuestros resultados hablan por sí solos: productos exitosos en el mercado."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Fundación de GMD",
      description: "Jorge Vallejo funda GMD con la visión de transformar ideas en productos exitosos."
    },
    {
      year: "2019",
      title: "Primeros Éxitos",
      description: "Lanzamiento exitoso de los primeros 5 productos desarrollados integralmente."
    },
    {
      year: "2021",
      title: "Expansión de Servicios",
      description: "Incorporación de servicios de marketing y lanzamiento para completar el proceso."
    },
    {
      year: "2023",
      title: "Reconocimiento Internacional",
      description: "Certificaciones internacionales y reconocimiento como empresa innovadora."
    },
    {
      year: "2024",
      title: "50+ Productos Exitosos",
      description: "Más de 50 productos desarrollados y lanzados exitosamente al mercado."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nosotros
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Somos el equipo que transforma ideas en productos reales y exitosos. 
                Combinamos ingeniería, fabricación y marketing en un solo lugar.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
              >
                Trabajemos juntos
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto lg:ml-auto">
                <Users className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-cyan-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-cyan-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-600">
                Transformar ideas innovadoras en productos exitosos mediante un proceso integral 
                que combina diseño técnico, fabricación de precisión y estrategias de marketing efectivas. 
                Somos el puente entre la creatividad y el éxito comercial.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-indigo-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-600">
                Ser la empresa líder en Latinoamérica en desarrollo integral de productos, 
                reconocida por nuestra capacidad de convertir cualquier idea en un producto 
                exitoso que genere valor real para nuestros clientes y la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que emprendemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El camino que nos ha llevado a ser líderes en desarrollo integral de productos
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-cyan-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales expertos que combinan creatividad, técnica y estrategia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-cyan-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-cyan-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full inline-block mr-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia respaldado por certificaciones internacionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 9001:2015</h3>
              <p className="text-gray-600">Certificación en sistemas de gestión de calidad para garantizar la excelencia en todos nuestros procesos.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empresa Innovadora</h3>
              <p className="text-gray-600">Reconocimiento oficial como empresa de base tecnológica e innovadora por el gobierno nacional.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top 10 Startups</h3>
              <p className="text-gray-600">Incluidos en el ranking de las 10 startups más prometedoras del sector tecnológico en 2023.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para conocernos mejor?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agenda una reunión con nuestro equipo y descubre cómo podemos transformar tu idea en realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-700 transition-colors duration-200"
            >
              Agendar reunión
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/casos-de-exito"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Ver nuestros casos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

