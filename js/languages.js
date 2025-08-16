/* ============================================
   X CAR RENTAL - MULTI-LANGUAGE SYSTEM
   Albanian, Turkish, Macedonian, and English translations
   ============================================ */

const LANGUAGES = {
    sq: 'Shqip',
    tr: 'Türkçe',
    mk: 'Македонски',
    en: 'English'
};

const TRANSLATIONS = {
    sq: {
        // Navigation
        nav: {
            home: 'Ballina',
            cars: 'Makinat',
            about: 'Rreth Nesh',
            features: 'Shërbimet',
            location: 'Lokacioni',
            contact: 'Kontakt'
        },

        // Hero Section
        hero: {
            title: 'Makina me Qira në Maqedoni',
            subtitle: 'Eksperiencë e jashtëzakonshme me makina moderne, çmime të arsyeshme dhe shërbim 24/7',
            cta: 'Shiko Makinat'
        },

        // Cars Section
        cars: {
            title: 'Makinat Tona',
            subtitle: 'Zgjidhni nga koleksioni ynë i makinave premium',
            filters: {
                all: 'Të Gjitha',
                economy: 'Ekonomike',
                luxury: 'Luksoze',
                suv: 'SUV',
                family: 'Familjare'
            },
            bookButton: 'Rezervo në WhatsApp'
        },

        // Features Section
        features: {
            title: 'Shërbimet Tona',
            subtitle: 'Ofrojmë shërbime gjithëpërfshirëse dhe fleksibël për të gjitha nevojat tuaja',
            services: {
                shortTerm: {
                    title: 'Qira Afatshkurtër',
                    desc: 'Qira ditore, javore dhe mujore me fleksibilitet maksimal për udhëtimet tuaja.'
                },
                airportTransfer: {
                    title: 'Transfer nga Aeroporti',
                    desc: 'Shërbim i shpejtë dhe i sigurt transfer nga dhe në Aeroportin e Shkupit.'
                },
                longTerm: {
                    title: 'Qira Afatgjatë',
                    desc: 'Zgjidhje ekonomike për bizneset dhe klientët që kanë nevojë për makina për periudha të gjata.'
                },
                fullInsurance: {
                    title: 'Sigurim i Plotë',
                    desc: 'Të gjitha makinat tona janë plotësisht të siguruara për sigurinë maksimale të klientëve.'
                },
                maintenance: {
                    title: 'Mirëmbajtje e Rregullt',
                    desc: 'Kontrolle teknike të rregullta dhe mirëmbajtje për të garantuar cilësinë e makinave.'
                },
                support: {
                    title: 'Mbështetje 24/7',
                    desc: 'Ekipi ynë është gjithmonë i disponueshëm për t\'ju ndihmuar me çdo pyetje ose problem.'
                }
            }
        },

        // About Us Section
        about: {
            title: 'Rreth Nesh',
            subtitle: 'Kompania më e besueshme e qirasë së makinave në Maqedoni',
            story: 'X Car Rental u themelua me vizionin për të ofruar shërbimin më të mirë të qirasë së makinave në Maqedoni. Me eksperiencën tonë të gjatë dhe flotën moderne, ofrojmë eksperiencën më të mirë të qirasë së makinave.',
            stats: {
                experience: '+ Vjet Eksperiencë',
                clients: '+ Klientë të Kënaqur',
                cars: '+ Makina Premium',
                support: '/7 Mbështetje'
            },
            timeline: {
                year2019: 'Fillimi i Udhëtimit',
                year2024: 'Lider i Tregut'
            },
            values: {
                quality: {
                    title: 'Cilësia',
                    desc: 'Ofrojmë shërbime në standardet më të larta'
                },
                reliability: {
                    title: 'Besueshmëria',
                    desc: 'Klientët tanë mund të na besojnë'
                },
                innovation: {
                    title: 'Inovacioni',
                    desc: 'Përmirësim i vazhdueshëm dhe inovacion'
                }
            },
            mission: {
                title: 'Misioni Ynë',
                desc: 'Të ofrojmë eksperiencën më të mirë të qirasë së makinave në Maqedoni, duke kombinuar teknologjinë moderne me shërbimin personal dhe çmimet më konkurruese në treg.'
            },
            vision: {
                title: 'Vizioni Ynë',
                desc: 'Të jemi liderë në sektorin e qirasë së makinave në Maqedoni dhe të vendosim standarde për kënaqësinë e klientëve.'
            }
        },

        // Location Section
        location: {
            title: 'Lokacioni Ynë',
            subtitle: 'Na vizitoni ose lidhuni me ne',
            address: 'Rruga Ilindenska Nr. 25, 1000 Shkup, Maqedoni',
            phone: 'Telefoni',
            directions: 'Merr Udhëzime',
            call: 'Thirr'
        },

        // Footer
        footer: {
            description: 'Kompania më e besueshme e qirasë së makinave në Maqedoni. Ofrojmë eksperiencë të jashtëzakonshme me çmime të arsyeshme.',
            quickLinks: 'Lidhje të Shpejta',
            services: 'Shërbimet',
            contact: 'Kontakti',
            copyright: '© 2024 X Car Rental. Të gjitha të drejtat e rezervuara.',
            newsletterTitle: 'Bashkohuni me ne për ofertat speciale!',
            newsletterDesc: 'Merrni njoftime për çmimet më të mira dhe ofertat ekskluzive',
            newsletterPlaceholder: 'Email juaj',
            newsletterBtn: 'Bashkohu',
            followUs: 'Na ndiqni',
            whatsappBtn: 'Rezervo në WhatsApp',
            available247: 'Orari: 24/7 i disponueshëm',
            privacyPolicy: 'Privacy Policy',
            termsService: 'Terms of Service',
            madeWithLove: 'Made with ❤️ in Macedonia',
            // Company Stats & Address
            experience: '5+ vite eksperiencë',
            clients: '1000+ klientë të kënaqur',
            address: 'Rruga Ilindenska Nr. 25, 1000 Shkup, Maqedoni',
            // Services
            serviceRental: 'Qira afatshkurtër dhe afatgjatë',
            serviceAirport: 'Transfer aeroporti 24/7',
            serviceCorporate: 'Paketa korporative',
            serviceDelivery: 'Delivery falas në qytet',
            serviceSupport: 'Mbështetje gjatë gjithë kohës',
            // Contact
            phone: '+389 71 294 914',
            email: 'info@xcarrental.com'
        }
    },

    tr: {
        // Navigation
        nav: {
            home: 'Ana Sayfa',
            cars: 'Araçlar',
            about: 'Hakkımızda',
            features: 'Hizmetler',
            location: 'Konum',
            contact: 'İletişim'
        },

        // Hero Section
        hero: {
            title: 'Makedonya\'da Araç Kiralama',
            subtitle: 'Modern araçlarla olağanüstü deneyim, makul fiyatlar ve 7/24 hizmet',
            cta: 'Araçları Gör'
        },

        // Cars Section
        cars: {
            title: 'Araçlarımız',
            subtitle: 'Premium araç koleksiyonumuzdan seçim yapın',
            filters: {
                all: 'Tümü',
                economy: 'Ekonomik',
                luxury: 'Lüks',
                suv: 'SUV',
                family: 'Aile'
            },
            bookButton: 'WhatsApp\'ta Rezervasyon Yap'
        },

        // Features Section
        features: {
            title: 'Hizmetlerimiz',
            subtitle: 'Tüm ihtiyaçlarınız için kapsamlı ve esnek hizmetler sunuyoruz',
            services: {
                shortTerm: {
                    title: 'Kısa Vadeli Kiralama',
                    desc: 'Seyahatleriniz için maksimum esneklik ile günlük, haftalık ve aylık kiralama.'
                },
                airportTransfer: {
                    title: 'Havalimanı Transferi',
                    desc: 'Üsküp Havalimanı\'ndan ve havalimanına hızlı ve güvenilir transfer hizmeti.'
                },
                longTerm: {
                    title: 'Uzun Vadeli Kiralama',
                    desc: 'İşletmeler ve uzun süreli araç ihtiyacı olan müşteriler için ekonomik çözüm.'
                },
                fullInsurance: {
                    title: 'Tam Sigorta',
                    desc: 'Tüm araçlarımız müşterilerin maksimum güvenliği için tamamen sigortalıdır.'
                },
                maintenance: {
                    title: 'Düzenli Bakım',
                    desc: 'Araç kalitesini garanti etmek için düzenli teknik kontroller ve bakım.'
                },
                support: {
                    title: '7/24 Destek',
                    desc: 'Ekibimiz herhangi bir soru veya problem için her zaman yardıma hazır.'
                }
            }
        },

        // About Us Section
        about: {
            title: 'Hakkımızda',
            subtitle: 'Makedonya\'da en güvenilir araç kiralama şirketi',
            story: 'X Car Rental, Makedonya\'da en iyi araç kiralama hizmetini sunma vizyonuyla kuruldu. Uzun deneyimimiz ve modern filosu ile en iyi araç kiralama deneyimini sunuyoruz.',
            stats: {
                experience: '+ Yıl Deneyim',
                clients: '+ Memnun Müşteri',
                cars: '+ Premium Araç',
                support: '/7 Destek'
            },
            timeline: {
                year2019: 'Yolculuğun Başlangıcı',
                year2024: 'Pazar Lideri'
            },
            values: {
                quality: {
                    title: 'Kalite',
                    desc: 'En yüksek standartlarda hizmet sunuyoruz'
                },
                reliability: {
                    title: 'Güvenilirlik',
                    desc: 'Müşterilerimiz bize güvenebilir'
                },
                innovation: {
                    title: 'Yenilik',
                    desc: 'Sürekli gelişim ve yenilik'
                }
            },
            mission: {
                title: 'Misyonumuz',
                desc: 'Makedonya\'da en iyi araç kiralama deneyimini sunmak, modern teknolojiyi kişisel hizmet ve pazardaki en rekabetçi fiyatlarla birleştirerek.'
            },
            vision: {
                title: 'Vizyonumuz',
                desc: 'Makedonya\'da araç kiralama sektöründe lider olmak ve müşteri memnuniyetinde standart belirlemek.'
            }
        },

        // Location Section
        location: {
            title: 'Konumumuz',
            subtitle: 'Bizi ziyaret edin veya iletişime geçin',
            address: 'Rruga Ilindenska Nr. 25, 1000 Üsküp, Makedonya',
            phone: 'Telefon',
            directions: 'Yol Tarifi Al',
            call: 'Ara'
        },

        // Footer
        footer: {
            description: 'Makedonya\'da en güvenilir araç kiralama şirketi. Makul fiyatlarla olağanüstü deneyim sunuyoruz.',
            quickLinks: 'Hızlı Bağlantılar',
            services: 'Hizmetler',
            contact: 'İletişim',
            copyright: '© 2024 X Car Rental. Tüm haklar saklıdır.',
            newsletterTitle: 'Özel teklifler için bize katılın!',
            newsletterDesc: 'En iyi fiyatlar ve özel teklifler için bildirim alın',
            newsletterPlaceholder: 'E-posta adresiniz',
            newsletterBtn: 'Katıl',
            followUs: 'Bizi takip edin',
            whatsappBtn: 'WhatsApp\'ta Rezervasyon Yap',
            available247: 'Çalışma Saati: 7/24 Müsait',
            privacyPolicy: 'Gizlilik Politikası',
            termsService: 'Kullanım Şartları',
            madeWithLove: 'Makedonya\'da ❤️ ile yapıldı',
            // Company Stats & Address
            experience: '5+ yıl deneyim',
            clients: '1000+ memnun müşteri',
            address: 'Rruga Ilindenska Nr. 25, 1000 Üsküp, Makedonya',
            // Services
            serviceRental: 'Kısa ve uzun vadeli kiralama',
            serviceAirport: 'Havalimanı transferi 24/7',
            serviceCorporate: 'Kurumsal paketler',
            serviceDelivery: 'Şehir içi ücretsiz teslimat',
            serviceSupport: '7/24 destek',
            // Contact
            phone: '+389 71 294 914',
            email: 'info@xcarrental.com'
        }
    },

    mk: {
        // Navigation
        nav: {
            home: 'Почетна',
            cars: 'Автомобили',
            about: 'За Нас',
            features: 'Услуги',
            location: 'Локација',
            contact: 'Контакт'
        },

        // Hero Section
        hero: {
            title: 'Изнајмување на автомобили во Македонија',
            subtitle: 'Исклучително искуство со модерни автомобили, разумни цени и 24/7 услуга',
            cta: 'Види Автомобили'
        },

        // Cars Section
        cars: {
            title: 'Нашите Автомобили',
            subtitle: 'Изберете од нашиот премиум колекција на автомобили',
            filters: {
                all: 'Сите',
                economy: 'Економски',
                luxury: 'Луксузни',
                suv: 'SUV',
                family: 'Семејни'
            },
            bookButton: 'Резервирај на WhatsApp'
        },

        // Features Section
        features: {
            title: 'Нашите Услуги',
            subtitle: 'Нудиме сеопфатни и флексибилни услуги за сите ваши потреби',
            services: {
                shortTerm: {
                    title: 'Краткорочно Изнајмување',
                    desc: 'Дневно, неделно и месечно изнајмување со максимална флексибилност за вашите патувања.'
                },
                airportTransfer: {
                    title: 'Аеродромски Трансфер',
                    desc: 'Брза и сигурна услуга за трансфер од и до аеродромот Скопје.'
                },
                longTerm: {
                    title: 'Долгорочно Изнајмување',
                    desc: 'Економско решение за бизниси и клиенти кои имаат потреба од автомобили за долги периоди.'
                },
                fullInsurance: {
                    title: 'Целосно Осигурување',
                    desc: 'Сите наши автомобили се целосно осигурани за максимална безбедност на клиентите.'
                },
                maintenance: {
                    title: 'Редовно Одржување',
                    desc: 'Редовни технички проверки и одржување за да се осигури квалитетот на автомобилите.'
                },
                support: {
                    title: '24/7 Поддршка',
                    desc: 'Нашиот тим е секогаш достапен за да ви помогне со секое прашање или проблем.'
                }
            }
        },

        // About Us Section
        about: {
            title: 'За Нас',
            subtitle: 'Најсигурната компанија за изнајмување на автомобили во Македонија',
            story: 'X Car Rental е основана со визијата да нуди најдобра услуга за изнајмување на автомобили во Македонија. Со нашето долго искуство и модерна флота, нудиме најдобро искуство за изнајмување на автомобили.',
            stats: {
                experience: '+ Години Искуство',
                clients: '+ Задоволни Клиенти',
                cars: '+ Премиум Автомобили',
                support: '/7 Поддршка'
            },
            timeline: {
                year2019: 'Почеток на Патувањето',
                year2024: 'Лидер на Пазарот'
            },
            values: {
                quality: {
                    title: 'Квалитет',
                    desc: 'Нудиме услуги на највисоки стандарди'
                },
                reliability: {
                    title: 'Сигурност',
                    desc: 'Нашите клиенти можат да ни веруваат'
                },
                innovation: {
                    title: 'Иновација',
                    desc: 'Континуирано подобрување и иновација'
                }
            },
            mission: {
                title: 'Нашата Мисија',
                desc: 'Да нудиме најдобро искуство за изнајмување на автомобили во Македонија, комбинирајќи ја модерната технологија со персоналната услуга и најконкурентните цени на пазарот.'
            },
            vision: {
                title: 'Нашата Визија',
                desc: 'Да бидеме лидери во секторот за изнајмување на автомобили во Македонија и да поставиме стандарди за задоволство на клиентите.'
            }
        },

        // Location Section
        location: {
            title: 'Нашата Локација',
            subtitle: 'Посетете нè или ставете се во контакт',
            address: 'Руга Илинденска бр. 25, 1000 Скопје, Македонија',
            phone: 'Телефон',
            directions: 'Земи Упатства',
            call: 'Телефонирај'
        },

        // Footer
        footer: {
            description: 'Најсигурната компанија за изнајмување на автомобили во Македонија. Нудиме исклучително искуство по разумни цени.',
            quickLinks: 'Брзи Врски',
            services: 'Услуги',
            contact: 'Контакт',
            copyright: '© 2024 X Car Rental. Сите права се задржани.',
            newsletterTitle: 'Приклучете се за специјални понуди!',
            newsletterDesc: 'Добијте известувања за најдобрите цени и ексклузивни понуди',
            newsletterPlaceholder: 'Вашата е-пошта',
            newsletterBtn: 'Приклучи се',
            followUs: 'Следете нè',
            whatsappBtn: 'Резервирај на WhatsApp',
            available247: 'Работно време: 24/7 достапно',
            privacyPolicy: 'Политика за приватност',
            termsService: 'Услови за користење',
            madeWithLove: 'Направено со ❤️ во Македонија',
            // Company Stats & Address
            experience: '5+ години искуство',
            clients: '1000+ задоволни клиенти',
            address: 'Руга Илинденска бр. 25, 1000 Скопје, Македонија',
            // Services
            serviceRental: 'Краткорочно и долгорочно изнајмување',
            serviceAirport: 'Аеродромски трансфер 24/7',
            serviceCorporate: 'Корпоративни пакети',
            serviceDelivery: 'Бесплатна испорака во градот',
            serviceSupport: '24/7 поддршка',
            // Contact
            phone: '+389 71 294 914',
            email: 'info@xcarrental.com'
        }
    },

    en: {
        // Navigation
        nav: {
            home: 'Home',
            cars: 'Cars',
            about: 'About Us',
            features: 'Services',
            location: 'Location',
            contact: 'Contact'
        },

        // Hero Section
        hero: {
            title: 'Car Rental in Macedonia',
            subtitle: 'Exceptional experience with modern cars, reasonable prices and 24/7 service',
            cta: 'View Cars'
        },

        // Cars Section
        cars: {
            title: 'Our Cars',
            subtitle: 'Choose from our premium car collection',
            filters: {
                all: 'All',
                economy: 'Economy',
                luxury: 'Luxury',
                suv: 'SUV',
                family: 'Family'
            },
            bookButton: 'Book on WhatsApp'
        },

        // Features Section
        features: {
            title: 'Our Services',
            subtitle: 'We offer comprehensive and flexible services for all your needs',
            services: {
                shortTerm: {
                    title: 'Short-term Rental',
                    desc: 'Daily, weekly and monthly rental with maximum flexibility for your trips.'
                },
                airportTransfer: {
                    title: 'Airport Transfer',
                    desc: 'Fast and reliable transfer service from and to Skopje Airport.'
                },
                longTerm: {
                    title: 'Long-term Rental',
                    desc: 'Economic solution for businesses and clients who need cars for long periods.'
                },
                fullInsurance: {
                    title: 'Full Insurance',
                    desc: 'All our cars are fully insured for maximum customer safety.'
                },
                maintenance: {
                    title: 'Regular Maintenance',
                    desc: 'Regular technical checks and maintenance to ensure car quality.'
                },
                support: {
                    title: '24/7 Support',
                    desc: 'Our team is always available to help you with any question or problem.'
                }
            }
        },

        // About Us Section
        about: {
            title: 'About Us',
            subtitle: 'The most reliable car rental company in Macedonia',
            story: 'X Car Rental was founded with the vision of offering the best car rental service in Macedonia. With our long experience and modern fleet, we offer the best car rental experience.',
            stats: {
                experience: '+ Years Experience',
                clients: '+ Satisfied Clients',
                cars: '+ Premium Cars',
                support: '/7 Support'
            },
            timeline: {
                year2019: 'Journey Begins',
                year2024: 'Market Leader'
            },
            values: {
                quality: {
                    title: 'Quality',
                    desc: 'We offer services at the highest standards'
                },
                reliability: {
                    title: 'Reliability',
                    desc: 'Our customers can trust us'
                },
                innovation: {
                    title: 'Innovation',
                    desc: 'Continuous improvement and innovation'
                }
            },
            mission: {
                title: 'Our Mission',
                desc: 'To offer the best car rental experience in Macedonia, combining modern technology with personal service and the most competitive prices in the market.'
            },
            vision: {
                title: 'Our Vision',
                desc: 'To be leaders in the car rental sector in Macedonia and set standards for customer satisfaction.'
            }
        },

        // Location Section
        location: {
            title: 'Our Location',
            subtitle: 'Visit us or get in touch',
            address: 'Rruga Ilindenska Nr. 25, 1000 Skopje, Macedonia',
            phone: 'Phone',
            directions: 'Get Directions',
            call: 'Call'
        },

        // Footer
        footer: {
            description: 'The most reliable car rental company in Macedonia. We offer exceptional experience at reasonable prices.',
            quickLinks: 'Quick Links',
            services: 'Services',
            contact: 'Contact',
            copyright: '© 2024 X Car Rental. All rights reserved.',
            newsletterTitle: 'Join us for special offers!',
            newsletterDesc: 'Get notifications for the best prices and exclusive offers',
            newsletterPlaceholder: 'Your email',
            newsletterBtn: 'Join',
            followUs: 'Follow us',
            whatsappBtn: 'Book on WhatsApp',
            available247: 'Working hours: 24/7 available',
            privacyPolicy: 'Privacy Policy',
            termsService: 'Terms of Service',
            madeWithLove: 'Made with ❤️ in Macedonia',
            // Company Stats & Address
            experience: '5+ years experience',
            clients: '1000+ satisfied clients',
            address: 'Rruga Ilindenska Nr. 25, 1000 Skopje, Macedonia',
            // Services
            serviceRental: 'Short-term and long-term rental',
            serviceAirport: 'Airport transfer 24/7',
            serviceCorporate: 'Corporate packages',
            serviceDelivery: 'Free delivery in the city',
            serviceSupport: '24/7 support',
            // Contact
            phone: '+389 71 294 914',
            email: 'info@xcarrental.com'
        }
    }
};

