import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class SettingsCtrl extends Controller {
  logout() {
    Meteor.logout((err) => {
      if (err) return this.handleError(err);
      this.$state.go('login');
    })
  }

  handleError (err) {
    this.$log.error('Falha ao salvar as configurações', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Falha ao salvar as configurações',
      template: 'Por favor tente novamente',
      okType: 'button-positive button-clear'
    });
  }
}

SettingsCtrl.$inject = ['$state', '$ionicPopup', '$log'];