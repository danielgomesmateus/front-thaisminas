<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nome"
              required
              hint="Informe o seu nome completo"
            ></v-text-field>
        
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              hint="Informe o email de contato"
            ></v-text-field>

            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Telefone"
              required
              hint="Informe o telefone de contato"
            ></v-text-field>

            <v-textarea
              v-model="message"
              :rules="messageRules"
              name="input-7-1"
              label="Mensagem"
              required
              hint="Informe o motivo do seu contato"
            ></v-textarea>
        
            <v-btn
              color="success"
              class="mr-4"
              @click="save"
            >
              Enviar contato
            </v-btn>

          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Informe o seu nome completo',
        v => (v && v.length >= 3) || 'O nome informado é inválido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Informe um email válido',
        v => /.+@.+\..+/.test(v) || 'Email inválido',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Informe o seu telefone de contato',
        v => (v && v.length <= 16) || 'O telefone informado é inválido',        
      ],
      message: '',
      messageRules: [
        v => !!v || 'Informe o motivo do contato',
        v => (v && v.length <= 10) || 'O motivo do contato é inválido',         
      ]
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      save () {
        console.log(this.validate())
        if (this.validate()) {
          axios
            .post(`https://api.thaisminas.com.br/v1/contacts/`)
            .then(response => {
              console.log(response)
            })
        }
      }
    },
  }
</script>