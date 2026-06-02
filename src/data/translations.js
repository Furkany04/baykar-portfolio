export const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      journey: 'Deneyim',
      projects: 'Projeler',
      baykarFit: 'Baykar Fit',
      contact: 'İletişim',
    },

    hero: {
      badge: '.NET Backend Developer — Baykar Başvurusu',
      name: 'Furkan',
      lastName: 'Yıldız',
      subtitle: '.NET Backend Developer',
      desc: 'C#, ASP.NET Core, katmanlı mimari ve veritabanı odaklı kurumsal yazılım geliştirme alanında kendini geliştiren; temiz kod, sürdürülebilir mimari ve problem çözme yaklaşımını önemseyen yazılım geliştirici.',
      btn1: 'Projelerimi Gör',
      btn2: 'İletişime Geç',
    },

    about: {
      sectionLabel: '02 / Hakkımda',
      heading1: 'Yazılımı bir',
      headingAccent: 'mühendislik disiplini',
      heading2: 'olarak görüyorum.',
      para1: '.NET ekosisteminde backend geliştirme üzerine yoğunlaşıyorum. C# ve ASP.NET Core ile RESTful API tasarımı, katmanlı mimari ve kurumsal yazılım geliştirme alanlarında deneyim kazanıyorum. Yazdığım kodun yalnızca çalışmasını değil; okunabilir, test edilebilir ve genişletilebilir olmasını önemsiyorum.',
      para2: 'Veritabanı tarafında SQL ve Entity Framework Core ile veri modelleme ve sorgu optimizasyonu üzerine çalışıyorum. SOLID prensiplerini ve Clean Code pratiklerini benimseyerek günlük geliştirme sürecimde uygulamaya çalışıyorum. Docker, mesaj kuyruğu sistemleri ve microservice mimarisi gibi konuları ise temel düzeyde öğrenmeye ve araştırmaya devam ediyorum.',
      para3: 'Baykar gibi savunma teknolojileri alanında çalışan, teknik mükemmeliyeti ön planda tutan bir yapıda; performans, güvenilirlik ve ölçeklenebilirlik odaklı çalışma kültürüne katkı sağlamak istiyorum.',
      highlights: [
        { title: 'Backend Odaklı Geliştirme', desc: 'C# ve ASP.NET Core ile kurumsal ölçekli backend sistemleri geliştirme.' },
        { title: 'Mimari Bilinç', desc: 'Katmanlı mimari, SOLID prensipleri ve Clean Code pratikleriyle sürdürülebilir yazılım.' },
        { title: 'Veri Yönetimi', desc: 'SQL, MS SQL ve Entity Framework Core ile performanslı veri modelleme ve sorgulama.' },
        { title: 'Problem Çözme', desc: 'Teknik problemleri analitik düşünceyle çözme; yalın ve test edilebilir kod yazma.' },
        { title: 'Takım Çalışması', desc: 'Git ile versiyon yönetimi, code review süreci ve ekip içi teknik iletişim.' },
        { title: 'Sürekli Öğrenme', desc: 'Microservice, mesaj kuyruğu ve DevOps konularına ilgi ve aktif öğrenme süreci.' },
      ],
      stats: [
        { value: '3+', label: 'Yıl .NET Deneyimi' },
        { value: '4+', label: 'Tamamlanan Proje' },
        { value: 'SOLID', label: 'Mimari Prensip' },
        { value: 'REST', label: 'API Odağı' },
      ],
    },

    skills: {
      sectionLabel: '03 / Yetenekler',
      heading1: 'Teknik',
      headingAccent: 'Yetkinlikler',
      subtext: '.NET backend ekosisteminde odaklandığım teknolojiler, mimari prensipler ve araçlar.',
      advancedNote: 'Temel farkındalık düzeyinde ilgi duyduğum, öğrenmeye devam ettiğim alanlar.',
      categories: {
        backend: 'Backend Geliştirme',
        architecture: 'Mimari & Prensipler',
        database: 'Veritabanı',
        tools: 'Araçlar & Geliştirme Ortamı',
        advanced: 'İlgi Duyduğum Alanlar',
      },
    },

    journey: {
      sectionLabel: '04 / Teknik Yolculuk',
      heading1: 'Gelişim',
      headingAccent: 'Zaman Çizelgesi',
      subtext: '.NET ekosisteminde attığım adımlar ve kazandığım deneyimler.',
      steps: {
        1: {
          title: 'Backend Temelleri',
          year: '2021',
          desc: 'C# ve .NET ekosistemiyle tanıştım. Nesne yönelimli programlama prensiplerini, veri tiplerini ve temel algoritmaları öğrendim. ASP.NET Core ile ilk web uygulamalarımı geliştirmeye başladım.',
        },
        2: {
          title: 'Kurumsal Yazılım Mantığı',
          year: '2022',
          desc: 'Katmanlı mimari (Presentation, Business, Data), repository pattern ve dependency injection konularını öğrendim. Gerçek projelerde iş süreçlerini yazılıma dönüştürme deneyimi kazandım.',
        },
        3: {
          title: 'REST API ve Veritabanı Çalışmaları',
          year: '2022–2023',
          desc: 'RESTful API tasarımı, HTTP metodları, statü kodları ve API güvenliği üzerine çalıştım. SQL sorgulama ve Entity Framework Core ile veri katmanını yönetmeyi öğrendim.',
        },
        4: {
          title: 'Clean Code ve Mimari Gelişim',
          year: '2023',
          desc: 'SOLID prensiplerini ve Clean Code pratiklerini benimsemeye çalıştım. Design pattern kullanımı, code review süreci ve test yazımı konularına yoğunlaştım.',
        },
        5: {
          title: 'DevOps Araçlarına İlgi ve Farkındalık',
          year: '2024–Günümüz',
          desc: 'Docker ile container kavramını ve CI/CD pipeline mantığını öğrendim. RabbitMQ, Kafka ve microservice mimarisini araştırmaya başladım; bu alanlarda öğrenmeye devam ediyorum.',
        },
      },
    },

    projects: {
      sectionLabel: '05 / Projeler',
      heading1: 'Geliştirdiğim',
      headingAccent: 'Projeler',
      subtext: 'Kurumsal iş süreçlerine yönelik, backend odaklı çalışmalar.',
      items: {
        1: {
          title: 'Kurumsal Talep Yönetim Sistemi',
          desc: 'İş süreçlerini dijitalleştirmeye yönelik, rol bazlı yetkilendirme ve katmanlı mimariye sahip backend odaklı sistem. Kullanıcı rolleri, onay akışları ve bildirim mekanizmaları içerir.',
          relevance: 'Kurumsal süreç yönetimi ve backend mimari deneyimi',
          highlight: 'Rol tabanlı erişim, onay akışı, audit log',
        },
        2: {
          title: 'Zimmet & Varlık Teslim Takip Sistemi',
          desc: 'Kurumsal varlıkların teslim süreçlerini kayıt altına alan, medya desteğiyle işlem geçmişi ve sorumluluk takibi sağlayan yapı. Katmanlı mimari ile geliştirildi.',
          relevance: 'Veri yönetimi, işlem geçmişi, kurumsal süreçler',
          highlight: 'Medya yönetimi, işlem geçmişi, raporlama',
        },
        3: {
          title: 'RESTful API Tabanlı Yönetim Paneli',
          desc: 'Frontend sistemlerle entegre çalışabilecek, temiz endpoint yapısına sahip web API. JWT kimlik doğrulama, sayfalama ve filtreleme desteği içerir.',
          relevance: 'API tasarımı, güvenlik, entegrasyon',
          highlight: 'JWT auth, pagination, versioning, swagger',
        },
        4: {
          title: 'Performans Odaklı Veri İşleme Modülü',
          desc: 'Yoğun veri transferi senaryolarında bulk operasyon, sorgu optimizasyonu ve verimli veri aktarımı odaklı backend modülü.',
          relevance: 'Performans optimizasyonu, veri ölçeklenebilirliği',
          highlight: 'Bulk insert, index optimization, profiling',
        },
      },
    },

    baykarFit: {
      sectionLabel: '06 / Baykar Uyumu',
      heading1: 'Bu pozisyonla neden',
      headingAccent: 'uyumluyum?',
      subtext: "Teknik yetkinliklerim, mimari anlayışım ve çalışma yaklaşımım — Baykar'ın .NET geliştirme pozisyonunun gerektirdikleriyle örtüşüyor.",
      panelTitle: 'BLUEPRINT_VIEW // UAV-ABSTRACT-01',
      statusLeft: 'STATUS: OPERATIONAL',
      statusRight: 'COMPONENTS: 7/7',
      analysisLabel: 'COMPATIBILITY ANALYSIS',
      summaryText: 'Teknik odağım, mimari bilinç düzeyim ve kurumsal yazılım geliştirme deneyimim bu pozisyon için',
      summaryAccent: 'güçlü bir uyum',
      summaryEnd: 'sağlıyor.',
      points: [
        { part: 'Gövde', title: '.NET Tabanlı Backend Geliştirme', desc: 'C# ve ASP.NET Core ile kurumsal ölçekli backend sistemleri geliştirme odağı.' },
        { part: 'Kanatlar', title: 'Katmanlı Mimari & Sürdürülebilir Kod', desc: 'SOLID, Clean Code ve N-Tier mimari ile uzun vadeli bakımı kolay yazılım yapısı.' },
        { part: 'Motor', title: 'Performans & Optimizasyon Odağı', desc: 'Sorgu optimizasyonu, bulk operasyon ve backend performans iyileştirme yaklaşımı.' },
        { part: 'Sensör', title: 'Güvenlik & Güvenilirlik', desc: 'JWT, rol tabanlı yetkilendirme ve hata yönetimiyle sağlam API yapıları kurma.' },
        { part: 'Veri Akışı', title: 'REST API & Veritabanı Entegrasyonu', desc: 'RESTful API tasarımı, Entity Framework Core ve SQL ile uçtan uca veri yönetimi.' },
        { part: 'Sistem', title: 'Clean Code & Code Review Kültürü', desc: 'Okunabilir, test edilebilir ve refactor edilebilir kod yazma disiplini.' },
        { part: 'Ekip', title: 'Takım Çalışması & Uyum', desc: 'Yoğun proje temposu, Git tabanlı iş akışı ve ekip içi teknik iletişime uyum.' },
      ],
    },

    contact: {
      sectionLabel: '07 / İletişim',
      heading1: 'İletişime',
      headingAccent: 'Geçin',
      subtext: 'Baykar veya herhangi bir proje için bana ulaşabilirsiniz. En hızlı yanıtı email üzerinden alırsınız.',
      links: {
        email: { label: 'Email', desc: 'Doğrudan iletişim için' },
        github: { label: 'GitHub', desc: 'Kod örnekleri ve projeler' },
        linkedin: { label: 'LinkedIn', desc: 'Profesyonel profil' },
      },
      cvBtn: 'CV İndir',
      cvNote: 'CV dosyanızı public/cv.pdf olarak ekleyin.',
      availability: 'Başvuru sürecinde müsait',
    },

    footer: {
      role: '.NET Developer',
      rights: '© 2024 Furkan Yıldız',
    },
  },

  // ─────────────────────────────────────────────
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      journey: 'Experience',
      projects: 'Projects',
      baykarFit: 'Baykar Fit',
      contact: 'Contact',
    },

    hero: {
      badge: '.NET Backend Developer — Baykar Application',
      name: 'Furkan',
      lastName: 'Yıldız',
      subtitle: '.NET Backend Developer',
      desc: 'A software developer focused on C#, ASP.NET Core, layered architecture, and database-driven enterprise development — with an emphasis on clean code, sustainable architecture, and problem-solving.',
      btn1: 'View Projects',
      btn2: 'Get in Touch',
    },

    about: {
      sectionLabel: '02 / About',
      heading1: 'I see software as an',
      headingAccent: 'engineering discipline.',
      heading2: '',
      para1: "I focus on backend development in the .NET ecosystem. I'm gaining experience in RESTful API design, layered architecture, and enterprise software development with C# and ASP.NET Core. I care not only that my code works, but that it's readable, testable, and extensible.",
      para2: 'On the database side, I work with SQL and Entity Framework Core for data modeling and query optimization. I strive to adopt SOLID principles and Clean Code practices as part of my daily development workflow. I also continue learning about Docker, message queue systems, and microservice architecture at a foundational level.',
      para3: "I want to contribute to an organization like Baykar — one that operates in the defense technology space with a strong focus on technical excellence — by working within a culture centered on performance, reliability, and scalability.",
      highlights: [
        { title: 'Backend-Focused Development', desc: 'Building enterprise-scale backend systems with C# and ASP.NET Core.' },
        { title: 'Architectural Awareness', desc: 'Sustainable software through layered architecture, SOLID principles, and Clean Code.' },
        { title: 'Data Management', desc: 'Performance-oriented data modeling and querying with SQL, MS SQL, and Entity Framework Core.' },
        { title: 'Problem Solving', desc: 'Analytical approach to technical challenges; writing clean, testable code.' },
        { title: 'Team Collaboration', desc: 'Version control with Git, code review process, and effective team-level communication.' },
        { title: 'Continuous Learning', desc: 'Active interest and ongoing learning in microservices, message queues, and DevOps.' },
      ],
      stats: [
        { value: '3+', label: 'Years .NET Experience' },
        { value: '4+', label: 'Projects Completed' },
        { value: 'SOLID', label: 'Arch. Principles' },
        { value: 'REST', label: 'API Focus' },
      ],
    },

    skills: {
      sectionLabel: '03 / Skills',
      heading1: 'Technical',
      headingAccent: 'Skills',
      subtext: 'Technologies, architectural principles, and tools I focus on in the .NET backend ecosystem.',
      advancedNote: 'Areas I have foundational awareness of and am actively learning.',
      categories: {
        backend: 'Backend Development',
        architecture: 'Architecture & Principles',
        database: 'Database',
        tools: 'Tools & Dev Environment',
        advanced: 'Areas of Interest',
      },
    },

    journey: {
      sectionLabel: '04 / Experience',
      heading1: 'Development',
      headingAccent: 'Timeline',
      subtext: "Steps I've taken and experience I've gained in the .NET ecosystem.",
      steps: {
        1: {
          title: 'Backend Foundations',
          year: '2021',
          desc: 'Got introduced to C# and the .NET ecosystem. Learned object-oriented programming principles, data types, and foundational algorithms. Started building my first web applications with ASP.NET Core.',
        },
        2: {
          title: 'Enterprise Software Mindset',
          year: '2022',
          desc: 'Learned layered architecture (Presentation, Business, Data), repository pattern, and dependency injection. Gained experience translating real business processes into software.',
        },
        3: {
          title: 'REST API & Database Work',
          year: '2022–2023',
          desc: 'Worked on RESTful API design, HTTP methods, status codes, and API security. Learned to manage the data layer with SQL querying and Entity Framework Core.',
        },
        4: {
          title: 'Clean Code & Architectural Growth',
          year: '2023',
          desc: 'Worked to adopt SOLID principles and Clean Code practices. Focused on design patterns, the code review process, and writing unit tests.',
        },
        5: {
          title: 'Interest & Awareness in DevOps',
          year: '2024–Present',
          desc: 'Learned about containerization with Docker and CI/CD pipeline concepts. Started exploring message queue systems like RabbitMQ and Kafka, and microservice architecture — actively continuing to learn in these areas.',
        },
      },
    },

    projects: {
      sectionLabel: '05 / Projects',
      heading1: "Projects I've",
      headingAccent: 'Built',
      subtext: 'Backend-focused work targeting enterprise business processes.',
      items: {
        1: {
          title: 'Enterprise Request Management System',
          desc: 'A backend-focused system designed to digitize business processes, with role-based authorization and a layered architecture. Includes user roles, approval flows, and notification mechanisms.',
          relevance: 'Enterprise process management and backend architecture experience',
          highlight: 'Role-based access, approval flow, audit log',
        },
        2: {
          title: 'Asset & Equipment Assignment Tracker',
          desc: 'A system for recording asset handover processes with media support, transaction history, and accountability tracking. Developed with layered architecture.',
          relevance: 'Data management, transaction history, enterprise processes',
          highlight: 'Media management, transaction history, reporting',
        },
        3: {
          title: 'RESTful API-Based Admin Panel',
          desc: 'A web API with a clean endpoint structure, designed to integrate with frontend systems. Includes JWT authentication, pagination, and filtering support.',
          relevance: 'API design, security, integration',
          highlight: 'JWT auth, pagination, versioning, swagger',
        },
        4: {
          title: 'Performance-Oriented Data Processing Module',
          desc: 'A backend module focused on bulk operations, query optimization, and efficient data transfer for high-volume data scenarios.',
          relevance: 'Performance optimization, data scalability',
          highlight: 'Bulk insert, index optimization, profiling',
        },
      },
    },

    baykarFit: {
      sectionLabel: '06 / Baykar Fit',
      heading1: 'Why am I a fit',
      headingAccent: 'for this role?',
      subtext: "My technical skills, architectural mindset, and work approach align with what Baykar's .NET development position requires.",
      panelTitle: 'BLUEPRINT_VIEW // UAV-ABSTRACT-01',
      statusLeft: 'STATUS: OPERATIONAL',
      statusRight: 'COMPONENTS: 7/7',
      analysisLabel: 'COMPATIBILITY ANALYSIS',
      summaryText: 'My technical focus, architectural awareness, and enterprise software experience make me a',
      summaryAccent: 'strong fit',
      summaryEnd: 'for this position.',
      points: [
        { part: 'Fuselage', title: '.NET-Based Backend Development', desc: 'Building enterprise-scale backend systems with C# and ASP.NET Core.' },
        { part: 'Wings', title: 'Layered Architecture & Sustainable Code', desc: 'Maintainable software through SOLID, Clean Code, and N-Tier architecture.' },
        { part: 'Engine', title: 'Performance & Optimization Focus', desc: 'Query optimization, bulk operations, and backend performance improvement.' },
        { part: 'Sensor', title: 'Security & Reliability', desc: 'Robust API structures through JWT, role-based authorization, and error handling.' },
        { part: 'Data Flow', title: 'REST API & Database Integration', desc: 'End-to-end data management with RESTful API design, Entity Framework Core, and SQL.' },
        { part: 'System', title: 'Clean Code & Code Review Culture', desc: 'A discipline of writing readable, testable, and refactorable code.' },
        { part: 'Team', title: 'Teamwork & Adaptability', desc: 'Comfortable with fast-paced projects, Git-based workflows, and technical communication.' },
      ],
    },

    contact: {
      sectionLabel: '07 / Contact',
      heading1: 'Get in',
      headingAccent: 'Touch',
      subtext: 'Feel free to reach out for Baykar or any project opportunity. Email gets the fastest response.',
      links: {
        email: { label: 'Email', desc: 'For direct communication' },
        github: { label: 'GitHub', desc: 'Code samples and projects' },
        linkedin: { label: 'LinkedIn', desc: 'Professional profile' },
      },
      cvBtn: 'Download CV',
      cvNote: 'Add your CV file as public/cv.pdf.',
      availability: 'Available during the application process',
    },

    footer: {
      role: '.NET Developer',
      rights: '© 2024 Furkan Yıldız',
    },
  },
}
