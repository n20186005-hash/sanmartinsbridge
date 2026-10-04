export interface GuideSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface GuideLink {
  title: string;
  href: string;
  description: string;
}

export interface GuideContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  sections: GuideSection[];
  relatedLinks: GuideLink[];
}

export const queVerEnToledoGuide: GuideContent = {
  title: 'Qué ver en Toledo: 15 lugares imprescindibles + mapa',
  metaTitle: 'Qué ver en Toledo: 15 lugares imprescindibles + mapa',
  metaDescription:
    'Guía de qué ver en Toledo con 15 lugares imprescindibles, ruta a pie, miradores, monumentos y consejos para organizar tu visita.',
  intro:
    'Toledo se disfruta mejor caminando y enlazando monumentos, miradores y barrios históricos en una ruta lógica. Esta guía reúne los lugares imprescindibles para una primera visita y te ayuda a encajar el Puente de San Martín dentro de un recorrido realmente útil.',
  highlights: [
    'Ruta pensada para hacer a pie desde el casco histórico.',
    'Incluye monumentos, miradores, barrios y paradas fotográficas.',
    'Ideal para viajeros que quieren priorizar lo mejor de Toledo.',
  ],
  sections: [
    {
      title: 'Los 15 imprescindibles de Toledo',
      items: [
        'Catedral Primada de Toledo',
        'Alcázar de Toledo',
        'Plaza de Zocodover',
        'Monasterio de San Juan de los Reyes',
        'Sinagoga de Santa María la Blanca',
        'Iglesia de Santo Tomé y El Greco',
        'Judería de Toledo',
        'Puente de San Martín',
        'Puente de Alcántara',
        'Mirador del Valle',
        'Mezquita del Cristo de la Luz',
        'Puerta de Bisagra',
        'Convento de San Clemente y mazapán tradicional',
        'Paseo por las callejuelas del casco histórico',
        'Riberas del Tajo y vistas panorámicas',
      ],
    },
    {
      title: 'Cómo ordenar la visita',
      paragraphs: [
        'Si es tu primera vez en la ciudad, lo más práctico es empezar en Zocodover y avanzar hacia la Catedral y el Alcázar. Después puedes cruzar hacia la Judería para visitar San Juan de los Reyes, Santa María la Blanca y la zona del Greco.',
        'Desde allí, el Puente de San Martín funciona muy bien como cierre panorámico o como transición hacia un paseo más relajado junto al Tajo. Así combinas monumentos interiores con una vista abierta de Toledo.',
      ],
    },
    {
      title: 'Dónde encaja el Puente de San Martín',
      paragraphs: [
        'El Puente de San Martín no es solo un monumento aislado: conecta la visita cultural del casco histórico con una de las mejores postales de Toledo. Es especialmente recomendable si quieres fotografía, vistas del río y una pausa menos congestionada que el centro.',
      ],
      items: [
        'Mejor momento: última hora de la tarde.',
        'Tiempo recomendado: 20 a 40 minutos.',
        'Combínalo con San Juan de los Reyes y la Judería.',
      ],
    },
    {
      title: 'Consejos rápidos',
      items: [
        'Lleva calzado cómodo: el pavimento histórico cansa más de lo que parece.',
        'Reserva entradas si viajas en fines de semana o puentes.',
        'Si vas en verano, evita las horas centrales para los miradores.',
        'Deja un hueco para ver Toledo de día y al atardecer.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Cómo llegar al Puente de San Martín',
      href: '/como-llegar-puente-san-martin',
      description: 'Accesos a pie, desde la estación, en coche y desde Madrid.',
    },
    {
      title: 'Historia del Puente de San Martín',
      href: '/historia-puente-san-martin',
      description: 'Contexto medieval, reconstrucciones y valor patrimonial del puente.',
    },
    {
      title: 'Qué ver en Toledo en un día',
      href: '/que-ver-en-toledo-en-un-dia',
      description: 'Una ruta compacta para aprovechar solo una jornada en la ciudad.',
    },
    {
      title: 'Puente de San Martín',
      href: '/',
      description: 'Consejos, vistas y datos prácticos del puente medieval más fotogénico de Toledo.',
    },
  ],
};

export const queVerEnToledoEnUnDiaGuide: GuideContent = {
  title: 'Qué ver en Toledo en un día: ruta a pie + mapa',
  metaTitle: 'Qué ver en Toledo en un día: ruta a pie + mapa',
  metaDescription:
    'Ruta para ver Toledo en un día con recorrido a pie, tiempos recomendados, paradas clave y mapa mental para no perder tiempo.',
  intro:
    'Si solo tienes un día en Toledo, la clave está en concentrar monumentos y miradores sin cruzar la ciudad en zigzag. Esta ruta a pie enlaza el casco histórico, la Judería y el Puente de San Martín en un orden eficiente.',
  highlights: [
    'Pensada para visitantes de un día desde Madrid.',
    'Combina interiores monumentales con vistas panorámicas.',
    'Incluye paradas realistas para comer, descansar y hacer fotos.',
  ],
  sections: [
    {
      title: 'Ruta recomendada',
      items: [
        '08:30-09:00 Llegada a Toledo',
        '09:00-10:30 Zocodover, Alcázar y entorno',
        '10:30-12:30 Catedral Primada',
        '12:30-14:00 Judería y Santo Tomé',
        '14:00-15:30 Almuerzo en el centro histórico',
        '15:30-17:00 San Juan de los Reyes y Santa María la Blanca',
        '17:00-18:00 Paseo hacia el Puente de San Martín',
        '18:00-19:00 Fotos y vistas sobre el Tajo',
      ],
    },
    {
      title: 'Por qué terminar en el Puente de San Martín',
      paragraphs: [
        'Después de varias horas entre calles estrechas y monumentos interiores, el puente aporta aire, luz y una panorámica mucho más abierta. Además, la zona funciona especialmente bien para el final del día por la calidad de la luz y el contraste entre piedra, río y murallas.',
      ],
    },
    {
      title: 'Qué no intentar meter en una sola jornada',
      items: [
        'Demasiados museos pequeños además de la Catedral.',
        'Mirador del Valle y casco histórico a pie si vas con poco margen.',
        'Comidas largas en horas punta sin reserva previa.',
      ],
    },
    {
      title: 'Consejos logísticos',
      items: [
        'Compra billetes de tren temprano si vienes desde Madrid.',
        'Empieza pronto para visitar la Catedral con menos colas.',
        'Usa el Puente de San Martín como última gran parada panorámica.',
        'Si aún tienes energía, deja el Mirador del Valle para el atardecer.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Cómo llegar al Puente de San Martín',
      href: '/como-llegar-puente-san-martin',
      description: 'Todo lo necesario para encajar el puente en una ruta a pie o en coche.',
    },
    {
      title: 'Historia del Puente de San Martín',
      href: '/historia-puente-san-martin',
      description: 'Una lectura más profunda si quieres entender su papel en la Toledo medieval.',
    },
    {
      title: 'Qué ver en Toledo',
      href: '/que-ver-en-toledo',
      description: 'Lista más amplia de imprescindibles para una visita menos apretada.',
    },
    {
      title: 'Puente de San Martín',
      href: '/',
      description: 'Información práctica del puente, cómo llegar y mejores vistas.',
    },
  ],
};

export const comoLlegarPuenteSanMartinGuide: GuideContent = {
  title: 'Cómo llegar al Puente de San Martín: a pie, en coche y desde Madrid',
  metaTitle: 'Cómo llegar al Puente de San Martín: a pie, en coche y desde Madrid',
  metaDescription:
    'Guía para llegar al Puente de San Martín desde el casco histórico de Toledo, la estación, Madrid o en coche, con consejos de acceso y ruta.',
  intro:
    'Llegar al Puente de San Martín es bastante sencillo si ya estás visitando el casco histórico de Toledo, pero la mejor ruta cambia según vengas andando, en coche, desde la estación o en una excursión de un día desde Madrid. Esta guía te ayuda a elegir el acceso más cómodo y a evitar rodeos innecesarios.',
  highlights: [
    'Ideal para viajeros que quieren encajar el puente sin perder tiempo.',
    'Incluye opciones a pie, en coche y en transporte público.',
    'Pensada para conectarlo con Judería, San Juan de los Reyes y el centro histórico.',
  ],
  sections: [
    {
      title: 'Cómo llegar desde el casco histórico',
      paragraphs: [
        'Si ya estás en el centro de Toledo, la opción más natural es caminar desde la zona de San Juan de los Reyes y la Judería. El Puente de San Martín queda muy bien conectado con ese lado del casco antiguo y suele ser la forma más agradable de llegar.',
        'Esta ruta funciona especialmente bien al final del día porque permite cerrar la visita con vistas abiertas al Tajo y a las murallas, después de varias horas entre calles estrechas y monumentos interiores.',
      ],
      items: [
        'Punto de partida práctico: Monasterio de San Juan de los Reyes.',
        'Tiempo orientativo: entre 10 y 15 minutos a pie.',
        'Muy recomendable si quieres combinarlo con la Judería.',
      ],
    },
    {
      title: 'Cómo llegar desde la estación de Toledo',
      paragraphs: [
        'Desde la estación puedes llegar caminando, aunque no suele ser la opción más cómoda si vienes con poco tiempo o con calor. Lo más habitual es tomar un taxi, un autobús urbano o subir primero al centro histórico y dejar el puente para más tarde dentro de tu recorrido.',
      ],
      items: [
        'A pie: alrededor de 35 a 40 minutos según el ritmo y la ruta.',
        'En taxi: opción cómoda si quieres empezar por el puente.',
        'En bus: útil si primero vas al centro y después bajas caminando al puente.',
      ],
    },
    {
      title: 'Cómo llegar desde Madrid',
      paragraphs: [
        'La mayoría de viajeros llega desde Madrid en AVE o en coche. Si vienes en tren, lo más eficiente es entrar primero en el casco histórico y visitar el Puente de San Martín dentro de una ruta a pie por Toledo. Si vienes en coche, puedes intentar aparcar en zonas cercanas y acceder andando.',
      ],
      items: [
        'AVE Madrid-Toledo: unos 35 a 40 minutos de trayecto.',
        'En coche: aproximadamente 1 hora, según tráfico.',
        'Si solo vas un día, conviene integrar el puente en un itinerario más amplio.',
      ],
    },
    {
      title: 'Aparcamiento y acceso en coche',
      paragraphs: [
        'Si llegas en coche, conviene comprobar el acceso real según la fecha y la ocupación de la zona. En temporada alta o fines de semana, lo más sensato es aparcar con algo de margen y hacer el último tramo a pie.',
      ],
      items: [
        'Evita confiar en encontrar plaza justo al lado en horas punta.',
        'Lleva calzado cómodo para el tramo final sobre piedra o pendientes suaves.',
        'Mañana temprano y última hora suelen ser mejores momentos para aparcar.',
      ],
    },
    {
      title: 'La mejor forma de incluirlo en tu ruta',
      items: [
        'Judería -> San Juan de los Reyes -> Puente de San Martín.',
        'Centro histórico -> paseo panorámico -> puente al atardecer.',
        'Ruta de un día desde Madrid -> monumentos principales -> puente como cierre visual.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Historia del Puente de San Martín',
      href: '/historia-puente-san-martin',
      description: 'Contexto histórico y arquitectónico para entender mejor lo que estás viendo.',
    },
    {
      title: 'Qué ver en Toledo en un día',
      href: '/que-ver-en-toledo-en-un-dia',
      description: 'Una ruta práctica si quieres encajar el puente en una sola jornada.',
    },
    {
      title: 'Qué ver en Toledo',
      href: '/que-ver-en-toledo',
      description: 'Más ideas para combinar el puente con otros imprescindibles de la ciudad.',
    },
    {
      title: 'Puente de San Martín',
      href: '/',
      description: 'Página principal con vistas, datos prácticos y resumen general.',
    },
  ],
};

export const historiaPuenteSanMartinGuide: GuideContent = {
  title: 'Historia del Puente de San Martín: origen, reconstrucción y legado',
  metaTitle: 'Historia del Puente de San Martín: origen, reconstrucción y legado',
  metaDescription:
    'Descubre la historia del Puente de San Martín en Toledo, su origen medieval, reconstrucciones, arquitectura defensiva y valor patrimonial.',
  intro:
    'El Puente de San Martín no destaca solo por sus vistas sobre el Tajo. También es una de las obras medievales más reconocibles de Toledo, vinculada a la defensa de la ciudad, a la conexión entre barrios y al paisaje histórico que ha definido la imagen de Toledo durante siglos.',
  highlights: [
    'Puente medieval asociado a la expansión y defensa de Toledo.',
    'Conserva un fuerte valor paisajístico, histórico y simbólico.',
    'Sigue siendo una de las grandes postales urbanas sobre el Tajo.',
  ],
  sections: [
    {
      title: 'Origen medieval',
      paragraphs: [
        'El puente se desarrolló en la Baja Edad Media como una conexión clave sobre el río Tajo, en un punto estratégico del perímetro urbano de Toledo. Su función no era solo práctica: también formaba parte de la lectura defensiva y monumental de la ciudad.',
      ],
      items: [
        'Relaciona el casco histórico con el lado occidental del río.',
        'Se integra en la imagen fortificada de Toledo.',
        'Refleja la importancia de controlar accesos y pasos sobre el Tajo.',
      ],
    },
    {
      title: 'Reconstrucción y permanencia',
      paragraphs: [
        'Como ocurre con muchas grandes infraestructuras medievales, su historia incluye fases de deterioro, intervención y reconstrucción. Ese proceso explica por qué el puente es hoy un monumento vivo: no solo una pieza antigua, sino una obra que ha sido mantenida para seguir formando parte de la ciudad.',
      ],
    },
    {
      title: 'Arquitectura del puente',
      paragraphs: [
        'Uno de los rasgos más llamativos del Puente de San Martín es su silueta sobre el Tajo, marcada por arcos de piedra, volumen defensivo y una fuerte presencia visual desde distintos miradores de Toledo.',
      ],
      items: [
        'Arcos adaptados al relieve del cauce.',
        'Torres y elementos que refuerzan su lectura defensiva.',
        'Gran valor escénico dentro del paisaje urbano de Toledo.',
      ],
    },
    {
      title: 'El puente dentro de la historia de Toledo',
      paragraphs: [
        'Más allá de la ingeniería, el puente ayuda a entender cómo Toledo se relacionó históricamente con su topografía. El río no solo rodea la ciudad: también condiciona sus accesos, sus miradores y la forma en que se organizan recorridos y defensas.',
      ],
    },
    {
      title: 'Qué observar hoy durante la visita',
      items: [
        'La relación entre el puente, el río y las murallas.',
        'Los contrastes de altura entre el cauce y el casco histórico.',
        'La mejor lectura del puente desde el propio tablero y desde los alrededores.',
        'Cómo cambia su presencia visual con la luz del atardecer.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Cómo llegar al Puente de San Martín',
      href: '/como-llegar-puente-san-martin',
      description: 'Accesos recomendados si quieres visitarlo dentro de una ruta por Toledo.',
    },
    {
      title: 'Qué ver en Toledo',
      href: '/que-ver-en-toledo',
      description: 'Guía general para situar el puente dentro de los imprescindibles de la ciudad.',
    },
    {
      title: 'Qué ver en Toledo en un día',
      href: '/que-ver-en-toledo-en-un-dia',
      description: 'Un itinerario práctico para enlazar historia, vistas y monumentos.',
    },
    {
      title: 'Puente de San Martín',
      href: '/',
      description: 'Página principal con la visión general del monumento y datos útiles.',
    },
  ],
};

export const thingsToDoInToledoGuide: GuideContent = {
  title: 'Things to Do in Toledo, Spain: Top Attractions & Walking Route',
  metaTitle: 'Things to Do in Toledo, Spain: Top Attractions & Walking Route',
  metaDescription:
    'Plan the best things to do in Toledo, Spain with top attractions, scenic viewpoints, a walkable route and practical tips for first-time visitors.',
  intro:
    'Toledo works best as a walkable city break built around landmarks, river views and historic neighborhoods. This guide is designed for travelers who want a practical shortlist instead of a generic attractions dump.',
  highlights: [
    'Best for first-time visitors planning one relaxed day in Toledo.',
    'Mixes major monuments with viewpoints and river scenery.',
    'Shows where San Martin’s Bridge fits into a smart walking route.',
  ],
  sections: [
    {
      title: 'Top attractions to prioritize',
      items: [
        'Toledo Cathedral',
        'Alcazar of Toledo',
        'Plaza de Zocodover',
        'Monastery of San Juan de los Reyes',
        'Santa Maria la Blanca',
        'Santo Tome and El Greco',
        'Jewish Quarter',
        'San Martin’s Bridge',
        'Alcantara Bridge',
        'Mirador del Valle',
      ],
    },
    {
      title: 'A walkable route that makes sense',
      paragraphs: [
        'Start around Zocodover and the Alcazar, then move deeper into the old town for the cathedral and surrounding lanes. Continue toward the Jewish Quarter for San Juan de los Reyes, Santa Maria la Blanca and Santo Tome.',
        'Finish at San Martin’s Bridge for Tagus River views and one of the strongest photo stops in Toledo. It is one of the easiest ways to make the day feel varied rather than monument-heavy from start to finish.',
      ],
    },
    {
      title: 'Why San Martin’s Bridge deserves a stop',
      items: [
        'One of Toledo’s best river viewpoints.',
        'A strong sunset and blue-hour photo location.',
        'Easy to pair with the Jewish Quarter and San Juan de los Reyes.',
      ],
    },
    {
      title: 'Tips for first-time visitors',
      items: [
        'Wear comfortable shoes for steep streets and stone surfaces.',
        'Book cathedral tickets in advance on busy weekends.',
        'Keep your last hour flexible for viewpoints and photos.',
        'If you only have one day, focus on quality over quantity.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Toledo One Day Itinerary',
      href: '/en/toledo-one-day-itinerary',
      description: 'A timed route for visitors coming to Toledo for just one day.',
    },
    {
      title: 'San Martin’s Bridge',
      href: '/en',
      description: 'Practical info, views and map details for the bridge itself.',
    },
  ],
};

export const toledoOneDayItineraryGuide: GuideContent = {
  title: 'Toledo One Day Itinerary: Easy Walking Route for First-Time Visitors',
  metaTitle: 'Toledo One Day Itinerary: Easy Walking Route for First-Time Visitors',
  metaDescription:
    'Use this Toledo one day itinerary to plan a realistic walking route with top attractions, best viewpoints and timing tips for a day trip.',
  intro:
    'This one day itinerary is built for travelers who want to see Toledo without feeling rushed from one monument to the next. It balances must-see landmarks with scenic pauses, ending at San Martin’s Bridge for a more memorable finish.',
  highlights: [
    'Ideal for day trips from Madrid.',
    'Realistic pacing with room for food and viewpoints.',
    'Ends with one of Toledo’s most photogenic river scenes.',
  ],
  sections: [
    {
      title: 'Suggested timeline',
      items: [
        '09:00 Start in Plaza de Zocodover',
        '09:30 Explore the Alcazar surroundings',
        '10:00 Visit Toledo Cathedral',
        '12:00 Walk through the old town lanes',
        '13:00 Lunch in the historic center',
        '14:30 Head into the Jewish Quarter',
        '15:00 Visit San Juan de los Reyes and nearby monuments',
        '17:00 Walk to San Martin’s Bridge',
        '18:00 Stay for late-afternoon views over the Tagus',
      ],
    },
    {
      title: 'Why this route works',
      paragraphs: [
        'It avoids backtracking and keeps the day mostly downhill or level once you move through the core landmarks. More importantly, it saves the most open panoramic section of the day for later, when the light around San Martin’s Bridge is usually at its best.',
      ],
    },
    {
      title: 'What to skip if time is tight',
      items: [
        'Extra museum stops beyond your top one or two picks.',
        'A full detour to every city gate and defensive wall section.',
        'Long sit-down meals in peak afternoon hours.',
      ],
    },
    {
      title: 'Useful planning notes',
      items: [
        'Train schedules matter if you are returning to Madrid the same day.',
        'Historic streets can be steep, so travel light.',
        'Sunset is one of the best reasons to keep San Martin’s Bridge for late in the day.',
        'Add Mirador del Valle only if you still have transport and energy left.',
      ],
    },
  ],
  relatedLinks: [
    {
      title: 'Things to Do in Toledo',
      href: '/en/things-to-do-in-toledo',
      description: 'A broader list of top attractions and how to connect them on foot.',
    },
    {
      title: 'San Martin’s Bridge',
      href: '/en',
      description: 'See bridge details, map access and practical visitor info.',
    },
  ],
};
