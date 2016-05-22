import { _ } from 'meteor/underscore';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ConfirmationCtrl extends Controller {
  constructor() {
    super(...arguments);

<<<<<<< 6689a1410c030cbc4343adc0944891da77390593
    this.code = this.$state.params.code;
    this.pass = this.$state.params.pass;
=======
    this.phone = this.$state.params.phone;
>>>>>>> Criado chat
  }

  confirm() {
    if (_.isEmpty(this.code)) return;

<<<<<<< 6689a1410c030cbc4343adc0944891da77390593
    if (_.isEmpty(this.code) && _.isEmpty(this.pass)) return;

    Accounts.verifyPhone(this.code, this.pass, (err) => {
=======
    Accounts.verifyPhone(this.phone, this.code, (err) => {
>>>>>>> Criado chat
      if (err) return this.handleError(err);
      this.$state.go('profile');
    });
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

ConfirmationCtrl.$inject = ['$state', '$ionicPopup', '$log'];