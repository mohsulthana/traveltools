<template>
  <div>
    <b-container>
      <div class="container-layout">
        <b-row>
          <b-col lg="10" xs="12" offset-lg="1">
            <horizontal-stepper :steps="steps" @completed-step="completeStep"
              @active-step="isStepActive"
            >
            </horizontal-stepper>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import HorizontalStepper from 'vue-stepper';
import StepOne from './steps/StepOne.vue';

export default {
  components: {
    HorizontalStepper,
  },
  data() {
    return {
      steps: [
        {
          icon: 'mail',
          name: 'Data',
          title: 'Data Jamaah',
          component: StepOne,
          completed: false,
        },
        {
          icon: 'person',
          name: 'Kamar',
          title: 'Pilih kamar',
          completed: false,
        },
        {
          icon: 'book',
          name: 'Review',
          title: 'Review Data',
          completed: false,
        },
        {
          icon: 'payment',
          name: 'Pembayaran',
          title: 'Pembayaran',
          completed: true,
        },
        {
          icon: 'loading',
          name: 'Proses',
          title: 'Proses',
          completed: true,
        },
        {
          icon: 'invoice',
          name: 'Invoice',
          title: 'Invoice',
          completed: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-layout {
  margin-left: auto;
  margin-top: auto;
  margin-top: 20vh;
}
</style>
