<script setup>
import { AuthStore } from   "@Stores/auth.store";
import * as Yup from        "yup";
import { Form, Field } from "vee-validate";

const schema_sign_up = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  birthday: Yup.string().required("Birthday is required"),
  password: Yup.string().required("Password is required"),
  retypePassword: Yup.string().required("Retype password is requires"),
});

const schema_sign_in = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const as = AuthStore();

async function onSubmitUp(data) {
  as.SignUp(data);
}

async function onSubmitIn(data) {
  as.SignIn(data);
}
</script>

<script>
import { Modal } from "../../../node_modules/bootstrap/dist/js/bootstrap.esm";

export default {
  data() {
    return {
      isSign: Boolean
    }
  },
  methods: {
    OpenModal(isSign) {
      this.isSign = isSign;
      let test = new Modal(document.getElementById('modal-sign'), {
        backdrop: true,
      });
      test.show();
    },
    SetSign(isSign) {
      this.isSign = isSign;
      console.log(this.isSign);
    }
  },
};
</script>

<template>
  <div class="modal" id="modal-sign">
    <div class="modal-dialog modal-xl modal-margin d-flex justify-content-center">
      <!-- Sign In -->
      <div class="d-container" v-if="isSign === true">
        <div class="container__form" data-aos="fade-left" data-aos-delay="150">
          <h4 class="form__text-create">Sign In to MusicBox</h4>
          <div>
            <Form
              @submit="onSubmitIn"
              :validation-schema="schema_sign_in"
              v-slot="{ errors, isSubmitting }"
            >
              <div class="form-group">
                <img
                  src="@Images/mbox_email.png"
                  class="form__image"
                />
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
                <img
                  src="@Images/mbox_password.png"
                  class="form__image"
                />
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
                <button class="form__button" :disabled="isSubmitting">
                  Sign In
                </button>
              </div>
            </Form>
            <p class="text-danger">{{ as.errorMessage }}</p>
          </div>
        </div>
        <div class="container_image-welcome">
          <img
            src="@Images/mbox_background_1.png"
            class="image__background"
          />
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
      <div class="d-container" v-else>
        <div class="container_image-welcome">
          <img
            src="@Images/mbox_background.png"
            class="image__background image__background-left"
          />
          <div class="container__content text-center">
            <div class="d-flex justify-content-center">
              <div class="content__width">
                <p class="content__text-welcom">Welcome Back!</p>
                <p class="content__text-description">
                  To keep connected with us please login with your personal info
                </p>
              </div>
            </div>
            <div>
              <button class="content__button" @click="SetSign(true)">Sign In</button>
            </div>
          </div>
        </div>
        <div
          class="container__form"
          style="margin: 232px auto"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h4 class="form__text-create">Create Account</h4>
          <div>
            <Form
              @submit="onSubmitUp"
              :validation-schema="schema_sign_up"
              v-slot="{ errors, isSubmitting }"
            >
              <div class="form-group">
                <img
                  src="@Images/mbox_account.png"
                  class="form__image"
                />
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
                <img
                  src="@Images/mbox_email.png"
                  class="form__image"
                />
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
                <img
                  src="@Images/mbox_calendar.png"
                  class="form__image form__image-birthday"
                />
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
                <img
                  src="@Images/mbox_password.png"
                  class="form__image"
                />
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
                <img
                  src="@Images/mbox_password.png"
                  class="form__image"
                />
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
                <button class="form__button" :disabled="isSubmitting">
                  Sign Up
                </button>
              </div>
            </Form>
            <p class="text-danger">{{ as.errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
