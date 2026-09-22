import { Activity, ArrowRight, BadgeCheck, BarChart3, Blocks, Box, BriefcaseBusiness, Check, CloudCog, Code2, Guitar, Headphones, Layers3, Mail, Music2, Rocket, ShieldCheck, SlidersHorizontal, Smartphone, Store, Workflow } from 'lucide-react'
import './App.css'

const services = [
  { icon: Smartphone, title: 'Desenvolvimento mobile', copy: 'Aplicativos Android e iOS com Flutter, integrações nativas e arquitetura preparada para evoluir.' },
  { icon: CloudCog, title: 'CI/CD e publicação', copy: 'Automação de builds, assinatura, testes e entregas para Google Play, App Store e TestFlight.' },
  { icon: Blocks, title: 'Produtos conectados', copy: 'APIs, autenticação, pagamentos, serviços em nuvem e integrações autorizadas com plataformas externas.' },
]

const apps = [
  { icon: SlidersHorizontal, name: 'PitchPro', label: 'Performance musical', copy: 'Player offline de palco para mudar tom e andamento, organizar repertórios e preparar playbacks para cada voz.', highlight: 'App Store + Google Play', href: '/pitchpro/' },
  { icon: Activity, name: 'Delay & Reverb Pro', label: 'Ferramenta musical', copy: 'Calculadora de BPM, delay e reverb com Tap BPM, presets, setlists, modo palco e backup local.', highlight: 'Android + iOS', href: '/delay-reverb/' },
  { icon: Box, name: 'Car Audio Box', label: 'Projeto automotivo', copy: 'Dimensionamento de caixas, catálogo, plano de corte, verificação no carro, 3D e análise RTA em um fluxo guiado.', highlight: 'Android + iOS', href: '/car-audio-box/' },
  { icon: Guitar, name: 'Ritmos de Violão', label: 'Educação musical', copy: 'Ritmos, levadas, acordes, afinador, metrônomo e harmonia em uma experiência mobile completa.', highlight: '100 mil+ downloads', href: 'https://play.google.com/store/apps/details?id=br.com.devfull.cursodeviolao' },
  { icon: BarChart3, name: 'Audio RTA Analyzer', label: 'Análise de áudio', copy: 'Espectro, frequências, níveis em dB e testes práticos de sistemas de som em tempo real.', highlight: 'DSP em tempo real', href: 'https://play.google.com/store/apps/details?id=app.rtalab.audioanalyzer' },
  { icon: Headphones, name: 'Acoustic Pro', label: 'Áudio profissional', copy: 'Medições, utilitários acústicos e fluxos de trabalho para profissionais de áudio.', highlight: 'Mobile + áudio' },
  { icon: Music2, name: 'Campo Harmônico', label: 'Teoria musical', copy: 'Consulta e estudo de tonalidades, progressões e relações harmônicas no celular.', highlight: 'Aprendizado prático' },
  { icon: SlidersHorizontal, name: 'Stem Extractor', label: 'Inteligência de áudio', copy: 'Separação de voz e instrumentos com processamento de áudio e inteligência artificial.', highlight: 'IA aplicada' },
  { icon: Activity, name: 'Pedal Cifras', label: 'Performance musical', copy: 'Acesso rápido a cifras e rolagem mãos livres para acompanhar músicas enquanto o usuário toca.', highlight: 'Experiência hands-free', href: 'https://play.google.com/store/apps/details?id=br.com.pedalcifras' },
]

const experience = [
  { company: 'Memora Processos Inovadores S/A', role: 'Desenvolvimento Flutter', context: 'Engenharia mobile em ambiente corporativo' },
  { company: 'DIX Digital', role: 'Flutter e deploy mobile', context: 'Desenvolvimento e automação de entregas' },
  { company: 'Startamus · antiga Gotech', role: 'Android e Flutter', context: 'Produtos financeiros, sociais, eventos e saúde' },
  { company: 'Acelera IT', role: 'Desenvolvimento Flutter', context: 'Aplicativo de delivery musical' },
  { company: 'BeSoft Tecnologia', role: 'Desenvolvimento Flutter', context: 'Assinatura digital, vistorias e projetos sob demanda' },
  { company: '3Y', role: 'Android e Flutter', context: 'Aplicativos e integrações mobile' },
]

