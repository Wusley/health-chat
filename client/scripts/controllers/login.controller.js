import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class LoginCtrl extends Controller {
  login() {

    // var user = Meteor.users.find().fetch()[3];

    // console.log( Meteor.users.find().fetch()[3] );

    // var username = 'wusley',
    //     password = '123456';

        // this.profile = user.profile;
        // this.currentUser = user;
        // this.currentUserId = user._id;

        // var acc = {
        //     email: 'contato@wesley.pro.br',
        //     password: '123456',
        //     phone: '+5511997974380',
        //     profile: {
        //       name: 'wusley'
        //     }
        //   };

        //   console.log( acc );

        // Accounts.createUser( acc, (err) => { console.log(err); });

        // Meteor.loginWithPassword( 'contato@wesley.pro.br', '123456', ( data ) => {
        //   console.log( data );
        //   this.$state.go('profile');

        // } );

        this.$ionicLoading.show( {
          template: 'Autenticando usuário...'
        } );

        Meteor.loginWithPassword( this.username, this.password, ( err ) => {

          this.$ionicLoading.hide();

          if (err) return this.handleError(err);

          this.$state.go('profile');

        } );

        // Meteor.loginWithPassword( user._id, user.profile.password, ( data ) => {
        //   console.log( data );
        // } );




    // if (_.isEmpty(this.phone)) return;

    // const confirmPopup = this.$ionicPopup.confirm({
    //   title: 'Number confirmation',
    //   template: '<div>' + this.phone + '</div><div>Is your phone number above correct?</div>',
    //   cssClass: 'text-center',
    //   okText: 'Yes',
    //   okType: 'button-positive button-clear',
    //   cancelText: 'edit',
    //   cancelType: 'button-dark button-clear'
    // });

    // confirmPopup.then((res) => {
    //   if (!res) return;

<<<<<<< 6689a1410c030cbc4343adc0944891da77390593
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
=======
    //   this.$ionicLoading.show({
    //     template: 'Sending verification code...'
    //   });
>>>>>>> Criado chat

    //   Accounts.requestPhoneVerification(this.phone, (err) => {
    //     this.$ionicLoading.hide();
    //     if (err) return this.handleError(err);
    //     this.$state.go('confirmation', { phone: this.phone });
    //   });
    // });
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