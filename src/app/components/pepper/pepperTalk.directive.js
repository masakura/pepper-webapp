export function PepperTalkDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/pepper/pepperTalk.html',
    controller: PepperTalkController,
    controllerAs: 'vm'
  };

  return directive;
}

class PepperTalkController {
  constructor (messageService) {
    'ngInject';

    this.messageService = messageService;
    this.messages = messageService.messages;

    this.input = '';
  }

  sendMessage () {
    this.messageService.send(this.input);
    this.input = '';
  }
}
