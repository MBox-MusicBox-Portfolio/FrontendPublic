<script setup>
import { AuthorizationStore } from "../../lib/stores/authorization.store";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const sendAuth = AuthorizationStore();
async function onSubmit(data) {
  sendAuth.authorization(data);
}
</script>

<script>
import { Modal } from "../../../node_modules/bootstrap/dist/js/bootstrap.esm";


export default {
  methods: {
    OpenModal() {
      let modalShow = new Modal(document.getElementById("modal-edit1"), {});
      modalShow.show();
    },
  },
};
</script>

<template>
  <div class="modal" id="modal-edit1">
    <div class="modal-margin d-flex justify-content-center">
      <div class="d-container">
        <div class="container__form" data-aos="fade-left" data-aos-delay="150">
          <h4 class="form__text-create">Sign In to MusicBox</h4>
          <div>
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors, isSubmitting }"
            >
              <div class="form-group">
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
              <div>
                <p class="form__text-fogot">forgot your password?</p>
              </div>
              <div class="form-group d-flex justify-content-center mt-4">
                <button class="form__button" :disabled="isSubmitting">
                  Sign In
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div class="container_image-welcome">
          <img
            src="../../assets/icons/mbox_background_1.png"
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
              <button class="content__button text-white">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
