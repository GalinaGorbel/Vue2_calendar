<template>
  <div>
    <the-ul>
      <li v-for="day in weekDays" :key="day">{{ day }}</li>
    </the-ul>
    <the-ul v-for="(week, i) in calendar()" :key="i">
      <li
        :class="[day === chosenDate ? 'active' : '']"
        v-for="(day, i) in week"
        :key="i"
        @click="getDay"
      >
        {{ day }}
      </li>
    </the-ul>
  </div>
</template>

<script>
export default {
  props: ["weekDays", "year", "month", "date"],

  data() {
    return {
      chosenDate: this.date,
    };
  },
  methods: {
    calendar() {
      let arr = [];
      let days = [];
      let lastDay = new Date(this.year, this.month + 1, 0).getDate();
      let firstDay = new Date(this.year, this.month, 1).getDay();

      for (let i = 1; i <= lastDay; i++) {
        arr.push(i);
      }

      while (firstDay != 0) {
        arr.unshift("");
        firstDay--;
      }

      while (arr.length) {
        days.push(arr.splice(0, 7));
      }

      while(days[days.length - 1].length < 7) {
        days[days.length - 1].push("")
      }

      return days;
    },
    getDay(e) {
      this.chosenDate = +e.target.innerHTML;
      this.$emit('chosenDate', this.chosenDate)
    },
  },
};
</script>

<style scoped>
li {
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  cursor: pointer;
  padding: 10px;
}
li.active {
  background: lightgreen;
  color: white;
}
</style>