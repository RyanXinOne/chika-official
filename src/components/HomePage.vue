<template>
  <TopHeader />
  <SectionAbout />
  <SectionDiscography />
</template>

<script>
import TopHeader from './HomePage/TopHeader.vue'
import SectionAbout from './HomePage/SectionAbout.vue'
import SectionDiscography from './HomePage/SectionDiscography.vue'

export default {
  name: 'HomePage',
  components: {
    TopHeader,
    SectionAbout,
    SectionDiscography
  }
}
</script>
