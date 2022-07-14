<template>
  <TopHeader />
  <SectionCover />
  <SectionDiscography />
  <SectionShop />
  <BottomFooter />
  <FloatingNavigator />
</template>

<script>
import TopHeader from './HomePage/TopHeader.vue';
import SectionCover from './HomePage/SectionCover.vue';
import SectionDiscography from './HomePage/SectionDiscography.vue';
import SectionShop from './HomePage/SectionShop.vue';
import BottomFooter from './HomePage/BottomFooter.vue';
import FloatingNavigator from './HomePage/FloatingNavigator.vue';

export default {
  name: 'HomePage',
  components: {
    TopHeader,
    SectionCover,
    SectionDiscography,
    SectionShop,
    BottomFooter,
    FloatingNavigator,
  }
}
</script>
