<template>
  <div class="relative pt-16 pb-32 flex content-center items-center justify-center" style="min-height: 75vh;">
    <CoverImage
      cover="https://images.unsplash.com/photo-1627350898251-61e79df3fbbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
    />
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white text-5xl font-serif uppercase">
              NOMAD•IFY
            </h1>
            <p class="mt-4 text-2xl text-gray-300 font-serif">
              A blog about digital nomadism and minimalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoverImage from '@/components/Images/CoverImage.vue'

export default {
  name: 'SecondaryHero',
  components: {
    CoverImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
