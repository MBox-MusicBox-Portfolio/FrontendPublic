<template>
  <section>
    <div class='d-flex mt-5 justify-content-center'>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
      >
        <div class='form-group mb-3 ps-2'>
          <label class="lb-fstyle">
            Avatar image
            <input type="file" class="ms-2" />
          </label>
        </div>
        <div class='form-group mb-3'>
          <Field
            name="name"
            type="text"
            class="form-control"
            :placeholder="'Name group'"
          />
        </div>
        <div class='form-group mb-3'>
          <Field
            name="musgroup"
            type="text"
            class="form-control"
            :placeholder="'Add group musician'"
          />
        </div>
        <div class='form-group mb-3'>
          <Field
            name="desc-group"
            type="text"
            class="form-control"
            :placeholder="'Description group'"
          />
        </div>
        <div class='form-group d-flex justify-content-center mt-4'>
          <button class='bttn-sign' :disabled="isSubmitting">Send</button>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<script setup>
import { GroupStore } from "../../../../lib/stores/group.store";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";

const gs = GroupStore();
async function onSubmit(data) {
  gs.id = 'asd'
  gs.CreateGroup(data);
}
</script>

<style></style>
