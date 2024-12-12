Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue',
      courseGoalB: 'Expert in Vue',
      vuelink: 'www.google.com',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount('#user-goal');
