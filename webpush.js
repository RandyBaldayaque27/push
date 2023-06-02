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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dO2Rl5WOvZ8:APA91bGW1x-I7t_bs1mmDdztEdq43dFbkew0kiUXeNnJhehBnkJn93IE2zyEUof9ua3_OVSGQ5Hk8eHRsQgZ_yALS2HJa8d5YfBbTPhs13GDAKaFTqhLDMjZzWGXjoEHnCLIBuz3xCFg","expirationTime":null,"keys":{"p256dh":"BEIG9DYN7I-h4gBu42ob_YGfgduzU9QS2V0bVhMi9OuDzrshPm4WJT-HPkksN48XJLRgwwJuB-MZERs__kjSWkg","auth":"aCHpR9MgIE3OsP-_ixPzMA"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
