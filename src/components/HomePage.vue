<template>
  <TopHeader />
  <SectionAbout />
  <SectionDiscography />
  <SectionShop />
  <BottomFooter />
</template>

<script>
import TopHeader from './HomePage/TopHeader.vue';
import SectionAbout from './HomePage/SectionAbout.vue';
import SectionDiscography from './HomePage/SectionDiscography.vue';
import SectionShop from './HomePage/SectionShop.vue';
import BottomFooter from './HomePage/BottomFooter.vue';

export default {
  name: 'HomePage',
  components: {
    TopHeader,
    SectionAbout,
    SectionDiscography,
    SectionShop,
    BottomFooter
  }
}
</script>
