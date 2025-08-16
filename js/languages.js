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

window.TRANSLATIONS = {
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
            bookButton: 'Rezervo në WhatsApp',
            // Car card elements
            card: {
                seats: 'vende',
                fuel: 'Karburant',
                transmission: 'Transmisioni',
                luggage: 'çanta',
                perDay: 'ditë',
                bookButton: 'Rezervo në WhatsApp',
                noCars: {
                    title: 'Nuk ka makina të disponueshme',
                    message: 'Provoni një kategori tjetër ose kontaktoni me ne'
                }
            },
            // WhatsApp message templates
            whatsappMessage: {
                greeting: 'Përshëndetje! Dëshiroj të rezervoj',
                forDays: 'për',
                days: 'ditë',
                price: 'Çmimi:',
                perDay: 'ditë',
                category: 'Kategoria:',
                contact: 'Ju lutem më kontaktoni për më shumë informacion.'
            }
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
            title: 'Rrëfimi Ynë',
            subtitle: 'Kompania më e besueshme e qirasë së makinave në Maqedoni',
            story: 'X Car Rental është kompania më e besueshme për qira makinash në Maqedoni. Me eksperiencën tonë të gjatë dhe flotën moderne, ofrojmë eksperiencën më të mirë të qirasë së makinave.',
            story2: 'Që nga viti 2019, kemi shërbyer më shumë se 1000 klientë të kënaqur dhe kemi ndërtuar një reputacion të fortë për cilësi, besueshmëri dhe shërbim të shkëlqyeshëm.',
            stats: {
                experience: '+ Vite Eksperiencë',
                clients: '+ Klientë të Kënaqur',
                cars: '+ Makina Premium',
                support: '/7 Mbështetje'
            },
            timeline: {
                title: 'Rruga Jonë e Suksesit',
                year2019: {
                    year: '2019',
                    title: 'Fillimi i Rrugës',
                    desc: 'X Car Rental u themelua me vizionin për të ofruar shërbimin më të mirë të qirasë së makinave në Maqedoni.'
                },
                year2021: {
                    year: '2021',
                    title: 'Rritja e Flotës',
                    desc: 'Flota jonë u zgjerua me makina të reja dhe teknologji të avancuar për të përmirësuar eksperiencën e klientëve.'
                },
                year2023: {
                    year: '2023',
                    title: 'Ekspansioni i Shërbimeve',
                    desc: 'Filluam të ofrojmë shërbime të reja si transfer aeroporti dhe qira afatgjatë për bizneset.'
                },
                year2024: {
                    year: '2024',
                    title: 'Lideri i Tregut',
                    desc: 'U bëmë kompania më e besueshme dhe e preferuar për qira makinash në Maqedoni me mbi 1000 klientë të kënaqur.'
                }
            },
            values: {
                title: 'Vlerat Tona Themelore',
                security: {
                    title: 'Siguria',
                    clickText: 'Klikoni për më shumë',
                    details: [
                        'Makina të siguruara plotësisht',
                        'Kontroll teknike të rregullta',
                        'Siguri maksimale për klientët',
                        'Procedura të sigurisë të përmirësuara'
                    ]
                },
                reliability: {
                    title: 'Besueshmëria',
                    clickText: 'Klikoni për më shumë',
                    details: [
                        '5+ vite eksperiencë në treg',
                        '1000+ klientë të kënaqur',
                        'Shërbim konsistent dhe i besueshëm',
                        'Përgjegjësi për çdo detaj'
                    ]
                },
                transparency: {
                    title: 'Transparenca',
                    clickText: 'Klikoni për më shumë',
                    details: [
                        'Çmime të qarta pa fshehura',
                        'Kontrata të detajuara',
                        'Informim i plotë për klientët',
                        'Komunikim i hapur dhe i ndershëm'
                    ]
                },
                quality: {
                    title: 'Cilësia',
                    clickText: 'Klikoni për më shumë',
                    details: [
                        'Makina të reja dhe të mirëmbajtura',
                        'Shërbim 5 yje për klientët',
                        'Teknologji moderne dhe e avancuar',
                        'Eksperiencë e jashtëzakonshme'
                    ]
                }
            },
            mission: {
                title: 'Misioni Ynë',
                desc: 'Ofrojmë eksperiencën më të mirë të qirasë së makinave në Maqedoni, duke kombinuar teknologjinë moderne me shërbimin personal dhe çmimet më të konkurruese në treg.',
                expand: 'Kemi angazhuar të përmirësojmë vazhdimisht shërbimet tona, të zgjerojmë flotën dhe të ofrojmë mbështetje të shkëlqyeshme për çdo klient.'
            },
            vision: {
                title: 'Vizioni Ynë',
                desc: 'Të bëhemi kompania më e njohur dhe e besueshme për qira makinash në rajon, duke u zgjeruar në tregjet e reja dhe duke mbajtur standardet e larta të cilësisë.',
                expand: 'Synojmë të krijojmë një rrjet të gjerë shërbimesh që të përmbushim nevojat e të gjitha llojeve të klientëve, nga turistët individual deri te korporatat e mëdha.'
            },
            whyChoose: {
                title: 'Pse të Na Zgjidhni Ne?',
                provenExperience: {
                    title: 'Eksperiencë e Provuar',
                    desc: '5+ vite eksperiencë në treg me njohuri të thella për nevojat e klientëve.'
                },
                regularMaintenance: {
                    title: 'Mirëmbajtje e Rregullt',
                    desc: 'Të gjitha makinat tona kalojnë kontroll teknike të rregullta për sigurinë maksimale.'
                },
                support247: {
                    title: 'Mbështetje 24/7',
                    desc: 'Ekipi ynë është gjithmonë i disponueshëm për të ju ndihmuar me çdo pyetje ose problem.'
                },
                competitivePrices: {
                    title: 'Çmime Konkurruese',
                    desc: 'Ofrojmë çmimet më të mira në treg me fleksibilitet maksimal për klientët tanë.'
                }
            }
        },

        // Location Section
        location: {
            title: 'Lokacioni Ynë',
            subtitle: 'Na vizitoni në zyrën tonë për informata të detajuara dhe kontrata',
            office: {
                title: 'X Car Rental - Zyra Kryesore',
                address: {
                    label: 'Adresa',
                    value: 'Rruga Ilindenska Nr. 25, 1000 Shkup, Maqedoni'
                },
                workingHours: {
                    label: 'Orari i Punës',
                    value: 'E Hënë - E Premte: 08:00 - 20:00, E Shtunë: 09:00 - 18:00, E Dielë: 10:00 - 16:00'
                },
                phone: {
                    label: 'Telefoni',
                    value: '+389 71 294 914'
                },
                email: {
                    label: 'Email',
                    value: 'info@xcarrental.com, rezervime@xcarrental.com'
                }
            },
            actions: {
                directions: 'Merrni Udhëzimet',
                call: 'Telefononi'
            }
        },

        // Footer
        footer: {
            companyName: 'X CAR RENTAL',
            description: 'Kompania më e besueshme për qira makinash në Maqedoni',
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
            privacyPolicy: 'Politika e Privatësisë',
            termsService: 'Kushtet e Shërbimit',
            madeWithLove: 'Bërë me ❤️ në Maqedoni',
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
            email: 'info@xcarrental.com',
            // Quick Links
            home: 'Ballina',
            cars: 'Makinat',
            about: 'Rreth Nesh',
            features: 'Shërbimet',
            location: 'Lokacioni',
            pricing: 'Çmimet',
            terms: 'Termat dhe Kushtet',
            faq: 'FAQ'
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
            bookButton: 'WhatsApp\'ta Rezervasyon Yap',
            // Car card elements
            card: {
                seats: 'koltuk',
                fuel: 'Yakıt',
                transmission: 'Şanzıman',
                luggage: 'valiz',
                perDay: 'gün',
                bookButton: 'WhatsApp\'ta Rezervasyon Yap',
                noCars: {
                    title: 'Mevcut araba yok',
                    message: 'Başka bir kategori deneyin veya bizimle iletişime geçin'
                }
            },
            // WhatsApp message templates
            whatsappMessage: {
                greeting: 'Merhaba! Kiralamak istiyorum',
                forDays: 'için',
                days: 'gün',
                price: 'Fiyat:',
                perDay: 'gün',
                category: 'Kategori:',
                contact: 'Daha fazla bilgi için lütfen benimle iletişime geçin.'
            }
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
            title: 'Hikayemiz',
            subtitle: 'Makedonya\'da en güvenilir araç kiralama şirketi',
            story: 'X Car Rental, Makedonya\'da en güvenilir araç kiralama şirketidir. Uzun deneyimimiz ve modern filosu ile en iyi araç kiralama deneyimini sunuyoruz.',
            story2: '2019 yılından bu yana, 1000\'den fazla memnun müşteriye hizmet verdik ve kalite, güvenilirlik ve mükemmel hizmet konusunda güçlü bir itibar inşa ettik.',
            stats: {
                experience: '+ Yıl Deneyim',
                clients: '+ Memnun Müşteri',
                cars: '+ Premium Araç',
                support: '/7 Destek'
            },
            timeline: {
                title: 'Başarı Yolumuz',
                year2019: {
                    year: '2019',
                    title: 'Yolculuğun Başlangıcı',
                    desc: 'X Car Rental, Makedonya\'da en iyi araç kiralama hizmetini sunma vizyonuyla kuruldu.'
                },
                year2021: {
                    year: '2021',
                    title: 'Filo Büyümesi',
                    desc: 'Filosu yeni araçlar ve gelişmiş teknoloji ile genişletildi, müşteri deneyimini iyileştirmek için.'
                },
                year2023: {
                    year: '2023',
                    title: 'Hizmet Genişlemesi',
                    desc: 'Havalimanı transferi ve işletmeler için uzun vadeli kiralama gibi yeni hizmetler sunmaya başladık.'
                },
                year2024: {
                    year: '2024',
                    title: 'Pazar Lideri',
                    desc: '1000\'den fazla memnun müşteri ile Makedonya\'da en güvenilir ve tercih edilen araç kiralama şirketi haline geldik.'
                }
            },
            values: {
                title: 'Temel Değerlerimiz',
                security: {
                    title: 'Güvenlik',
                    clickText: 'Daha fazlası için tıklayın',
                    details: [
                        'Tamamen sigortalı araçlar',
                        'Düzenli teknik kontroller',
                        'Müşteriler için maksimum güvenlik',
                        'Geliştirilmiş güvenlik prosedürleri'
                    ]
                },
                reliability: {
                    title: 'Güvenilirlik',
                    clickText: 'Daha fazlası için tıklayın',
                    details: [
                        'Pazarda 5+ yıl deneyim',
                        '1000+ memnun müşteri',
                        'Tutarlı ve güvenilir hizmet',
                        'Her detay için sorumluluk'
                    ]
                },
                transparency: {
                    title: 'Şeffaflık',
                    clickText: 'Daha fazlası için tıklayın',
                    details: [
                        'Gizli ücret olmadan net fiyatlar',
                        'Detaylı sözleşmeler',
                        'Müşteriler için tam bilgilendirme',
                        'Açık ve dürüst iletişim'
                    ]
                },
                quality: {
                    title: 'Kalite',
                    clickText: 'Daha fazlası için tıklayın',
                    details: [
                        'Yeni ve bakımlı araçlar',
                        'Müşteriler için 5 yıldızlı hizmet',
                        'Modern ve gelişmiş teknoloji',
                        'Olağanüstü deneyim'
                    ]
                }
            },
            mission: {
                title: 'Misyonumuz',
                desc: 'Makedonya\'da en iyi araç kiralama deneyimini sunmak, modern teknolojiyi kişisel hizmet ve pazardaki en rekabetçi fiyatlarla birleştirerek.',
                expand: 'Hizmetlerimizi sürekli iyileştirmeye, filosu genişletmeye ve her müşteri için mükemmel destek sunmaya taahhüt ettik.'
            },
            vision: {
                title: 'Vizyonumuz',
                desc: 'Makedonya\'da araç kiralama sektöründe lider olmak ve yüksek kalite standartlarını koruyarak yeni pazarlara genişlemek.',
                expand: 'Bireysel turistlerden büyük şirketlere kadar tüm müşteri türlerinin ihtiyaçlarını karşılayan geniş bir hizmet ağı oluşturmayı hedefliyoruz.'
            },
            whyChoose: {
                title: 'Neden Bizi Seçmelisiniz?',
                provenExperience: {
                    title: 'Kanıtlanmış Deneyim',
                    desc: 'Müşteri ihtiyaçları konusunda derin bilgi ile pazarda 5+ yıl deneyim.'
                },
                regularMaintenance: {
                    title: 'Düzenli Bakım',
                    desc: 'Tüm araçlarımız maksimum güvenlik için düzenli teknik kontrollerden geçer.'
                },
                support247: {
                    title: '7/24 Destek',
                    desc: 'Ekibimiz herhangi bir soru veya problem için her zaman yardıma hazır.'
                },
                competitivePrices: {
                    title: 'Rekabetçi Fiyatlar',
                    desc: 'Müşterilerimiz için maksimum esneklik ile pazardaki en iyi fiyatları sunuyoruz.'
                }
            }
        },

        // Location Section
        location: {
            title: 'Konumumuz',
            subtitle: 'Detaylı bilgi ve sözleşme için ofisimizi ziyaret edin',
            office: {
                title: 'X Car Rental - Ana Ofis',
                address: {
                    label: 'Adres',
                    value: 'Rruga Ilindenska Nr. 25, 1000 Üsküp, Makedonya'
                },
                workingHours: {
                    label: 'Çalışma Saatleri',
                    value: 'Pazartesi - Cuma: 08:00 - 20:00, Cumartesi: 09:00 - 18:00, Pazar: 10:00 - 16:00'
                },
                phone: {
                    label: 'Telefon',
                    value: '+389 71 294 914'
                },
                email: {
                    label: 'E-posta',
                    value: 'info@xcarrental.com, rezervime@xcarrental.com'
                }
            },
            actions: {
                directions: 'Yol Tarifi Al',
                call: 'Ara'
            }
        },

        // Footer
        footer: {
            companyName: 'X CAR RENTAL',
            description: 'Makedonya\'da en güvenilir araç kiralama şirketi',
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
            email: 'info@xcarrental.com',
            // Quick Links
            home: 'Ana Sayfa',
            cars: 'Araçlar',
            about: 'Hakkımızda',
            features: 'Hizmetler',
            location: 'Konum',
            pricing: 'Fiyatlar',
            terms: 'Şartlar ve Koşullar',
            faq: 'SSS'
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
            bookButton: 'Резервирај на WhatsApp',
            // Car card elements
            card: {
                seats: 'места',
                fuel: 'Гориво',
                transmission: 'Пренос',
                luggage: 'торби',
                perDay: 'ден',
                bookButton: 'Резервирај на WhatsApp',
                noCars: {
                    title: 'Нема достапни автомобили',
                    message: 'Пробајте друга категорија или контактирајте нè'
                }
            },
            // WhatsApp message templates
            whatsappMessage: {
                greeting: 'Здраво! Сакам да резервирам',
                forDays: 'за',
                days: 'дена',
                price: 'Цена:',
                perDay: 'ден',
                category: 'Категорија:',
                contact: 'Ве молиме контактирајте ме за повеќе информации.'
            }
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
            title: 'Нашата Приказна',
            subtitle: 'Најсигурната компанија за изнајмување на автомобили во Македонија',
            story: 'X Car Rental е најсигурната компанија за изнајмување на автомобили во Македонија. Со нашето долго искуство и модерна флота, нудиме најдобро искуство за изнајмување на автомобили.',
            story2: 'Од 2019 година, имаме сервирано повеќе од 1000 задоволни клиенти и изградивме силна репутација за квалитет, сигурност и одличен сервис.',
            stats: {
                experience: '+ Години Искуство',
                clients: '+ Задоволни Клиенти',
                cars: '+ Премиум Автомобили',
                support: '/7 Поддршка'
            },
            timeline: {
                title: 'Нашиот Пат до Успехот',
                year2019: {
                    year: '2019',
                    title: 'Почеток на Патот',
                    desc: 'X Car Rental е основана со визијата да нуди најдобра услуга за изнајмување на автомобили во Македонија.'
                },
                year2021: {
                    year: '2021',
                    title: 'Раст на Флотата',
                    desc: 'Нашата флота е проширена со нови автомобили и напредна технологија за подобрување на клиентското искуство.'
                },
                year2023: {
                    year: '2023',
                    title: 'Проширување на Услугите',
                    desc: 'Започнавме да нудиме нови услуги како аеродромски трансфер и долгорочно изнајмување за бизниси.'
                },
                year2024: {
                    year: '2024',
                    title: 'Лидер на Пазарот',
                    desc: 'Станавме најсигурната и најпреферирана компанија за изнајмување на автомобили во Македонија со повеќе од 1000 задоволни клиенти.'
                }
            },
            values: {
                title: 'Нашите Основни Вредности',
                security: {
                    title: 'Сигурност',
                    clickText: 'Кликнете за повеќе',
                    details: [
                        'Целосно осигурани автомобили',
                        'Редовни технички проверки',
                        'Максимална сигурност за клиентите',
                        'Подобрени процедури за сигурност'
                    ]
                },
                reliability: {
                    title: 'Сигурност',
                    clickText: 'Кликнете за повеќе',
                    details: [
                        '5+ години искуство на пазарот',
                        '1000+ задоволни клиенти',
                        'Конзистентен и сигурен сервис',
                        'Одговорност за секој детал'
                    ]
                },
                transparency: {
                    title: 'Транспарентност',
                    clickText: 'Кликнете за повеќе',
                    details: [
                        'Јасни цени без скриени трошоци',
                        'Детални договори',
                        'Целосно информирање за клиентите',
                        'Отворена и чесна комуникација'
                    ]
                },
                quality: {
                    title: 'Квалитет',
                    clickText: 'Кликнете за повеќе',
                    details: [
                        'Нови и одржувани автомобили',
                        '5-ѕвезден сервис за клиентите',
                        'Модерна и напредна технологија',
                        'Исклучително искуство'
                    ]
                }
            },
            mission: {
                title: 'Нашата Мисија',
                desc: 'Да нудиме најдобро искуство за изнајмување на автомобили во Македонија, комбинирајќи ја модерната технологија со персоналната услуга и најконкурентните цени на пазарот.',
                expand: 'Се заложивме да ги подобруваме нашите услуги постојано, да ја прошириме флотата и да нудиме одлична поддршка за секој клиент.'
            },
            vision: {
                title: 'Нашата Визија',
                desc: 'Да бидеме најпознатата и најсигурната компанија за изнајмување на автомобили во регионот, проширувајќи се на нови пазари и одржувајќи ги високите стандарди за квалитет.',
                expand: 'Целиме да создадеме широка мрежа на услуги што ќе ги задоволат потребите на сите видови клиенти, од индивидуални туристи до големи корпорации.'
            },
            whyChoose: {
                title: 'Зошто да Не Изберете?',
                provenExperience: {
                    title: 'Докажано Искуство',
                    desc: '5+ години искуство на пазарот со длабоко познавање на потребите на клиентите.'
                },
                regularMaintenance: {
                    title: 'Редовно Одржување',
                    desc: 'Сите наши автомобили поминуваат редовни технички проверки за максимална сигурност.'
                },
                support247: {
                    title: '24/7 Поддршка',
                    desc: 'Нашиот тим е секогаш достапен за да ви помогне со секое прашање или проблем.'
                },
                competitivePrices: {
                    title: 'Конкурентни Цени',
                    desc: 'Нудиме најдобри цени на пазарот со максимална флексибилност за нашите клиенти.'
                }
            }
        },

        // Location Section
        location: {
            title: 'Нашата Локација',
            subtitle: 'Посетете нè во нашата канцеларија за детални информации и договори',
            office: {
                title: 'X Car Rental - Главна Канцеларија',
                address: {
                    label: 'Адреса',
                    value: 'Руга Илинденска бр. 25, 1000 Скопје, Македонија'
                },
                workingHours: {
                    label: 'Работно Време',
                    value: 'Понеделник - Петок: 08:00 - 20:00, Сабота: 09:00 - 18:00, Недела: 10:00 - 16:00'
                },
                phone: {
                    label: 'Телефон',
                    value: '+389 71 294 914'
                },
                email: {
                    label: 'Е-пошта',
                    value: 'info@xcarrental.com, rezervime@xcarrental.com'
                }
            },
            actions: {
                directions: 'Земи Упатства',
                call: 'Телефонирај'
            }
        },

        // Footer
        footer: {
            companyName: 'X CAR RENTAL',
            description: 'Најсигурната компанија за изнајмување на автомобили во Македонија',
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
            email: 'info@xcarrental.com',
            // Quick Links
            home: 'Почетна',
            cars: 'Автомобили',
            about: 'За Нас',
            features: 'Услуги',
            location: 'Локација',
            pricing: 'Цени',
            terms: 'Услови и Одредби',
            faq: 'ЧПП'
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
            bookButton: 'Book on WhatsApp',
            // Car card elements
            card: {
                seats: 'seats',
                fuel: 'Fuel',
                transmission: 'Transmission',
                luggage: 'bags',
                perDay: 'day',
                bookButton: 'Book on WhatsApp',
                noCars: {
                    title: 'No cars available',
                    message: 'Try another category or contact us'
                }
            },
            // WhatsApp message templates
            whatsappMessage: {
                greeting: 'Hello! I would like to book',
                forDays: 'for',
                days: 'days',
                price: 'Price:',
                perDay: 'day',
                category: 'Category:',
                contact: 'Please contact me for more information.'
            }
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
            title: 'Our Story',
            subtitle: 'The most reliable car rental company in Macedonia',
            story: 'X Car Rental is the most reliable car rental company in Macedonia. With our long experience and modern fleet, we offer the best car rental experience.',
            story2: 'Since 2019, we have served more than 1000 satisfied clients and built a strong reputation for quality, reliability and excellent service.',
            stats: {
                experience: '+ Years Experience',
                clients: '+ Satisfied Clients',
                cars: '+ Premium Cars',
                support: '/7 Support'
            },
            timeline: {
                title: 'Our Path to Success',
                year2019: {
                    year: '2019',
                    title: 'Journey Begins',
                    desc: 'X Car Rental was founded with the vision of offering the best car rental service in Macedonia.'
                },
                year2021: {
                    year: '2021',
                    title: 'Fleet Growth',
                    desc: 'Our fleet was expanded with new cars and advanced technology to improve customer experience.'
                },
                year2023: {
                    year: '2023',
                    title: 'Service Expansion',
                    desc: 'We started offering new services such as airport transfer and long-term rental for businesses.'
                },
                year2024: {
                    year: '2024',
                    title: 'Market Leader',
                    desc: 'We became the most reliable and preferred car rental company in Macedonia with over 1000 satisfied clients.'
                }
            },
            values: {
                title: 'Our Core Values',
                security: {
                    title: 'Security',
                    clickText: 'Click for more',
                    details: [
                        'Fully insured vehicles',
                        'Regular technical inspections',
                        'Maximum security for clients',
                        'Improved security procedures'
                    ]
                },
                reliability: {
                    title: 'Reliability',
                    clickText: 'Click for more',
                    details: [
                        '5+ years experience in the market',
                        '1000+ satisfied clients',
                        'Consistent and reliable service',
                        'Responsibility for every detail'
                    ]
                },
                transparency: {
                    title: 'Transparency',
                    clickText: 'Click for more',
                    details: [
                        'Clear prices without hidden fees',
                        'Detailed contracts',
                        'Complete information for clients',
                        'Open and honest communication'
                    ]
                },
                quality: {
                    title: 'Quality',
                    clickText: 'Click for more',
                    details: [
                        'New and maintained vehicles',
                        '5-star service for clients',
                        'Modern and advanced technology',
                        'Exceptional experience'
                    ]
                }
            },
            mission: {
                title: 'Our Mission',
                desc: 'To offer the best car rental experience in Macedonia, combining modern technology with personal service and the most competitive prices in the market.',
                expand: 'We have committed to continuously improve our services, expand the fleet and provide excellent support for every client.'
            },
            vision: {
                title: 'Our Vision',
                desc: 'To become the most known and reliable car rental company in the region, expanding to new markets and maintaining high quality standards.',
                expand: 'We aim to create a wide network of services that will meet the needs of all types of clients, from individual tourists to large corporations.'
            },
            whyChoose: {
                title: 'Why Choose Us?',
                provenExperience: {
                    title: 'Proven Experience',
                    desc: '5+ years experience in the market with deep knowledge of client needs.'
                },
                regularMaintenance: {
                    title: 'Regular Maintenance',
                    desc: 'All our vehicles undergo regular technical inspections for maximum security.'
                },
                support247: {
                    title: '24/7 Support',
                    desc: 'Our team is always available to help you with any question or problem.'
                },
                competitivePrices: {
                    title: 'Competitive Prices',
                    desc: 'We offer the best prices in the market with maximum flexibility for our clients.'
                }
            }
        },

        // Location Section
        location: {
            title: 'Our Location',
            subtitle: 'Visit us at our office for detailed information and contracts',
            office: {
                title: 'X Car Rental - Main Office',
                address: {
                    label: 'Address',
                    value: 'Rruga Ilindenska Nr. 25, 1000 Skopje, Macedonia'
                },
                workingHours: {
                    label: 'Working Hours',
                    value: 'Monday - Friday: 08:00 - 20:00, Saturday: 09:00 - 18:00, Sunday: 10:00 - 16:00'
                },
                phone: {
                    label: 'Phone',
                    value: '+389 71 294 914'
                },
                email: {
                    label: 'Email',
                    value: 'info@xcarrental.com, reservations@xcarrental.com'
                }
            },
            actions: {
                directions: 'Get Directions',
                call: 'Call'
            }
        },

        // Footer
        footer: {
            companyName: 'X CAR RENTAL',
            description: 'The most reliable car rental company in Macedonia',
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
            email: 'info@xcarrental.com',
            // Quick Links
            home: 'Home',
            cars: 'Cars',
            about: 'About Us',
            features: 'Services',
            location: 'Location',
            pricing: 'Pricing',
            terms: 'Terms & Conditions',
            faq: 'FAQ'
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
        
        // Update car cards with new translations
        updateCarCardsLanguage(texts.cars.card);
        
        // Features Section
        updateElementText('features-title', texts.features.title);
        updateElementText('features-subtitle', texts.features.subtitle);
        
        // About Us Section
        updateElementText('about-title', texts.about.title);
        updateElementText('split-text-1', texts.about.story);
        updateElementText('split-text-2', texts.about.story2);
        
        // Location Section
        updateElementText('location-title', texts.location.title);
        updateElementText('location-subtitle', texts.location.subtitle);
        
        // Footer
        updateElementText('footer-company-desc', texts.footer.description);
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
        
        // Update all elements with data-translate attributes
        updateAllTranslatableElements(texts);
        
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

// Update car cards language
function updateCarCardsLanguage(cardTranslations) {
    console.log('🚗 Updating car cards language:', cardTranslations);
    
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        // Update seats
        const seatsElement = card.querySelector('[data-translate="cars.card.seats"]');
        if (seatsElement) {
            seatsElement.textContent = cardTranslations.seats;
        }
        
        // Update fuel
        const fuelElement = card.querySelector('[data-translate="cars.card.fuel"]');
        if (fuelElement) {
            fuelElement.textContent = cardTranslations.fuel;
        }
        
        // Update transmission
        const transmissionElement = card.querySelector('[data-translate="cars.card.transmission"]');
        if (transmissionElement) {
            transmissionElement.textContent = cardTranslations.transmission;
        }
        
        // Update luggage
        const luggageElement = card.querySelector('[data-translate="cars.card.luggage"]');
        if (luggageElement) {
            luggageElement.textContent = cardTranslations.luggage;
        }
        
        // Update per day text
        const perDayElement = card.querySelector('[data-translate="cars.card.perDay"]');
        if (perDayElement) {
            perDayElement.textContent = cardTranslations.perDay;
        }
        
        // Update book button
        const bookButtonElement = card.querySelector('[data-translate="cars.card.bookButton"]');
        if (bookButtonElement) {
            bookButtonElement.textContent = cardTranslations.bookButton;
        }
    });
    
    console.log(`✅ Updated ${carCards.length} car cards with new language`);
}

// Function to update all elements with data-translate attributes
function updateAllTranslatableElements(texts) {
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        const translatedText = getNestedTranslation(texts, translationKey);
        
        if (translatedText) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });
}

// Helper function to get nested translation values
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
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