// Language switcher functionality
function switchLanguage(lang) {
    console.log(`🔧 switchLanguage called with: ${lang}`);
    
    if (!TRANSLATIONS[lang]) {
        console.error(`❌ Language ${lang} not supported`);
        return;
    }

    console.log(`✅ Language ${lang} is supported, proceeding...`);

    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
    console.log(`💾 Language ${lang} saved to localStorage`);
    
    // Update all text content
    updatePageContent(lang);
    
    // Update language switcher UI
    updateLanguageSwitcher(lang);
    
    console.log(`🌍 Language switched to: ${LANGUAGES[lang]}`);
}

// Update page content based on selected language
function updatePageContent(lang) {
    console.log(`🔧 updatePageContent called for language: ${lang}`);
    const texts = TRANSLATIONS[lang];
    
    if (!texts) {
        console.error(`❌ No translations found for language: ${lang}`);
        return;
    }
    
    console.log(`✅ Translations found for ${lang}, updating content...`);
    
    // Add fade out effect
    fadeOutContent();
    
    // Wait for fade out, then update content
    setTimeout(() => {
        console.log(`🔄 Updating page content for ${lang}...`);
        
        // Navigation
        updateElementText('nav-home', texts.nav.home);
        updateElementText('nav-cars', texts.nav.cars);
        updateElementText('nav-about', texts.nav.about);
        updateElementText('nav-features', texts.nav.features);
        updateElementText('nav-location', texts.nav.location);
        updateElementText('nav-contact', texts.nav.contact);
        
        // Hero Section
        updateElementText('hero-title', texts.hero.title);
        updateElementText('hero-subtitle', texts.hero.subtitle);
        updateElementText('hero-cta', texts.hero.cta);
        
        // Cars Section
        updateElementText('cars-title', texts.cars.title);
        updateElementText('cars-subtitle', texts.cars.subtitle);
        updateElementText('filter-all', texts.cars.filters.all);
        updateElementText('filter-economy', texts.cars.filters.economy);
        updateElementText('filter-luxury', texts.cars.filters.luxury);
        updateElementText('filter-suv', texts.cars.filters.suv);
        updateElementText('filter-family', texts.cars.filters.family);
        
        // Features Section
        updateElementText('features-title', texts.features.title);
        updateElementText('features-subtitle', texts.features.subtitle);
        
        // About Us Section
        updateElementText('about-title', texts.about.title);
        updateElementText('about-subtitle', texts.about.subtitle);
        updateElementText('about-story', texts.about.story);
        
        // Location Section
        updateElementText('location-title', texts.location.title);
        updateElementText('location-subtitle', texts.location.subtitle);
        updateElementText('location-address', texts.location.address);
        
        // Footer
        updateElementText('footer-description', texts.footer.description);
        updateElementText('footer-quick-links', texts.footer.quickLinks);
        updateElementText('footer-services', texts.footer.services);
        updateElementText('footer-contact', texts.footer.contact);
        updateElementText('footer-copyright', texts.footer.copyright);
        updateElementText('footer-newsletter-title', texts.footer.newsletterTitle);
        updateElementText('footer-newsletter-desc', texts.footer.newsletterDesc);
        updateElementText('footer-newsletter-placeholder', texts.footer.newsletterPlaceholder);
        updateElementText('footer-newsletter-btn', texts.footer.newsletterBtn);
        updateElementText('footer-follow-us', texts.footer.followUs);
        updateElementText('footer-whatsapp-btn', texts.footer.whatsappBtn);
        updateElementText('footer-available-247', texts.footer.available247);
        updateElementText('footer-privacy-policy', texts.footer.privacyPolicy);
        updateElementText('footer-terms-service', texts.footer.termsService);
        updateElementText('footer-made-with-love', texts.footer.madeWithLove);
        // Company Stats & Address
        updateElementText('footer-experience', texts.footer.experience);
        updateElementText('footer-clients', texts.footer.clients);
        updateElementText('footer-address', texts.footer.address);
        // Services
        updateElementText('footer-service-rental', texts.footer.serviceRental);
        updateElementText('footer-service-airport', texts.footer.serviceAirport);
        updateElementText('footer-service-corporate', texts.footer.serviceCorporate);
        updateElementText('footer-service-delivery', texts.footer.serviceDelivery);
        updateElementText('footer-service-support', texts.footer.serviceSupport);
        // Contact
        updateElementText('footer-phone', texts.footer.phone);
        updateElementText('footer-email', texts.footer.email);
        
        // Fade in content
        fadeInContent();
        
        console.log(`✅ Page content updated successfully for ${lang}`);
    }, 150);
}

