import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const keywords = [
    // Turkish keywords, combinations, and phrases
    "Reklam", "Reklamcılık", "Tanıtım", "Propaganda", "Pazarlama", "Marka yönetimi",
    "Ajans", "Acente", "Aracı kurum", "Reklam firması", "Pazarlama şirketi",
    "Dijital pazarlama", "E-pazarlama", "İnternet pazarlaması", "Çevrimiçi pazarlama", "Dijital strateji",
    "Prodüksiyon", "Yapım", "Üretim", "Medya prodüksiyonu", "Video prodüksiyonu",
    "Web tasarımı", "İnternet sitesi tasarımı", "Web site geliştirme", "Responsive tasarım", "UX/UI tasarımı",
    "Logo tasarımı", "Amblem tasarımı", "Marka sembolü tasarımı", "Kurumsal logo", "Görsel kimlik tasarımı",
    "Tanıtım filmi", "Reklam filmi", "Promosyon videosu", "Kurumsal video", "Viral video",
    "Sosyal medya yönetimi", "Sosyal ağ yönetimi", "Dijital iletişim yönetimi", "İçerik yönetimi", "Topluluk yönetimi",
    "Dijital reklam ajansı", "Çevrimiçi reklam ajansı", "İnternet reklam ajansı", "Performans pazarlama ajansı",
    "Kreatif Tasarım", "Yaratıcı Tasarım", "İnovatif Tasarım", "Konsept geliştirme", "Görsel iletişim",
    "Kurumsal Kimlik", "Şirket Kimliği", "Marka Kimliği", "Marka konumlandırma", "Marka stratejisi",
    "Ürün Çekimi", "Ürün Fotoğrafçılığı", "Ticari Fotoğrafçılık", "E-ticaret fotoğrafçılığı", "Stüdyo çekimi",
    "Katalog Çekimi", "Ürün Kataloğu Fotoğrafçılığı", "Lookbook çekimi", "Moda fotoğrafçılığı",
    "Açık Hava Reklamları", "Outdoor Reklamcılık", "Dış Mekan Reklamları", "Billboard tasarımı", "Araç giydirme",
    "Konvansiyonel Reklam Ajansı", "Geleneksel Reklam Ajansı", "360 derece reklam ajansı",
    "Matbaa", "Basımevi", "Baskı İşleri", "Ofset baskı", "Dijital baskı",
    "SEO optimizasyonu", "Arama motoru pazarlaması", "İçerik pazarlaması", "Influencer pazarlaması",
    "Marka danışmanlığı", "Pazarlama danışmanlığı", "Medya planlama", "Medya satın alma",
    "Guerrilla pazarlama", "Etkinlik yönetimi", "Sponsorluk yönetimi", "Halkla ilişkiler",
    "Bütünleşik pazarlama iletişimi", "Çok kanallı pazarlama", "Omnichannel pazarlama",
    "Marka hikayeciliği", "Müşteri deneyimi tasarımı", "Dönüşüm oranı optimizasyonu",
    "Pazarlama otomasyonu", "Veri odaklı pazarlama", "Analitik ve raporlama",
    "Mobil reklam", "Programatik reklam", "Native reklam",
    "E-posta pazarlaması", "Satış ortaklığı pazarlaması", "İçe dönük pazarlama",
    "Pazarlama araştırması", "Pazar analizi", "Tüketici davranışı analizi",
    "Marka aktivasyonu", "Deneyimsel pazarlama", "Etkileşimli pazarlama",
    "Dijital dönüşüm", "Yapay zeka destekli pazarlama", "Chatbot pazarlaması",
    "Lokasyon bazlı pazarlama", "Kişiselleştirilmiş pazarlama", "Retargeting",
    "Sosyal medya reklamcılığı", "İçerik stratejisi", "Marka savunuculuğu",
    "Tüketici içgörüsü", "Marka sadakati programları", "Müşteri yaşam boyu değeri",
    "Dijital PR", "Kriz yönetimi", "İtibar yönetimi",
    "Nöropazarlama", "Duygu analizi", "Büyük veri pazarlaması",
    "Web Sitesi Tasarımı", "Kullanıcı Dostu Web Siteleri", "Modern Web Siteleri",
    "Dijital Marka Yüzü", "360° Ajans Hizmetleri", "Yaratıcı Çözümler",
    "UX-UI Web Tasarım", "HTML Web Tasarım", "ASP.NET Web Tasarım",
    "Landing Page Tasarımı", "Kurumsal Web Sitesi Tasarımı", "E-Ticaret Web Tasarımı",
    "Güvenlik Hizmetleri", "SEO Hizmetleri", "Web Sitesi Analizi",
    "E-Posta Pazarlaması", "Mobil Uygulama Geliştirme", "Yazılım Geliştirme",
    "Marka Danışmanlığı", "Medya Planlaması", "Sponsorluk Hizmetleri",
    "Google Ads Kampanyası", "PR ve Organizasyon Yönetimi",
    "Kurumsal Kimlik Hizmetleri", "Influencer Marketing",
    "Reklam Filmi Çekimi", "E-Ticaret Amaçlı Çekim",
    "Sosyal Medya İçin Fotoğraf Çekimi", "Video Montaj", "Retouch Hizmetleri",

    // English keywords, combinations, and phrases
    "Advertising", "Marketing", "Promotion", "Publicity", "Branding", "Brand management",
    "Agency", "Firm", "Company", "Advertising firm", "Marketing company",
    "Digital marketing", "Online marketing", "Internet marketing", "E-marketing", "Digital strategy",
    "Production", "Creation", "Development", "Media production", "Video production",
    "Web design", "Website design", "Web development", "Responsive design", "UX/UI design",
    "Logo design", "Brand symbol design", "Visual identity design", "Corporate logo", "Brand identity design",
    "Promotional video", "Commercial video", "Marketing video", "Corporate video", "Viral video",
    "Social media management", "Social network management", "Digital communication management", "Content management", "Community management",
    "Digital advertising agency", "Online advertising agency", "Internet marketing firm", "Performance marketing agency",
    "Creative Design", "Innovative Design", "Artistic Design", "Concept development", "Visual communication",
    "Corporate Identity", "Brand Identity", "Company Branding", "Brand positioning", "Brand strategy",
    "Product Photography", "Commercial Photography", "E-commerce Photography", "Studio photography",
    "Catalog Photography", "Product Catalog Shooting", "Lookbook photography", "Fashion photography",
    "Outdoor Advertising", "Out-of-home Advertising", "Billboard Advertising", "Vehicle wrapping",
    "Conventional Advertising Agency", "Traditional Marketing Agency", "Full-service advertising agency",
    "Printing", "Print Shop", "Print Services", "Offset printing", "Digital printing",
    "SEO optimization", "Search engine marketing", "Content marketing", "Influencer marketing",
    "Brand consulting", "Marketing consulting", "Media planning", "Media buying",
    "Guerrilla marketing", "Event management", "Sponsorship management", "Public relations",
    "Integrated marketing communications", "Multichannel marketing", "Omnichannel marketing",
    "Brand storytelling", "Customer experience design", "Conversion rate optimization",
    "Marketing automation", "Data-driven marketing", "Analytics and reporting",
    "Mobile advertising", "Programmatic advertising", "Native advertising",
    "Email marketing", "Affiliate marketing", "Inbound marketing",
    "Marketing research", "Market analysis", "Consumer behavior analysis",
    "Brand activation", "Experiential marketing", "Interactive marketing",
    "Digital transformation", "AI-powered marketing", "Chatbot marketing",
    "Location-based marketing", "Personalized marketing", "Retargeting",
    "Social media advertising", "Content strategy", "Brand advocacy",
    "Consumer insights", "Brand loyalty programs", "Customer lifetime value",
    "Digital PR", "Crisis management", "Reputation management",
    "Neuromarketing", "Sentiment analysis", "Big data marketing",
    "Growth hacking", "Conversion funnel optimization", "A/B testing",
    "Augmented reality marketing", "Virtual reality experiences", "Voice search optimization",
    "Micro-moments marketing", "User-generated content", "Ephemeral content marketing",
    "Blockchain in marketing", "Gamification", "Cause marketing",
    "Behavioral targeting", "Cross-platform marketing", "Customer journey mapping",
    "Dynamic content personalization", "Emotional branding", "Sustainable marketing",
    "Etoile Design", "Digital Marketing", "Web Design", "Branding",
    "Social Media Management", "Advertising", "Production Services","Web Design Services", "User-Friendly Websites", "Modern Websites",
    "Digital Brand Face", "360° Agency Services", "Creative Solutions",
    "UX/UI Design", "HTML Web Design", "ASP.NET Web Design",
    "Landing Page Design", "Corporate Website Design", "E-Commerce Web Design",
    "Security Services", "SEO Services", "Website Analysis",
    "Email Marketing", "Mobile App Development", "Software Development",
    "Brand Consultancy", "Media Planning", "Sponsorship Services",
    "Google Ads Campaign", "PR and Organization Management",
    "Corporate Identity Services", "Influencer Marketing",
    "Commercial Film Production", "E-Commerce Photography",
    "Social Media Photography", "Video Editing", "Photo Retouching"
  ].join(", ")

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo