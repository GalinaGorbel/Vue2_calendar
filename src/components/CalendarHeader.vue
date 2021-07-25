<template>
  <the-ul>
    <li class="btn" @click="prev">←</li>
    <li>{{ monthName }} {{ year }}</li>
    <li class="btn" @click="next">→</li>
  </the-ul>
</template>

<script>
export default {
  props: ["monthName", "year", "month"],
  data() {
    return {
      newYear: this.year,
      newMonth: this.month,
    };
  },
  methods: {
    prev() {
      this.newMonth--;

      if (this.newMonth < 0) {
        this.newMonth = 11;
        this.newYear--;
      }
      this.$emit("newMonth", this.newMonth);
      this.$emit("newYear", this.newYear);
    },
    next() {
      this.newMonth++;

      if (this.newMonth > 11) {
        this.newMonth = 0;
        this.newYear++;
      }
      this.$emit("newMonth", this.newMonth);
      this.$emit("newYear", this.newYear);
    },
  },
};
</script>

<style>
.btn {
  cursor: pointer;
}
</style>