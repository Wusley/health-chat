import { Controller } from '../entities';

export default class LoginCtrl extends Controller {
  login() {
    if (_.isEmpty(this.code) || _.isEmpty(this.pass)) return;

    // const confirmPopup = this.$ionicPopup.confirm({
    //   title: 'Conectar',
    //   template: '<div>' + this.phone + '</div><div>Sua senha esta correta?</div>',
    //   cssClass: 'text-center',
    //   okText: 'Sim',
    //   okType: 'button-positive button-clear',
    //   cancelText: 'Editar',
    //   cancelType: 'button-dark button-clear'
    // });

    // confirmPopup.then((res) => {
    //   if (!res) return;

      this.$ionicLoading.show( {
        template: 'Verificando conta...'
      } );

      if (_.isEmpty(this.code) && _.isEmpty(this.pass)) return;



      Accounts.verifyPhone(this.code, this.pass, (err) => {

        this.isLoggingIn = true;

        this.$ionicLoading.hide();

        // if (err) return this.handleError(err);

        this.$state.go('profile');

      });

      this.$state.go('profile');

      // Accounts.requestPhoneVerification(this.code, (err) => {
        // this.$ionicLoading.hide();
      //   if (err) return this.handleError(err);

      //   console.log('confirmation');
      //   this.$state.go('confirmation', { code: this.code });
      // });
    // });
  }

  handleError(err) {
    this.$log.error('Falha ao conectar ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Falha no login',
      template: 'Por favor tente novamente',
      okType: 'button-positive button-clear'
    });
  }
}

LoginCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$ionicPopup', '$log'];