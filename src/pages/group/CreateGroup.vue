<script setup>
import { Form, Field } from 'vee-validate';
import { createGroupValidationSchema } from '../../validations/index.js';

async function onSubmit(data) {
  console.log(data);
}
</script>

<template>
  <section>
    <div class="d-flex mt-5 justify-content-center">
      <Form :validation-schema="createGroupValidationSchema" @submit="onSubmit">
        <div class="form-group mb-3 ps-2">
          <label class="lb-fstyle">
            Avatar image
            <input type="file" class="ms-2" />
          </label>
        </div>
        <div class="form-group mb-3">
          <Field name="name" type="text" class="form-control" :placeholder="'Name group'" />
        </div>
        <div class="form-group mb-3">
          <Field name="description" type="text" class="form-control" :placeholder="'Description group'" />
        </div>
        <!--TODO: Consider adding 1 input per musician-->
        <div class="form-group mb-3">
          <Field name="musicians" type="text" class="form-control" :placeholder="'Add group musician'" />
        </div>
        <div class="form-group d-flex justify-content-center mt-4">
          <button class="bttn-sign" :disabled="false">Send</button>
        </div>
      </Form>
    </div>
  </section>
</template>
