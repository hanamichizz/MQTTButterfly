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
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      opacity1: 0.5,
      opacity2: 0.25
    }
  },
  methods: {
    setCapacity () {
      this.opacity1 = 5
      this.$q.notify({
        message: 'installing',
        caption: 'Message sent',
        color: 'secondary'
      })
    },
    showNotif () {
      this.$q.notify({
        message: 'Jim pinged you.',
        caption: '5 minutes ago',
        color: 'secondary'
      })
    }
  },
  created: async function () {

  },
  watch: {
    'opacity1' () {
      document.getElementById('pic1').style.opacity = '1'
      document.getElementById('pic2').style.opacity = '0.5'
    }
  }
}
</script>
