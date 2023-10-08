<script setup>
    import { AuthorizationStore } from '../../lib/stores/authorization.store';
    import * as Yup from 'yup';
    import {Form, Field} from 'vee-validate';

    const schema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const sendAuth = AuthorizationStore();
    async function onSubmit(data) {
        sendAuth.authorization(data);
    }
</script>

<template>
    <div class="d-flex">
        <div class="block-sign_register" data-aos="fade-left" data-aos-delay="150">
            <div class="mb-4">
                <h4 class="text-create_acc">Restore your Password</h4>
                <p class="text-sign-desc text-dark mt-3">An email with a link to reset your password <br>
                    has been sent to your inbox
                </p>
            </div>
            <div class="create-wrap">
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_email.png" class="img-form-control">
                        <Field name="email" 
                            type="email" 
                            class="form-control" 
                            :placeholder="'Email'" 
                            :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    <div class="form-group d-flex justify-content-center mt-4">
                    <button class="bttn-sign" :disabled="isSubmitting">
                        Send
                    </button>
                    </div>
                </Form>
            </div>
        </div>     
        <div class="welckom-sign-container">
            <img src="../../assets/icons/mbox_background_1.png" class="img-bg-sign">
            <div class="block-sign-wrap"  data-aos="fade-down" data-aos-delay="150">
                <p class="text-welcom-header text-white">Change Password?</p>
                <p class="text-welcom-desc text-white pt-4">
                    Do you want to change your password?
                </p>
                <div class="block-sign-button">
                    <button class="button-sign">
                        <router-link to="/SignUp" class="text-white">Change</router-link>
                    </button>
                </div>
            </div>
        </div> 
    </div>
</template>

<style>

</style>