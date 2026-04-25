const translations = {
  fr: {
    title: 'ChainCacao — Traçabilité blockchain café-cacao (EUDR)',
    toggleLabel: 'EN',
    toggleAria: 'Switch to English',
    nav: {
      problem: 'Problème',
      solution: 'Solution',
      actors: 'Acteurs',
      eudr: 'EUDR',
      contact: 'Commencer'
    },
    hero: {
      eyebrow: 'Plateforme de traçabilité café-cacao · Togo',
      title: 'Traçabilité <em>blockchain</em><br>café-cacao,<br>du champ à l\'Europe',
      desc: 'Enregistrez chaque lot (GPS, poids, photos), transférez la propriété entre acteurs, vérifiez l\'historique via QR code, et générez automatiquement des certificats EUDR et preuves cryptographiques.',
      primary: 'Découvrir la solution',
      ghost: 'Conformité EUDR'
    },
    stats: [
      'Familles togolaises dépendant du café et du cacao',
      'Part perçue par l\'agriculteur sur la valeur finale',
      'Pertes annuelles dues aux fraudes sur les pesées',
      'Exportations certifiées Fairtrade ou Bio'
    ],
    gallery: {
      eyebrow: 'La réalité du terrain',
      title: 'La filière café-cacao togolaise<br>en images',
      captions: [
        'Cabosses de cacao, Togo',
        'Agriculteur — Région Plateaux',
        'Fèves de cacao — Séchage',
        'Coopérative — Transfert de lot'
      ]
    },
    problem: {
      eyebrow: 'Le problème',
      title: 'Sans preuves, la traçabilité devient<br>une promesse… pas une garantie.',
      sub: 'La filière café-cacao a besoin d\'un registre fiable pour relier chaque lot à sa parcelle, suivre les transferts de propriété et produire des preuves EUDR vérifiables — sans alourdir le travail sur le terrain.',
      cvTitle: 'Parcours d\'un sac de cacao — Aujourd\'hui',
      cvSteps: [
        { title: 'Agriculteur — Récolte', body: 'Vend à un collecteur. Aucune preuve d\'origine ni de poids vérifiable.' },
        { title: '4 à 6 intermédiaires non tracés', body: 'Collecteurs, pisteurs, grossistes — chacun revend sans enregistrement. Fraudes indétectables.' },
        { title: 'Exportateur — Sortie du Togo', body: 'Impossible de fournir une preuve géographique à l\'UE. Blocage EUDR en vue.' },
        { title: 'Importateur européen', body: 'Refuse les lots non conformes EUDR depuis 2025. Marché en danger pour le Togo.' }
      ],
      cards: [
        { title: 'Manque de preuves exploitables', body: 'Données terrain dispersées, impossibles à auditer. Moins de 5 % des exports certifiés.' },
        { title: 'Ruptures de traçabilité', body: 'Les transferts entre acteurs perdent l\'historique. L\'EUDR (2025) impose la traçabilité géographique.' },
        { title: 'Fraudes et non-conformité', body: 'Pesées frauduleuses : 30–40 M$ de pertes par an. Sans preuves, l\'accès au marché UE est bloqué.' },
        { title: 'Perte de valeur pour les producteurs', body: '40 000 familles touchées. L\'agriculteur ne perçoit que 15–25 % de la valeur finale.' }
      ]
    },
    mission: {
      eyebrow: 'Notre mission',
      title: 'Relier chaque grain<br>à son histoire',
      sub: 'ChainCacao crée une infrastructure de confiance qui relie chaque cabosse de cacao à une preuve cryptographique vérifiable par n\'importe qui, partout dans le monde.'
    },
    solution: {
      eyebrow: 'La solution fiable',
      title: 'De la parcelle à l\'importateur européen —<br><span class="text-g2">ChainCacao</span> : une chaîne de valeur',
      sub: 'Chaque étape devient une preuve consultable. De la parcelle togolaise jusqu\'à l\'importateur européen, ChainCacao relie les acteurs et sécurise la conformité EUDR 2025.',
      cards: [
        { title: 'Enregistrement de récolte', body: 'Création d\'un lot depuis la parcelle avec GPS, poids, type de produit et photos. Chaque récolte devient une preuve vérifiable et immuable.' },
        { title: 'Transfert à la coopérative', body: 'Signature numérique du transfert de propriété avec horodatage et pièces justificatives pour éliminer les fraudes.' },
        { title: 'Contrôle par l\'importateur', body: 'Consultation instantanée de l\'historique complet via QR code ou identifiant unique, avant achat ou dédouanement en Europe.' },
        { title: 'Regroupement de lots', body: 'Création de lots regroupés tout en conservant la traçabilité individuelle des lots sources, garantissant conformité EUDR et certifications.' },
        { title: 'Accès aux certifications', body: 'La traçabilité prouvée ouvre l\'accès aux certifications Fairtrade, Bio et Rainforest Alliance, permettant de valoriser davantage le cacao togolais.' },
        { title: 'Tableaux de bord dédiés', body: 'Interface adaptée à chaque acteur — agriculteur, coopérative, transformateur, exportateur — avec vue temps réel sur tous les lots.' }
      ]
    },
    useCases: {
      eyebrow: 'Cas d\'usage',
      title: 'ChainCacao en action',
      sub: 'Explorez les flux concrets pour chaque acteur de la filière, de l\'enregistrement sur le terrain à la vérification en Europe.',
      tabs: ['Agriculteur', 'Coopérative', 'Exportateur', 'Vérificateur'],
      agri: {
        screenTitle: 'Interface agriculteur — Enregistrement',
        steps: [
          { title: 'Capture GPS automatique', body: 'L\'agriculteur ouvre l\'app depuis sa parcelle. Les coordonnées GPS sont capturées automatiquement, même hors-ligne.' },
          { title: 'Saisie du lot', body: 'Espèce, poids, date, photos optionnelles. Interface pensée pour les zones à faible connectivité.' },
          { title: 'Inscription blockchain', body: 'Le lot est signé cryptographiquement et inscrit sur la blockchain. Un QR code unique est généré.' },
          { title: 'Suivi des revenus', body: 'L\'agriculteur peut suivre en temps réel les transferts et la valeur générée à chaque étape.' }
        ],
        fields: [
          { label: 'Position GPS', value: 'GPS: 6.1722° N, 1.2347° E — Plateaux ✓' },
          { label: 'Espèce', value: 'Cacao Forastero' },
          { label: 'Poids (kg)', value: '148 kg' },
          { label: 'Date', value: '16 avril 2026' }
        ],
        button: 'Enregistrer sur la blockchain'
      },
      coop: {
        screenTitle: 'Interface coopérative — Lots en cours',
        steps: [
          { title: 'Réception du lot', body: 'Scan du QR code pour consulter l\'historique complet depuis la ferme avant réception.' },
          { title: 'Validation de la pesée', body: 'Pesée officielle enregistrée et comparée à la déclaration. Toute divergence est tracée.' },
          { title: 'Signature du transfert', body: 'Transfert de propriété signé numériquement par les deux parties, horodaté de façon immuable.' },
          { title: 'Tableau de bord', body: 'Vue d\'ensemble de tous les lots reçus, en cours et expédiés avec alertes de non-conformité.' }
        ],
        timeline: [
          { title: 'LOT-2026-0841 — 203 kg · Ama Tchakpé', body: 'Pesée validée · 16/04/2026' },
          { title: 'LOT-2026-0842 — 148 kg en attente · Kofi Mensah', body: 'Pesée à confirmer · 17/04/2026' },
          { title: 'LOT-2026-0839 — 310 kg expédiés · Ameko Fiafé', body: 'Transfert signé → COTOCA · 15/04/2026' }
        ],
        button: 'Valider les lots en attente'
      },
      export: {
        screenTitle: 'Interface exportateur — EXPORT-2026-04A',
        steps: [
          { title: 'Consolidation de lots', body: 'Regroupement de plusieurs lots avec traçabilité individuelle conservée pour l\'EUDR.' },
          { title: 'Vérification de conformité', body: 'Contrôle automatique : GPS hors zones déforestées, tous les transferts signés.' },
          { title: 'Génération du certificat EUDR', body: 'Rapport de due diligence généré avec toutes les preuves cryptographiques requises.' },
          { title: 'Transmission à l\'importateur', body: 'L\'importateur reçoit le QR code et le rapport EUDR, vérification possible en temps réel.' }
        ],
        fields: [
          { label: 'Lots consolidés', value: '5 lots · 1 240 kg · Région Plateaux' },
          { label: 'Conformité EUDR', value: '✓ 5/5 lots conformes — 100%' },
          { label: 'Preuve cryptographique', value: '0xd4e2f8a1b3c7…9e5f ✓' }
        ],
        button: 'Télécharger rapport EUDR complet'
      },
      verif: {
        screenTitle: 'Interface vérificateur — LOT-2026-0841',
        steps: [
          { title: 'Scan du QR code', body: 'Importateur, certifié ou régulateur scanne le QR code collé sur le sac ou le conteneur.' },
          { title: 'Historique instantané', body: 'L\'historique complet s\'affiche : chaque transfert, acteur, horodatage depuis la ferme.' },
          { title: 'Vérification cryptographique', body: 'Chaque bloc vérifié par signature — impossible à falsifier même avec accès à la base.' },
          { title: 'Export du rapport', body: 'Rapport PDF de traçabilité généré, acceptable pour les organismes de certification.' }
        ],
        timeline: [
          { title: 'Récolte · Ama Tchakpé · 203 kg Criollo', body: 'GPS: 6.17°N 1.23°E · GPS prouvé · 15/04/2026' },
          { title: 'Coop. Kpalimé Nord · Pesée : 203 kg ✓', body: 'Transfert signé cryptographiquement · 16/04/2026' },
          { title: 'Transformateur COTOCA · En cours', body: '18/04/2026' },
          { title: 'Exportateur · En attente', body: '—' }
        ],
        banner: '✓ Traçabilité complète vérifiée — Conforme EUDR'
      }
    },
    testimony: {
      text: 'Avec ChainCacao, je sais enfin ce que vaut mon cacao sur le marché européen. Pour la première fois, j\'ai une preuve de ce que j\'ai récolté.',
      author: 'Kofi Mensah, agriculteur · Kpalimé, Région Plateaux'
    },
    eudr: {
      eyebrow: 'Conformité EUDR',
      title: 'Le règlement européen<br>anti-déforestation · En vigueur 2025',
      sub: 'Tout cacao importé dans l\'UE doit être accompagné de preuves géographiques vérifiables. ChainCacao génère automatiquement ces preuves.',
      steps: [
        { title: 'Géolocalisation des parcelles', body: 'Chaque lot est associé à des coordonnées GPS précises, enregistrées à la récolte via l\'app mobile.' },
        { title: 'Historique de transferts complet', body: 'Tous les changements de propriété enregistrés de façon immuable sur la blockchain, de la ferme à l\'exportateur.' },
        { title: 'Preuves cryptographiques', body: 'Chaque bloc signé numériquement — impossible à falsifier. Vérification instantanée via QR code par tout importateur.' },
        { title: 'Génération automatique du rapport', body: 'Rapport de due diligence EUDR généré depuis les données blockchain, prêt pour le dédouanement européen.' }
      ],
      certTitle: 'Certificat EUDR — ChainCacao',
      status: 'Conforme',
      rows: [
        { key: 'Identifiant lot', value: 'LOT-2026-0841' },
        { key: 'Produit', value: 'Cacao Criollo · 203 kg' },
        { key: 'Parcelle GPS', value: '6.1722°N · 1.2347°E' },
        { key: 'Zone déforestée ?', value: 'Non confirmé' },
        { key: 'Agriculteur', value: 'Ama Tchakpé · Kpalimé' },
        { key: 'Transferts tracés', value: '4 / 4 signés' },
        { key: 'Blockchain', value: 'Polygon · Bloc #4823' },
        { key: 'Date émission', value: '22 avril 2026' }
      ],
      hashLabel: 'Hash :'
    },
    actors: {
      eyebrow: 'Acteurs de la filière',
      title: 'Une solution pour chaque maillon<br>de la filière café-cacao togolaise',
      cards: [
        { title: 'Agriculteurs & Coopératives', example: 'Ex : Koffi Mensah (Kpalimé) · CACAOKPALIME', body: 'Enregistrent les lots à la récolte avec GPS, poids et photos via une application mobile optimisée pour zones à connectivité réduite. Reçoivent le certificat de récolte immédiatement.', tag: 'Producteur' },
        { title: 'Coopératives & Collecteurs', example: 'Ex : CACAOKPALIME · Région Plateaux', body: 'Collectent les lots, valident les transferts et confirment les pesées. Génèrent les registres audit immuables. Chaque transaction est horodatée et signée numériquement.', tag: 'Intermédiaire' },
        { title: 'Transformateurs', example: 'Ex : COTOCA Transformation · Lissé', body: 'Reçoivent les lots avec historique complet vérifiable. Ajoutent les étapes de fermentation, séchage et contrôle qualité. Preuves cryptographiques conservées à chaque transformation.', tag: 'Transformateur' },
        { title: 'Exportateurs', example: 'Ex : TOGO EXPORT · Port d\'Atakoramé', body: 'Consolident les lots regroupés, génèrent automatiquement les rapports EUDR et certificats. Maintiennent la traçabilité jusqu\'au port. Facilitent la vérification par importateurs européens.', tag: 'Exportateur' },
        { title: 'Organismes de certification', example: 'Fairtrade, Bio, Rainforest Alliance', body: 'Accèdent à la chaîne complète vérifiable pour délivrer certifications. Audits simplifiés grâce aux preuves cryptographiques. Réduction des temps de certification de 40 %.', tag: 'Certification' },
        { title: 'Importateurs européens', example: 'Ex : CHOCO HOLLAND BV', body: 'Vérifient l\'historique complet d\'un lot en un scan QR. Consultent les preuves EUDR, GPS et documents avant achat. Conformité anti-déforestation garantie avant mise sur le marché.', tag: 'Importateur' }
      ]
    },
    benefits: {
      eyebrow: 'Avantages',
      title: 'Transformer la vie de<br>40 000 familles togolaises',
      cards: [
        { title: 'Impact économique', items: ['Réduction des fraudes sur les pesées', 'Augmentation de la part captée par les agriculteurs', 'Accès aux marchés premium Fairtrade et Bio', 'Négociation sur données vérifiables'] },
        { title: 'Impact réglementaire', items: ['Conformité totale avec l\'EUDR 2025', 'Maintien des exportations vers l\'UE', 'Togo pionnier régional en Afrique de l\'Ouest', 'Modèle réplicable pour pays voisins'] },
        { title: 'Impact social', items: ['Amélioration de vie des 40 000 familles', 'Renforcement du pouvoir des coopératives', 'Transparence et justice dans la filière', 'Applicable au coton, cajou, soja'] }
      ]
    },
    blockchainImage: {
      eyebrow: 'Technologie blockchain',
      title: 'Un registre immuable<br>sans tiers de confiance',
      sub: 'La blockchain garantit que chaque donnée enregistrée est permanente, vérifiable et accessible à tous les acteurs de la filière — sans intermédiaire centralisé.'
    },
    blockchain: {
      eyebrow: 'Pourquoi la blockchain ?',
      title: 'La technologie au service<br>de la transparence agricole',
      sub: 'La blockchain est la seule technologie permettant à des acteurs qui ne se font pas confiance de partager des données vérifiables et non falsifiables.',
      reasons: [
        { title: 'Immuabilité garantie', body: 'Un lot enregistré ne peut jamais être modifié rétroactivement. Chaque bloc est lié cryptographiquement au précédent.' },
        { title: 'Décentralisation totale', body: 'Aucun acteur unique ne contrôle le registre. Tous partagent la même source de vérité sans dépendre d\'un tiers.' },
        { title: 'Vérifiabilité universelle', body: 'N\'importe qui peut vérifier l\'authenticité d\'un lot sans accès privilégié — importateur, journaliste, régulateur.' },
        { title: 'Accessibilité terrain', body: 'Mode hors-ligne pour zones à faible connectivité. Synchronisation différée dès que le réseau est disponible.' }
      ],
      blocks: [
        { title: 'Bloc #4821 — Récolte', hash: '0x3f8a…c2d1', data: '<strong>Agriculteur :</strong> Kofi Mensah · <strong>GPS :</strong> 6.17°N 1.23°E<br><strong>Espèce :</strong> Forastero · <strong>Poids :</strong> 148 kg · 16/04/2026', link: 'prev: 0x0000…0000' },
        { title: 'Bloc #4822 — Transfert Coopérative', hash: '0x9e1b…a7f4', data: '<strong>Récepteur :</strong> Coop. Kpalimé Nord<br><strong>Pesée confirmée :</strong> 148 kg · Signé ✓', link: 'prev: 0x3f8a…c2d1 ✓' },
        { title: 'Bloc #4823 — Transformateur', hash: '0x2c5d…e8b3', data: '<strong>COTOCA</strong> · En cours de traitement<br><span class="bc-note-immutable">Donnée immuable — Modification impossible</span>', link: 'prev: 0x9e1b…a7f4 ✓' }
      ]
    },
    values: {
      eyebrow: 'Nos valeurs',
      title: 'Préserver les forêts<br>et la biodiversité',
      sub: 'Chaque traçabilité vérifiée garantit que le cacao provient de terres légales, sans déforestation ni exploitation.',
      items: [
        { title: 'Durabilité environnementale', body: 'Chaque lot tracé garantit l\'absence de déforestation. Preuves GPS et photos vérifiables intégrées.' },
        { title: 'Justice économique', body: 'Les 40 000 familles togolaises reçoivent une part plus équitable en supprimant les intermédiaires frauduleux.' },
        { title: 'Transparence totale', body: 'De la parcelle à l\'importateur : chacun voit l\'histoire complète. Aucun secret, aucune fraude possible.' },
        { title: 'Innovation accessible', body: 'Technologie blockchain simplifiée pour zones à faible connectivité. Application mobile hors-ligne.' }
      ]
    },
    cta: {
      title: 'Prêt à transformer<br>votre café-cacao ?',
      sub: 'Rejoignez des centaines de producteurs et d\'acheteurs qui utilisent déjà ChainCacao pour sécuriser la traçabilité, accélérer la vérification et faciliter la conformité EUDR.',
      primary: 'Commencer maintenant',
      ghost: 'Demander une démo',
      odds: ['+240 acteurs satisfaits', 'ODD 1 — Fin de la pauvreté', 'ODD 8 — Travail décent', 'ODD 12 — Consommation responsable']
    },
    footer: {
      line1: 'ChainCacao · Plateforme de traçabilité café-cacao',
      line2Prefix: 'Contact partenariat · ',
      contact: 'contact@chaincacao.tg'
    },
    images: {
      galleryAlts: [
        'Cabosses de cacao sur l\'arbre',
        'Agriculteur africain',
        'Fèves de cacao',
        'Coopérative agricole Afrique'
      ],
      full1: 'Plantation de cacao Afrique de l\'Ouest',
      full2: 'Blockchain agriculture',
      testimony: 'Agriculteur Afrique',
      heroPoster: 'Poster vidéo cacao'
    }
  },
  en: {
    title: 'ChainCacao — Blockchain traceability for coffee-cocoa (EUDR)',
    toggleLabel: 'FR',
    toggleAria: 'Switch to French',
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      actors: 'Actors',
      eudr: 'EUDR',
      contact: 'Get Started'
    },
    hero: {
      eyebrow: 'Coffee-cocoa traceability platform · Togo',
      title: 'Blockchain <em>traceability</em><br>coffee-cocoa,<br>from farm to Europe',
      desc: 'Record every lot (GPS, weight, photos), transfer ownership between actors, verify history through QR code, and automatically generate EUDR certificates and cryptographic proof.',
      primary: 'Discover the solution',
      ghost: 'EUDR compliance'
    },
    stats: [
      'Togolese families depending on coffee and cocoa',
      'Share received by farmers from the final value',
      'Annual losses caused by weighing fraud',
      'Exports certified Fairtrade or Organic'
    ],
    gallery: {
      eyebrow: 'Field reality',
      title: 'The Togolese coffee-cocoa sector<br>in images',
      captions: [
        'Cocoa pods, Togo',
        'Farmer — Plateaux Region',
        'Cocoa beans — Drying',
        'Cooperative — Lot transfer'
      ]
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Without proof, traceability becomes<br>a promise… not a guarantee.',
      sub: 'The coffee-cocoa sector needs a reliable ledger to link each lot to its plot, track ownership transfers and produce verifiable EUDR proof — without adding friction in the field.',
      cvTitle: 'Journey of a cocoa sack — Today',
      cvSteps: [
        { title: 'Farmer — Harvest', body: 'Sells to a collector. No origin proof or verifiable weight.' },
        { title: '4 to 6 untracked intermediaries', body: 'Collectors, trackers, wholesalers — each resells without recording. Fraud goes undetected.' },
        { title: 'Exporter — Leaving Togo', body: 'Geographic proof for the EU is impossible to provide. EUDR blockage ahead.' },
        { title: 'European importer', body: 'Rejects non-compliant EUDR lots since 2025. The market is at risk for Togo.' }
      ],
      cards: [
        { title: 'Lack of usable evidence', body: 'Field data is scattered and impossible to audit. Less than 5% of exports are certified.' },
        { title: 'Traceability breaks', body: 'Transfers between actors lose the history. EUDR (2025) requires geographic traceability.' },
        { title: 'Fraud and non-compliance', body: 'Fraudulent weighing: $30–40M in annual losses. Without proof, EU market access is blocked.' },
        { title: 'Value lost for producers', body: '40,000 families affected. Farmers receive only 15–25% of the final value.' }
      ]
    },
    mission: {
      eyebrow: 'Our mission',
      title: 'Link every bean<br>to its story',
      sub: 'ChainCacao builds a trusted infrastructure that links each cocoa pod to a cryptographic proof anyone can verify, anywhere in the world.'
    },
    solution: {
      eyebrow: 'The reliable solution',
      title: 'From plot to European importer —<br><span class="text-g2">ChainCacao</span>: one value chain',
      sub: 'Every step becomes a consultable proof. From Togolese plots to the European importer, ChainCacao connects actors and secures EUDR 2025 compliance.',
      cards: [
        { title: 'Harvest registration', body: 'Create a lot from the plot with GPS, weight, product type and photos. Every harvest becomes a verifiable, immutable proof.' },
        { title: 'Transfer to the cooperative', body: 'Digital signature of ownership transfer with timestamp and supporting documents to eliminate fraud.' },
        { title: 'Importer check', body: 'Instant access to the full history through QR code or unique ID before purchase or customs clearance in Europe.' },
        { title: 'Lot consolidation', body: 'Create grouped lots while preserving traceability of source lots, ensuring EUDR compliance and certifications.' },
        { title: 'Certification access', body: 'Proven traceability unlocks Fairtrade, Organic and Rainforest Alliance certifications, increasing the value of Togolese cocoa.' },
        { title: 'Dedicated dashboards', body: 'An interface tailored to each actor — farmer, cooperative, processor, exporter — with real-time views of all lots.' }
      ]
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'ChainCacao in action',
      sub: 'Explore the concrete flows for each actor in the sector, from field registration to European verification.',
      tabs: ['Farmer', 'Cooperative', 'Exporter', 'Verifier'],
      agri: {
        screenTitle: 'Farmer interface — Registration',
        steps: [
          { title: 'Automatic GPS capture', body: 'The farmer opens the app from the plot. GPS coordinates are captured automatically, even offline.' },
          { title: 'Lot entry', body: 'Species, weight, date, optional photos. Interface designed for low-connectivity zones.' },
          { title: 'Blockchain registration', body: 'The lot is cryptographically signed and written to the blockchain. A unique QR code is generated.' },
          { title: 'Revenue tracking', body: 'The farmer can track transfers and value generated at each step in real time.' }
        ],
        fields: [
          { label: 'GPS position', value: 'GPS: 6.1722° N, 1.2347° E — Plateaux ✓' },
          { label: 'Species', value: 'Forastero cocoa' },
          { label: 'Weight (kg)', value: '148 kg' },
          { label: 'Date', value: 'April 16, 2026' }
        ],
        button: 'Register on the blockchain'
      },
      coop: {
        screenTitle: 'Cooperative interface — Lots in progress',
        steps: [
          { title: 'Lot reception', body: 'Scan the QR code to review the full history from the farm before acceptance.' },
          { title: 'Weight validation', body: 'Official weight is recorded and compared with the declaration. Any discrepancy is tracked.' },
          { title: 'Transfer signature', body: 'Ownership transfer is digitally signed by both parties, immutably time-stamped.' },
          { title: 'Dashboard', body: 'Overview of all received, active and shipped lots with non-compliance alerts.' }
        ],
        timeline: [
          { title: 'LOT-2026-0841 — 203 kg · Ama Tchakpé', body: 'Weight validated · 16/04/2026' },
          { title: 'LOT-2026-0842 — 148 kg pending · Kofi Mensah', body: 'Weight to confirm · 17/04/2026' },
          { title: 'LOT-2026-0839 — 310 kg shipped · Ameko Fiafé', body: 'Transfer signed → COTOCA · 15/04/2026' }
        ],
        button: 'Validate pending lots'
      },
      export: {
        screenTitle: 'Exporter interface — EXPORT-2026-04A',
        steps: [
          { title: 'Lot consolidation', body: 'Combine multiple lots while preserving individual traceability for EUDR.' },
          { title: 'Compliance check', body: 'Automatic checks: GPS outside deforested zones, all transfers signed.' },
          { title: 'EUDR certificate generation', body: 'Due diligence report generated with all required cryptographic evidence.' },
          { title: 'Delivery to the importer', body: 'The importer receives the QR code and EUDR report, with real-time verification possible.' }
        ],
        fields: [
          { label: 'Consolidated lots', value: '5 lots · 1,240 kg · Plateaux Region' },
          { label: 'EUDR compliance', value: '✓ 5/5 lots compliant — 100%' },
          { label: 'Cryptographic proof', value: '0xd4e2f8a1b3c7…9e5f ✓' }
        ],
        button: 'Download full EUDR report'
      },
      verif: {
        screenTitle: 'Verifier interface — LOT-2026-0841',
        steps: [
          { title: 'QR scan', body: 'Importer, certifier or regulator scans the QR code attached to the sack or container.' },
          { title: 'Instant history', body: 'The full history appears: every transfer, actor and timestamp since the farm.' },
          { title: 'Cryptographic verification', body: 'Each block is signature-verified — impossible to falsify even with database access.' },
          { title: 'Report export', body: 'A traceability PDF is generated and accepted by certification bodies.' }
        ],
        timeline: [
          { title: 'Harvest · Ama Tchakpé · 203 kg Criollo', body: 'GPS: 6.17°N 1.23°E · GPS proven · 15/04/2026' },
          { title: 'Coop. Kpalimé Nord · Weight: 203 kg ✓', body: 'Cryptographically signed transfer · 16/04/2026' },
          { title: 'Processor COTOCA · In progress', body: '18/04/2026' },
          { title: 'Exporter · Pending', body: '—' }
        ],
        banner: '✓ Full traceability verified — EUDR compliant'
      }
    },
    testimony: {
      text: 'With ChainCacao, I finally know what my cocoa is worth on the European market. For the first time, I have proof of what I harvested.',
      author: 'Kofi Mensah, farmer · Kpalimé, Plateaux Region'
    },
    eudr: {
      eyebrow: 'EUDR compliance',
      title: 'The European anti-deforestation<br>regulation · In force 2025',
      sub: 'Any cocoa imported into the EU must be accompanied by verifiable geographic proof. ChainCacao automatically generates that proof.',
      steps: [
        { title: 'Plot geolocation', body: 'Each lot is linked to precise GPS coordinates, recorded at harvest through the mobile app.' },
        { title: 'Full transfer history', body: 'All ownership changes are immutably recorded on the blockchain, from the farm to the exporter.' },
        { title: 'Cryptographic proofs', body: 'Each block is digitally signed — impossible to forge. Instant QR-based verification for any importer.' },
        { title: 'Automatic report generation', body: 'An EUDR due diligence report is generated from blockchain data, ready for European customs clearance.' }
      ],
      certTitle: 'EUDR Certificate — ChainCacao',
      status: 'Compliant',
      rows: [
        { key: 'Lot ID', value: 'LOT-2026-0841' },
        { key: 'Product', value: 'Criollo cocoa · 203 kg' },
        { key: 'GPS plot', value: '6.1722°N · 1.2347°E' },
        { key: 'Deforested zone?', value: 'Not confirmed' },
        { key: 'Farmer', value: 'Ama Tchakpé · Kpalimé' },
        { key: 'Tracked transfers', value: '4 / 4 signed' },
        { key: 'Blockchain', value: 'Polygon · Block #4823' },
        { key: 'Issue date', value: 'April 22, 2026' }
      ],
      hashLabel: 'Hash :'
    },
    actors: {
      eyebrow: 'Supply chain actors',
      title: 'A solution for every link<br>in the Togolese coffee-cocoa chain',
      cards: [
        { title: 'Farmers & Cooperatives', example: 'Ex: Koffi Mensah (Kpalimé) · CACAOKPALIME', body: 'Register lots at harvest with GPS, weight and photos via a mobile app optimized for low-connectivity areas. Receive the harvest certificate immediately.', tag: 'Producer' },
        { title: 'Cooperatives & Collectors', example: 'Ex: CACAOKPALIME · Plateaux Region', body: 'Collect lots, validate transfers and confirm weights. Generate immutable audit logs. Every transaction is time-stamped and digitally signed.', tag: 'Intermediary' },
        { title: 'Processors', example: 'Ex: COTOCA Processing · Lissé', body: 'Receive lots with a fully verifiable history. Add fermentation, drying and quality control steps. Cryptographic proof is preserved at every transformation.', tag: 'Processor' },
        { title: 'Exporters', example: 'Ex: TOGO EXPORT · Atakoramé Port', body: 'Consolidate grouped lots, automatically generate EUDR reports and certificates. Maintain traceability to the port. Facilitate verification by European importers.', tag: 'Exporter' },
        { title: 'Certification bodies', example: 'Fairtrade, Organic, Rainforest Alliance', body: 'Access the full verifiable chain to issue certifications. Simplified audits thanks to cryptographic proof. Certification times reduced by 40%.', tag: 'Certification' },
        { title: 'European importers', example: 'Ex: CHOCO HOLLAND BV', body: 'Verify a lot\'s full history in a single QR scan. Review EUDR, GPS and document proofs before purchase. Guaranteed anti-deforestation compliance before market release.', tag: 'Importer' }
      ]
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Transforming the lives of<br>40,000 Togolese families',
      cards: [
        { title: 'Economic impact', items: ['Reduced fraud on weighing', 'Higher share captured by farmers', 'Access to premium Fairtrade and Organic markets', 'Negotiation based on verifiable data'] },
        { title: 'Regulatory impact', items: ['Full compliance with EUDR 2025', 'Continued exports to the EU', 'Togo as a regional pioneer in West Africa', 'A model that can be replicated in neighboring countries'] },
        { title: 'Social impact', items: ['Better livelihoods for 40,000 families', 'Stronger cooperatives', 'Transparency and fairness across the chain', 'Applicable to cotton, cashew and soy'] }
      ]
    },
    blockchainImage: {
      eyebrow: 'Blockchain technology',
      title: 'An immutable ledger<br>without trusted third parties',
      sub: 'Blockchain ensures that every stored data point is permanent, verifiable and accessible to all actors in the chain — without a central intermediary.'
    },
    blockchain: {
      eyebrow: 'Why blockchain?',
      title: 'Technology serving<br>agricultural transparency',
      sub: 'Blockchain is the only technology that lets actors who do not trust each other share verifiable, tamper-proof data.',
      reasons: [
        { title: 'Guaranteed immutability', body: 'A recorded lot can never be altered retroactively. Each block is cryptographically linked to the previous one.' },
        { title: 'Total decentralization', body: 'No single actor controls the ledger. Everyone shares the same source of truth without depending on a third party.' },
        { title: 'Universal verifiability', body: 'Anyone can verify a lot\'s authenticity without privileged access — importer, journalist, regulator.' },
        { title: 'Field accessibility', body: 'Offline mode for low-connectivity areas. Deferred sync as soon as the network becomes available.' }
      ],
      blocks: [
        { title: 'Block #4821 — Harvest', hash: '0x3f8a…c2d1', data: '<strong>Farmer:</strong> Kofi Mensah · <strong>GPS:</strong> 6.17°N 1.23°E<br><strong>Species:</strong> Forastero · <strong>Weight:</strong> 148 kg · 16/04/2026', link: 'prev: 0x0000…0000' },
        { title: 'Block #4822 — Cooperative transfer', hash: '0x9e1b…a7f4', data: '<strong>Receiver:</strong> Coop. Kpalimé Nord<br><strong>Weight confirmed:</strong> 148 kg · Signed ✓', link: 'prev: 0x3f8a…c2d1 ✓' },
        { title: 'Block #4823 — Processor', hash: '0x2c5d…e8b3', data: '<strong>COTOCA</strong> · Under processing<br><span class="bc-note-immutable">Immutable data — modification impossible</span>', link: 'prev: 0x9e1b…a7f4 ✓' }
      ]
    },
    values: {
      eyebrow: 'Our values',
      title: 'Protect forests<br>and biodiversity',
      sub: 'Every verified traceability record ensures cocoa comes from legal land, without deforestation or exploitation.',
      items: [
        { title: 'Environmental sustainability', body: 'Each traced lot guarantees no deforestation. GPS proofs and verifiable photos are included.' },
        { title: 'Economic justice', body: 'The 40,000 Togolese families receive a fairer share by removing fraudulent intermediaries.' },
        { title: 'Total transparency', body: 'From plot to importer: everyone sees the full story. No secrecy, no possible fraud.' },
        { title: 'Accessible innovation', body: 'Simplified blockchain technology for low-connectivity areas. Offline mobile application.' }
      ]
    },
    cta: {
      title: 'Ready to transform<br>your coffee-cocoa?',
      sub: 'Join hundreds of producers and buyers already using ChainCacao to secure traceability, speed up verification and simplify EUDR compliance.',
      primary: 'Start now',
      ghost: 'Request a demo',
      odds: ['+240 satisfied actors', 'SDG 1 — No poverty', 'SDG 8 — Decent work', 'SDG 12 — Responsible consumption']
    },
    footer: {
      line1: 'ChainCacao · Coffee-cocoa traceability platform',
      line2Prefix: 'Partnership contact · ',
      contact: 'contact@chaincacao.tg'
    },
    images: {
      galleryAlts: [
        'Cocoa pods on the tree',
        'African farmer',
        'Cocoa beans',
        'African agricultural cooperative'
      ],
      full1: 'West African cocoa plantation',
      full2: 'Blockchain agriculture',
      testimony: 'African farmer',
      heroPoster: 'Cocoa video poster'
    }
  }
};

