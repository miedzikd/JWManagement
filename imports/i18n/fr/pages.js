const pages = {
  login: {
    name: 'Se connecter',
    welcome: 'Bienvenue sur JW Management',
    text: 'Veuillez rentrer les informations de votre compte pour vous connecter.',
    forgot: 'Identifiant ou mot de passe oublié ?',
    create: 'Créer un compte',
    back: 'Retour à l’accueil'
  },
  forgotPassword: {
    name: 'Identifiant ou mot de passe oublié',
    text: 'Veuillez rentrer votre adresse E-mail. Nous vous enverrons ensuite un lien pour changer votre mot de passe. Vous serez automatiquement connecté sur votre compte et pourrez consulter votre identifiant.',
    button: 'Envoyer le lien de changment de mot de passe',
    back: 'Retour sur la page de connexion',
    noUserForThisEmail: 'Aucun compte ne possède cette adresse E-mail',
    multipleAccountsForThisEmail: 'Il y a plusieurs comptes avec cette adresse E-mail. Veuillez spécifier le nom d’utilisateur.',
    emailMissing: 'Il manque l’adresse E-mail',
    mailSent: 'Vous allez recevoir un E-mail dans les plus brefs délais. Cliquez sur le lien dans l’E-mail pour changer votre mot de passe.'
  },
  resetPassword: {
    name: 'Changer de mot de passe',
    text: 'Veuillez rentrer un nouveau mot de passe pour {{0}} {{1}}.',
    noUserFound: '<p>Ce lien n’est plus valide.</p><p>Veuillez demander un nouvel E-mail de changement de mot de passe.</p>',
    button: 'Changer de mot de passe',
    back: 'Retour sur la page de connexion'
  },
  profile: {
    name: 'Mon Profile',
    personalData: 'Mes données personnelles',
    changePicture: 'Modifier l’image…',
    options: {
      title: 'Paramètres',
      helpText: {
        mergeAccounts: 'Sur JW Management vous pouvez tout faire avec un seul compte. Vous devez juste vous souvenir d’un identifiant et d’un mot de passe. Si vous avez plusieurs compte, cliquez sur « Fusionner les comptes » et rentrer les informations de votre second comtpe. Cela fusionnera les droits de ce compte avec ceux du second compte.'
      }
    },
    availability: {
      title: 'Disponibilité',
      helpText: 'Veuillez cocher les horaires durant lesquels vous êtes disponible.',
      shortTermCalls: 'Je peux rapidement être contacté.',
      shortTermCallsAlways: 'Même durant les heures indisponibles.',
      notifyViaEmail: 'Je préfère être contacté(e) par E-mail.'
    },
    speaks: 'Parle',
    telefon: 'Téléphone',
    congregation: 'Assemblée',
    language: 'Langue du compte',
    languages: 'Langues étrangères',
    gender: 'Sexe',
    _gender: {
      brother: 'Frère',
      sister: 'Sœur'
    },
    publisher: 'Proclamateur/trice',
    privilegeOfService: 'Privilège de service',
    _privilegeOfService: {
      auxiliaryPioneer: 'Pionnier auxiliaire',
      pioneer: 'Pionnier permanent',
      specialPioneer: 'Pionnier spécial',
      circuitOverseer: 'Responsable de circonsceription',
      bethelite: 'Béthélite',
      fulltimeConstructionServant: 'Serviteur à la construction'
    },
    ministryPrivilege: 'Responsabilité dans l’assemblée',
    _ministryPrivilege: {
      ministerialServant: 'Assistant',
      elder: 'Ancien',
      coordinator: 'Coordinateur du collège des anciens',
      secretary: 'Secrétaire',
      serviceOverseer: 'Responsable de prédication'
    },
    placeholder: {
      telefon: '(e.g. +447712345678)',
      congregation: 'Assemblée',
      languages: 'Langues'
    },
    changePassword: 'Changer le mot de passe',
    deleteAccount: 'Supprimer le compte',
    mergeAccounts: 'Fusionner deux comptes',
    vacation: {
      title: 'Vacances',
      helpText: 'Veuillez ajouter les périodes durant lesquelles vous n’êtes pas disponible.'
    },
    until: 'Jusqu’à',
    addVacation: 'Ajoute des absences',
    deleteVacation: 'Supprimer ces absences',
    usernameTaken: 'Cet identifiant est déjà utilisé par quelqu’un d’autre. Veuillez en choisir un autre.'
  },
  wiki: {
    name: 'Centre d’information',
    nameShort: 'Info',
    files: 'Fichiers',
    addQuestion: 'Ajouter une question/ un titre',
    edit: 'Modifier',
    delete: 'Supprimer',
    noFiles: 'Pas de fichiers disponibles',
    addTab: 'Pas de fichiers disponibles',
    editQuestion: 'Modifier cette question',
    removeFaq: 'Supprimer cette question',
    editFaq: 'Modifier cette réponse',
    changeFaq: 'Enregistrer cette réponse.',
    cancelFaq: 'Annuler les modifications'
  },
  shifts: {
    name: 'Plages horaires',
    route: 'Itinéraire',
    addShift: 'Ajouter un nouvel horaire',
    addWeek: 'Ajouter une nouvelle semaine',
    requests: 'Demandes',
    openRequests: 'Ouvrir les demandes',
    automation: 'Automatique',
    template: 'Modèle',
    noVisibleShifts: 'Pas d’horaire pour cette étiquette cette semaine-là',
    start: 'Début',
    end: 'Fin',
    visibility: 'Visibilité:',
    helpText: {
      start: 'Ceci est la première semaine créée par le système.',
      end: 'Ceci est la dernière semaine créée par le système.',
      visibility: 'Définit le nombre de semaine d’avance qu’un proclamateur aura pour voir et faire des inscriptions. Entre la première semaine et la dernière semaine, le système va automatiquement créer les horaires nécessaires.'
    },
    weeks: 'semaines',
    sendWeek: 'Envoyer les confirmations pour tous les horaires de cette semaine par E-mail.',
    hideNames: 'Cacher tous les noms dans les horaires',
    showNames: 'Afficher tous les noms dans les horaires',
    editShifts: 'Modifier les horaires',
    prevWeek: 'Aller à la semaine précédente',
    nextWeek: 'Aller à la semaine prochaine',
    shownTag: 'Les horaires pour cette étiquette sont affichés',
    hiddenTag: 'Les horaires pour cette étiquette sont cachés',
    shift: {
      tag: 'Étiquette',
      schedule: 'Planning',
      teamleader: 'Responsable d\'équipe',
      teams: 'Équipes',
      noTeams: 'Équipes',
      participants: 'Participants',
      start: 'Début',
      end: 'Fin',
      requests: 'Demande',
      requests_plural: 'Demandes',
      requestsOf: 'Demande de',
      requestsOf_plural: 'Demandes de',
      teamleaders: 'RÉ',
      noPermission: 'Un responsable de projet ou un « responsable de planning » sont les seuls à pouvoir modifier ou ajouter des horaires.'
    }
  },
  day: {
    removeAll: 'Tout enlever'
  },
  reports: {
    export: 'Exporter en tant que CSV'
  },
  settings: {
    main: {
      title: 'Paramètres principaux',
      id: 'ID',
      name: {
        text: 'Nom',
        placeholder: 'Nom du projet',
        helpText: 'Dans beaucoup de situation le nom du projet est le nom de l’assemblée. Pour de plus gros projets qui incluent plusieurs assemblées, le nom peut être le nom de la ville dans laquelle le projet aura lieu. Si le but de ce projet n’est pas d’organiser les présentoirs mobiles, le nom du projet peut aussi correspondre à ce qui sera organisé par ce projet.'
      },
      email: {
        text: 'E-mail',
        placeholder: 'Adresse E-mail du projet',
        helpText: 'Dans les E-mails tels que les confirmations d’horaires et les modifications de responsables de projet, cette adresse sera choisie comme expéditeur, pour qu’au moment où le destinataire répond aux E-mails, la réponse sera envoyée dans la boîte de l’adresse choisie (si la boîte E-mail du destinataire fonctionne correctement). De plus, cette adresse recevra aussi par exemple les annulations de participants à cours termes.'
      },
      language: {
        text: 'Langue',
        helpText: 'Si le système informe les adresse ci-dessus de changements, les E-mails partiront dans la langue choisie'
      },
      deleteProject: 'Supprimer le projet'
    },
    tags: {
      title: 'Étiquette',
      helpText: '<p>Chaque horaire doit porter une étiquette. De plus chaque utilisateur peut être autoriser ou pas de voir les horaires en fonction des étiquette.</p><p>Les étiquette peuvent refléter plusieurs activités (ex. Présentoirs mobiles, stand d’exposition, le satique, etc.). Il peut être utile de diviser les horaires avec des étiquettes différentes, par exemple s’il y a plusieurs horaires au même moment ou s’il n’y a que certains proclamateurs qui sont formés dans un domaine précis.</p><p>Pour chaque étiquette, il peut y avoir des modèles de semaine qui ont déjà été définis. En utilisant l’option de créer les horaires automatiquement, le programme peut utiliser ces modèles de semaine. Cela fait gagner du temps au responsable de projet ou au « responsable de planning » lors de la planification.</p>',
      id: 'ID',
      name: 'Nom',
      img: {
        name: 'Image',
        helpText: 'Cette image sera montrée sur le tableau de bord sous “Horaires”. Ça expliquera le type de tâche exécutée dans les horaires portant cette étiquette. Si vous désirez ajouter une image personnalisée, veuillez nous envoyer un e-mail à support@jwmanagement.org décrivant votre idée.'
      },
      templates: 'Modèles',
      showTemplate: 'Modifier les horaires',
      editTemplate: 'Modifier le nom',
      removeTemplate: 'Supprimer',
      addTemplate: 'Choisir un nouveau modèle.',
      action: 'Action',
      none: 'Aucune étiquette n’a encore été ajouté',
      add: 'Ajouter une nouvelle étiquette',
      remove: 'Supprimer cete étiquette'
    },
    teams: {
      title: 'Équipes',
      helpText: {
        main: 'Pour chaque horaire, il doit y avoir au moins une équipe. Chaque équipe est attribuée à un itinéraire ou lieu. Un participant d’un horaire est toujours membre d’une de ces équipes.',
        picture: 'Les proclamateurs peuvent voir cette image. Et donc, elle devrait donner plus de détails pour les tâches dans cette équipe. Par exemple, vous pourriez créer un itinéraire pour cette équipe sur Google Maps ou sur OpenStreetMap (à choisir celui qui possède le plus de détails dans votre zone d’habitation) et charger une image de cela ici.',
        link: 'Ce lien sera connecté avec cette image. Si l’utilisateur clique dessus, il sera renvoyé à l’adresse de ce lien. Par exemple vous pourriez ajouter le lien de GoogleMaps ou d’OpenStreetMap ici.',
        description: 'Ici, vous pouvez éventuellement ajouter une description pour l’équipe. Par exemple, vous pourriez expliquer certaines particularités de cette équipe ou cet itinéraire.'
      },
      id: 'ID',
      name: 'Nom',
      icon: 'Icone',
      picture: 'Image',
      editPicture: 'Charger une image pour cette équipe',
      noPicture: 'Aucune image chargée',
      link: 'Lien',
      description: 'Description',
      action: 'Action',
      none: 'Aucune équipe n’a encore été ajoutée.',
      add: 'Ajouter une nouvelle équipe',
      remove: 'Ajouter une nouvelle équipe'
    },
    meetings: {
      title: 'Point de rencontre',
      helpText: {
        main: 'Chaque équipe peut avoir un point de rencontre. De ce fait, les équipes peuvent se rencontrer indépendamment les unes des autres. Cela peut être utile, par exemple lorsque l’itinéraire ou le lieu des équipes sont tellement éloignés qu’un point de rencontre commun prendrait trop de temps. Les points de rencontre sont définis par des coordonnées.',
        picture: 'Les proclamateurs peuvent voir cette image. Et donc, elle devrait donner plus de détails sur le point de rencontre. Par exemple, vous pourriez charger une image de la zone depuis Google Maps ou sur OpenStreetMap (à choisir celui qui possède le plus de détails dans votre zone d’habitation) ici.'
      },
      id: 'ID',
      name: 'Nom',
      picture: 'Image',
      editPicture: 'Charger une image pour ce point de rencontre',
      noPicture: 'Aucune image chargée',
      action: 'Action',
      none: 'Aucun points de rencontre n’ont encore été ajouté',
      add: 'Ajouter un nouveau point de rencontre',
      remove: 'Supprimer ce point de rencontre'
    }
  },
  firstLogin: {
    name: 'Bienvenue',
    text: '<p>Nous avons hâtes de vous accueillir!</p><p>Veuillez définir votre identifiant et votre mot de passe. Vous en aurez besoin pour vous connecter au système.</p><p>Après cela, vous pourrez commencer à utiliser JW Management</p><p>Amusez-vous!</p>',
    agreeTerms: 'J’accepte les  <a href="/en/terms" target="blank">conditions d’utilisation</a> et la <a href="/en/privacy" target="blank">politique de confidentialité</a>',
    button: 'C’est parti!',
    tokenError: 'Ce lien n’est plus valide. Veuillez demander un nouvel E-mail ou essayez de changer votre mot de passe.',
    tokenMissing: 'Lien invalide. Veuillez cliquer sur le lien de l’E-mail.',
    usernameExists: 'Cet identifiant est déjà utilisé. Veuillez en choisir un autre.',
    usernameMissing: 'Veuillez définir un identifiant.',
    agreeTermsMissing: 'Veuillez définir un identifiant.',
    buttonCreateAccount: 'J’ai besoin de créer un compte',
    buttonHaveAccount: 'J’ai déjà un compte'
  }
}

export default pages