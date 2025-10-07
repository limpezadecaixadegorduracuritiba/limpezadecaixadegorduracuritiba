import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Wrench, Home, Building, Factory, Droplets, Settings, Recycle } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const phoneNumber = '5541991887007'
  const whatsappUrl = `https://wa.me/${phoneNumber}`
  const phoneUrl = `tel:+${phoneNumber}`

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Limpeza de Caixa de Gordura Residencial",
      description: "Evite problemas de entupimento e mau cheiro em sua casa. Realizamos a limpeza completa da caixa de gordura, removendo todos os resíduos e garantindo o fluxo adequado da água."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Limpeza de Caixa de Gordura Comercial",
      description: "Para restaurantes, lanchonetes e outros estabelecimentos comerciais, a limpeza da caixa de gordura é crucial para a higiene e conformidade com as normas sanitárias."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Limpeza de Caixa de Gordura Industrial",
      description: "Grandes volumes de gordura e resíduos exigem soluções robustas. Atendemos indústrias em Curitiba com equipamentos de alta capacidade."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Desentupimento de Caixa de Gordura",
      description: "Quando a caixa de gordura já está entupida, nossa equipe está pronta para realizar o desentupimento utilizando técnicas avançadas como o hidrojateamento."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Manutenção Preventiva",
      description: "A melhor forma de evitar problemas é a prevenção. Oferecemos planos de manutenção preventiva com visitas regulares para inspeção e limpeza."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Descarte Correto de Resíduos",
      description: "Após a limpeza, o descarte dos resíduos de gordura é feito de forma ecologicamente correta, seguindo todas as normas ambientais."
    }
  ]

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "Atendimento 24 Horas" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Orçamento Gratuito" },
    { icon: <Shield className="w-6 h-6" />, text: "Equipe Especializada" },
    { icon: <Wrench className="w-6 h-6" />, text: "Tecnologia Avançada" }
  ]

  const Header = () => (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">
            🧽 LIMPEZA DE CAIXA DE GORDURA CURITIBA
          </div>
          <div className="flex gap-4 items-center">
            <a href={phoneUrl} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              (41) 99188-7007
            </a>
            <a href={whatsappUrl} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )

  const Navigation = () => (
    <nav className="bg-blue-800 mt-16 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-6">
          {[
            { id: 'home', label: '🏠 Início' },
            { id: 'services', label: '🛠️ Serviços' },
            { id: 'about', label: 'ℹ️ Sobre Nós' },
            { id: 'contact', label: '📞 Contato' }
          ].map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-white/20 text-white' 
                    : 'text-blue-100 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )

  const Hero = () => (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🧽 Limpeza de Caixa de Gordura em Curitiba
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
          Sua caixa de gordura está entupida ou com mau cheiro em Curitiba? Oferecemos soluções eficientes e rápidas para limpeza e desentupimento de caixas de gordura, garantindo o bom funcionamento do seu sistema de esgoto.
        </p>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">🎯 Orçamento Gratuito e Atendimento 24h</h3>
          <div className="text-4xl font-bold mb-2">Ligue Agora!</div>
          <p className="text-lg">Atendimento 24 horas • Orçamento Gratuito • Sem cobrança de visita</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button 
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href={phoneUrl}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          🛠️ Nossos Serviços de Limpeza de Caixa de Gordura
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const WhyChooseUs = () => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          ✅ Por Que Escolher Nossos Serviços em Curitiba?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <p className="font-semibold text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Nossa empresa é referência em limpeza de caixa de gordura em Curitiba, oferecendo qualidade com o melhor custo-benefício e compromisso ambiental.
          </p>
          <p className="text-lg text-gray-700">
            Entre em contato e solicite um orçamento sem compromisso!
          </p>
        </div>
      </div>
    </section>
  )

  const AboutSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          ℹ️ Sobre a Limpeza de Caixa de Gordura Curitiba
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Oferecer serviços de limpeza e desentupimento de caixas de gordura de alta qualidade em Curitiba, garantindo a satisfação dos nossos clientes e a preservação do meio ambiente.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser a empresa líder e referência em soluções para caixas de gordura em Curitiba e região, reconhecida pela excelência no atendimento e inovação tecnológica.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Nossos Valores</h3>
              <p className="text-gray-700">
                Qualidade, compromisso, sustentabilidade, transparência, inovação e segurança em todos os serviços prestados.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Com anos de experiência no mercado de Curitiba, nossa equipe é formada por profissionais altamente qualificados e treinados para lidar com qualquer desafio relacionado à limpeza de caixas de gordura.
            </p>
            <p className="text-lg text-gray-700">
              Nosso atendimento é 24 horas, todos os dias da semana, para que você nunca fique na mão em caso de emergências. Conte conosco para manter sua caixa de gordura sempre em perfeito estado!
            </p>
          </div>
        </div>
      </div>
    </section>
  )

  const ContactSection = () => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          📞 Entre em Contato Conosco
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Telefone: <a href={phoneUrl} className="text-blue-600 hover:underline">(41) 99188-7007</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>WhatsApp: <a href={whatsappUrl} className="text-green-600 hover:underline">(41) 99188-7007</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Atendimento 24 horas por dia, 7 dias por semana</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Fale Conosco</h3>
              <p className="text-gray-700 mb-6">
                Estamos prontos para atender suas necessidades de limpeza de caixa de gordura em Curitiba. Entre em contato através dos nossos canais de atendimento!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <a href={phoneUrl}>
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const FloatingButtons = () => (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={phoneUrl}
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )

  const Footer = () => (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Limpeza de Caixa de Gordura Curitiba</h4>
            <p className="text-blue-100">
              Especialistas em limpeza e desentupimento de caixas de gordura em toda Curitiba e região.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-blue-100">
              <p>Telefone: <a href={phoneUrl} className="hover:text-white">(41) 99188-7007</a></p>
              <p>WhatsApp: <a href={whatsappUrl} className="hover:text-white">(41) 99188-7007</a></p>
              <p>Email: contato@limpezadecaixadegorduracuritiba.onrender.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Serviços</h4>
            <div className="space-y-2 text-blue-100">
              <p>Limpeza Residencial</p>
              <p>Limpeza Comercial</p>
              <p>Desentupimento</p>
              <p>Manutenção Preventiva</p>
            </div>
          </div>
        </div>
        <div className="text-center text-blue-100 border-t border-blue-700 pt-8">
          <p>&copy; 2025 Limpeza de Caixa de Gordura Curitiba. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'services':
        return (
          <>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  🛠️ Nossos Serviços de Limpeza de Caixa de Gordura
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                  Oferecemos uma gama completa de serviços para garantir o bom funcionamento e a higiene da sua caixa de gordura em Curitiba.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={phoneUrl}>
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </section>
            <ServicesSection />
            <WhyChooseUs />
          </>
        )
      case 'about':
        return (
          <>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  ℹ️ Sobre a Limpeza de Caixa de Gordura Curitiba
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                  Conheça a nossa história, missão e valores que nos tornam a escolha ideal para a limpeza de caixas de gordura em Curitiba.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={phoneUrl}>
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </section>
            <AboutSection />
          </>
        )
      case 'contact':
        return (
          <>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  📞 Entre em Contato Conosco
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                  Estamos prontos para atender suas necessidades de limpeza de caixa de gordura em Curitiba. Fale conosco!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={phoneUrl}>
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </section>
            <ContactSection />
          </>
        )
      default:
        return (
          <>
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {renderContent()}
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