const nav = document.getElementById('nav');
const toggleButton = document.querySelector('[data-lang-toggle]');
let currentLanguage = 'fr';

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function setHTML(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setTexts(selector, values, root = document) {
  root.querySelectorAll(selector).forEach((element, index) => {
    element.textContent = values[index] ?? values[values.length - 1] ?? '';
  });
}

function setCards(root, selector, items, renderer) {
  root.querySelectorAll(selector).forEach((card, index) => {
    const data = items[index];
    if (data) renderer(card, data, index);
  });
}

function applyLanguage(language) {
  const t = translations[language];
  if (!t) return;

  document.documentElement.lang = language;
  document.title = t.title;

  if (toggleButton) {
    toggleButton.textContent = t.toggleLabel;
    toggleButton.setAttribute('aria-label', t.toggleAria);
    toggleButton.setAttribute('aria-pressed', language === 'en' ? 'true' : 'false');
  }

  setText('nav a[href="#problem"]', t.nav.problem, nav);
  setText('nav a[href="#solution"]', t.nav.solution, nav);
  setText('nav a[href="#actors"]', t.nav.actors, nav);
  setText('nav a[href="#eudr"]', t.nav.eudr, nav);
  setText('nav a[href="#contact"]', t.nav.contact, nav);

  setText('.hero-eyebrow span', t.hero.eyebrow);
  setHTML('.hero h1', t.hero.title);
  setText('.hero-desc', t.hero.desc);
  setText('.hero-actions .btn-primary', t.hero.primary);
  setText('.hero-actions .btn-ghost', t.hero.ghost);

  setTexts('.stats-inner .sstat-desc', t.stats);

  setText('.section.section-no-bottom .s-eyebrow', t.gallery.eyebrow);
  setHTML('.section.section-no-bottom .s-title', t.gallery.title);
  setTexts('.gallery-strip .gallery-caption', t.gallery.captions);
  const galleryImages = document.querySelectorAll('.gallery-wrap img');
  galleryImages.forEach((image, index) => {
    image.alt = t.images.galleryAlts[index] ?? image.alt;
  });

  const problemSection = document.getElementById('problem');
  if (problemSection) {
    setText('.s-head .s-eyebrow', t.problem.eyebrow, problemSection);
    setHTML('.s-head .s-title', t.problem.title, problemSection);
    setText('.s-head .s-sub', t.problem.sub, problemSection);
    setText('.chain-visual .cv-title', t.problem.cvTitle, problemSection);
    setCards(problemSection, '.cv-step', t.problem.cvSteps, (card, data) => {
      setText('h5', data.title, card);
      setText('p', data.body, card);
    });
    setCards(problemSection, '.prob-card', t.problem.cards, (card, data) => {
      setText('h4', data.title, card);
      setText('p', data.body, card);
    });
  }

  const fullImageSections = document.querySelectorAll('.full-img-section');
  if (fullImageSections[0]) {
    setText('.s-eyebrow', t.mission.eyebrow, fullImageSections[0]);
    setHTML('.s-title', t.mission.title, fullImageSections[0]);
    setText('.s-sub', t.mission.sub, fullImageSections[0]);
    const firstImage = fullImageSections[0].querySelector('img');
    if (firstImage) firstImage.alt = t.images.full1;
  }

  const solutionSection = document.getElementById('solution');
  if (solutionSection) {
    setText('.s-head .s-eyebrow', t.solution.eyebrow, solutionSection);
    setHTML('.s-head .s-title', t.solution.title, solutionSection);
    setText('.s-head .s-sub', t.solution.sub, solutionSection);
    setCards(solutionSection, '.sol-card', t.solution.cards, (card, data) => {
      setText('h3', data.title, card);
      setText('p', data.body, card);
    });
  }

  const useCasesSection = document.getElementById('use-cases');
  if (useCasesSection) {
    setText('.s-head .s-eyebrow', t.useCases.eyebrow, useCasesSection);
    setText('.s-head .s-title', t.useCases.title, useCasesSection);
    setText('.s-head .s-sub', t.useCases.sub, useCasesSection);
    setTexts('.uc-tab', t.useCases.tabs, useCasesSection);

    const useCasePanels = [
      { root: useCasesSection.querySelector('#uc-agri'), data: t.useCases.agri },
      { root: useCasesSection.querySelector('#uc-coop'), data: t.useCases.coop },
      { root: useCasesSection.querySelector('#uc-export'), data: t.useCases.export },
      { root: useCasesSection.querySelector('#uc-verif'), data: t.useCases.verif }
    ];

    useCasePanels.forEach(({ root, data }) => {
      if (!root) return;
      setText('.uc-screen-title', data.screenTitle, root);
      setCards(root, '.uc-step', data.steps, (step, item) => {
        setText('h4', item.title, step);
        setText('p', item.body, step);
      });

      if (data.fields) {
        const fields = root.querySelectorAll('.mock-field');
        fields.forEach((field, index) => {
          const item = data.fields[index];
          if (!item) return;
          setText('.mock-label', item.label, field);
          setHTML('.mock-input', item.value, field);
        });
      }

      if (data.timeline) {
        const items = root.querySelectorAll('.mt-item');
        items.forEach((item, index) => {
          const entry = data.timeline[index];
          if (!entry) return;
          setText('p', entry.title, item);
          setText('small', entry.body, item);
        });
      }

      if (data.button) {
        setText('.mock-btn', data.button, root);
      }

      if (data.banner) {
        setText('.verify-banner', data.banner, root);
      }
    });
  }

  setText('.testimony-inner .testimony-text', t.testimony.text);
  const testimonyAuthor = document.querySelector('.testimony-inner .testimony-author');
  if (testimonyAuthor) {
    testimonyAuthor.innerHTML = '<div class="author-dot"></div>' + t.testimony.author + '<div class="author-dot"></div>';
  }
  const testimonyImage = document.querySelector('.testimony-bg img');
  if (testimonyImage) testimonyImage.alt = t.images.testimony;

  const eudrSection = document.getElementById('eudr');
  if (eudrSection) {
    setText('.s-head .s-eyebrow', t.eudr.eyebrow, eudrSection);
    setHTML('.s-head .s-title', t.eudr.title, eudrSection);
    setText('.s-head .s-sub', t.eudr.sub, eudrSection);
    setCards(eudrSection, '.eudr-step', t.eudr.steps, (step, data) => {
      setText('h4', data.title, step);
      setText('p', data.body, step);
    });
    setHTML('.cert-title', '<i class="fa-solid fa-earth-europe"></i> ' + t.eudr.certTitle, eudrSection);
    setHTML('.cert-ok', '<i class="fa-solid fa-circle-check"></i> ' + t.eudr.status, eudrSection);
    const certRows = eudrSection.querySelectorAll('.cert-row');
    certRows.forEach((row, index) => {
      const item = t.eudr.rows[index];
      if (!item) return;
      setText('.cert-row-key', item.key, row);
      const value = row.querySelector('.cert-row-val, .cert-check');
      if (value) value.textContent = item.value;
    });
    setText('.cert-footer .cert-hash span', t.eudr.hashLabel, eudrSection);
  }

  const actorsSection = document.getElementById('actors');
  if (actorsSection) {
    setText('.s-head .s-eyebrow', t.actors.eyebrow, actorsSection);
    setHTML('.s-head .s-title', t.actors.title, actorsSection);
    setCards(actorsSection, '.actor-card', t.actors.cards, (card, data) => {
      setText('h3', data.title, card);
      setText('.actor-example', data.example, card);
      setText('p:last-of-type', data.body, card);
      setText('.actor-tag', data.tag, card);
    });
  }

  const benefitsSection = document.querySelector('.benefits');
  if (benefitsSection) {
    setText('.s-head .s-eyebrow', t.benefits.eyebrow, benefitsSection);
    setHTML('.s-head .s-title', t.benefits.title, benefitsSection);
    setCards(benefitsSection, '.ben-card', t.benefits.cards, (card, data) => {
      setText('h3', data.title, card);
      const items = card.querySelectorAll('.ben-list li');
      items.forEach((item, index) => {
        item.textContent = data.items[index] ?? item.textContent;
      });
    });
  }

  const secondFullImage = fullImageSections[1];
  if (secondFullImage) {
    setText('.s-eyebrow', t.blockchainImage.eyebrow, secondFullImage);
    setHTML('.s-title', t.blockchainImage.title, secondFullImage);
    setText('.s-sub', t.blockchainImage.sub, secondFullImage);
    const secondImage = secondFullImage.querySelector('img');
    if (secondImage) secondImage.alt = t.images.full2;
  }

  const blockchainSection = document.getElementById('blockchain');
  if (blockchainSection) {
    setText('.s-head .s-eyebrow', t.blockchain.eyebrow, blockchainSection);
    setHTML('.s-head .s-title', t.blockchain.title, blockchainSection);
    setText('.s-head .s-sub', t.blockchain.sub, blockchainSection);
    setCards(blockchainSection, '.bc-reason', t.blockchain.reasons, (card, data) => {
      setText('h4', data.title, card);
      setText('p', data.body, card);
    });
    setCards(blockchainSection, '.bc-block', t.blockchain.blocks, (card, data) => {
      setText('.bc-block-title', data.title, card);
      setText('.bc-hash', data.hash, card);
      setHTML('.bc-data', data.data, card);
      setText('.bc-link code', data.link, card);
    });
  }

  const valuesSection = document.getElementById('values');
  if (valuesSection) {
    setText('.s-head .s-eyebrow', t.values.eyebrow, valuesSection);
    setHTML('.s-head .s-title', t.values.title, valuesSection);
    setText('.s-head .s-sub', t.values.sub, valuesSection);
    setCards(valuesSection, '.value-item', t.values.items, (card, data) => {
      setText('h4', data.title, card);
      setText('p', data.body, card);
    });
  }

  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    setHTML('.cta-inner h2', t.cta.title, ctaSection);
    setText('.cta-inner p', t.cta.sub, ctaSection);
    setText('.cta-btns .btn-primary', t.cta.primary, ctaSection);
    setText('.cta-btns .btn-ghost', t.cta.ghost, ctaSection);
    setTexts('.odds .odd', t.cta.odds, ctaSection);
  }

  const footer = document.querySelector('footer');
  if (footer) {
    setText('.footer-right p:first-child', t.footer.line1, footer);
    setHTML('.footer-right p:last-child', `${t.footer.line2Prefix}<strong class="footer-contact">${t.footer.contact}</strong>`, footer);
  }
}

function initLanguage() {
  try {
    const storedLanguage = localStorage.getItem('chaincacao-lang');
    if (storedLanguage === 'en' || storedLanguage === 'fr') {
      currentLanguage = storedLanguage;
    }
  } catch (error) {
    currentLanguage = 'fr';
  }

  applyLanguage(currentLanguage);

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
      try {
        localStorage.setItem('chaincacao-lang', currentLanguage);
      } catch (error) {
        // ignore storage errors
      }
      applyLanguage(currentLanguage);
    });
  }
}

// Nav au scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Reveal au scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 70);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(element => obs.observe(element));

// Onglets cas d'usage
function showUC(id, btn) {
  document.querySelectorAll('.uc-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.uc-content').forEach(content => content.classList.remove('active'));
  document.getElementById('uc-' + id).classList.add('active');
  btn.classList.add('active');
}

initLanguage();