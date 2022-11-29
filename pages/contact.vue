<template>
  <main>
    <header class="first_header">
      <h1>Contact</h1>
    </header>
    <div class="ctner space_y mb7">
      <div class="row-2">
        <div class="col">
          <form @submit.prevent="submitForm" id="contact" name="contact" method="post" data-netlify="true"
                netlify-honeypot="bot-field">
            <input type="hidden" name="contact" value="contact"/>
            <div class="hidden yesIKnow">
              <label for="fieldb" id="fieldb">
                Don’t fill this out if you’re human.
                <small>Using <a href="https://docs.netlify.com/forms/spam-filters/#honeypot-field">Spam
                  Filter</a></small>
              </label>
              <input name="bot-field" id="fieldb"/>
            </div>
            <div class="row-2">
              <div class="col">
                <div class="disp_if">
                  <i class="fa fa-envelope-o mr8"></i>
                  <label for="email">Email</label>
                </div>
                <input type="email" name="email" id="email" v-model="form.email"
                       placeholder="elliot@alder.son" required>
              </div>
              <div class="col">
                <div class="disp_if">
                  <i class="fa fa-user-o mr8"></i>
                  <label for="name_email">Your name</label>
                </div>
                <input name="name" id="name_email" placeholder="Elliot Alderson" v-model="form.name" required>
              </div>
            </div>
            <div class="row-2">
              <div class="col">
                <label for="object_email">Object</label>
                <input name="object" id="object_email" autocomplete="off" v-model="form.object" required>
              </div>
              <div class="col">
                <label for="category_request_email">Category of the request</label>
                <select name="category_request" id="category_request_email" v-model="form.category_request" required>
                  <option value="Proposal">Proposal</option>
                  <option value="Bug" selected>Bug</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Partner">Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div class="row-1">
              <div class="col">
                <label for="message">Your message</label>
                <textarea name="message" id="message" v-model="form.message" required></textarea>
                <button type="submit" value="Envoyer">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        object: '',
        category_request: '',
        message: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    clearForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.object = '';
      this.form.category_request = '';
      this.form.message = '';
    },
    submitForm() {
      // get id fieldid
      const noBot = window.document.getElementById("fieldb");
      if (noBot) {
        this.clearForm();
        return alert("You are a bot, please leave this page.");
      }
      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: this.encode({
          "form-name": "contact",
          "email": this.form.email,
          "name": this.form.name,
          "object": this.form.object,
          "category_request": this.form.category_request,
          "message": this.form.message,
        })
      })
        .then(() => {
          // clear form
          this.clearForm()
          alert('The email has been sent successfully.');
        })
        .catch(error => alert(error));
    }
  }
}
</script>
<style scoped>
.ctner > a,
.ctner > p {
  margin-top: 2rem;
}

hr {
  margin: 3rem 15%;
}

input[type='submit'] {
  margin: 1.6rem 0;
}

.pro_part_contact > .col {
  align-self: center;
}

.pro_part_contact > .col > p {
  text-align: right;
  padding-bottom: unset;
}

.pro_part_contact > .col > h4 {
  text-align: center;
}

.mr8 {
  margin-right: 8px;
}

.optional_form {
  margin-left: 2px;
  font-size: 9px;
}


a:not(.btn__large) {
  padding: 8px;
  transition: .3s ease-out;
}

a:hover:not(.btn__large),
a:focus:not(.btn__large) {
  border-radius: 5px;
  background-color: rgba(169, 169, 169, 0.18824);
  padding: 8px;
}

.yesIKnow {
  background-color: rgba(219, 80, 90, 0.68);
  border-radius: 4px;
  padding: 1rem 10px;
  margin-bottom: 1rem;
}
</style>
