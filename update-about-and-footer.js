const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'zh-Hant'];

const updates = {
  en: {
    aboutOfficialManagement: "Puente de San Martín is jointly managed and protected by the Ayuntamiento de Toledo and the regional government of Castilla-La Mancha. As an important historical and cultural heritage of Toledo, this bridge is classified as a 'Bien de Interés Cultural' (Property of Cultural Interest) in Spain.",
    footerLinksTitle: "Official Government and Tourism Resources",
    practicalHoursValue: "Pedestrian access is free (Acceso peatonal gratuito). Open 24 hours a day. No tickets or reservations are required. We highly recommend visiting at sunset to enjoy panoramic views of the Tagus River (Río Tajo) and the old city of Toledo.",
    footerCopyright: `© Ayuntamiento de Toledo · All rights reserved · Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`
  },
  'zh-Hant': {
    aboutOfficialManagement: "Puente de San Martín 由托萊多市政府（Ayuntamiento de Toledo）和卡斯蒂利亞-拉曼查區域政府共同管理和保護。作為托萊多重要的歷史文化遺產，本橋屬於西班牙「文化利益財產」（Bien de Interés Cultural）。",
    footerLinksTitle: "政府與旅遊官方資源",
    practicalHoursValue: "本橋為免費開放的步行橋（Acceso peatonal gratuito），全天24小時開放。無需門票，無需預約。特別推薦日落時分前來，欣賞塔霍河（Río Tajo）與托萊多古城的全景。",
    footerCopyright: `© Ayuntamiento de Toledo · 保留所有權利 · 最後更新日期：${new Date().toLocaleDateString('zh-Hant', { year: 'numeric', month: 'long' })}`
  },
  es: {
    aboutOfficialManagement: "El Puente de San Martín es administrado y protegido conjuntamente por el Ayuntamiento de Toledo y la Junta de Comunidades de Castilla-La Mancha. Como un importante patrimonio histórico y cultural de Toledo, este puente es un 'Bien de Interés Cultural' en España.",
    footerLinksTitle: "Recursos Oficiales del Gobierno y Turismo",
    practicalHoursValue: "El acceso peatonal es gratuito (Acceso peatonal gratuito). Abierto las 24 horas del día. No se requieren entradas ni reservas. Recomendamos especialmente visitarlo al atardecer para disfrutar de las vistas panorámicas del Río Tajo y la ciudad antigua de Toledo.",
    footerCopyright: `© Ayuntamiento de Toledo · Todos los derechos reservados · Última actualización: ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}`
  },
  fr: {
    aboutOfficialManagement: "Le Pont de San Martín est géré et protégé conjointement par la Mairie de Tolède (Ayuntamiento de Toledo) et le gouvernement régional de Castille-La Manche. En tant qu'important patrimoine historique et culturel de Tolède, ce pont est classé 'Bien d'Intérêt Culturel' (Bien de Interés Cultural) en Espagne.",
    footerLinksTitle: "Ressources Officielles du Gouvernement et du Tourisme",
    practicalHoursValue: "L'accès piéton est gratuit (Acceso peatonal gratuito). Ouvert 24 heures sur 24. Aucun billet ni réservation n'est requis. Nous recommandons particulièrement de venir au coucher du soleil pour profiter des vues panoramiques sur le Tage (Río Tajo) et la vieille ville de Tolède.",
    footerCopyright: `© Ayuntamiento de Toledo · Tous droits réservés · Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}`
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, `messages/${loc}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Add official management statement to about section
  data.about.officialManagement = updates[loc].aboutOfficialManagement;
  
  // Update footer links title and copyright
  data.footer.officialLinksTitle = updates[loc].footerLinksTitle;
  data.footer.copyright = updates[loc].footerCopyright;
  
  // Update practical hours value
  data.practical.hours.value = updates[loc].practicalHoursValue;
  
  // Remove references completely
  delete data.references;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
});

console.log('JSON locales updated successfully for about, footer, practical, and references removed.');