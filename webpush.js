const webpush = require('web-push');

const vapidKeys = {
    publicKey: 'BOt5tUGKG2La093eq0wVD4D-YkxPw_5t4nwcx75Yis8h8N0FMap8oIwOYfxK9X6GWY4RUqeYIU1R6wX0pqOHqBQ',
    privateKey: 'xjcd0ZxQHt1mk10Qtcs6sEPf_5944iA_5nEhWWwaj_k'
  } 



webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
