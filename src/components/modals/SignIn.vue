<script setup>
import { Form, Field } from 'vee-validate';
import { AuthStore } from '../../stores/auth.store.js';
import { signInValidationSchema, signUpValidationSchema } from '../../validations/index.js';

const auth = AuthStore();

async function onSignUp(data) {
  return auth.SignUp(data);
}

async function onSignIn(data) {
  return auth.SignIn(data);
}
</script>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      isSignIn: Boolean,
    };
  },
  methods: {
    OpenModal(isSignIn) {
      this.isSignIn = isSignIn;
      const modal = new Modal(document.getElementById('modal-sign'), {
        backdrop: true,
      });
      modal.show();
    },
    SetSign(isSignIn) {
      this.isSignIn = isSignIn;
    },
  },
};
</script>

<template>
  <div id="modal-sign" class="modal">
    <div class="modal-dialog modal-xl modal-margin d-flex justify-content-center">
      <!-- Sign In -->
      <div v-if="isSignIn === true" class="d-container">
        <div class="container__form" data-aos="fade-left" data-aos-delay="150">
          <h4 class="form__text-create">Sign In to MusicBox</h4>
          <div>
            <Form v-slot="{ errors, isSubmitting }" :validation-schema="signInValidationSchema" @submit="onSignIn">
              <div class="form-group">
                <img src="@Images/mbox_email.png" class="form__image" />
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  :placeholder="'Email'"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>
              <div class="form-group mt-10">
                <img src="@Images/mbox_password.png" class="form__image" />
                <Field
                  name="password"
                  type="password"
                  class="form-control"
                  :placeholder="'Password'"
                  :class="{ 'is-invalid': errors.password }"
                />
                <div class="invalid-feedback">{{ errors.password }}</div>
              </div>
              <div>
                <p class="form__text-fogot">forgot your password?</p>
              </div>
              <div class="form-group d-flex justify-content-center mt-4">
                <button class="form__button" :disabled="isSubmitting">Sign In</button>
              </div>
            </Form>
            <p class="text-danger">{{ auth.errorMessage }}</p>
          </div>
        </div>
        <div class="container_image-welcome">
          <img src="@Images/mbox_background_1.png" class="image__background" />
          <div class="container__content text-center">
            <div class="d-flex justify-content-center">
              <div class="content__width">
                <p class="content__text-welcom text-white">Hello, Friend!</p>
                <p class="content__text-description text-white">
                  Enter your personal details and start listen music with us
                </p>
              </div>
            </div>
            <div>
              <button class="content__button text-white" @click="SetSign(false)">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Sign Up -->
      <div v-else class="d-container">
        <div class="container_image-welcome">
          <img src="@Images/mbox_background.png" class="image__background image__background-left" />
          <div class="container__content text-center">
            <div class="d-flex justify-content-center">
              <div class="content__width">
                <p class="content__text-welcom">Welcome Back!</p>
                <p class="content__text-description">To keep connected with us please login with your personal info</p>
              </div>
            </div>
            <div>
              <button class="content__button" @click="SetSign(true)">Sign In</button>
            </div>
          </div>
        </div>
        <div class="container__form" style="margin: 232px auto" data-aos="fade-left" data-aos-delay="150">
          <h4 class="form__text-create">Create Account</h4>
          <div>
            <Form v-slot="{ errors, isSubmitting }" :validation-schema="signUpValidationSchema" @submit="onSignUp">
              <div class="form-group">
                <img src="@Images/mbox_account.png" class="form__image" />
                <Field
                  name="name"
                  type="text"
                  class="form-control"
                  :placeholder="'Name'"
                  :class="{ 'is-invalid': errors.name }"
                />
                <div class="invalid-feedback">{{ errors.name }}</div>
              </div>
              <div class="form-group mt-10">
                <img src="@Images/mbox_email.png" class="form__image" />
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  :placeholder="'Email'"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>
              <div class="form-group mt-10">
                <img src="@Images/mbox_calendar.png" class="form__image form__image-birthday" />
                <Field
                  name="birthday"
                  type="text"
                  class="form-control form__control-birthday"
                  :placeholder="'Your Birthday'"
                  :class="{ 'is-invalid': errors.birthday }"
                />
                <div class="invalid-feedback">{{ errors.birthday }}</div>
              </div>
              <div class="form-group mt-10">
                <img src="@Images/mbox_password.png" class="form__image" />
                <Field
                  name="password"
                  type="password"
                  class="form-control"
                  :placeholder="'Password'"
                  :class="{ 'is-invalid': errors.password }"
                />
                <div class="invalid-feedback">{{ errors.password }}</div>
              </div>
              <div class="form-group mt-10">
                <img src="@Images/mbox_password.png" class="form__image" />
                <Field
                  name="retypePassword"
                  type="password"
                  class="form-control"
                  :placeholder="'Retype Password'"
                  :class="{ 'is-invalid': errors.retypePassword }"
                />
                <div class="invalid-feedback">{{ errors.retypePassword }}</div>
              </div>
              <div class="form-group d-flex justify-content-center mt-4">
                <button class="form__button" :disabled="isSubmitting">Sign Up</button>
              </div>
            </Form>
            <p class="text-danger">{{ auth.errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
