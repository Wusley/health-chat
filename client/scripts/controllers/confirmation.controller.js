import { Controller } from '../entities';

export default class ConfirmationCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.code = this.$state.params.code;
    this.pass = this.$state.params.pass;
  }

  confirm() {

    if (_.isEmpty(this.code) && _.isEmpty(this.pass)) return;

    Accounts.verifyPhone(this.code, this.pass, (err) => {
      if (err) return this.handleError(err);
      this.$state.go('profile');
    });
    this.$state.go('profile');
  }

  handleError(err) {

    this.$log.error('Confirmation error ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Confirmation failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

ConfirmationCtrl.$inject = ['$scope', '$state', '$ionicPopup', '$log'];