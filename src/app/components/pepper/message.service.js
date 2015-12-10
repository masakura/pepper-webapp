export class MessageService {
  constructor (datasource, $rootScope) {
    'ngInject';

    this.messages = [];
    this.datastore = datasource.datastore();

    this.datastore.on('send', data => {
      $rootScope.$apply(() => this.messages.push(data.value));
    });
  }

  send(text) {
    const message = {text: text};
    this.datastore.send(message);
  }
}
