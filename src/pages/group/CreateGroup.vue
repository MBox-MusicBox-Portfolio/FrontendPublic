<template>
  <section>
    <div class="d-flex mt-5 justify-content-center">
      <Form :validation-schema="schema" @submit="onSubmit">
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
          <Field name="musgroup" type="text" class="form-control" :placeholder="'Add group musician'" />
        </div>
        <div class="form-group mb-3">
          <Field name="desc-group" type="text" class="form-control" :placeholder="'Description group'" />
        </div>
        <div class="form-group d-flex justify-content-center mt-4">
          <button class="bttn-sign" :disabled="isSubmitting">Send</button>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<script setup>
import { Form, Field } from 'vee-validate';
import { useGroupStore } from '../../stores/useGroupStore.js';

const gs = useGroupStore();
async function onSubmit(data) {
  gs.id = 'asd';
  gs.CreateGroup(data);
}
</script>

<style></style>
