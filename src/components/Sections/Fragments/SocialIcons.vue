<template>
  <div name="socialicons">
    <SocialIcon
      v-for="icon in socialIcons"
      :key="icon.key"
      :href="icon.href"
      :label="icon.label"
      :icon="icon.icon"
      :appearance="appearance"
    />
  </div>
</template>

<script>
import SocialIcon from '@/components/Sections/Fragments/SocialIcon.vue'

export default {
  name: 'SocialIcons',
  components: {
    SocialIcon
  },
  props: {
    appearance: {
      type: String,
      validator (value) {
        // The value must match one of these strings
        return ['light', 'dark'].includes(value)
      }
    }
  },
  data () {
    return {
      socialIcons: [
        { href: 'https://www.tiktok.com/@nomadify', label: 'TikTok', icon: ['fab', 'tiktok'] },
        { href: 'https://twitter.com/n0madify', label: 'Twitter', icon: ['fab', 'twitter'] },
        { href: 'https://www.instagram.com/n0madify', label: 'Instagram', icon: ['fab', 'instagram'] },
        { href: 'https://www.youtube.com/channel/UCTd1i_iJQ8jUIHs17nXidQg', label: 'Instagram', icon: ['fab', 'youtube'] }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
