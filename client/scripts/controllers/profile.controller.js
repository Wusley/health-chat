import { _ } from 'meteor/underscore';
import { MeteorCameraUI } from 'meteor/okland:camera-ui';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ProfileCtrl extends Controller {
  constructor() {
    super(...arguments);

    const profile = this.currentUser && this.currentUser.profile;
    this.name = profile ? profile.name : '';
  }

  updatePicture () {
    MeteorCameraUI.getPicture({ width: 60, height: 60 }, (err, data) => {
      if (err) return this.handleError(err);

      this.$ionicLoading.show({
        template: 'Atualizando imagem...'
      });

      this.callMethod('updatePicture', data, (err) => {
        this.$ionicLoading.hide();
        this.handleError(err);
      });
    });
  }

  updateName() {
    if (_.isEmpty(this.name)) return;

    this.callMethod('updateName', this.name, (err) => {
      if (err) return this.handleError(err);
      this.$state.go('tab.chats');
    });
  }

  handleError(err) {
    if (err.error == 'cancel') return;
    this.$log.error('Falha ao salvar o perfil ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Falha ao salvar o perfil',
      template: 'Por favor tente novamente',
      okType: 'button-positive button-clear'
    });
  }
}

ProfileCtrl.$inject = ['$state', '$ionicPopup', '$log'];