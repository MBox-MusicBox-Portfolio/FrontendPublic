<template>
    <section class='mt-2'>
        <div class='d-flex item-align-center'>
            <p class='text-favorite-index'>{{ index }}</p>
            <img :src="img_url" class='img-favorit-template'>
            <p class='text-favorite-template'>{{ name }}</p>
            <p class='text-favorite-template'>{{  author_name }}</p>
            <p class='text-favorite-template'>{{ description }}</p>
            <p class='text-favorite-template'>{{ time }}</p>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        index: String,
        img_url: String,
        name: String,
        author_name: String,
        description: String,
        time: String
    }
}
</script>