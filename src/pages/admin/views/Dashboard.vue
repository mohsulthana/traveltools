<template>
  <div id="app">
    <b-card class="my-5 mx-5 py-5 px-5">
      <b-card-text class="text-dark">
        <h2>Icon</h2>
        <h3>Transfer Rupiah</h3>
        <p class="lead">
          Silahkan masukkan nominal Rupiah yang ingin anda transfer
        </p>
      </b-card-text>
      <b-form-input class="input" placeholder="Nominal Rp"></b-form-input>
      <b-button class="button-action">Bayar</b-button>
    </b-card>
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
#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .input {
    padding: 1rem 1rem;
    font-size: 1.8rem;
    color: #000;
    border: 0;
    border-radius: 3px;
    background: #fff;
    border: 2px solid #7675c8;
  }
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
