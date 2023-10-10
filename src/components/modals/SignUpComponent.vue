<script setup>
import { RegisterStore } from "../../lib/stores/registration.store";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  birthday: Yup.string().required("Birthday is required"),
  password: Yup.string().required("Password is required"),
  retypePassword: Yup.string().required("Retype password is requires"),
});

const sendRegister = RegisterStore();
async function onSubmit(data) {
  sendRegister.registration(data);
}
</script>

<script>
import { Modal } from "../../../node_modules/bootstrap/dist/js/bootstrap.esm";

export default {
  methods: {
    OpenModal() {
      let modalShow = new Modal(document.getElementById("modal-edit"), {});
      modalShow.show();
    },
  },
};
</script>

<template>
  <div class="modal" id="modal-edit">
    <div class="modal-margin d-flex justify-content-center">
      <div class="d-container">
        <div class="container_image-welcome">
          <img
            src="../../assets/icons/mbox_background.png"
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
              <button class="content__button">Sign In</button>
            </div>
          </div>
        </div>
        <div
          class="container__form" style="margin: 232px auto;"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h4 class="form__text-create">Create Account</h4>
          <div>
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors, isSubmitting }"
            >
              <div class="form-group">
                <img
                  src="../../assets/icons/mbox_account.png"
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
                  src="../../assets/icons/mbox_email.png"
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
                  src="../../assets/icons/mbox_calendar.png"
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
                  src="../../assets/icons/mbox_password.png"
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
                  src="../../assets/icons/mbox_password.png"
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
          </div>
        </div>
      </div>
    </div>
    <SignInComponent/>
  </div>
</template>
