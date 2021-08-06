<template>
  <div>
    <the-header
      :date="date"
      :month="month"
      :year="year"
      :lang="language"
      @newLang="language = $event"
    ></the-header>
    <div id="calendar">
      <calendar-header
        :monthName="months[language][month]"
        :year="year"
        :month="month"
        @newMonth="month = $event"
        @newYear="year = $event"
      ></calendar-header>
      <calendar-body
        :weekDays="weekDays[language]"
        :year="year"
        :month="month"
        :date="date"
        @chosenDate="date = $event"
      ></calendar-body>
    </div>
  </div>
</template>

<script>
import CalendarBody from "./components/CalendarBody.vue";
import CalendarHeader from "./components/CalendarHeader.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  data() {
    
    return {
      language: "rus",
      date: 0 || new Date().getDate(),
      month: 0 || new Date().getMonth(),
      year: 0 || new Date().getFullYear(),
      months: {
        rus: [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек",
        ],
        eng: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      weekDays: {
        rus: ["Вск", "Пнд", "Втр", "Сре", "Чтв", "Птн", "Суб"],
        eng: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    },
  },
  /*   beforeMount() {
    let date = new Date(2011, 3, 5);
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.date = date.getDate();
  }, */
  components: { CalendarHeader, CalendarBody, TheHeader },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#calendar {
  max-width: 600px;
  border: 1px solid gray;
  margin: auto;
  padding: 20px;
}
</style>