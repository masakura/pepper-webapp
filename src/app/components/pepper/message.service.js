export class MessageService {
  constructor () {
    'ngInject';

    this.messages = [];
  }

  send(text) {
    this.messages.push({text: text});
  }
}
