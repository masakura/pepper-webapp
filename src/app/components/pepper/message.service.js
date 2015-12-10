const milkcocoa = new MilkCocoa("hotif8ab67j.mlkcca.com");
const datastore = milkcocoa.dataStore('nise/#abc');
const session = new QiSession();

var alTextToSpeach;

session
  .service('ALTextToSpeech')
  .then(speach => alTextToSpeach = speach);

datastore.on('send', function (data) {
  alTextToSpeach.say(data.value.text);
});

export class MessageService {
  constructor () {
  }
}