function App() {
  return <main id="top">
    <header className="site-header">
      <a className="brand" href="#top"><span className="brand-mark"><img src="/brand-icon.png" alt="" /></span><span><strong>M P Cardoso</strong><small>Solutions</small></span></a>
      <nav aria-label="Principal"><a href="#servicos">Serviços</a><a href="#portfolio">Aplicativos</a><a href="#experiencia">Experiência</a><a href="#empresa">Empresa</a><a href="/privacy/">Privacidade</a></nav>
      <a className="header-cta" href="/contact/">Fale conosco <ArrowRight size={16}/></a>
    </header>

    <section className="hero-section">
      <div className="hero-grid" />
      <div className="hero-content">
        <p className="eyebrow"><Code2 size={16}/> Empresa brasileira de tecnologia</p>
        <h1>Engenharia <span className="accent-cyan">mobile</span> que chega às <span className="accent-lime">lojas.</span></h1>
        <p className="hero-copy">A M P Cardoso Solutions cria aplicativos, produtos digitais e pipelines de CI/CD para entregas seguras na Google Play e App Store.</p>
        <div className="hero-actions"><a className="primary-link" href="#portfolio">Conheça nossos produtos <ArrowRight size={19}/></a><a className="secondary-link" href="#servicos">Ver serviços</a></div>
        <ul className="trust-list"><li><Check size={15}/> Android e iOS</li><li><Check size={15}/> Automação de releases</li><li><Check size={15}/> Áudio, IA e integrações</li></ul>
      </div>
      <div className="hero-console">
        <div className="console-top"><span/><span/><span/><small>mobile-release.yml</small></div>
        <div className="console-body"><p><span>01</span> build_android <BadgeCheck size={18}/></p><p><span>02</span> test_and_sign <BadgeCheck size={18}/></p><p><span>03</span> upload_play_store <BadgeCheck size={18}/></p><p><span>04</span> upload_testflight <BadgeCheck size={18}/></p></div>
        <div className="console-status"><Rocket size={18}/> Release pronta para distribuição</div>
      </div>
    </section>

    <section className="proof-strip"><div><strong>Android + iOS</strong><span>Desenvolvimento multiplataforma</span></div><div><strong>100 mil+</strong><span>Downloads no principal aplicativo</span></div><div><strong>CNPJ ativo</strong><span>61.798.348/0001-60</span></div></section>

    <section className="section" id="servicos">
      <div className="section-heading split"><div><p className="eyebrow dark"><Layers3 size={16}/> Serviços</p><h2>Do código à publicação.</h2></div><p>Atuação ponta a ponta para empresas que precisam criar, modernizar ou entregar aplicativos com previsibilidade.</p></div>
      <div className="service-grid">{services.map(({icon:Icon,title,copy},i)=><article className="service-card" key={title}><span>0{i+1}</span><Icon size={30}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="section portfolio-section" id="portfolio">
      <div className="section-heading"><p className="eyebrow"><Store size={16}/> Produtos próprios</p><h2>Experiência comprovada em produtos mobile.</h2><p>Portfólio corporativo concentrado em música, áudio, aprendizagem e ferramentas técnicas.</p></div>
      <div className="app-grid">{apps.map(({icon:Icon,name,label,copy,highlight,href})=>{const body=<><div className="app-top"><span><Icon size={25}/></span><small>{label}</small></div><h3>{name}</h3><p>{copy}</p><strong>{highlight}</strong></>;return href?<a className="app-card" href={href} target="_blank" rel="noreferrer" key={name}>{body}</a>:<article className="app-card" key={name}>{body}</article>})}</div>
    </section>

    <section className="section experience-section" id="experiencia">
      <div className="section-heading split"><div><p className="eyebrow dark"><BriefcaseBusiness size={16}/> Experiência profissional</p><h2>Engenharia construída em projetos reais.</h2></div><p>O responsável técnico da empresa reúne experiência em desenvolvimento mobile, manutenção de produtos e publicação contínua para organizações de diferentes setores.</p></div>
      <div className="experience-grid">{experience.map(({company,role,context})=><article key={company}><span><Check size={16}/></span><div><h3>{company}</h3><strong>{role}</strong><p>{context}</p></div></article>)}</div>
      <p className="experience-note">Histórico profissional de Mateus Polonini Cardoso. As organizações citadas não representam necessariamente clientes atuais ou parceiros comerciais da M P Cardoso Solutions.</p>
    </section>

    <section className="section process-section"><div><p className="eyebrow dark"><Workflow size={16}/> Processo</p><h2>Entrega contínua desde o início.</h2><p>Projetos preparados para testes, assinatura segura e publicação repetível nas lojas.</p></div><ol>{['Descoberta e definição técnica','Design, desenvolvimento e integrações','Testes e automação de entrega','Publicação e acompanhamento nas lojas'].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol></section>

    <section className="section data-section"><ShieldCheck size={46}/><div><p className="eyebrow dark">Privacidade e integrações</p><h2>Finalidade clara. Controle do usuário.</h2><p>Em produtos conectados, incluindo futuras integrações com plataformas de saúde e atividade, o acesso ocorre somente após autorização e para funcionalidades claramente apresentadas. A empresa não vende dados nem solicita integrações para uso pessoal do representante.</p><p><a href="/privacy/">Ler Política de Privacidade <ArrowRight size={17}/></a> <a href="/terms/">Termos de Uso</a></p></div></section>

    <section className="section company-section" id="empresa">
      <article className="company-card"><p className="eyebrow">Empresa</p><h2>M P Cardoso Solutions</h2><p>Empresa brasileira de desenvolvimento de software sob encomenda, licenciamento de soluções customizáveis e consultoria em tecnologia.</p><dl><div><dt>Responsável legal e técnico</dt><dd>Mateus Polonini Cardoso — desenvolvedor mobile com ampla experiência</dd></div><div><dt>CNPJ</dt><dd>61.798.348/0001-60</dd></div><div><dt>Sede</dt><dd>Anchieta, Espírito Santo — Brasil</dd></div></dl></article>
      <article className="contact-card"><Mail size={34}/><h3>Vamos construir seu próximo app?</h3><p>Converse com a empresa sobre escopo, entrega e publicação.</p><a className="primary-link" href="/contact/">Fale com a empresa <ArrowRight size={18}/></a></article>
    </section>
    <footer><div className="brand"><span className="brand-mark"><img src="/brand-icon.png" alt="" /></span><span><strong>M P Cardoso Solutions</strong><small>Software que chega ao mercado.</small></span></div><div><a href="/pitchpro/">PitchPro</a><a href="/delay-reverb/">Delay &amp; Reverb Pro</a><a href="/car-audio-box/">Car Audio Box</a><a href="/privacy/">Política de Privacidade</a><a href="/terms/">Termos de Uso</a><a href="/support/">Suporte</a><a href="/contact/">Contato</a></div><p>© 2026 M P Cardoso Solutions · CNPJ 61.798.348/0001-60</p></footer>
  </main>
}

export default App
