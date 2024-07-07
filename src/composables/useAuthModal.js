import { Modal } from 'bootstrap';
import { onMounted, ref } from 'vue';

export const AuthModalTypes = {
  SignIn: 'sign-in',
  SignUp: 'sign-up',
};

export const useAuthModal = () => {
  const modalInstance = ref(undefined);
  const authModalType = ref(AuthModalTypes.SignIn);

  onMounted(() => {
    modalInstance.value = new Modal(document.getElementById('modal-sign'), {
      backdrop: true,
    });
  });

  const setAuthModalType = (value) => {
    authModalType.value = value;
  };

  const closeAuthModal = () => {
    setAuthModalType(AuthModalTypes.SignIn);
  };

  const openAuthModal = (type) => {
    setAuthModalType(type);
    modalInstance.value.show();
  };

  const openSignInModal = () => openAuthModal(AuthModalTypes.SignIn);
  const openSignUpModal = () => openAuthModal(AuthModalTypes.SignUp);

  return { openSignInModal, openSignUpModal, closeAuthModal, openAuthModal, authModalType };
};
