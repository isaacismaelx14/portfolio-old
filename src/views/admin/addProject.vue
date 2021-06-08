<template>
  <section>
    <div class="container">
      <h2>Add a project</h2>
      <form @submit="submit">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            class="form-control"
            v-model="form.title"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="image url">Image url:</label>
          <input type="url" class="form-control" v-model="form.url" required />
        </div>
        <br />
        <div class="form-group">
          <label for="image url">Gitgub url:</label>
          <input type="url" class="form-control" v-model="form.githubUrl" />
        </div>
        <br />
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            name="description"
            class="form-control"
            cols="90"
            v-model="form.description"
            ref="textarea"
            id="txtArea01"
          ></textarea>
          <div class="btn-group mt-2">
            <span class="btn btn-outline-primary" @click="addTag('b')"
              >bold</span
            >
            <span class="btn btn-outline-primary" @click="addTag('i')"
              >cursive</span
            >
            <span class="btn btn-outline-primary" @click="addTag('h1')"
              >Title</span
            >
            <span class="btn btn-outline-primary" @click="addTag('h2')"
              >subtitle</span
            >
            <span class="btn btn-outline-primary" @click="addTag('p')"
              >parragraph</span
            >
            <span
              class="btn btn-outline-primary"
              @click="addTag('button', true, true)"
              >button</span
            >
            <span class="btn btn-outline-primary" @click="addTag('style')"
              >style</span
            >
          </div>
        </div>
        <button class="btn btn-primary mt-5">Send</button>
      </form>
    </div>
    <div class="container-fluid mt-5">
      <h2>Preview:</h2>
      <div v-html="form.description" class="previsualizer"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Admin_AddProject",
  data: () => ({
    form: {
      title: null,
      url: null,
      githubUrl: null,
      description: null
    }
  }),
  mounted() {},
  methods: {
    addToTextarea() {
      const textarea = this.$refs.textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const valueLength = textarea.value.length;
      const valueBefore = textarea.value.substring(0, start);
      const valueSelected = textarea.value.substring(start, end);
      const valueAfter = textarea.value.substring(end, valueLength);
      textarea.focus();
      return { valueBefore, valueSelected, valueAfter };
    },
    addTag(tag, useClass = false, isBtn = false) {
      const { valueBefore, valueSelected, valueAfter } = this.addToTextarea();
      if (useClass && isBtn)
        return (this.form.description = `${valueBefore}<${tag} class="btn btn-primary">${valueSelected}</${tag}>${valueAfter}`);
      if (useClass)
        return (this.form.description = `${valueBefore}<${tag} class="">${valueSelected}</${tag}>${valueAfter}`);
      this.form.description = `${valueBefore}<${tag}>${valueSelected}</${tag}>${valueAfter}`;
    },
    addValue(value) {
      const { valueBefore, valueAfter } = this.addToTextarea();
      this.form.description = `${valueBefore}${value}${valueAfter}`;
    },
    submit(e) {
      e.preventDefault();
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

section {
  padding-top: 100px;
}

form {
  textarea {
    max-height: 600px;
    min-height: 200px;
  }
}
.previsualizer {
  max-height: 400px;
  overflow: auto;
  border: 1px solid $color1;
}
</style>
