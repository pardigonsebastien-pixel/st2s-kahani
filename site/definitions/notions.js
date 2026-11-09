/* Base des notions STSS — source unique des pages « Définitions » (Première et Terminale) et du livret.
   OUVERTS : chapitres commencés ; toutes leurs notions sont jouables sur le site.
   Pour ouvrir un chapitre : ajouter son numéro dans "ouverts" ("premiere" ou "terminale"), puis republier le site.
   « externe » : true = définition prise hors du cours (source indiquée), à relire.
   Les élèves de Terminale voient toujours toutes les notions de Première (acquis).
   « etapes » (boussole STSS) et « prio » (à mobiliser au bac) ne sont affichés qu'en Terminale. */
window.NOTIONS_STSS = {
 "maj": "2026-11-09",
 "ouverts": {
  "premiere": [
   "C1",
   "C2"
  ],
  "terminale": [
   "C0",
   "C1",
   "C2"
  ]
 },
 "etapes": {
  "1": "Situation problématique",
  "2": "Déterminants",
  "3": "Conséquences / enjeux",
  "4": "Réponse publique",
  "5": "Mise en œuvre",
  "6": "Effets / évaluation"
 },
 "chapitres": {
  "premiere": {
   "C1": "Santé, bien-être et cohésion sociale",
   "C2": "Mesurer la santé, le bien-être et la cohésion sociale",
   "C3": "Comment émerge un problème de santé ?",
   "C4": "Comment émerge un problème social ?",
   "C5": "La protection sociale",
   "C6": "Modes d'intervention en santé et en action sociale"
  },
  "terminale": {
   "C0": "Comprendre la logique STSS",
   "C1": "Du problème de santé à la politique de santé",
   "C2": "Élaboration, organisation et gouvernance de la politique de santé",
   "C3": "Du système de santé au système de soins",
   "C4": "Du problème social à la politique sociale",
   "C5": "De la politique sociale aux dispositifs et interventions",
   "C6": "Comprendre et analyser une démarche de projet"
  }
 },
 "notions": [
  {
   "id": "p-sante",
   "terme": "Santé",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Selon l'OMS (1946), la santé est un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d'infirmité.",
   "cles": [
    "bien-etre",
    "physique",
    "mental",
    "social",
    "absence de maladie|pas seulement|pas uniquement|ne se reduit pas"
   ],
   "source": "Cours de Première · C1-S01 (définition de l'OMS)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Après le cyclone Chido (Mayotte, décembre 2024), une personne sans blessure mais sans logement ni eau n'est pas en bonne santé au sens de l'OMS."
  },
  {
   "id": "p-sante-une-notion-relative",
   "terme": "Santé : une notion relative",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé est relative : elle varie d'une personne à l'autre, selon les époques et les contextes. Elle est évolutive (selon l'âge, les événements de vie), subjective (ressenti personnel) et contextuelle (environnement, conditions de vie).",
   "cles": [
    "varie|differe|change",
    "personne|individu",
    "epoque|contexte",
    "subjecti|ressenti"
   ],
   "source": "Cours de Première · synthèse du chapitre 1",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Être en forme ne veut pas dire la même chose pour un adolescent et pour une personne âgée."
  },
  {
   "id": "p-sante-percue",
   "terme": "Santé perçue",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé perçue correspond à la manière dont une personne évalue son propre état de santé : c'est son ressenti, indépendamment d'un diagnostic médical.",
   "cles": [
    "personne|individu",
    "evalue|ressenti|se sent|juge",
    "propre etat|sa sante|son etat"
   ],
   "source": "Cours de Première · C1-S06",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Dans les enquêtes, on demande : « Comment est votre état de santé en général ? »"
  },
  {
   "id": "p-sante-globale",
   "terme": "Santé globale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé globale considère une personne dans toutes les dimensions de sa santé : physique, mentale et sociale. Elle tient compte de son environnement et de son territoire. Ces dimensions sont interconnectées.",
   "cles": [
    "physique",
    "mental",
    "social",
    "environnement|territoire",
    "lie|interconnect|interagi"
   ],
   "source": "Cours de Première · C1-S04",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Après Chido à Mayotte, les dégâts sur le logement et l'eau ont touché la santé physique, mentale et sociale."
  },
  {
   "id": "p-sante-individuelle",
   "terme": "Santé individuelle",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé individuelle concerne l'état de santé d'une personne et ce qu'elle ressent.",
   "cles": [
    "personne|individu",
    "etat de sante",
    "ressen"
   ],
   "source": "Cours de Première · C1-S03 et C1-S06",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Une élève qui dort mal pendant la période des examens."
  },
  {
   "id": "p-sante-collective",
   "terme": "Santé collective",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé collective étudie la santé d'un groupe, d'une collectivité ou d'une population, observée à l'aide d'indicateurs. Elle montre que la santé n'est pas seulement une affaire individuelle : elle peut devenir un phénomène social.",
   "cles": [
    "groupe|collectivite|population",
    "indicateur|mesur|observ"
   ],
   "source": "Cours de Première · C1-S03 et C1-S05",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Le taux d'obésité des adolescents d'un département."
  },
  {
   "id": "p-sante-publique",
   "terme": "Santé publique",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La santé publique concerne la santé d'une population sur un territoire. Elle correspond à l'ensemble des actions collectives organisées pour préserver, améliorer ou restaurer la santé de cette population.",
   "cles": [
    "population",
    "territoire",
    "actions|action",
    "collecti|organise",
    "preserver|ameliorer|proteger|restaurer"
   ],
   "source": "Cours de Première · C1-S05",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Après le cyclone Chido : surveillance, accès aux soins, prévention et hygiène à Mayotte."
  },
  {
   "id": "p-norme-sociale",
   "terme": "Norme sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Une norme sociale est une règle de conduite partagée dans un groupe ou une société : elle indique comment on attend que les personnes se comportent. Elle peut être écrite ou non écrite.",
   "cles": [
    "regle",
    "partage|groupe|societe",
    "comportement|conduite|attendu"
   ],
   "source": "Cours de Première · C1-S09 et synthèse du chapitre",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Ne pas insulter son adversaire."
  },
  {
   "id": "p-valeur",
   "terme": "Valeur",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Une valeur est un principe ou un idéal considéré comme important et souhaitable par une personne, un groupe ou une société : le respect, la solidarité ou l'honnêteté, par exemple.",
   "cles": [
    "principe|ideal",
    "important|souhaitable|desirable"
   ],
   "source": "Cours de Première · C1-S09 et synthèse du chapitre",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Le respect d'autrui, la solidarité, l'égalité."
  },
  {
   "id": "p-socialisation",
   "terme": "Socialisation",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La socialisation est le processus par lequel une personne apprend et intériorise des normes, des valeurs et des façons de faire. La famille, l'école et les groupes de pairs sont des instances de socialisation.",
   "cles": [
    "processus",
    "apprend|apprentissage",
    "interioris",
    "norme",
    "valeur"
   ],
   "source": "Cours de Première · C1-S10",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Apprendre en famille à respecter les aînés."
  },
  {
   "id": "p-instance-de-socialisation",
   "terme": "Instance de socialisation",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Une instance de socialisation est un groupe ou un cadre social qui participe à la socialisation d'une personne : la famille, l'école, les groupes de pairs, le travail.",
   "cles": [
    "groupe|cadre",
    "participe|contribue|transmet",
    "socialisation"
   ],
   "source": "Cours de Première · C1-S10",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "La famille, l'école, le club de foot, les réseaux sociaux."
  },
  {
   "id": "p-socialisation-primaire-et-secondaire",
   "terme": "Socialisation primaire et secondaire",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La socialisation primaire se déroule pendant l'enfance et l'adolescence. La socialisation secondaire se poursuit à l'âge adulte et peut renforcer, compléter ou transformer les apprentissages antérieurs.",
   "cles": [
    "enfance|adolescence",
    "adulte",
    "renforcer|completer|transformer"
   ],
   "source": "Cours de Première · C1-S10",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Primaire : apprendre à saluer en famille. Secondaire : respecter les horaires au travail."
  },
  {
   "id": "p-societe",
   "terme": "Société",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Une société est un ensemble d'individus qui vivent sur un même territoire, entretiennent des relations et dépendent les uns des autres. Elle est composée de nombreux groupes sociaux.",
   "cles": [
    "ensemble|individus",
    "territoire",
    "relations",
    "dependent|interdependan"
   ],
   "source": "Cours de Première · C1-S11",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "La société mahoraise, composée de familles, de villages, d'associations…"
  },
  {
   "id": "p-groupe-social",
   "terme": "Groupe social",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Un groupe social est un ensemble de personnes qui ont des relations entre elles ou partagent une même position dans la société, qui ont le sentiment d'appartenir à ce groupe et qui partagent des normes et des valeurs.",
   "cles": [
    "ensemble de personnes|personnes",
    "relations|position",
    "appartenance|appartenir",
    "norme|valeur"
   ],
   "source": "Cours de Première · C1-S11",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Les élèves d'une classe, une équipe sportive, une famille."
  },
  {
   "id": "p-stratification-sociale",
   "terme": "Stratification sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La stratification sociale désigne la répartition de la population d'une société en groupes sociaux différents et hiérarchisés. Cette hiérarchie repose sur des inégalités de revenus, de diplôme, de prestige ou de pouvoir.",
   "cles": [
    "repartition|division",
    "groupes",
    "hierarchi",
    "inegalite|revenu|diplome|prestige|pouvoir"
   ],
   "source": "Cours de Première · C1-S11",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Les cadres vivent en moyenne plus longtemps que les ouvriers."
  },
  {
   "id": "p-mobilite-sociale",
   "terme": "Mobilité sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La mobilité sociale désigne le fait qu'une personne occupe une position sociale différente de celle de ses parents. Les positions ne sont pas figées, mais l'origine sociale pèse fortement sur la position occupée.",
   "cles": [
    "position",
    "parents|origine"
   ],
   "source": "Cours de Première · C1-S11",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Une fille d'ouvrier qui devient infirmière."
  },
  {
   "id": "p-fait-social",
   "terme": "Fait social",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Un fait social est une manière d'agir, de penser ou de ressentir, partagée par un groupe, qui existe avant les individus et qui s'impose à eux. Il est collectif, stable, extérieur aux individus et contraignant.",
   "cles": [
    "agir|penser|ressentir",
    "collectif|partage",
    "exterieur|existe avant",
    "contraignant|s'impose|simpose"
   ],
   "source": "Cours de Première · C1-S12",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "La forte présence des filles en ST2S et des garçons en STI2D."
  },
  {
   "id": "p-identite-sociale",
   "terme": "Identité sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "L'identité sociale est la part de « qui je suis » qui vient des groupes auxquels j'appartiens (famille, sexe, classe, amis…). Pour être reconnu et accepté, on a tendance à se conformer à ce que ces groupes attendent.",
   "cles": [
    "groupe",
    "appartien|appartenance",
    "qui je suis|identite|soi"
   ],
   "source": "Cours de Première · C1-S12",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Se définir comme « élève de ST2S », « Mahorais », « grand frère »."
  },
  {
   "id": "p-integration-sociale",
   "terme": "Intégration sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "L'intégration sociale est le processus par lequel un individu trouve une place reconnue dans la société. Elle repose sur des liens sociaux qui lui apportent une protection et une reconnaissance.",
   "cles": [
    "processus",
    "place",
    "societe",
    "liens",
    "protection|reconnaissance"
   ],
   "source": "Cours de Première · C1-S14",
   "externe": false,
   "etapes": [
    3
   ],
   "prio": true,
   "exemple": "Un jeune qui trouve un emploi et rejoint une association s'intègre."
  },
  {
   "id": "p-liens-sociaux",
   "terme": "Liens sociaux",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Les liens sociaux relient l'individu aux autres et à la société ; ils lui apportent une protection (pouvoir compter sur les autres) et une reconnaissance (compter pour les autres). Serge Paugam distingue quatre liens : filiation, participation élective, participation organique et citoyenneté.",
   "cles": [
    "relient|relation",
    "protection",
    "reconnaissance",
    "filiation|elective|organique|citoyennete"
   ],
   "source": "Cours de Première · C1-S14 (d'après S. Paugam)",
   "externe": false,
   "etapes": [
    2,
    3
   ],
   "prio": true,
   "exemple": "Lien de filiation : la famille ; lien de participation organique : le travail."
  },
  {
   "id": "p-cohesion-sociale",
   "terme": "Cohésion sociale",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "La cohésion sociale est la capacité d'une société à assurer le bien-être de tous ses membres, à réduire les inégalités et à éviter qu'elle se divise.",
   "cles": [
    "capacite",
    "societe",
    "bien-etre",
    "tous|membres",
    "inegalite|divise|ensemble"
   ],
   "source": "Cours de Première · C1-S15",
   "externe": false,
   "etapes": [
    3
   ],
   "prio": true,
   "exemple": "Le décrochage scolaire fragilise la cohésion sociale en augmentant le risque de chômage et d'exclusion des jeunes."
  },
  {
   "id": "p-bien-etre",
   "terme": "Bien-être",
   "niveau": "P",
   "chapitre": "C1",
   "definition": "Le bien-être fait partie de la santé. Il concerne les dimensions physique, mentale et sociale de la personne. Il est ressenti personnellement, mais il dépend aussi des conditions de vie et des relations sociales.",
   "cles": [
    "sante",
    "physique|mental|social",
    "ressenti",
    "conditions de vie|relations"
   ],
   "source": "Cours de Première · C1-S08",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Se sentir bien dans sa classe, avoir des amis, dormir correctement."
  },
  {
   "id": "p-indicateur",
   "terme": "Indicateur",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Un indicateur est une donnée chiffrée, construite et comparable, qui donne une information utile sur une situation de santé ou sociale. Il mesure un aspect précis de la réalité et présente toujours des limites.",
   "cles": [
    "donnee|chiffr",
    "construit|comparable",
    "mesur|information",
    "situation|phenomene"
   ],
   "source": "Cours de Première · C2-S01 (2026) et synthèse du chapitre 3 (2025)",
   "externe": false,
   "etapes": [
    1,
    6
   ],
   "prio": true,
   "exemple": "Espérance de vie, mortalité infantile, prévalence du diabète."
  },
  {
   "id": "p-taux-et-effectif",
   "terme": "Taux et effectif",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Un effectif est un nombre de personnes. Un taux rapporte ce nombre à la population concernée (pour 1 000, pour 100 000 ou en pourcentage) : il permet de comparer des populations de tailles différentes.",
   "cles": [
    "nombre",
    "rapport|population|pour 1 000|pourcentage",
    "compar"
   ],
   "source": "Cours de Première · C2-S01",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "1 200 cas (effectif) ne veulent pas dire la même chose dans une ville de 10 000 ou de 1 million d'habitants : on calcule un taux."
  },
  {
   "id": "p-mortalite-et-morbidite",
   "terme": "Mortalité et morbidité",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "La mortalité concerne les décès dans une population (espérance de vie, mortalité infantile). La morbidité concerne les maladies dans une population (par exemple la prévalence du diabète).",
   "cles": [
    "deces",
    "maladie"
   ],
   "source": "Cours de Première · C2-S01",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Mortalité : la mortalité infantile. Morbidité : la prévalence du diabète."
  },
  {
   "id": "p-indicateurs-multiples",
   "terme": "Indicateurs multiples",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Les indicateurs multiples sont plusieurs indicateurs distincts, utilisés ensemble pour analyser un même phénomène, sans être regroupés en un seul chiffre. Aucun indicateur ne suffit à lui seul.",
   "cles": [
    "plusieurs",
    "ensemble|croiser|croisant",
    "meme phenomene|situation"
   ],
   "source": "Cours de Première · synthèse du chapitre 3",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Pour décrire la santé à Mayotte, on croise espérance de vie, mortalité infantile et accès aux soins."
  },
  {
   "id": "p-indicateur-composite",
   "terme": "Indicateur composite",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Un indicateur composite est obtenu en combinant plusieurs indicateurs en un score unique, selon une méthode de calcul définie. Il donne une vision globale, mais simplifie la réalité.",
   "cles": [
    "combin|regroup",
    "plusieurs indicateurs",
    "score|chiffre unique|seul"
   ],
   "source": "Cours de Première · synthèse du chapitre 3",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "L'indice de développement humain (IDH)."
  },
  {
   "id": "p-disparites",
   "terme": "Disparités",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Les disparités sont des différences observées entre des populations ou des territoires, sans jugement de valeur.",
   "cles": [
    "difference",
    "population|territoire",
    "sans jugement|neutre|constat"
   ],
   "source": "Cours de Première · synthèse du chapitre 3",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "L'espérance de vie est plus faible à Mayotte qu'en métropole."
  },
  {
   "id": "p-inegalites",
   "terme": "Inégalités",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Les inégalités sont des différences entre groupes liées à des facteurs sociaux, économiques ou territoriaux, qui se traduisent par des avantages pour certains et des désavantages pour d'autres. Elles fragilisent la cohésion sociale.",
   "cles": [
    "difference",
    "groupe",
    "sociaux|economique|territoria",
    "avantage|desavantage|injust"
   ],
   "source": "Cours de Première · synthèses des chapitres 3 et 5",
   "externe": false,
   "etapes": [
    2,
    3
   ],
   "prio": true,
   "exemple": "Les enfants d'ouvriers obtiennent moins souvent un diplôme du supérieur que les enfants de cadres."
  },
  {
   "id": "p-gradient-social",
   "terme": "Gradient social",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Le gradient social désigne le fait que l'état de santé varie progressivement selon la position sociale : plus la position sociale est défavorisée, plus l'état de santé tend à être dégradé.",
   "cles": [
    "progressi|graduel",
    "position sociale|categorie sociale",
    "defavoris|degrad"
   ],
   "source": "Cours de Première · synthèse du chapitre 3",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Cadres > employés > ouvriers pour l'espérance de vie."
  },
  {
   "id": "p-epidemiologie",
   "terme": "Épidémiologie",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "L'épidémiologie est la discipline qui étudie l'état de santé des populations, la fréquence et la répartition des maladies et leurs facteurs, à partir d'indicateurs sanitaires.",
   "cles": [
    "discipline|science|etude",
    "population",
    "maladie|etat de sante|indicateur"
   ],
   "source": "Cours de Première · synthèse du chapitre 3",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Santé publique France étudie la répartition des cas de choléra à Mayotte en 2024."
  },
  {
   "id": "p-producteur-de-donnees",
   "terme": "Producteur de données",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Un producteur de données est un organisme qui collecte, produit et diffuse des chiffres (Insee, Santé publique France, DREES, Assurance maladie). Il les obtient par des recensements, des enquêtes, la surveillance des maladies ou des données administratives.",
   "cles": [
    "organisme",
    "collect|produi|diffus",
    "recensement|enquete|surveillance|administrati"
   ],
   "source": "Cours de Première · C2-S03 (2026)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "L'Insee (recensement), Santé publique France (surveillance), la DREES (enquêtes)."
  },
  {
   "id": "p-determinant-de-sante",
   "terme": "Déterminant de santé",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Un déterminant de santé est un facteur qui influence l'état de santé d'une personne ou d'une population, en l'améliorant ou en le dégradant.",
   "cles": [
    "facteur",
    "influence",
    "sante"
   ],
   "source": "Cours de Première · synthèse du chapitre 4 et Terminale C1",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Âge, alimentation, revenus, logement, pollution, accès aux soins."
  },
  {
   "id": "p-familles-de-determinants",
   "terme": "Familles de déterminants",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "On distingue des déterminants biologiques (âge, sexe, génétique), comportementaux (alimentation, tabac…), sociaux (revenu, diplôme, profession), environnementaux (pollution, qualité de l'eau, logement) et structurels (organisation de la société, lois, accès à l'eau).",
   "cles": [
    "biologique",
    "comportement",
    "sociaux|social",
    "environnement",
    "structur|economique|systeme de sante"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Pour le choléra à Mayotte : le manque d'accès à l'eau potable (environnemental), la pauvreté (social)."
  },
  {
   "id": "p-determinants-sociaux-et-environnementaux",
   "terme": "Déterminants sociaux et environnementaux",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Les déterminants sociaux sont les conditions sociales dans lesquelles vivent les personnes (revenu, niveau d'études, profession, logement). Les déterminants environnementaux concernent le milieu de vie (pollution, qualité de l'eau, conditions de travail, quartier).",
   "cles": [
    "conditions sociales|revenu|etudes|profession",
    "milieu|pollution|eau|environnement"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Un logement insalubre sans eau courante (environnemental) occupé par une famille sans revenu (social)."
  },
  {
   "id": "p-approche-multifactorielle",
   "terme": "Approche multifactorielle",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "L'approche multifactorielle explique un problème de santé en prenant en compte plusieurs déterminants qui interagissent.",
   "cles": [
    "plusieurs",
    "determinant|facteur",
    "interagi|ensemble"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "L'obésité s'explique à la fois par l'alimentation, l'activité physique, les revenus et l'offre alimentaire du quartier."
  },
  {
   "id": "p-inegalites-sociales-de-sante",
   "terme": "Inégalités sociales de santé",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Les inégalités sociales de santé sont des écarts d'état de santé ou de pratiques de santé entre groupes sociaux, liés à leur situation sociale, à leurs conditions de vie et de travail.",
   "cles": [
    "ecart|difference",
    "sante",
    "groupes sociaux|situation sociale",
    "conditions de vie|travail"
   ],
   "source": "Cours de Première · synthèse du chapitre 4 et Terminale C1",
   "externe": false,
   "etapes": [
    2,
    3
   ],
   "prio": true,
   "exemple": "Les cadres vivent en moyenne plus longtemps que les ouvriers."
  },
  {
   "id": "p-facteur-de-risque",
   "terme": "Facteur de risque",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Un facteur de risque est une caractéristique, une exposition ou un comportement qui augmente la probabilité qu'une personne développe une maladie ou subisse un problème de santé. Il ne la provoque pas à coup sûr.",
   "cles": [
    "augmente",
    "probabilite|risque|chance",
    "maladie|probleme de sante"
   ],
   "source": "D'après l'OMS (définition du facteur de risque)",
   "externe": true,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Le tabac est un facteur de risque du cancer du poumon."
  },
  {
   "id": "p-risque-sanitaire",
   "terme": "Risque sanitaire",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Un risque sanitaire est une situation dans laquelle une population est exposée à un danger pouvant provoquer une maladie ou nuire à sa santé.",
   "cles": [
    "population",
    "expos",
    "danger",
    "maladie|sante"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Pollution de l'air, eau contaminée, présence d'un virus."
  },
  {
   "id": "p-alerte-sanitaire",
   "terme": "Alerte sanitaire",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Une alerte sanitaire est le signalement, aux autorités sanitaires, d'un événement qui représente une menace pour la santé de la population et qui nécessite une réponse rapide.",
   "cles": [
    "signal",
    "autorites|pouvoirs publics|ARS",
    "menace|danger",
    "rapide|urgen|reponse"
   ],
   "source": "D'après Santé publique France (surveillance et alerte)",
   "externe": true,
   "etapes": [
    1,
    4
   ],
   "prio": false,
   "exemple": "Le signalement des premiers cas de choléra à Mayotte à l'ARS en 2024."
  },
  {
   "id": "p-crise-sanitaire",
   "terme": "Crise sanitaire",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Une crise sanitaire est une situation grave, caractérisée par une augmentation importante des cas de maladie, qui nécessite une intervention rapide et exceptionnelle des autorités sanitaires.",
   "cles": [
    "grave",
    "augmentation|cas",
    "rapide|exceptionnel|urgence"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Le choléra à Mayotte en 2024."
  },
  {
   "id": "p-emergence-d-un-probleme-de-sante",
   "terme": "Émergence d'un problème de santé",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "L'émergence d'un problème de santé est le processus par lequel un problème de santé est progressivement reconnu comme un enjeu collectif nécessitant l'intervention des pouvoirs publics.",
   "cles": [
    "processus",
    "reconnu",
    "collectif|enjeu",
    "pouvoirs publics"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "L'antibiorésistance est devenue un problème de santé publique quand les études ont montré son ampleur."
  },
  {
   "id": "p-objectivation",
   "terme": "Objectivation",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "L'objectivation consiste à produire des données (scientifiques, statistiques, études) pour démontrer l'existence d'un problème, le mesurer et montrer qu'il n'est pas un cas isolé.",
   "cles": [
    "donnees|chiffres|etudes",
    "demontrer|prouver|montrer",
    "existence|mesur"
   ],
   "source": "Cours de Première · synthèses des chapitres 4 et 5",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Les chiffres de Santé publique France sur les décès liés aux canicules."
  },
  {
   "id": "p-preoccupation",
   "terme": "Préoccupation",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Une préoccupation (de santé ou sociale) est une situation qui attire l'attention d'une partie de la société et suscite des inquiétudes ou des débats, avant d'être reconnue comme un problème à traiter.",
   "cles": [
    "attention|inquietude|debat",
    "societe|population",
    "avant|etape"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "L'inquiétude des parents face à l'usage des écrans par les enfants."
  },
  {
   "id": "p-probleme-de-sante",
   "terme": "Problème de santé",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Un problème de santé est une situation qui dégrade la santé d'une population ou l'expose à un risque. Il est identifié à partir de données : nombre de personnes concernées, gravité, évolution, inégalités.",
   "cles": [
    "degrade|risque",
    "population",
    "donnees|nombre|gravite|evolution"
   ],
   "source": "Cours de Terminale · C1-S06",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Le tabagisme : beaucoup de personnes concernées, une maladie grave, des inégalités."
  },
  {
   "id": "p-action-publique",
   "terme": "Action publique",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "L'action publique est l'ensemble des décisions et des interventions mises en place par les pouvoirs publics pour répondre à un problème collectif.",
   "cles": [
    "decisions|interventions",
    "pouvoirs publics|Etat",
    "probleme collectif|repondre"
   ],
   "source": "Cours de Première · synthèse du chapitre 4",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La vaccination contre le HPV proposée au collège à partir de 2023."
  },
  {
   "id": "p-conditions-de-vie",
   "terme": "Conditions de vie",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Les conditions de vie désignent la manière dont une personne vit concrètement au quotidien : ressources économiques, logement, situation professionnelle, accès aux services, relations sociales.",
   "cles": [
    "quotidien|concretement",
    "ressources|revenu",
    "logement",
    "emploi|travail|services|relations"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": true,
   "exemple": "Vivre dans un logement surpeuplé sans eau courante."
  },
  {
   "id": "p-precarite",
   "terme": "Précarité",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "La précarité est une situation d'instabilité liée à l'absence d'une ou de plusieurs sécurités (emploi stable, logement stable, revenus réguliers) qui permettent d'assurer ses conditions de vie et de faire face à l'avenir.",
   "cles": [
    "instabilit|incertain",
    "absence|manque",
    "securite|stable",
    "avenir"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    1,
    2
   ],
   "prio": true,
   "exemple": "Un emploi en contrat court et un logement provisoire."
  },
  {
   "id": "p-pauvrete",
   "terme": "Pauvreté",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "La pauvreté est un manque durable de ressources économiques et sociales qui empêche de satisfaire ses besoins essentiels (se nourrir, se loger, se soigner) et de vivre comme la majorité de la population.",
   "cles": [
    "manque|insuffisance",
    "durable",
    "ressources|revenu",
    "besoins essentiels|majorite"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Ne pas pouvoir payer son loyer, ses repas ou ses soins."
  },
  {
   "id": "p-exclusion-sociale-processus-d",
   "terme": "Exclusion sociale (processus d')",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "L'exclusion sociale est un processus progressif de rupture des liens sociaux qui relient un individu à la société (emploi, logement, relations). Elle résulte d'une accumulation de difficultés.",
   "cles": [
    "processus|progressi",
    "rupture",
    "liens",
    "accumulation|cumul"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    1,
    3
   ],
   "prio": true,
   "exemple": "Une personne perd son emploi, puis son logement, puis s'isole de sa famille."
  },
  {
   "id": "p-probleme-social",
   "terme": "Problème social",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Un problème social est une situation jugée indésirable par la société parce qu'elle va à l'encontre de ses valeurs et de ses normes. C'est une construction sociale : il existe quand la collectivité le reconnaît comme tel.",
   "cles": [
    "situation|condition",
    "indesirable|inacceptable",
    "valeurs|normes",
    "reconnu|construction"
   ],
   "source": "Cours de Première · synthèse du chapitre 5",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Le décrochage scolaire, le mal-logement, l'isolement des personnes âgées."
  },
  {
   "id": "p-risque-social",
   "terme": "Risque social",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Un risque social est un événement qui peut entraîner une baisse des revenus ou une augmentation des dépenses : maladie, vieillesse, chômage, accident du travail, maternité, charges familiales.",
   "cles": [
    "evenement",
    "baisse|perte",
    "revenu",
    "depense"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "La maladie, le chômage, la vieillesse, la maternité, les charges familiales."
  },
  {
   "id": "p-protection-sociale",
   "terme": "Protection sociale",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La protection sociale est l'ensemble des dispositifs qui protègent les individus contre les conséquences des risques sociaux.",
   "cles": [
    "ensemble|dispositifs",
    "proteg",
    "risques sociaux"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Les remboursements de soins, les retraites, les allocations chômage et familiales."
  },
  {
   "id": "p-droits-sociaux",
   "terme": "Droits sociaux",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Les droits sociaux permettent aux individus d'accéder à une protection sous forme de prestations financières, de services ou de prises en charge.",
   "cles": [
    "droit",
    "protection",
    "prestation|service|prise en charge"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Remboursement des soins, retraite, allocations, aide à domicile."
  },
  {
   "id": "p-prestation-sociale",
   "terme": "Prestation sociale",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Une prestation sociale est une aide, le plus souvent financière, versée à une personne ou à un ménage afin de soutenir ses conditions de vie et de compenser certaines difficultés. Elle vise à réduire les effets de la pauvreté, de la précarité ou de certaines charges importantes comme le logement ou la famille.",
   "cles": [
    "aide|versement",
    "argent|especes|nature|service",
    "risque social|proteg"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Le RSA, l'APL, les allocations familiales."
  },
  {
   "id": "p-acces-aux-droits",
   "terme": "Accès aux droits",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "L'accès aux droits est la possibilité, pour une personne, de connaître, de demander et d'obtenir effectivement les droits et les prestations auxquels elle peut prétendre. Son contraire est le non-recours.",
   "cles": [
    "connaitre|demander|obtenir",
    "droits|prestations",
    "effectivement|reellement|non-recours"
   ],
   "source": "D'après la DREES et la loi du 29 juillet 1998 de lutte contre les exclusions",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un travailleur social aide une famille à remplir son dossier d'APL."
  },
  {
   "id": "p-non-recours-aux-droits",
   "terme": "Non-recours aux droits",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Le non-recours est la situation d'une personne qui ne demande pas les aides ou les dispositifs auxquels elle pourrait prétendre (méconnaissance, complexité des démarches, peur d'être stigmatisée…).",
   "cles": [
    "ne demande pas|ne beneficie pas|ne percoit pas",
    "aide|droit|dispositif",
    "pourrait|droit a|pretendre"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    3,
    6
   ],
   "prio": true,
   "exemple": "Une personne qui ne demande pas le RSA parce qu'elle ne sait pas qu'elle y a droit."
  },
  {
   "id": "p-assurance-logique-assurantielle",
   "terme": "Assurance (logique assurantielle)",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La logique assurantielle repose sur les cotisations sociales versées par les salariés et les employeurs : on obtient des droits en contrepartie de ses cotisations (Assurance maladie, retraite, chômage). C'est le modèle bismarckien.",
   "cles": [
    "cotisation",
    "travail|salari|employeur",
    "contrepartie|droits"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Les indemnités chômage et les remboursements de soins financés par les cotisations."
  },
  {
   "id": "p-assistance-logique-assistancielle",
   "terme": "Assistance (logique assistancielle)",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La logique assistancielle repose sur la solidarité nationale et le financement par l'impôt : les aides sont attribuées selon les besoins, sans cotisation préalable (RSA, APL, AME). C'est le modèle beveridgien.",
   "cles": [
    "solidarite",
    "impot",
    "besoins|ressources",
    "sans cotisation|beveridg|RSA"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Le RSA ou l'AME, financés par l'impôt."
  },
  {
   "id": "p-principe-de-solidarite",
   "terme": "Principe de solidarité",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Selon le principe de solidarité, l'ensemble de la population contribue selon ses moyens pour aider les personnes en difficulté : chacun cotise selon ses moyens et reçoit selon ses besoins.",
   "cles": [
    "ensemble|tous",
    "contribu|cotise|finance",
    "moyens",
    "besoins|difficulte"
   ],
   "source": "Cours de Première · synthèse protection sociale et Terminale C2-S05",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Le financement de certaines aides par l'impôt relève d'une logique de solidarité."
  },
  {
   "id": "p-principe-d-universalite",
   "terme": "Principe d'universalité",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Selon le principe d'universalité, la protection sociale vise à couvrir l'ensemble de la population. Exemple : la PUMa permet à toute personne qui réside en France de façon stable et régulière d'être prise en charge pour ses frais de santé.",
   "cles": [
    "couvrir|proteger",
    "ensemble|toute la population|tous"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "La PUMa : toute personne qui réside en France de façon stable et régulière a ses frais de santé pris en charge."
  },
  {
   "id": "p-principe-de-contributivite",
   "terme": "Principe de contributivité",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Selon le principe de contributivité, les droits dépendent des cotisations versées au cours de l'activité professionnelle.",
   "cles": [
    "droits",
    "dependent",
    "cotisation"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Le montant de la retraite dépend des cotisations versées pendant la carrière."
  },
  {
   "id": "p-protection-individuelle-et-protection-collective",
   "terme": "Protection individuelle et protection collective",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La protection individuelle repose sur la prévoyance de chacun (épargne, assurance privée choisie). La protection collective est organisée par la société pour tous ses membres, par la mutualisation des risques (Sécurité sociale, aide sociale).",
   "cles": [
    "individ|chacun|prive|epargne",
    "collecti|societe|tous|mutualis"
   ],
   "source": "D'après le programme de Première STSS et la DREES",
   "externe": true,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Individuelle : une épargne personnelle. Collective : la Sécurité sociale."
  },
  {
   "id": "p-systeme-hybride",
   "terme": "Système hybride",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Le système français de protection sociale est hybride : il combine la logique assurantielle (cotisations) et la logique assistancielle (impôt, solidarité nationale).",
   "cles": [
    "combine|mélange|melange|associe",
    "assuran",
    "assistan"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Assurance maladie (cotisations) et RSA (impôt) coexistent en France."
  },
  {
   "id": "p-composantes-du-systeme-de-protection-sociale",
   "terme": "Composantes du système de protection sociale",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La protection sociale française comprend la Sécurité sociale (protection de base), l'assurance chômage, les régimes de retraite complémentaire, la protection complémentaire (mutuelles, assurances) et l'aide sociale (État, départements).",
   "cles": [
    "securite sociale",
    "complementaire|mutuelle",
    "aide sociale|assistance",
    "chomage|retraite"
   ],
   "source": "D'après la DREES (« La protection sociale en France et en Europe »)",
   "externe": true,
   "etapes": [
    4,
    5
   ],
   "prio": false,
   "exemple": "Sécurité sociale, assurance chômage, mutuelles, aide sociale du département."
  },
  {
   "id": "p-regimes-de-securite-sociale",
   "terme": "Régimes de Sécurité sociale",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La Sécurité sociale est organisée en régimes selon l'activité professionnelle : le régime général (salariés, et depuis 2018 les indépendants), le régime agricole (MSA) et des régimes spéciaux. Le régime général est divisé en branches : maladie, accidents du travail, vieillesse, famille, autonomie, recouvrement.",
   "cles": [
    "regime general",
    "agricole|MSA|speciaux",
    "branche|maladie|famille|vieillesse"
   ],
   "source": "D'après la Sécurité sociale (securite-sociale.fr)",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un salarié relève du régime général, un agriculteur de la MSA."
  },
  {
   "id": "p-aide-sociale",
   "terme": "Aide sociale",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "L'aide sociale est une aide accordée par la collectivité (État ou département) aux personnes dont les ressources sont insuffisantes, sans cotisation préalable, après examen de leur situation. Elle relève de la logique d'assistance.",
   "cles": [
    "collectivite|departement|Etat",
    "ressources insuffisantes|besoin",
    "sans cotisation|assistance"
   ],
   "source": "D'après le Code de l'action sociale et des familles et service-public.fr",
   "externe": true,
   "etapes": [
    4,
    5
   ],
   "prio": false,
   "exemple": "RSA, ASPA, allocation personnalisée d'autonomie."
  },
  {
   "id": "p-protection-complementaire",
   "terme": "Protection complémentaire",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "La protection complémentaire santé (mutuelles, institutions de prévoyance, assurances) rembourse tout ou partie de ce que l'Assurance maladie ne prend pas en charge, et réduit ainsi le reste à charge.",
   "cles": [
    "mutuelle|complementaire|assurance",
    "rembours",
    "reste a charge|ne prend pas en charge"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Une mutuelle rembourse une partie des lunettes non prise en charge par l'Assurance maladie."
  },
  {
   "id": "p-reste-a-charge",
   "terme": "Reste à charge",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Le reste à charge est la part des dépenses de santé qui reste payée par la personne après les remboursements de la Sécurité sociale et de la complémentaire.",
   "cles": [
    "part",
    "depense",
    "apres|rembours",
    "personne|patient|menage"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    3,
    6
   ],
   "prio": false,
   "exemple": "Ce qu'il reste à payer chez le dentiste après les remboursements."
  },
  {
   "id": "p-caractere-subsidiaire",
   "terme": "Caractère subsidiaire",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Un dispositif a un caractère subsidiaire lorsqu'il n'intervient qu'en dernier recours, quand la protection de base ou les autres solutions sont insuffisantes.",
   "cles": [
    "dernier recours|apres|en complement",
    "insuffisan|base"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "La complémentaire santé solidaire (CSS) pour les personnes modestes."
  },
  {
   "id": "p-complementarite",
   "terme": "Complémentarité",
   "niveau": "P",
   "chapitre": "C5",
   "definition": "Il y a complémentarité lorsque plusieurs dispositifs interviennent ensemble pour couvrir les besoins d'une personne.",
   "cles": [
    "plusieurs",
    "ensemble",
    "couvrir|besoins"
   ],
   "source": "Cours de Première · synthèse protection sociale",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "La Sécurité sociale et la mutuelle remboursent ensemble une consultation."
  },
  {
   "id": "p-prevention",
   "terme": "Prévention",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "La prévention regroupe les actions qui cherchent à éviter l'apparition d'un problème de santé (prévention primaire), à le repérer précocement (secondaire) ou à limiter ses conséquences et ses récidives (tertiaire).",
   "cles": [
    "eviter",
    "reperer|depist",
    "limiter|complication|consequence"
   ],
   "source": "Cours de Première · synthèse des modes d'intervention en santé",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Primaire : vaccination. Secondaire : dépistage. Tertiaire : rééducation."
  },
  {
   "id": "p-education-pour-la-sante",
   "terme": "Éducation pour la santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "L'éducation pour la santé transmet des connaissances et développe des compétences pour aider les personnes à comprendre les risques et à adopter des comportements favorables à leur santé.",
   "cles": [
    "connaissance|information",
    "competence|capacite",
    "comportement|choix"
   ],
   "source": "Cours de Première · synthèse des modes d'intervention en santé",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "Une séance sur les dangers du tabac au collège."
  },
  {
   "id": "p-promotion-de-la-sante",
   "terme": "Promotion de la santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "La promotion de la santé vise à donner aux populations les moyens d'améliorer leur santé en agissant sur les conditions de vie et les déterminants de santé (logement, environnement, accès aux droits…).",
   "cles": [
    "moyens|capacite",
    "ameliorer",
    "conditions de vie|determinant|environnement"
   ],
   "source": "Cours de Première · synthèse des modes d'intervention en santé (charte d'Ottawa, OMS 1986)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Aménager des pistes cyclables et des cantines équilibrées."
  },
  {
   "id": "p-mode-d-intervention-en-sante",
   "terme": "Mode d'intervention en santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Un mode d'intervention en santé est une manière d'agir pour répondre à une question de santé : prévention, éducation pour la santé, promotion de la santé, organisation du système de santé, modification réglementaire.",
   "cles": [
    "maniere|facon",
    "agir|repondre",
    "prevention|education|promotion|reglementa"
   ],
   "source": "Cours de Première · synthèse des modes d'intervention en santé",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Contre le tabac : prévention, éducation, hausse des prix, paquet neutre."
  },
  {
   "id": "p-veille-et-securite-sanitaire",
   "terme": "Veille et sécurité sanitaire",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "La veille sanitaire consiste à surveiller en permanence l'état de santé de la population pour repérer une menace et alerter les pouvoirs publics. La sécurité sanitaire regroupe les actions qui protègent la population contre ces risques (produits de santé, alimentation, environnement).",
   "cles": [
    "surveill",
    "permanen|continu",
    "alert|menace",
    "proteg|risque"
   ],
   "source": "D'après Santé publique France (missions) et le Code de la santé publique",
   "externe": true,
   "etapes": [
    1,
    4
   ],
   "prio": false,
   "exemple": "Santé publique France surveille les cas de chikungunya ; l'ANSM retire un médicament dangereux."
  },
  {
   "id": "p-restauration-de-la-sante",
   "terme": "Restauration de la santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "La restauration de la santé regroupe les soins qui visent à guérir une personne malade ou à rétablir au mieux sa santé : diagnostic, traitement, réadaptation.",
   "cles": [
    "soins",
    "guerir|retablir|soigner",
    "malade|traitement"
   ],
   "source": "D'après le programme de Première STSS",
   "externe": true,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Soigner un patient atteint du choléra à l'hôpital."
  },
  {
   "id": "p-droits-de-la-personne",
   "terme": "Droits de la personne",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Les droits de la personne malade ou accompagnée garantissent le respect de sa dignité, de sa vie privée, son droit à l'information et son consentement libre et éclairé aux soins (loi du 4 mars 2002).",
   "cles": [
    "dignite|vie privee",
    "information",
    "consentement",
    "loi|2002"
   ],
   "source": "D'après la loi du 4 mars 2002 relative aux droits des malades",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un patient doit être informé et donner son accord avant une opération."
  },
  {
   "id": "p-acteurs-en-sante",
   "terme": "Acteurs en santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Les acteurs en santé sont les personnes et organismes qui interviennent dans une action de santé : ils décident (État, ARS), financent (Assurance maladie), mettent en œuvre (professionnels, établissements, associations) ou participent (usagers).",
   "cles": [
    "personnes|organismes",
    "interviennent|agissent",
    "decid|financ|mett"
   ],
   "source": "Cours de Première · synthèse des modes d'intervention en santé",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'État, l'ARS, l'Assurance maladie, les médecins, les associations, les usagers."
  },
  {
   "id": "p-parcours-de-sante",
   "terme": "Parcours de santé",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Le parcours de santé est l'ensemble des étapes de la prise en charge d'une personne (prévention, soins, accompagnement médico-social et social), organisées et coordonnées entre les acteurs pour répondre à ses besoins au bon moment.",
   "cles": [
    "etapes|ensemble",
    "prevention|soins|accompagnement",
    "coordon|organis"
   ],
   "source": "D'après la Haute Autorité de santé et le ministère chargé de la Santé",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Prévention, consultation, hospitalisation, puis rééducation et aide à domicile."
  },
  {
   "id": "p-intervention-sociale",
   "terme": "Intervention sociale",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "L'intervention sociale regroupe les actions menées par des professionnels auprès de personnes ou de groupes en difficulté pour les aider à résoudre leurs difficultés, à accéder à leurs droits et à trouver ou retrouver leur place dans la société.",
   "cles": [
    "actions|professionnel",
    "personnes|groupes",
    "difficulte|droits|insertion|place"
   ],
   "source": "D'après le Haut Conseil du travail social",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "L'action d'une assistante sociale auprès d'une famille sans logement."
  },
  {
   "id": "p-diagnostic-social",
   "terme": "Diagnostic social",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Le diagnostic social est l'analyse de la situation d'une personne, d'un groupe ou d'un territoire (difficultés, ressources, besoins) qui permet de définir une intervention sociale adaptée.",
   "cles": [
    "analyse",
    "situation|besoins|ressources",
    "intervention|adapte|agir"
   ],
   "source": "D'après le Haut Conseil du travail social",
   "externe": true,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Analyser les difficultés et les ressources d'une famille avant de l'aider."
  },
  {
   "id": "p-accompagnement-social",
   "terme": "Accompagnement social",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "L'accompagnement social consiste à aider une personne à résoudre ses difficultés grâce à un suivi personnalisé. Il ne s'agit pas seulement de verser une aide financière, mais aussi d'aider la personne à accéder à ses droits, à se loger, à se former ou à faire avancer ses démarches.",
   "cles": [
    "suivi|accompagn",
    "duree|temps",
    "avec elle|participation",
    "autonomie|difficulte"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un travailleur social peut accompagner une personne pour ses démarches administratives ou son accès au logement."
  },
  {
   "id": "p-insertion-sociale",
   "terme": "Insertion sociale",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "L'insertion sociale correspond au processus par lequel une personne retrouve une place dans la société, notamment grâce à l'accès aux droits, à l'emploi, à la formation ou à l'autonomie. Elle vise à lutter contre l'exclusion durable.",
   "cles": [
    "processus",
    "place|societe",
    "logement|emploi|liens|droits"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    4,
    6
   ],
   "prio": false,
   "exemple": "Le RSA peut associer une aide financière et un accompagnement vers l'insertion sociale et professionnelle."
  },
  {
   "id": "p-developpement-social-local",
   "terme": "Développement social local",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "Le développement social local est une démarche collective qui mobilise les habitants et les acteurs d'un territoire (élus, associations, professionnels) pour améliorer ensemble les conditions de vie sur ce territoire.",
   "cles": [
    "collecti|ensemble",
    "habitants|acteurs",
    "territoire|local",
    "conditions de vie|ameliorer"
   ],
   "source": "D'après le Haut Conseil du travail social",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Habitants, élus et associations d'un quartier créent ensemble un jardin partagé."
  },
  {
   "id": "p-donnee-et-information",
   "terme": "Donnée et information",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Une donnée est un fait brut, observable et vérifiable (un nombre, une mesure), sans interprétation. Une information est une donnée traitée, organisée et interprétée, qui prend du sens pour un destinataire.",
   "cles": [
    "brut|fait",
    "sans interpretation|verifiable",
    "organis|interpret|traite",
    "sens"
   ],
   "source": "Cours de Première · méthodologie, chapitre 1",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Donnée : « 49 % ». Information : « près d'un jeune Mahorais sur deux a connu un épisode dépressif »."
  },
  {
   "id": "p-donnees-quantitatives-et-qualitatives",
   "terme": "Données quantitatives et qualitatives",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Les données quantitatives sont chiffrées : elles mesurent et comparent. Les données qualitatives sont descriptives : elles expliquent le pourquoi et le comment. Elles sont complémentaires.",
   "cles": [
    "chiffr|mesur",
    "descripti|expliqu|pourquoi",
    "complementaire"
   ],
   "source": "Cours de Première · méthodologie, chapitre 1",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Quantitative : le taux de fumeurs. Qualitative : un témoignage sur l'envie d'arrêter de fumer."
  },
  {
   "id": "p-source-d-information",
   "terme": "Source d'information",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Une source d'information est l'organisme ou la structure qui produit ou diffuse des données ou des informations.",
   "cles": [
    "organisme|structure|auteur",
    "produit|diffus"
   ],
   "source": "Cours de Première · méthodologie (2025) et C2-S03 (2026)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Santé publique France, l'Insee, la DREES, une ARS."
  },
  {
   "id": "p-fiabilite-de-la-source",
   "terme": "Fiabilité de la source",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Une source est fiable quand on sait qui l'a produite, avec quelle méthode et à quelle date, et que l'information a été vérifiée ou recoupée avec d'autres données.",
   "cles": [
    "qui|auteur|origine",
    "methode",
    "date",
    "verifi|recoup"
   ],
   "source": "Cours de Première · C2-S03 (2026)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Un chiffre de l'Insee daté et expliqué est plus fiable qu'un chiffre vu sur un réseau social."
  },
  {
   "id": "p-qualite-de-l-information",
   "terme": "Qualité de l'information",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "La qualité de l'information dépend de la méthode qui l'a produite, de sa fiabilité, de sa pertinence (elle répond à la question posée) et de son accessibilité. Un chiffre affirmé sans méthode n'est pas une preuve.",
   "cles": [
    "methode",
    "fiab",
    "pertinen",
    "preuve|accessib"
   ],
   "source": "Cours de Première · C2-S03 (2026) et méthodologie (2025)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Un sondage en ligne sans méthode ne prouve rien sur l'ensemble de la population."
  },
  {
   "id": "p-base-de-donnees",
   "terme": "Base de données",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Une base de données est un ensemble organisé de données, collectées, stockées et mises à disposition par un organisme, pour analyser une situation sanitaire ou sociale (Insee, Santé publique France, ARS, DREES).",
   "cles": [
    "ensemble",
    "organis|structur",
    "donnees",
    "disposition|organisme"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Les données de l'Insee sur la population de Mayotte."
  },
  {
   "id": "p-requete",
   "terme": "Requête",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Une requête est la question formulée à un moteur de recherche ou à une base de données à l'aide de mots-clés (et parfois d'opérateurs comme ET, OU, SAUF) pour trouver des documents pertinents.",
   "cles": [
    "mots-cles|mots cles",
    "moteur|base de donnees|recherche",
    "trouver|documents"
   ],
   "source": "D'après le programme de Première STSS (recherche documentaire)",
   "externe": true,
   "etapes": [],
   "prio": false,
   "exemple": "« vaccination HPV ET collège ET 2023 » dans un moteur de recherche."
  },
  {
   "id": "p-references",
   "terme": "Références",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Les références sont les informations qui permettent d'identifier et de retrouver un document utilisé : auteur ou organisme, titre, date, éditeur ou site.",
   "cles": [
    "identifier|retrouver",
    "auteur|organisme",
    "titre",
    "date"
   ],
   "source": "D'après le programme de Première STSS (recherche documentaire)",
   "externe": true,
   "etapes": [],
   "prio": false,
   "exemple": "Santé publique France, « Bulletin de santé publique Mayotte », 2024."
  },
  {
   "id": "p-corpus-documentaire",
   "terme": "Corpus documentaire",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Un corpus documentaire est l'ensemble structuré des documents (données, études, documents institutionnels) sélectionnés en lien avec l'objet d'étude.",
   "cles": [
    "ensemble",
    "documents",
    "selectionn|choisi",
    "objet d'etude|sujet"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Un ensemble de documents de l'Insee, de l'ARS et d'articles sur l'accès à l'eau à Mayotte."
  },
  {
   "id": "p-demarche-d-etude",
   "terme": "Démarche d'étude",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Une démarche d'étude est la suite organisée d'étapes qui permet de comprendre une situation sanitaire ou sociale : partir d'un fait, poser une problématique, formuler des hypothèses, recueillir et analyser des données, puis établir un diagnostic.",
   "cles": [
    "etapes|organise",
    "problematique",
    "hypothese",
    "donnees|analyse|diagnostic"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Partir de l'épidémie de choléra, poser une problématique, chercher des données, conclure."
  },
  {
   "id": "p-objet-d-etude",
   "terme": "Objet d'étude",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "L'objet d'étude est la question précise que l'on cherche à étudier : il délimite le sujet (quoi, qui, où, quand) et conduit à formuler une problématique.",
   "cles": [
    "question|sujet",
    "delimit|precis",
    "qui|ou|quand|population"
   ],
   "source": "Cours de Première · méthodologie, chapitre 4",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "L'accès à l'eau potable des familles d'un quartier de Mamoudzou en 2024."
  },
  {
   "id": "p-problematique",
   "terme": "Problématique",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "La problématique est la question centrale qui oriente l'analyse d'une étude.",
   "cles": [
    "question",
    "centrale|principale",
    "orient|guide"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Pourquoi le choléra a-t-il touché certains quartiers plus que d'autres ?"
  },
  {
   "id": "p-hypothese",
   "terme": "Hypothèse",
   "niveau": "P",
   "chapitre": "C3",
   "definition": "Une hypothèse est une supposition provisoire qui propose une explication possible à la situation étudiée. Elle n'est ni une opinion ni un jugement, et doit pouvoir être confirmée ou infirmée par les données.",
   "cles": [
    "supposition|explication possible",
    "provisoire|pas encore demontr",
    "verifi|confirm|infirm"
   ],
   "source": "Cours de Première · synthèse méthodologie et Terminale C1",
   "externe": false,
   "etapes": [
    2
   ],
   "prio": false,
   "exemple": "Le manque d'accès à l'eau courante explique en partie les cas de choléra."
  },
  {
   "id": "p-protocole-d-etude",
   "terme": "Protocole d'étude",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Le protocole d'étude est le plan qui précise comment l'étude va être menée : population étudiée, échantillon, méthode et outils de recueil, calendrier et traitement des données.",
   "cles": [
    "plan|organisation",
    "population|echantillon",
    "methode|outils",
    "recueil|traitement|calendrier"
   ],
   "source": "D'après le programme de Première STSS (démarche d'étude)",
   "externe": true,
   "etapes": [],
   "prio": false,
   "exemple": "Interroger 100 élèves du lycée par questionnaire en novembre, puis analyser les réponses."
  },
  {
   "id": "p-methode-et-outils-de-recueil-de-donnees",
   "terme": "Méthode et outils de recueil de données",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Pour recueillir ses propres données, on dispose de trois outils : le questionnaire (démarche quantitative, sur un échantillon), l'entretien (démarche qualitative, pour comprendre) et l'observation (quantitative ou qualitative).",
   "cles": [
    "questionnaire",
    "entretien",
    "observation"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Un questionnaire aux élèves, un entretien avec l'infirmière scolaire."
  },
  {
   "id": "p-echantillon",
   "terme": "Échantillon",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Un échantillon est une partie de la population étudiée, choisie pour être interrogée. Il doit être représentatif pour que les résultats puissent être étendus à l'ensemble de la population.",
   "cles": [
    "partie",
    "population",
    "representati"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "200 lycéens choisis pour représenter tous les lycéens de Mayotte."
  },
  {
   "id": "p-traitement-des-donnees",
   "terme": "Traitement des données",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "Le traitement des données consiste à trier, organiser, calculer (taux, évolutions) et représenter les données recueillies (tableaux, graphiques) pour pouvoir les analyser.",
   "cles": [
    "trier|organis",
    "calcul|taux",
    "tableau|graphique|represent",
    "analys"
   ],
   "source": "D'après le programme de Première STSS (démarche d'étude)",
   "externe": true,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "Calculer un taux puis le représenter dans un graphique."
  },
  {
   "id": "p-specificites-des-donnees-sanitaires-et-sociales",
   "terme": "Spécificités des données sanitaires et sociales",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Les données sanitaires et sociales concernent des personnes : elles sont souvent personnelles et sensibles (santé, situation sociale). Elles sont toujours situées dans un lieu, une période et une population, et doivent être protégées.",
   "cles": [
    "personnel|sensible|confidenti",
    "lieu|periode|population|contexte",
    "proteg"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Le dossier médical d'un patient est une donnée sensible."
  },
  {
   "id": "p-protection-de-l-information-secret-professionnel",
   "terme": "Protection de l'information (secret professionnel)",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Le secret professionnel est l'obligation légale, pour certains professionnels, de ne pas divulguer les informations personnelles apprises dans leur travail. Le secret partagé autorise un partage limité entre professionnels qui participent à la même prise en charge, dans l'intérêt de la personne.",
   "cles": [
    "obligation|interdiction",
    "divulguer|reveler",
    "professionnel",
    "partage|interet de la personne"
   ],
   "source": "Cours de Première · méthodologie, chapitre 2",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "L'infirmière scolaire ne raconte pas aux autres élèves pourquoi un élève est venu la voir."
  },
  {
   "id": "p-ethique",
   "terme": "Éthique",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "L'éthique est l'ensemble des principes qui guident l'action dans le respect des personnes : consentement, confidentialité, anonymat, respect de la dignité et refus de nuire.",
   "cles": [
    "principes|regles",
    "respect",
    "consentement|confidential|anonymat|dignite"
   ],
   "source": "D'après le programme de Première STSS",
   "externe": true,
   "etapes": [],
   "prio": false,
   "exemple": "Demander l'accord des personnes avant un entretien et garantir leur anonymat."
  },
  {
   "id": "p-diagnostic-d-une-etude",
   "terme": "Diagnostic (d'une étude)",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Le diagnostic est la phase finale de l'étude : il synthétise l'analyse, décrit les caractéristiques essentielles de la situation et peut conduire à des recommandations d'actions.",
   "cles": [
    "synthese|phase finale",
    "situation|caracteristiques",
    "recommandation|action"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": false,
   "exemple": "« Les jeunes du quartier manquent de lieux de loisirs encadrés. »"
  },
  {
   "id": "p-limites-d-une-etude",
   "terme": "Limites d'une étude",
   "niveau": "P",
   "chapitre": "C4",
   "definition": "Les limites d'une étude sont les éléments qui restreignent la portée des résultats : données incomplètes ou anciennes, population limitée, période, méthode.",
   "cles": [
    "restreign|limit|portee",
    "donnees|population|periode|methode"
   ],
   "source": "Cours de Première · synthèse méthodologie",
   "externe": false,
   "etapes": [],
   "prio": false,
   "exemple": "Une enquête faite sur une seule classe ne vaut pas pour tout le lycée."
  },
  {
   "id": "t-diagnostic",
   "terme": "Diagnostic",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un diagnostic est une analyse construite d'une situation, à partir d'indicateurs, pour formuler des constats, en expliquer les causes possibles et dégager des besoins et des priorités.",
   "cles": [
    "analyse",
    "indicateur|donnees",
    "constat",
    "besoin|priorite"
   ],
   "source": "Cours de Terminale · C0 et fiche de synthèse du C1",
   "externe": false,
   "etapes": [
    1,
    2,
    3
   ],
   "prio": true,
   "exemple": "Le diagnostic de la santé mentale des jeunes à Mayotte."
  },
  {
   "id": "t-constat-hypothese-jugement",
   "terme": "Constat, hypothèse, jugement",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un constat est ce que les données permettent d'affirmer. Une hypothèse est une explication possible, pas encore démontrée. Un jugement est un avis : il ne remplace jamais un constat.",
   "cles": [
    "donnees|affirmer",
    "explication possible|pas encore|pas demontr",
    "avis|opinion"
   ],
   "source": "Cours de Terminale · C1-S01 et fiche de synthèse du C1",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Constat : 49 % des 15-24 ans en épisode dépressif à Mayotte (2019). Hypothèse : l'isolement en est une cause. Jugement : « c'est grave »."
  },
  {
   "id": "t-besoin",
   "terme": "Besoin",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un besoin (de santé ou social) est l'écart entre une situation observée et une situation souhaitée. Il exprime une amélioration attendue pour la population, pas l'action choisie pour y répondre.",
   "cles": [
    "ecart",
    "observee|actuelle",
    "souhaitee",
    "pas l'action|amelioration"
   ],
   "source": "Cours de Terminale · C1-S06",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Besoin : que davantage de jeunes aient accès à une écoute psychologique (pas « créer un centre » : c'est l'action)."
  },
  {
   "id": "t-objectif",
   "terme": "Objectif",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un objectif est le résultat recherché par une action ou une politique. Il est précis, concerne une population et fixe souvent une échéance et une valeur chiffrée.",
   "cles": [
    "resultat",
    "recherche|atteindre",
    "precis|chiffr|echeance|population"
   ],
   "source": "Cours de Terminale · C0-S04 et C1-S06",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Réduire la part de fumeurs quotidiens d'ici 2027."
  },
  {
   "id": "t-critere-et-indicateur-d-evaluation",
   "terme": "Critère et indicateur d'évaluation",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Pour évaluer une action, on choisit un critère (la qualité que l'on veut juger : efficacité, accès, satisfaction…), puis un indicateur, c'est-à-dire une donnée chiffrée ou mesurable qui permet de vérifier ce critère.",
   "cles": [
    "critere",
    "qualite|juger|ce que l'on veut",
    "indicateur",
    "mesur|chiffr|verifier"
   ],
   "source": "Cours de Terminale · C0-S04",
   "externe": false,
   "etapes": [
    6
   ],
   "prio": true,
   "exemple": "Critère : la fréquentation du parking à vélos ; indicateur : nombre d'arceaux utilisés."
  },
  {
   "id": "t-evaluation",
   "terme": "Évaluation",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Évaluer, c'est mesurer l'écart entre les résultats obtenus et l'objectif, à l'aide d'indicateurs. L'évaluation produit un nouveau constat qui peut conduire à maintenir ou à ajuster l'action.",
   "cles": [
    "mesurer|comparer",
    "resultat",
    "objectif",
    "ajust|ameliorer|modifier"
   ],
   "source": "Cours de Terminale · C0-S04 et fiche de synthèse du C1",
   "externe": false,
   "etapes": [
    6
   ],
   "prio": true,
   "exemple": "Mesurer si la part de fumeurs a baissé après le Programme national de lutte contre le tabac."
  },
  {
   "id": "t-acteur",
   "terme": "Acteur",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un acteur est une personne ou un organisme qui intervient dans l'élaboration, la mise en œuvre ou l'évaluation d'une politique ou d'une action.",
   "cles": [
    "personne|organisme",
    "intervient|participe",
    "elaboration|mise en oeuvre|evaluation"
   ],
   "source": "Cours de Terminale · C1-S07",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "Qui mesure : Santé publique France ; qui décide : le ministère ; qui met en œuvre : l'ARS."
  },
  {
   "id": "t-territoire-de-sante",
   "terme": "Territoire de santé",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Un territoire de santé est un espace où l'on observe la santé d'une population, ses particularités et l'offre de soins disponible ; les situations diffèrent d'un territoire à l'autre.",
   "cles": [
    "espace|zone",
    "population",
    "offre|particularit"
   ],
   "source": "Cours de Terminale · C1-S02",
   "externe": false,
   "etapes": [
    1,
    5
   ],
   "prio": true,
   "exemple": "Mayotte : 49 % des 15-24 ans en épisode dépressif contre 39 % en métropole (2019)."
  },
  {
   "id": "t-priorite-sanitaire",
   "terme": "Priorité sanitaire",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Une priorité sanitaire est un problème de santé que les pouvoirs publics choisissent de traiter en priorité, car son importance justifie une action organisée.",
   "cles": [
    "probleme de sante",
    "pouvoirs publics",
    "choisi|en priorite",
    "importance|gravite"
   ],
   "source": "Cours de Terminale · C1-S06",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La lutte contre le tabac, priorité de la stratégie nationale de santé."
  },
  {
   "id": "t-population-prioritaire",
   "terme": "Population prioritaire",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Une population prioritaire est un groupe auquel une politique accorde une attention particulière, en raison de sa situation ou de ses besoins.",
   "cles": [
    "groupe|population",
    "attention particuliere|priorite",
    "situation|besoins|vulnerab"
   ],
   "source": "Cours de Terminale · C1-S06",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Pour le tabac : jeunes, personnes vulnérables, femmes enceintes."
  },
  {
   "id": "t-hygienisme",
   "terme": "Hygiénisme",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "L'hygiénisme est un courant médical et social de la fin du XIXe siècle qui s'appuie sur les connaissances scientifiques pour agir sur l'environnement et les conditions de vie afin de protéger la santé d'une population.",
   "cles": [
    "courant|mouvement",
    "XIXe|19e",
    "environnement|conditions de vie|hygiene"
   ],
   "source": "Cours de Terminale · C1-S05",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Au XIXe siècle, construire des égouts et amener l'eau potable dans les villes."
  },
  {
   "id": "t-politique-de-sante",
   "terme": "Politique de santé",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Une politique de santé est une réponse collective organisée à un problème de santé. À partir des besoins, les pouvoirs publics fixent des priorités et des objectifs, puis un programme d'actions.",
   "cles": [
    "reponse",
    "collective|organisee",
    "probleme de sante",
    "objectif|priorite|pouvoirs publics"
   ],
   "source": "Cours de Terminale · C1-S07",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La politique de lutte contre le tabac."
  },
  {
   "id": "t-objectif-de-sante",
   "terme": "Objectif de santé",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Un objectif de santé est le résultat précis à atteindre pour améliorer la situation de santé ; il précise la population visée et souvent une échéance chiffrée. Il ne se confond pas avec l'action (le moyen).",
   "cles": [
    "resultat",
    "ameliorer|sante",
    "population|echeance|chiffr"
   ],
   "source": "Cours de Terminale · C1-S06",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Moins de 16 % de fumeurs quotidiens chez les 18-75 ans d'ici 2027."
  },
  {
   "id": "t-strategie-nationale-de-sante",
   "terme": "Stratégie nationale de santé",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "La stratégie nationale de santé est fixée par le Gouvernement pour plusieurs années : elle définit les priorités et les objectifs de la politique de santé, après une consultation publique.",
   "cles": [
    "Gouvernement|Etat",
    "plusieurs annees|pluriannuel",
    "priorites|objectifs"
   ],
   "source": "Cours de Terminale · C1-S07",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La stratégie nationale de santé définie par le Gouvernement pour plusieurs années."
  },
  {
   "id": "t-programme",
   "terme": "Programme",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Un programme traduit les objectifs d'une politique en actions cohérentes, regroupées en axes.",
   "cles": [
    "objectif",
    "actions",
    "axes|regroup"
   ],
   "source": "Cours de Terminale · C1-S07",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "Le Programme national de lutte contre le tabac : 4 axes, 28 actions."
  },
  {
   "id": "t-democratie-sanitaire",
   "terme": "Démocratie sanitaire",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "La démocratie sanitaire est une démarche qui vise à associer les usagers, les professionnels et les décideurs publics à l'élaboration et à la mise en œuvre de la politique de santé.",
   "cles": [
    "associer|participer|concert",
    "usagers",
    "professionnels|decideurs",
    "politique de sante|elaboration"
   ],
   "source": "Cours de Terminale · C1-S07",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "La Conférence nationale de santé est consultée sur la stratégie nationale de santé."
  },
  {
   "id": "t-prevention-passive",
   "terme": "Prévention passive",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "La prévention passive agit en modifiant l'environnement ou les règles, sans reposer uniquement sur une décision individuelle.",
   "cles": [
    "environnement|regles",
    "sans|pas seulement",
    "individu"
   ],
   "source": "Cours de Terminale · C1-S03",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Interdire la publicité pour la malbouffe près des écoles, le Nutri-Score."
  },
  {
   "id": "t-mise-en-uvre",
   "terme": "Mise en œuvre",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Mettre en œuvre une politique, c'est coordonner les acteurs, financer, adapter les actions aux réalités locales et les suivre. Chaque action vise un déterminant.",
   "cles": [
    "coordonn|acteurs",
    "financ",
    "adapter|local",
    "suivre|determinant"
   ],
   "source": "Cours de Terminale · C1-S08",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'ARS organise la vaccination contre le HPV dans les collèges."
  },
  {
   "id": "t-echelon",
   "terme": "Échelon",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Un échelon est un niveau de décision et d'action d'une politique : international (OMS), européen (Union européenne), national (État, agences sanitaires), régional (ARS) et local (établissements, associations, communes).",
   "cles": [
    "niveau",
    "international|europeen",
    "national",
    "regional|local"
   ],
   "source": "Cours de Terminale · C2-S01 et C2-S03",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "Contre le tabac : l'OMS (international), la directive européenne, le ministère (national), l'ARS (régional)."
  },
  {
   "id": "t-acte-juridique-contraignant",
   "terme": "Acte juridique contraignant",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Un acte juridique contraignant impose des obligations à ceux à qui il s'adresse. Dans l'Union européenne, les traités, règlements, directives et décisions sont contraignants ; les recommandations et les avis ne le sont pas.",
   "cles": [
    "obligation|impose|oblige",
    "traite|reglement|directive|decision",
    "recommandation|avis"
   ],
   "source": "Cours de Terminale · C2-S01",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "La directive tabac de 2014 oblige les États à agir ; une recommandation de l'OMS ne les oblige pas."
  },
  {
   "id": "t-traite-europeen",
   "terme": "Traité européen",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Un traité européen est un accord contraignant conclu entre les États membres de l'Union européenne. Il fixe les objectifs de l'Union, les règles de fonctionnement de ses institutions et ses relations avec les États.",
   "cles": [
    "accord",
    "Etats membres",
    "contraignant",
    "objectifs|regles|fonctionnement"
   ],
   "source": "Cours de Terminale · C2-S01 (d'après le site de l'Union européenne)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Le traité de Lisbonne."
  },
  {
   "id": "t-reglement-europeen",
   "terme": "Règlement européen",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Un règlement européen est un acte contraignant qui s'applique automatiquement et de la même façon dans tous les pays de l'Union, sans devoir être transposé dans la loi nationale.",
   "cles": [
    "contraignant|obligatoire",
    "automatique|directement",
    "tous les pays|uniforme",
    "sans transposition|pas transpos"
   ],
   "source": "Cours de Terminale · C2-S01 (d'après le site de l'Union européenne)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Un règlement européen sur les médicaments s'applique tel quel dans tous les pays de l'Union."
  },
  {
   "id": "t-directive-europeenne",
   "terme": "Directive européenne",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Une directive européenne est un acte contraignant qui fixe une obligation de résultat, mais laisse chaque État libre des moyens : elle doit être transposée dans la loi nationale.",
   "cles": [
    "contraignant",
    "obligation de resultat|resultat",
    "moyens|libre",
    "transpos"
   ],
   "source": "Cours de Terminale · C2-S01 (d'après le site de l'Union européenne)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La directive tabac de 2014, transposée en France ; la France est allée plus loin avec le paquet neutre."
  },
  {
   "id": "t-agence-sanitaire",
   "terme": "Agence sanitaire",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Une agence sanitaire est un organisme public placé sous la tutelle du ministère de la Santé, chargé d'une mission d'expertise, de surveillance ou d'action.",
   "cles": [
    "organisme public",
    "tutelle|ministere",
    "expertise|surveillance|mission"
   ],
   "source": "Cours de Terminale · C2-S02 et C2-S03",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Santé publique France, HAS, ANSM, INCa."
  },
  {
   "id": "t-agence-regionale-de-sante-ars",
   "terme": "Agence régionale de santé (ARS)",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "L'ARS est l'organisme de l'État qui définit et met en œuvre la politique de santé dans la région : elle adapte les priorités nationales aux besoins de la population dans un projet régional de santé, et pilote la réponse en cas de crise.",
   "cles": [
    "Etat",
    "region",
    "met en oeuvre|pilote",
    "projet regional|besoins"
   ],
   "source": "Cours de Terminale · C2-S02",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'ARS de Mayotte a piloté la réponse à l'épidémie de choléra en 2024."
  },
  {
   "id": "t-mission",
   "terme": "Mission",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Une mission est la tâche ou la responsabilité confiée à un acteur : ce qu'il est chargé de faire.",
   "cles": [
    "tache|responsabilite|role",
    "confiee|charge",
    "acteur|organisme"
   ],
   "source": "Cours de Terminale · C2-S02",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Santé publique France a pour mission de surveiller la santé de la population."
  },
  {
   "id": "t-coordination",
   "terme": "Coordination",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "La coordination consiste à organiser l'action de plusieurs acteurs pour qu'elle soit cohérente et efficace.",
   "cles": [
    "organiser",
    "plusieurs acteurs|acteurs",
    "coherent|efficace|ensemble"
   ],
   "source": "Cours de Terminale · C2-S03 (trace dictée le 10/11)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'ARS coordonne l'hôpital, les médecins et les associations pendant l'épidémie de choléra."
  },
  {
   "id": "t-pilotage",
   "terme": "Pilotage",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Le pilotage consiste à fixer les objectifs, organiser l'action et en suivre les résultats. En région, c'est le rôle de l'ARS.",
   "cles": [
    "objectif",
    "organiser",
    "suivre|resultats"
   ],
   "source": "Cours de Terminale · C2-S03 (trace dictée le 10/11)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'ARS fixe les objectifs de la vaccination, organise les équipes et suit le nombre de personnes vaccinées."
  },
  {
   "id": "t-composantes-du-systeme-de-sante",
   "terme": "Composantes du système de santé",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Le système de santé comprend cinq composantes : les offreurs de soins (dont les structures de prévention), les producteurs de biens et services de santé, les institutions publiques, les financeurs et les bénéficiaires.",
   "cles": [
    "offreurs",
    "producteurs",
    "institutions",
    "financeurs",
    "beneficiaires"
   ],
   "source": "Cours de Terminale · C2-S03 (trace dictée le 10/11)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Offreurs : le CHM ; producteurs : un laboratoire ; institutions : l'ARS ; financeurs : l'Assurance maladie ; bénéficiaires : la population."
  },
  {
   "id": "t-systeme-de-sante",
   "terme": "Système de santé",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Le système de santé est l'ensemble des organisations, des institutions et des moyens qui agissent pour améliorer, maintenir ou rétablir la santé de la population. Ses règles sont fixées par l'État.",
   "cles": [
    "ensemble",
    "organisations|institutions|moyens",
    "ameliorer|maintenir|retablir",
    "sante de la population|population"
   ],
   "source": "Cours de Terminale · C2-S04 (d'après l'OMS)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Hôpitaux, médecins, agences sanitaires, Assurance maladie et patients."
  },
  {
   "id": "t-texte-legislatif-et-reglementaire",
   "terme": "Texte législatif et réglementaire",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Le Parlement vote la loi, texte législatif qui fixe les principes. Le Gouvernement prend les décrets et les arrêtés, textes réglementaires qui précisent comment appliquer la loi.",
   "cles": [
    "Parlement",
    "loi",
    "decret|arrete",
    "Gouvernement|ministre|appliquer"
   ],
   "source": "Cours de Terminale · C2-S04",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La loi de 2019 crée l'ARS de Mayotte ; un décret en précise l'organisation."
  },
  {
   "id": "t-comptes-de-la-sante",
   "terme": "Comptes de la santé",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Les comptes de la santé, établis chaque année par la DREES, mesurent les dépenses de santé et leurs financeurs. Ils comprennent la consommation de soins et de biens médicaux (CSBM) et la dépense courante de santé.",
   "cles": [
    "DREES",
    "chaque annee|annuel",
    "depenses",
    "financeurs|CSBM"
   ],
   "source": "Cours de Terminale · C2-S05",
   "externe": false,
   "etapes": [
    5,
    6
   ],
   "prio": false,
   "exemple": "CSBM : 255 milliards d'euros en 2024."
  },
  {
   "id": "t-consommation-de-soins-et-de-biens-medicaux-csbm",
   "terme": "Consommation de soins et de biens médicaux (CSBM)",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "La CSBM regroupe la valeur des soins et des biens médicaux consommés par la population : soins hospitaliers, soins de ville, médicaments, transports sanitaires, autres biens médicaux.",
   "cles": [
    "soins",
    "biens medicaux|medicaments",
    "consomm"
   ],
   "source": "Cours de Terminale · C2-S05",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Soins à l'hôpital, consultations, médicaments achetés en pharmacie."
  },
  {
   "id": "t-gros-risque-et-petit-risque",
   "terme": "Gros risque et petit risque",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Le « gros risque » désigne les dépenses lourdes (hospitalisation, affections de longue durée), financées surtout par la Sécurité sociale. Le « petit risque » désigne les dépenses courantes (optique, dentaire, consultations), davantage financées par les complémentaires et les ménages.",
   "cles": [
    "hospitalisation|longue duree|lourd",
    "Securite sociale",
    "optique|dentaire|courant",
    "complementaire|menage"
   ],
   "source": "Cours de Terminale · C2-S05",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Gros risque : une hospitalisation pour un cancer. Petit risque : des lunettes."
  },
  {
   "id": "t-regulation-des-depenses-de-sante",
   "terme": "Régulation des dépenses de santé",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Réguler les dépenses de santé, c'est maîtriser leur progression sans empêcher l'accès aux soins, en agissant sur l'offre, sur la demande, sur les comportements et sur l'organisation du système.",
   "cles": [
    "maitriser|limiter",
    "depenses",
    "offre|demande",
    "acces aux soins|comportement|organisation"
   ],
   "source": "Cours de Terminale · C2-S05",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Favoriser les médicaments génériques, encadrer l'installation des médecins."
  },
  {
   "id": "t-ondam",
   "terme": "ONDAM",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "L'ONDAM (objectif national des dépenses d'assurance maladie) est le montant à ne pas dépasser pour les dépenses d'assurance maladie, fixé chaque année par le Parlement dans la loi de financement de la Sécurité sociale.",
   "cles": [
    "objectif|plafond|ne pas depasser",
    "depenses d'assurance maladie|assurance maladie",
    "Parlement|loi de financement"
   ],
   "source": "Cours de Terminale · C2-S05",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Le Parlement vote chaque année l'ONDAM dans la loi de financement de la Sécurité sociale."
  },
  {
   "id": "t-gouvernance",
   "terme": "Gouvernance",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "La gouvernance du système de santé est la façon dont les décisions sont prises et mises en œuvre : qui décide, avec quelle expertise, comment les acteurs sont coordonnés et comment les décisions sont suivies et corrigées.",
   "cles": [
    "decision|decide",
    "acteurs",
    "coordin|organis",
    "expertise|suivi|corrig"
   ],
   "source": "Cours de Terminale · C2-S06",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Pendant l'épidémie de chikungunya : l'État décide, Santé publique France surveille, l'ARS coordonne."
  },
  {
   "id": "t-plan",
   "terme": "Plan",
   "niveau": "T",
   "chapitre": "C2",
   "definition": "Un plan est un document adopté par les pouvoirs publics qui organise, pour une période donnée, les actions à mener pour atteindre les objectifs d'une politique, avec les acteurs et les moyens prévus.",
   "cles": [
    "pouvoirs publics|Gouvernement",
    "periode|duree",
    "actions",
    "objectifs|moyens"
   ],
   "source": "D'après vie-publique.fr (plans de santé publique)",
   "externe": true,
   "etapes": [
    4
   ],
   "prio": false,
   "exemple": "Plan national canicule, Plan cancer."
  },
  {
   "id": "t-systeme-de-soins",
   "terme": "Système de soins",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "Le système de soins correspond à la partie du système de santé consacrée à la prise en charge médicale des patients. Il regroupe les professionnels de santé, les établissements et les actes de soins.",
   "cles": [
    "partie",
    "systeme de sante",
    "soins|soigner|malades",
    "professionnels|etablissements"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Les médecins, les infirmiers, les hôpitaux et les cliniques."
  },
  {
   "id": "t-offre-de-soins",
   "terme": "Offre de soins",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "L'offre de soins correspond à l'ensemble des services, professionnels et structures de santé disponibles sur un territoire. Elle permet de répondre aux besoins de santé de la population et conditionne l'accès aux soins.",
   "cles": [
    "ensemble",
    "professionnels|etablissements|services",
    "territoire|disponible",
    "besoins"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    2,
    5
   ],
   "prio": true,
   "exemple": "Le nombre de médecins par habitant, plus faible à Mayotte qu'en métropole."
  },
  {
   "id": "t-demande-de-sante",
   "terme": "Demande de santé",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "La demande de santé correspond à l'expression des besoins et attentes de la population en matière de soins, de prévention et de bien-être. Elle peut être influencée par les conditions sociales et les représentations de la santé.",
   "cles": [
    "expression|recours",
    "besoins",
    "population|personnes"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "L'augmentation des consultations médicales pendant une épidémie."
  },
  {
   "id": "t-parcours-de-soins-coordonnes",
   "terme": "Parcours de soins (coordonnés)",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "Le parcours de soins désigne l'organisation des différentes étapes de la prise en charge d'un patient dans le système de santé. Il vise à assurer la continuité et la coordination des soins.",
   "cles": [
    "medecin traitant",
    "priorite|d'abord",
    "oriente|specialiste",
    "rembours"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Consulter d'abord son médecin traitant, qui oriente ensuite vers un dermatologue."
  },
  {
   "id": "t-permanence-des-soins",
   "terme": "Permanence des soins",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "La permanence des soins correspond à l'organisation permettant de garantir l'accès aux soins à tout moment, notamment en dehors des horaires habituels. Elle participe à la continuité du système de santé.",
   "cles": [
    "acces|repondre",
    "nuit|week-end|feries|fermeture",
    "medecin|soins"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un médecin de garde le dimanche ou la nuit."
  },
  {
   "id": "t-systeme-de-veille-sanitaire",
   "terme": "Système de veille sanitaire",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "Le système de veille sanitaire correspond à l'ensemble des dispositifs de surveillance, d'analyse et d'alerte permettant de suivre l'état de santé de la population et de détecter les risques sanitaires.",
   "cles": [
    "ensemble|acteurs|dispositifs",
    "surveill",
    "detect|reperer",
    "alert"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    1,
    4
   ],
   "prio": true,
   "exemple": "Santé publique France surveille les épidémies (choléra, chikungunya) et alerte les autorités."
  },
  {
   "id": "t-politique-sociale",
   "terme": "Politique sociale",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "Les politiques sociales correspondent à l'ensemble des actions mises en place par les pouvoirs publics pour améliorer les conditions de vie de la population, réduire les inégalités sociales et lutter contre les situations de pauvreté ou d'exclusion.",
   "cles": [
    "pouvoirs publics|Etat",
    "decisions|actions",
    "problemes sociaux|risques",
    "cohesion|proteg"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "La politique de lutte contre la pauvreté, la politique du logement."
  },
  {
   "id": "t-besoins-sociaux",
   "terme": "Besoins sociaux",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "Les besoins sociaux correspondent à l'ensemble des besoins nécessaires au bien-être des individus et des groupes (se loger, se nourrir, se soigner, être éduqué, être intégré socialement). Ils sont identifiés à partir d'un diagnostic afin de mettre en place des réponses adaptées.",
   "cles": [
    "ecart",
    "situation",
    "souhaitable|attendue",
    "logement|revenu|emploi"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "exemple": "Identifier les besoins d'accompagnement des jeunes en décrochage scolaire sur un territoire."
  },
  {
   "id": "t-diagnostic-social-territorial",
   "terme": "Diagnostic social territorial",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "Le diagnostic social territorial analyse la situation sociale de la population d'un territoire (problèmes, ressources, besoins) pour guider les décisions des acteurs locaux. Les CCAS réalisent ainsi une analyse des besoins sociaux.",
   "cles": [
    "analyse",
    "territoire",
    "besoins|ressources",
    "decisions|acteurs"
   ],
   "source": "D'après le Code de l'action sociale et des familles (art. R123-1)",
   "externe": true,
   "etapes": [
    1,
    2
   ],
   "prio": false,
   "exemple": "L'analyse des besoins sociaux réalisée par le CCAS d'une commune."
  },
  {
   "id": "t-solidarite",
   "terme": "Solidarité",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "La solidarité est un principe selon lequel l'ensemble de la société contribue à aider les personnes confrontées à des difficultés. Elle justifie l'existence d'aides ou de dispositifs financés collectivement pour réduire les inégalités et protéger les plus vulnérables.",
   "cles": [
    "lien|unit|ensemble",
    "membres|societe",
    "contribu|aide|proteg",
    "moyens|besoin"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "exemple": "Le financement de certaines aides par l'impôt relève d'une logique de solidarité."
  },
  {
   "id": "t-decentralisation",
   "terme": "Décentralisation",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "La décentralisation est un processus par lequel l'État transfère certaines compétences (domaines d'action) aux collectivités territoriales. Cela permet d'adapter les politiques sociales aux réalités locales et de rapprocher les décisions des populations concernées.",
   "cles": [
    "transfert",
    "competences|pouvoirs",
    "Etat",
    "collectivites"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Le département est responsable du RSA et de la protection de l'enfance."
  },
  {
   "id": "t-collectivite-publique",
   "terme": "Collectivité publique",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "Une collectivité publique est une personne publique qui agit au nom de l'intérêt général : l'État et les collectivités territoriales (régions, départements, communes).",
   "cles": [
    "publique|interet general",
    "Etat",
    "region|departement|commune|collectivites territoriales"
   ],
   "source": "D'après vie-publique.fr",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "L'État, la région, le département, la commune."
  },
  {
   "id": "t-territoire-d-action-sociale",
   "terme": "Territoire d'action sociale",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "Le territoire d'action sociale désigne l'espace géographique sur lequel une action sociale est mise en place. Il permet d'adapter les réponses aux caractéristiques locales (population, besoins, ressources disponibles).",
   "cles": [
    "espace|zone",
    "action sociale",
    "commune|departement|chef de file"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    1,
    5
   ],
   "prio": false,
   "exemple": "Une politique de la ville ciblée sur un quartier en difficulté."
  },
  {
   "id": "t-usager",
   "terme": "Usager",
   "niveau": "T",
   "chapitre": "C4",
   "definition": "L'usager est la personne qui bénéficie d'un service ou d'un dispositif social. Il est de plus en plus considéré comme un acteur à part entière, pouvant participer aux décisions et à l'évaluation des actions qui le concernent.",
   "cles": [
    "personne",
    "utilise|beneficie",
    "service",
    "droits|participation"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5,
    6
   ],
   "prio": true,
   "exemple": "Un bénéficiaire du RSA accompagné dans son parcours d'insertion."
  },
  {
   "id": "t-action-sociale",
   "terme": "Action sociale",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "L'action sociale vise à promouvoir l'autonomie et la protection des personnes, la cohésion sociale, l'exercice de la citoyenneté, et à prévenir les exclusions et en corriger les effets. Elle est mise en œuvre par l'État, les collectivités, les organismes de sécurité sociale et les associations.",
   "cles": [
    "autonomie|protection",
    "cohesion|citoyennete",
    "exclusion|prevenir",
    "Etat|collectivites|associations"
   ],
   "source": "D'après le Code de l'action sociale et des familles (art. L116-1)",
   "externe": true,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "exemple": "Le département accompagne les familles en difficulté ; une association gère un foyer d'hébergement."
  },
  {
   "id": "t-dispositif",
   "terme": "Dispositif",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "Un dispositif est un ensemble organisé de moyens (acteurs, règles, financements, actions) mis en place pour répondre à un problème et atteindre des objectifs auprès d'un public.",
   "cles": [
    "ensemble|organise",
    "moyens|acteurs|actions",
    "objectif|repondre",
    "public"
   ],
   "source": "D'après le programme de Terminale STSS",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Le RSA ou l'APL sont des dispositifs d'action sociale."
  },
  {
   "id": "t-travail-social",
   "terme": "Travail social",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "Le travail social vise à permettre l'accès des personnes à l'ensemble des droits fondamentaux, à faciliter leur inclusion sociale et à exercer une pleine citoyenneté. Il se fonde sur la relation entre le professionnel et la personne accompagnée.",
   "cles": [
    "acces",
    "droits",
    "inclusion|insertion",
    "citoyennete|relation"
   ],
   "source": "D'après le Code de l'action sociale et des familles (art. D142-1-1, décret du 6 mai 2017)",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Une assistante sociale aide une personne à faire valoir ses droits."
  },
  {
   "id": "t-association",
   "terme": "Association",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "Une association est une organisation à but non lucratif (qui ne cherche pas à faire du profit) pouvant intervenir dans le domaine social, éducatif ou sanitaire. Elle peut mener des actions de terrain, accompagner des publics en difficulté et travailler en partenariat avec les pouvoirs publics.",
   "cles": [
    "groupement|personnes",
    "mettre en commun|commun",
    "but non lucratif|pas de benefices|sans but lucratif",
    "1901"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Une association de soutien scolaire ou de médiation sociale."
  },
  {
   "id": "t-partenariat",
   "terme": "Partenariat",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "Le partenariat désigne la coopération entre plusieurs acteurs qui travaillent ensemble autour d'un même problème. Cette coopération permet de coordonner les actions, de partager les compétences et d'apporter une réponse plus complète aux besoins des populations concernées.",
   "cles": [
    "cooperation|travailler ensemble",
    "plusieurs acteurs|acteurs",
    "commun",
    "objectif"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Une commune, une association et un collège agissent ensemble contre le décrochage scolaire."
  },
  {
   "id": "t-contractualisation",
   "terme": "Contractualisation",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "La contractualisation désigne le fait d'établir un accord formalisé (contrat) entre différents acteurs pour organiser une action commune. Elle permet de définir les engagements, les objectifs et les moyens mobilisés par chacun.",
   "cles": [
    "contrat|convention",
    "engagements|obligations",
    "reciproques|acteurs",
    "objectifs|moyens|financement"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale)",
   "externe": false,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Un contrat local de santé entre l'ARS et une commune."
  },
  {
   "id": "t-participation",
   "terme": "Participation",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "La participation consiste à associer les personnes concernées (usagers, habitants) aux décisions et aux actions qui les concernent, de la consultation à la coconstruction.",
   "cles": [
    "associer|impliquer",
    "personnes concernees|usagers|habitants",
    "decisions|actions"
   ],
   "source": "D'après le Haut Conseil du travail social",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": false,
   "exemple": "Des usagers siègent au conseil de la vie sociale d'un établissement."
  },
  {
   "id": "t-financement",
   "terme": "Financement",
   "niveau": "T",
   "chapitre": "C5",
   "definition": "Le financement désigne l'origine des ressources qui permettent à un dispositif de fonctionner : État, collectivités territoriales, Sécurité sociale, Union européenne, dons et mécénat.",
   "cles": [
    "ressources|argent|budget",
    "Etat|collectivites|Securite sociale|Union europeenne"
   ],
   "source": "D'après le programme de Terminale STSS",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Un dispositif financé par le département, la CAF et l'Union européenne."
  },
  {
   "id": "t-projet",
   "terme": "Projet",
   "niveau": "T",
   "chapitre": "C6",
   "definition": "Un projet est une démarche organisée qui part d'un diagnostic, fixe des objectifs, planifie des actions avec des acteurs et des moyens, puis évalue les résultats.",
   "cles": [
    "demarche",
    "diagnostic",
    "objectif",
    "actions|evaluation"
   ],
   "source": "Définition de travail (vocabulaire de la démarche de projet)",
   "externe": true,
   "etapes": [
    4,
    5,
    6
   ],
   "prio": true,
   "exemple": "Un projet de prévention du harcèlement au lycée."
  },
  {
   "id": "t-contrainte",
   "terme": "Contrainte",
   "niveau": "T",
   "chapitre": "C6",
   "definition": "Une contrainte est une limite qui s'impose à un projet et dont il faut tenir compte : budget, délais, règles juridiques, moyens humains, caractéristiques du public ou du territoire.",
   "cles": [
    "limite|obstacle",
    "s'impose|tenir compte",
    "budget|delai|regle|moyens"
   ],
   "source": "Définition de travail (vocabulaire de la démarche de projet)",
   "externe": true,
   "etapes": [
    5
   ],
   "prio": true,
   "exemple": "Un budget limité ou des délais courts pour mener une action."
  },
  {
   "id": "t-valorisation",
   "terme": "Valorisation",
   "niveau": "T",
   "chapitre": "C6",
   "definition": "La valorisation consiste à faire connaître un projet, ses actions et ses résultats auprès du public, des partenaires et des financeurs (communication, bilan, restitution).",
   "cles": [
    "faire connaitre|communiquer|diffuser",
    "resultats|actions",
    "public|partenaires|financeurs"
   ],
   "source": "Définition de travail (vocabulaire de la démarche de projet)",
   "externe": true,
   "etapes": [
    6
   ],
   "prio": false,
   "exemple": "Présenter les résultats du projet aux parents et au conseil d'administration."
  },
  {
   "id": "p-incidence",
   "terme": "Incidence",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "L'incidence correspond au nombre de nouveaux cas d'une maladie sur une période donnée, ce qui permet d'analyser l'apparition du phénomène.",
   "cles": [
    "nouveaux cas",
    "periode"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Le nombre de nouveaux cas de choléra chaque semaine à Mayotte en 2024."
  },
  {
   "id": "p-prevalence",
   "terme": "Prévalence",
   "niveau": "P",
   "chapitre": "C2",
   "definition": "La prévalence correspond au nombre total de personnes atteintes d'une maladie à un moment donné, ce qui permet d'en mesurer l'ampleur.",
   "cles": [
    "total|ensemble",
    "atteintes|malades",
    "moment donne|a un moment"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    1
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Le nombre total de personnes diabétiques dans la population."
  },
  {
   "id": "t-consequences-d-un-probleme",
   "terme": "Conséquences d'un problème",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Les conséquences sont les effets du problème : sanitaires (sur la santé des individus), sociales (sur la vie sociale et les conditions d'existence) et économiques (sur les dépenses ou les ressources).",
   "cles": [
    "effets",
    "sanitaire|sante",
    "sociale",
    "economique|cout"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    3
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Tabac : maladies chroniques (sanitaire), isolement (social), coût des soins (économique)."
  },
  {
   "id": "t-enjeux",
   "terme": "Enjeux",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Les enjeux correspondent à l'importance du problème pour la société, notamment en termes de coûts, de qualité de vie et de cohésion sociale.",
   "cles": [
    "importance",
    "societe",
    "cout|qualite de vie|cohesion"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    3
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Le coût du diabète pour l'Assurance maladie."
  },
  {
   "id": "t-pouvoirs-publics",
   "terme": "Pouvoirs publics",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "Les pouvoirs publics désignent l'ensemble des institutions qui exercent l'autorité publique et prennent des décisions pour organiser la société : l'État, les collectivités territoriales et certains organismes publics.",
   "cles": [
    "institutions",
    "autorite|decisions",
    "Etat",
    "collectivites"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "L'État, le département ou la commune peuvent intervenir face à la pauvreté."
  },
  {
   "id": "t-reponse-publique",
   "terme": "Réponse publique",
   "niveau": "T",
   "chapitre": "C1",
   "definition": "La réponse publique correspond à l'ensemble des décisions et des actions mises en place par les pouvoirs publics pour répondre à un problème sanitaire ou social. Elle peut prendre la forme d'une politique, d'un plan, d'un programme ou d'un dispositif.",
   "cles": [
    "decisions|actions",
    "pouvoirs publics",
    "probleme",
    "politique|plan|programme|dispositif"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    4
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Le Programme national de lutte contre le tabac."
  },
  {
   "id": "t-indicateurs-de-realisation-de-resultat-et-d-impact",
   "terme": "Indicateurs de réalisation, de résultat et d'impact",
   "niveau": "T",
   "chapitre": "C0",
   "definition": "Un indicateur de réalisation mesure ce qui a été mis en place (moyens, actions). Un indicateur de résultat mesure les effets immédiats sur le public concerné. Un indicateur d'impact mesure les effets à long terme sur la population.",
   "cles": [
    "realisation|mis en place",
    "resultat|immediat|court terme",
    "impact|long terme"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    6
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Vaccination HPV : nombre de séances organisées (réalisation), part d'élèves vaccinés (résultat), baisse des cancers du col de l'utérus (impact)."
  },
  {
   "id": "t-acces-aux-soins",
   "terme": "Accès aux soins",
   "niveau": "T",
   "chapitre": "C3",
   "definition": "L'accès aux soins correspond à la possibilité pour une personne d'obtenir des soins adaptés, en fonction de critères géographiques, financiers et sociaux. Il dépend de l'offre de soins et constitue un déterminant majeur de santé.",
   "cles": [
    "possibilite|obtenir",
    "soins",
    "geographique|financier|social",
    "offre"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    2,
    5
   ],
   "prio": true,
   "horsProgramme": true,
   "exemple": "Le manque de médecins à Mayotte limite l'accès aux soins."
  },
  {
   "id": "p-education-therapeutique",
   "terme": "Éducation thérapeutique",
   "niveau": "P",
   "chapitre": "C6",
   "definition": "L'éducation thérapeutique correspond à un ensemble d'actions destinées à aider les patients à comprendre leur maladie, à gérer leur traitement et à améliorer leur qualité de vie.",
   "cles": [
    "patients|malades",
    "comprendre|maladie",
    "traitement",
    "qualite de vie"
   ],
   "source": "Carnet de notions 2025-2026 (Terminale) — hors programme, utile",
   "externe": false,
   "etapes": [
    4,
    5
   ],
   "prio": false,
   "horsProgramme": true,
   "exemple": "Des ateliers pour apprendre aux patients diabétiques à surveiller leur glycémie."
  }
 ]
};
