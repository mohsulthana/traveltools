<template>
  <div id="app">
    <section>
      <b-container class="content-margin">
        <b-row>
          <b-card>
            <b-card-text class="text-dark">
              <font-awesome-icon :icon="['far', 'check-circle']" size="lg" class="mt-2" />
              <h3 class="font-weight-bold">Transfer Rupiah</h3>
              <p>
                Silahkan masukkan nominal Rupiah yang ingin anda transfer
              </p>
            </b-card-text>
            <b-form-input class="input" placeholder="Nominal Rp"></b-form-input>
            <b-button class="button-action">Bayar</b-button>
          </b-card>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundcolor: 'rgb(190, 190, 190)',
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');

.card {
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  min-height: 50px;
  margin-left: 2.5rem;
}
.card p {
  font-size: 1rem
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
.input {
  padding: 1rem 1rem;
  font-size: 1.8rem;
  color: #000;
  border: 0;
  border-radius: 3px;
  background: #fff;
  border: 2px solid #7675c8;
}
h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 300;
}
input[type="color"]{
  width:40px;
  border:1px solid black;
  margin:0px;
  padding:0px !important;
  height:40px;
}
</style>
