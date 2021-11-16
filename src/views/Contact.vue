<template>
  <section class="contact page">
    <div class="container">
      <div class="body">
        <form @submit="onSubmit">
          <div class="title"><h2>Contact me</h2></div>
          <div class="form-group">
            <label for="Name">*Name:</label>
            <input
              type="text"
              placeholder="John Exp"
              required
              v-model="formData.name"
            />
          </div>
          <div class="form-group">
            <label for="Company">Company:</label>
            <input
              type="text"
              placeholder="Codelife Inc."
              v-model="formData.company"
            />
          </div>
          <div class="form-group">
            <label for="Email">*Email:</label>
            <input
              type="email"
              placeholder="jonh@explample.com"
              required
              v-model="formData.email"
            />
          </div>
          <div class="form-group">
            <label for="Message">*Message:</label>
            <textarea
              name="message"
              placeholder="Write a message..."
              required
              v-model="formData.message"
            ></textarea>
          </div>
          <button class="btn" :disabled="loading">
            {{ loading ? "Sendding" : "Send" }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Toastify from "toastify-js";
import { mapState } from "vuex";

export default {
  name: "Contact",
  data: () => {
    return {
      formData: {
        name: null,
        company: null,
        email: null,
        message: null,
      },
      loading: false,
    };
  },
  methods: {
    onSubmit: async function(e) {
      e.preventDefault();
      this.loading = true;
      const { name, company, email, message } = this.formData;
      try {
        if (name && email && message) {
          await axios.post(
            `${this.server()}/api/send-mail`,
            {
              body: `${message} \nemail: ${email}`,

              subject: `${name} <${company}>`,
            }
          );
          this.formData = {
            name: null,
            company: null,
            email: null,
            message: null,
          };

          Toastify({
            text: `Thank you ${name}, your message was sent.`,
            backgroundColor: "green",
            gravity: "bottom",
            duration: 2000,
          }).showToast();
        }
      } catch (err) {
        console.error(err);
        Toastify({
          text: `Sorry, can't no sent the message, but you can send me an email to isaacismaelx14@gmail.com`,
          backgroundColor: "#f84444",
          gravity: "bottom",
          duration: 6000,
        }).showToast();
      } finally {
        this.loading = false;
      }
    },
  },
  created: function() {
    document.title = "Contact - Isaac Martinez"; //Temp
  },
  computed: {...mapState(["server"]),}
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.contact {
  height: 100vh;
  width: 100%;
  background: $color6;
  color: #fff;
}
.container {
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.body {
  width: 90%;
  margin: auto;
  max-width: 500px;
}
.title {
  font-size: 30px;
  margin-bottom: 10px;
}
form {
  & {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  input {
    height: 35px;
  }

  textarea {
    height: 120px;
    max-height: 400px;
    min-height: 120px;
  }

  input,
  textarea {
    & {
      background: $color6Dark;
      border: none;
      color: #fff;
      outline: none;
      padding: 5px 10px;
      border-radius: 20px;
      max-width: 100%;
      min-width: 100%;
    }

    &::placeholder {
      color: #b8b8b8;
    }
  }

  label {
    margin-bottom: 5px;
  }

  .btn {
    background: $color9;
    &:disabled {
      background: $color10;
      &:hover {
        box-shadow: 0 0 0 0;
        cursor: not-allowed;
      }
    }
  }
}
</style>
