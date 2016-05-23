import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class LoginCtrl extends Controller {
  login() {

    if ( _.isEmpty(this.username) || _.isEmpty(this.password) ) return;

    this.$ionicLoading.show( {
      template: 'Autenticando usuário...'
    } );

    Meteor.loginWithPassword( this.username, this.password, ( err ) => {

      this.$ionicLoading.hide();

      if (err) return this.handleError(err);

      this.$state.go('profile');

    } );

  }

  handleError(err) {
    this.$log.error('Login error ', err);

    this.$ionicPopup.alert({
      title: 'Falha no login',
      template: 'Por favor tente novamente',
      okType: 'button-positive button-clear'
    });
  }
}

LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];