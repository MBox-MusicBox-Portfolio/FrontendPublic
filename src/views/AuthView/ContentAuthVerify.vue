<template>
  <section>
    <h2>Hello user</h2>
    <p>{{ desc }}</p>
    <button>
        <router-link to="/SignIn">
            Home
        </router-link>
    </button>
  </section>
</template>

<script>
export default {
    props: {
        desc: String
    }
}
</script>

<style>

</style>