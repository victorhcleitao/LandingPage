import "@/App.css";
import { MessageCircle, MapPin, Baby, Ear, Brain, Heart, CheckCircle, Instagram, Phone, ClipboardCheck, UserRound, Handshake, Star, Play } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521967647661&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20fonoaudiol%C3%B3gico%20infantil.";
const PROFESSIONAL_PHOTO = "/assets/fernanda_hero.jpg";
const LIFESTYLE_IMAGE = "/assets/lifestyle_work.jpeg";

const feedbackImages = [
  "/assets/feedback_1.jpg",
  "/assets/feedback_2.jpg",
  "/assets/feedback_3.jpg",
  "/assets/feedback_4.jpg"
];

const instagramPosts = [
  {
    title: "Transtornos de Fala",
    description: "Dicas sobre como identificar atrasos no desenvolvimento.",
    icon: Brain
  },
  {
    title: "Autismo e Comunicação",
    description: "Estratégias para estimular a fala funcional.",
    icon: Heart
  },
  {
    title: "Intervenção Precoce",
    description: "A importância do diagnóstico nos primeiros anos.",
    icon: Baby
  }
];

const trackWhatsAppClick = (location) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'contact',
      'event_label': location
    });
  }
};

/* ─── Hero Section ─── */
const HeroSection = () =>
<section
  data-testid="hero-section"
  className="relative flex flex-col items-center text-center px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden"
  style={{ backgroundColor: "var(--brand-bg)" }}>

    <div className="hero-blob" />
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      <div className="animate-fade-in-up opacity-0">
        <div
        className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 shadow-lg mx-auto"
        style={{ borderColor: "var(--brand-lilac)" }}>

          <img
          src={PROFESSIONAL_PHOTO}
          alt="Fernanda Loyola - Fonoaudióloga Infantojuvenil"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
          data-testid="hero-photo" />

        </div>
      </div>

      <p
      className="uppercase animate-fade-in-up animate-delay-100 text-xs tracking-[0.2em] font-bold mt-6 opacity-0 !text-[#795C8A]"
      style={{ color: "var(--brand-primary)" }}
      data-testid="hero-overline">Fonoaudióloga infantojuvenil</p>

      <h1
      className="mt-3 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none font-semibold animate-fade-in-up opacity-0 animate-delay-200"
      style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      data-testid="hero-title">
        Fernanda Loyola
      </h1>

      <p
      className="max-w-2xl animate-fade-in-up animate-delay-300 text-base sm:text-lg leading-relaxed mt-5 opacity-0 !text-[#5C4F63]"
      style={{ color: "var(--brand-muted)" }}
      data-testid="hero-subtitle">
        Fonoaudióloga infanto-juvenil há mais de 15 anos, especializada em transtornos de fala, transtorno do espectro autista, síndrome de Down, CAA, prompt 1, multigestos e intervenção precoce. Atendimento em Nova Iguaçu e online.
      </p>

      <a
      href={WHATSAPP_URL}
      onClick={() => trackWhatsAppClick("Hero Section")}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="hero-whatsapp-cta"
      className="mt-8 inline-flex items-center justify-center gap-2 rounded-full text-white font-semibold px-8 py-4 text-lg transition-all hover:-translate-y-1 animate-fade-in-up opacity-0 animate-delay-400"
      style={{
        backgroundColor: "var(--brand-whatsapp)",
        boxShadow: "0 8px 24px rgba(37,211,102,0.25)"
      }}>

        <MessageCircle size={22} strokeWidth={1.5} />
        Agende sua avaliação fonoaudiológica
      </a>
    </div>
  </section>;


/* ─── Para Quem É ─── */
const targetCards = [
{
  icon: Baby,
  title: "Atraso de Fala",
  description: "Avaliação e acompanhamento de crianças que apresentam atraso no desenvolvimento da fala.",
  bg: "var(--brand-lilac)"
},
{
  icon: Brain,
  title: "Dificuldades de Linguagem",
  description: "Intervenção especializada para dificuldades na compreensão e expressão da linguagem.",
  bg: "var(--brand-pink)"
},
{
  icon: Ear,
  title: "Desenvolvimento da Comunicação",
  description: "Estímulo e acompanhamento do desenvolvimento comunicativo com abordagem individualizada.",
  bg: "var(--brand-green)"
}];


