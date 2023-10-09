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
  <div class="d-flex" id="modal-edit">
        <div class="welckom-sign-container">
            <img src="../../assets/icons/mbox_background.png" class="img-bg-sign">
            <div class="block-sign-wrap"  data-aos="fade-down" data-aos-delay="150">
                <p class="text-welcom-header">Welcome Back!</p>
                <p class="text-welcom-desc">
                    To keep connected with us please <br>
                    login with your personal info
                </p>
                <div class="block-sign-button">
                    <button class="button-sign">
                        <router-link to="/sign-in" class=" anim-button-sign">Sign In</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div class="block-sign_register" data-aos="fade-left" data-aos-delay="150">
            <div class="mb-4">
                <h4 class="text-create_acc">Create Account</h4>
                <!--
                <div class="block_sign_social mt-3 mb-3">
                    <img src="../../assets/icons/mbox_facebook.png" class="img-sign-facebook">
                    <img src="../../assets/icons/mbox_google.png" class="img-sign-google">
                </div>
                <p class="text-sign-desc">or use email for registration</p>
                -->

            </div>
            <div>
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_account.png" class="img-form-control">
                        <Field name="name" 
                            type="text" 
                            class="form-control" 
                            :placeholder="'Name'" 
                            :class="{ 'is-invalid': errors.name }" />
                        <div class="invalid-feedback">{{ errors.name }}</div>
                    </div>
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_email.png" class="img-form-control">
                        <Field name="email" 
                            type="email" 
                            class="form-control" 
                            :placeholder="'Email'" 
                            :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_calendar.png" class="img-form-control img-form-control-birth">
                        <Field name="birthday" 
                            type="text" 
                            class="form-control form-control-birth" 
                            :placeholder="'Your Birthday'" 
                            :class="{ 'is-invalid': errors.birthday }" />
                        <div class="invalid-feedback">{{ errors.birthday }}</div>
                    </div>
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_password.png" class="img-form-control">
                        <Field  name="password" 
                            type="password" 
                            class="form-control" 
                            :placeholder="'Password'" 
                            :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{ errors.password }}</div>
                    </div>
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_password.png" class="img-form-control">
                        <Field  name="retypePassword" 
                            type="password" 
                            class="form-control" 
                            :placeholder="'Retype Password'" 
                            :class="{ 'is-invalid': errors.retypePassword }" />
                        <div class="invalid-feedback">{{ errors.retypePassword }}</div>
                    </div>
                    <div class="form-group d-flex justify-content-center mt-4">
                      <button class="bttn-sign" :disabled="isSubmitting">
                                Sign Up
                      </button>
                    </div>
                </Form>
            </div>
        </div>      
    </div>
</template>

<style></style>