// Helper function to update element text
function updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

// Fade effects for smooth language transitions
function fadeOutContent() {
    const selectors = [
        '[id*="nav-"]',
        '[id*="hero-"]',
        '[id*="cars-"]',
        '[id*="features-"]',
        '[id*="about-"]',
        '[id*="location-"]',
        '[id*="footer-"]'
    ];
    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach(element => {
        element.style.transition = 'opacity 0.15s ease';
        element.style.opacity = '0.3';
    });
}

function fadeInContent() {
    const selectors = [
        '[id*="nav-"]',
        '[id*="hero-"]',
        '[id*="cars-"]',
        '[id*="features-"]',
        '[id*="about-"]',
        '[id*="location-"]',
        '[id*="footer-"]'
    ];
    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach(element => {
        element.style.opacity = '1';
    });
}

// Update language switcher UI
function updateLanguageSwitcher(selectedLang) {
    // Update desktop dropdown button
    const dropdownBtn = document.getElementById('lang-dropdown-btn');
    if (dropdownBtn) {
        const currentLang = dropdownBtn.querySelector('.current-lang');
        const flag = currentLang.querySelector('.flag');
        const code = currentLang.querySelector('.code');
        
        // Update flag and code based on selected language
        switch(selectedLang) {
            case 'sq':
                flag.textContent = '🇦🇱';
                code.textContent = 'SQ';
                break;
            case 'tr':
                flag.textContent = '🇹🇷';
                code.textContent = 'TR';
                break;
            case 'mk':
                flag.textContent = '🇲🇰';
                code.textContent = 'MK';
                break;
            case 'en':
                flag.textContent = '🇬🇧';
                code.textContent = 'EN';
                break;
        }
    }
    
    // Update mobile language options
    const mobileOptions = document.querySelectorAll('.mobile-lang-option');
    mobileOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === selectedLang) {
            option.classList.add('active');
        }
    });
}

// Initialize language system
function initializeLanguageSystem() {
    console.log('🔧 Initializing language system...');
    
    // Get saved language or default to Albanian
    const savedLang = localStorage.getItem('selectedLanguage') || 'sq';
    console.log(`📱 Saved language: ${savedLang}`);
    
    // Apply saved language
    switchLanguage(savedLang);
    
    console.log('🌍 Multi-language system initialized successfully');
}

// Export functions
window.LanguageSystem = {
    switchLanguage,
    initializeLanguageSystem,
    getCurrentLanguage: () => localStorage.getItem('selectedLanguage') || 'sq'
};
