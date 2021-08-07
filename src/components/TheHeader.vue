<template>
  <div>
    <button @click="changeLanguage('rus')">Rus</button>
    <button @click="changeLanguage('eng')">Eng</button>
    <p>Выбранная дата: {{ date }} {{ months[language][month] }} {{ year }}</p>
  </div>
</template>

<script>
export default {
  props: ['date', 'year', 'lang', 'month'],
  emits: ['newLang'],
  data() {
    return {
      language: "rus",
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
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
      this.$emit("newLang", this.language);
    },
  },
};
</script>

