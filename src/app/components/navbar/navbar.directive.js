export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, $window) {
    'ngInject';

    // "this.creation" is avaible by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();

    this.$window = $window;
  }

  reload () {
    this.$window.location.reload();
  }
}
