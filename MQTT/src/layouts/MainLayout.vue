<template>
    <div class="q-pa-md q-gutter-sm">
    <div class="q-col-gutter-md row justify-evenly items-center">
      <div class="col-6">
        <center>
          <q-img
            id="pic1"
            src="~assets/Wood.png"
            style="height: 300px; max-width: 150px; opacity:0.5;"
            opacity="0.2"
          />
        </center>
      </div>

      <div class="col-6">
       <center>
        <q-img
            id="pic2"
            src="~assets/Wood.png"
            style="height: 300px; max-width: 150px; opacity:0.25;"
          />
       </center>
      </div>
      <div class="col-12">
      <center>
      <q-btn align="between" class="btn-fixed-width" color="black" label="Install" @click="setCapacity()" />
      </center>
      </div>
      <div class="col-12">
      <center>
      <q-input filled v-model="token" label="Token" />
      </center>
      </div>
      <div class="col-12">
      <center>
      <q-btn align="between" class="btn-fixed-width" color="black" label="Connect Broker" @click="subscribe()" />
      </center>
      </div>
      <div class="col-6">
      <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Publish topic Second</div>
      </q-card-section>

      <q-card-section>
        <q-input filled v-model="message" label="Message" />
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn @click="publish_sec()" >Publish</q-btn>
      </q-card-actions>
    </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import MqttConnection from 'flespi-io-js/dist/mqtt'
// import bbt from 'beebotte'
// import { defaultSettings } from '../mixins/default.js'
export default {
  name: 'MainLayout',
  data () {
    return {
      opacity1: '',
      opacity2: 0.25,
      client: null,
      message: '',
      token: ''
    }
  },
  methods: {
    setCapacity () {
      this.publish()
    },
    publish () {
      if (this.client !== null && this.client.connected()) {
        this.client.publish('first', JSON.stringify('installing')).then(() => {
          console.log(this.client.on('message'))
          this.$q.notify({
            message: 'installing',
            caption: 'Message sent',
            color: 'secondary'
          })
          this.client.subscribe({ name: 'first', handler: (data, topic) => { console.log(`subscribed: ${data}`) } })
            .then(function (grants) { }).catch((e) => { console.log(e) })
        })
      } else {
        this.$q.notify({
          message: 'Broker Disconnect',
          caption: 'Message sent',
          color: 'red'
        })
      }
    },
    publish_sec () {
      if (this.client !== null && this.client.connected()) {
        this.client.publish('second', JSON.stringify(this.message)).then(() => {
          console.log(this.client.on('message'))
          this.$q.notify({
            message: this.message,
            caption: 'Message sent',
            color: 'secondary'
          })
          this.client.on('message', function (topic, message) {
            console.log('5555')
          })
          this.client.subscribe({ name: 'second', handler: (data, topic) => { this.opacity1 = `${data}` } })
            .then(function (grants) { }).catch((e) => { console.log(e) })
        })
      } else {
        this.$q.notify({
          message: 'Broker Disconnect',
          caption: 'Message sent',
          color: 'red'
        })
      }
    },
    test () {
      const haha = this.client.subscribe({ name: 'first' })
      console.log(haha)
    },
    subscribe () {
      return new Promise((resolve, reject) => {
        console.log(this.token)
        // const token = this.token
        this.client = new MqttConnection({
          token: 'e5n5TTWh3VRsks96OFvbaWQZptD9gfDkaQdSzXXqIEJQUIKwd5ydRc25tt4zxxHx',
          httpConfig: { server: 'https://flespi.io', port: 443 },
          socketConfig: {
            server: 'wss://mqtt.flespi.io',
            mqttSettings: {
              reschedulePings: true,
              keepalive: 420,
              resubscribe: false,
              reconnectPeriod: 5000,
              connectTimeout: 3600000
            }
          }
        })
        this.client.on('connect', () => {
          console.log('working')
          this.client.connected()
          this.$q.notify({
            message: 'Connected',
            caption: 'Message sent',
            color: 'secondary'
          })
          resolve('Work')
        })
      })
    },
    showNotif () {
      this.$q.notify({
        message: 'Jim pinged you.',
        caption: '5 minutes ago',
        color: 'secondary'
      })
    },
    async connector () {
      this.client.subscribe({ name: 'first', handler: (data, topic) => { return data } })
        .then(function (grants) { }).catch((e) => { console.log(e) })
      this.client.on('message', (topic, message) => {
        message = message.toString()
        console.log(topic)
      })
      console.log(this.client.subscribe())
      this.client.on('published', (packet) => {
        console.log(packet.payload)
      })
    }
  },
  created: async function () {
  },
  computed: {
  },
  watch: {
    'opacity1' () {
      const vm = this
      const message = vm.opacity1
      console.log(message)
      if (vm.opacity1 === '"next"') {
        document.getElementById('pic1').style.opacity = '1'
        document.getElementById('pic2').style.opacity = '0.5'
      } else {
        document.getElementById('pic1').style.opacity = '0.5'
        document.getElementById('pic2').style.opacity = '0.25'
      }
    },
    connector () {
      console.log('555')
    }
  }
}
</script>