const ParaQuemSection = () =>
<section
  data-testid="para-quem-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-surface)" }}>

    <div className="max-w-6xl mx-auto">
      <h2
      className="text-center text-3xl sm:text-4xl tracking-tight font-semibold mb-10"
      style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      data-testid="para-quem-title">
        Algumas áreas de atuação
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {targetCards.map((card, i) =>
      <div
        key={i}
        data-testid={`target-card-${i}`}
        className="p-8 rounded-[2rem] transition-shadow hover:shadow-md"
        style={{ backgroundColor: card.bg }}>

            <card.icon
          size={36}
          strokeWidth={1.5}
          style={{ color: "var(--brand-primary)" }}
          className="mb-4" />

            <h3
          className="text-xl sm:text-2xl font-semibold mb-3"
          style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {card.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              {card.description}
            </p>
          </div>
      )}
      </div>
    </div>
  </section>;


/* ─── Sobre Mim ─── */
const SobreSection = () =>
<section
  data-testid="sobre-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-bg)" }}>

    <div className="max-w-4xl mx-auto">
      <p
      className="text-center uppercase text-xs tracking-[0.2em] font-bold mb-3"
      style={{ color: "var(--brand-primary)" }}>
        Conheça a profissional
      </p>
      <h2
      className="text-center text-3xl sm:text-4xl tracking-tight font-semibold mb-10"
      style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      data-testid="sobre-title">
        Sobre Fernanda Loyola
      </h2>

      <div
      className="p-8 sm:p-10 rounded-[2rem] bg-white"
      style={{ boxShadow: "0 2px 12px rgba(43,35,48,0.06)" }}>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Sou fonoaudióloga há <strong style={{ color: "var(--brand-dark)" }}>15 anos</strong>, com ampla experiência no atendimento ao público infantil. Minha trajetória profissional é marcada pela atuação clínica nos transtornos motores de fala, no autismo, em crianças com síndromes e outras condições do neurodesenvolvimento.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Possuo três pós-graduações — em <strong style={{ color: "var(--brand-dark)" }}>Neuroeducação, Linguagem e ABA</strong> — além de diversos cursos de especialização. Também atuei em maternidade, com avaliação de bebês, teste da linguinha, teste da orelhinha e intervenção precoce.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Acredito que resultados consistentes só acontecem quando existe empatia e escuta ativa. Ouvir as famílias, compreender suas angústias e rotinas faz parte do meu processo terapêutico.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Prompt", "Multigestos", "CAA", "ABA", "Neuroeducação"].map((tag) =>
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ backgroundColor: "var(--brand-lilac)", color: "var(--brand-primary)" }}>
                  {tag}
                </span>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;

/* ─── Feedbacks ─── */
const FeedbackSection = () =>
<section
  data-testid="feedback-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-surface)" }}>
    <div className="max-w-6xl mx-auto">
      <p className="text-center uppercase text-xs tracking-[0.2em] font-bold mb-3" style={{ color: "var(--brand-primary)" }}>
        Feedbacks das Famílias
      </p>
      <h2 className="text-center text-3xl sm:text-4xl tracking-tight font-semibold mb-12" style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        O que dizem os pais
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbackImages.map((img, i) => (
          <div key={i} className="rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <img src={img} alt={`Feedback ${i + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
</section>;


/* ─── Como Funciona ─── */
const steps = [
{
  number: "1",
  icon: ClipboardCheck,
  title: "Avaliação Inicial",
  description: "Avaliação cuidadosa para compreender as necessidades específicas de cada criança e família."
},
{
  number: "2",
  icon: UserRound,
  title: "Plano Individual",
  description: "Desenvolvimento de um plano terapêutico personalizado, alinhado com a família e equipe multidisciplinar."
},
{
  number: "3",
  icon: Handshake,
  title: "Atendimento Humanizado",
  description: "Sessões presenciais com foco em empatia, escuta ativa e evolução real da comunicação."
}];


const ComoFuncionaSection = () =>
<section
  data-testid="como-funciona-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-bg)" }}>

    <div className="max-w-6xl mx-auto">
      <p
      className="text-center uppercase text-xs tracking-[0.2em] font-bold mb-3"
      style={{ color: "var(--brand-primary)" }}>
        Processo de atendimento
      </p>
      <h2
      className="text-center text-3xl sm:text-4xl tracking-tight font-semibold mb-12"
      style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      data-testid="como-funciona-title">
        Como funciona
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-0">
          {steps.map((step, i) =>
        <div key={i}>
              <div className="flex items-start gap-5" data-testid={`step-${i}`}>
                <div className="step-number">{step.number}</div>
                <div className="pt-1">
                  <h3
                className="text-xl sm:text-2xl font-semibold mb-1"
                style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
        )}
        </div>

        <div className="hidden md:block">
          <img
          src={LIFESTYLE_IMAGE}
          alt="Fernanda Loyola trabalhando com protocolos de avaliação"
          className="w-full rounded-[2rem] object-cover shadow-md"
          style={{ maxHeight: "420px" }}
          data-testid="lifestyle-image" />
        </div>
      </div>
    </div>
  </section>;


