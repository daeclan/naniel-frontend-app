<template>
  <div class="dropdown">
     <select
      v-model="selectedOption"
      @input="event => { $emit('input', event.target.value) }"
      >
      <option v-for="(option, name) in options" :value="option">{{ name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  mounted() {
    this.selectedOption = this.value;
  },
  watch: {
    value: function (newValue) {
      this.selectedOption = newValue;
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  props: {
    value: null,
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>





    <select>
      <option>Naniel</option>
      <option></option>
      <option>Hyperbaric Oxygen Chamber</option>
      <option>The Okra Project</option>
      <option>Lyme Disease</option>
      <option>No Us Without You</option>
      <option>Cancer</option>
    </select>
  </div>