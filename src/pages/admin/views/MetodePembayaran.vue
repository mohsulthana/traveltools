<template>
  <div id="app">
    <section>
      <b-container class="content-margin">
        <b-row>
          <b-card>
            <b-card-text class="text-dark">
              <font-awesome-icon :icon="['far', 'check-circle']" size="lg" class="mt-2" />
              <h3 class="font-weight-bold">Metode Pembayaran</h3>
              <p>
                Silahkan pilih metode pembayaran
                untuk melanjutkan pembayaran uang
                muka.
              </p>
            </b-card-text>
            <b-row>
              <b-col class="sub-card">
                <p>Transfer Rupiah</p>
              </b-col>
              <b-col class="sub-card">
                <p>Transfer Dollar</p>
              </b-col>
              <b-col class="sub-card">
                <p>Bayar di Kantor</p>
              </b-col>
            </b-row>
            <b-button class="button-action">Lanjut</b-button>
          </b-card>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');

.card {
  display: flex;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 550px;
  padding: 2rem;
  margin-left: 2.5rem;
}
.sub-card {
  display: flex;
  border: 2px solid #5755da;
  border-radius: 10px;
  padding: 1.2rem;
  margin: .5rem;
}
.card p {
  font-size: 1rem
}
.sub-card p {
  font-size: .8rem;
  padding-left: .5em;
}
section{
  position: absolute;
  top: 25%;
  left: 25%;
}
.button-action:hover {
  background-color: #5755da;
}
.button-action {
  width: 100%;
  height: inherit;
  margin-top: 30px;
  background-color: #7675c8;
  bottom: 0px;
  font-family: 'Proza Libre', sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
html, body {
  height: 100%;
}
</style>