/* ─── Conteúdo Instagram ─── */
const SocialSection = () =>
<section
  data-testid="social-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-surface)" }}>
    <div className="max-w-6xl mx-auto">
      <p className="text-center uppercase text-xs tracking-[0.2em] font-bold mb-3" style={{ color: "var(--brand-primary)" }}>
        Acompanhe no Instagram
      </p>
      <h2 className="text-center text-3xl sm:text-4xl tracking-tight font-semibold mb-12" style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        Conteúdo e Dicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instagramPosts.map((post, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-white border border-[#2B2330]/5 shadow-sm hover:shadow-md transition-all text-center">
            <div className="w-16 h-16 rounded-full bg-[#E4DAEF] flex items-center justify-center mx-auto mb-6">
              <post.icon size={28} className="text-[#795C8A]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-sm leading-relaxed text-[#5C4F63] mb-6">{post.description}</p>
            <a 
              href="https://www.instagram.com/fernandaloyola_fono/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#795C8A] hover:underline"
            >
              <Instagram size={16} />
              Ver no Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
</section>;


/* ─── Atendimento Presencial ─── */
const AtendimentoSection = () =>
<section
  data-testid="atendimento-section"
  className="px-4 py-16 sm:py-20"
  style={{ backgroundColor: "var(--brand-bg)" }}>

    <div className="max-w-4xl mx-auto">
      <div
      className="text-center py-12 px-6 sm:px-12 rounded-[2rem]"
      style={{ backgroundColor: "var(--brand-green)" }}>

        <MapPin
        size={40}
        strokeWidth={1.5}
        className="mx-auto mb-4"
        style={{ color: "var(--brand-primary)" }} />

        <h2
        className="text-3xl sm:text-4xl tracking-tight font-semibold mb-4"
        style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        data-testid="atendimento-title">
          Atendimento Presencial e Online
        </h2>
        <p
        className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-3"
        style={{ color: "var(--brand-muted)" }}>
          Atendimento realizado de forma <strong style={{ color: "var(--brand-dark)" }}>presencial em Nova Iguaçu (centro) ou online</strong>, com foco no acolhimento da criança e de toda a família. Entre em contato para consultar as condições.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Ambiente acolhedor", "Foco na família", "Atendimento individual"].map((item) =>
        <span
          key={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white"
          style={{ color: "var(--brand-dark)" }}>

              <CheckCircle size={16} strokeWidth={1.5} style={{ color: "var(--brand-primary)" }} />
              {item}
            </span>
        )}
        </div>
      </div>
    </div>
  </section>;


/* ─── CTA Final ─── */
const CTASection = () =>
<section
  data-testid="cta-section"
  className="px-4 py-20 text-center"
  style={{ backgroundColor: "var(--brand-primary)" }}>

    <div className="max-w-2xl mx-auto">
      <Heart size={36} strokeWidth={1.5} className="mx-auto mb-4 text-white opacity-80" />
      <h2
      className="text-3xl sm:text-4xl tracking-tight font-semibold text-white mb-4"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      data-testid="cta-title">
        Quer saber mais sobre o atendimento?
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-8 max-w-lg mx-auto">
        Entre em contato para conversar sobre as necessidades do seu filho. Estou aqui para ajudar.
      </p>
      <a
      href={WHATSAPP_URL}
      onClick={() => trackWhatsAppClick("Final CTA")}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="final-whatsapp-cta"
      className="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-10 py-4 text-lg transition-all hover:-translate-y-1"
      style={{
        backgroundColor: "#FFFFFF",
        color: "var(--brand-whatsapp)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
      }}>

        <MessageCircle size={22} strokeWidth={1.5} />
        Agende sua avaliação fonoaudiológica
      </a>
    </div>
  </section>;


/* ─── Footer ─── */
const Footer = () =>
<footer
  data-testid="footer-section"
  className="px-4 py-10 text-center"
  style={{ backgroundColor: "var(--brand-bg)" }}>

    <div className="max-w-4xl mx-auto space-y-3">
      <p
      className="text-lg font-semibold"
      style={{ color: "var(--brand-dark)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        Fernanda Loyola
      </p>
      <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
        Fonoaudiologia Infantojuvenil | CRFa 1-13720
      </p>

      <div className="flex items-center justify-center gap-6 pt-2">
        <a
        href="https://instagram.com/fernandaloyola_fono"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="footer-instagram"
        className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
        style={{ color: "var(--brand-primary)" }}>

          <Instagram size={18} strokeWidth={1.5} />
          @fernandaloyola_fono
        </a>
        <a
        href="tel:+5521967647661"
        data-testid="footer-phone"
        className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
        style={{ color: "var(--brand-primary)" }}>

          <Phone size={18} strokeWidth={1.5} />
          +55 21 96764-7661
        </a>
      </div>

      <p className="text-xs pt-4" style={{ color: "var(--brand-muted)", opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} Fernanda Loyola. Todos os direitos reservados.
      </p>
    </div>
  </footer>;


/* ─── Floating WhatsApp Button ─── */
const FloatingWhatsApp = () =>
<a
  href={WHATSAPP_URL}
  onClick={() => trackWhatsAppClick("Floating Button")}
  target="_blank"
  rel="noopener noreferrer"
  data-testid="floating-whatsapp-cta"
  className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white transition-transform hover:scale-110 whatsapp-pulse"
  style={{
    backgroundColor: "var(--brand-whatsapp)",
    boxShadow: "0 4px 16px rgba(37,211,102,0.35)"
  }}
  aria-label="Falar no WhatsApp">

    <MessageCircle size={28} strokeWidth={1.5} />
  </a>;


/* ─── Main App ─── */
function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--brand-bg)" }}>
      <HeroSection />
      <ParaQuemSection />
      <SobreSection />
      <FeedbackSection />
      <ComoFuncionaSection />
      <SocialSection />
      <AtendimentoSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>);

}

export default App;