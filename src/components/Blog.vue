<template>
  <div>
    <section id="jumbotron-image">
      <b-container grid-list-xl>
        <!-- Jumbotron image -->
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Umroh & Wisata Sejarah"
          class="jumbotron-image mb-5">
        </b-card>
      </b-container>
    </section>

      <!-- Schedule -->
    <b-container grid-list-xl>
      <b-row>
        <b-col lg="6" xs="12">
          <h2 class="text-left">Umroh & Wisata Sejarah</h2>
          <p class="text-left">Nikmati kenyamanan Ibadah Umroh bersama
            Uhud Tour dengan menyelami kegemilangan sejarah Rasulullah
            dan Khulafaur Rasyidin disampaikan dengan sangat menarik
            oleh Ustadz Khalid Basalamah ditambah dengan mengunjungi pusat
            pemerintahan Islam di daratan Romawi Timur di masa pemerintahan
            Daulah Ustmaniyyah.
          </p>
          <b-button class="action-button">Daftar sekarang</b-button>
        </b-col>
        <b-col lg="6" xs="12">
          <b-row>
            <b-col lg="6" xs="12">
              <h6>WAKTU KEBERANGKATAN</h6>
                <ul id="li-image">
                  <li>Maret 2018</li>
                  <li>Juni 2018</li>
                </ul>
            </b-col>
            <b-col lg="6" xs="12">
              <h6>LAMA WAKTU UMROH</h6>
                <ul id="li-image">
                  <li>9 Hari</li>
                  <li>5 Hari</li>
                </ul>
            </b-col>
          </b-row>
          <hr>
          <b-row>
            <b-col lg="12" xs="12">
              <h6 class="text-left">PAKET KAMAR</h6>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- ./ Schedule -->

    <!-- Fasilitas Tab -->
    <b-container>
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Fasilitas" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Persyaratan"><p>I'm the second tab</p></b-tab>
        <b-tab title="Hotel"><p>I'm the tab with the very, very long title</p></b-tab>
        <b-tab title="Itenerary"><p>I'm the tab with the very, very long title</p></b-tab>
        <b-tab title="Gallery"><p>I'm the tab with the very, very long title</p></b-tab>
      </b-tabs>
    </b-container>
    <!-- ./ Fasilitas Tab -->

    <!-- Paket Umroh Lain -->
    <section id="paket-lain">
      <b-container class="py-5">
        <h3 class="text-left">Paket Umroh yang Lainnya</h3>
        <h6 class="text-left">3 Paket Tersedia</h6>
        <div class="mt-3">
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right
            class="card-img-right">
              <b-card-text>
                <h4 class="text-left">Umroh + Aqsha Palestina</h4>
                <p class="text-left">April & Juli 2019</p>
                <b-container>
                  <b-row align-v="end">
                    <b-col lg="6">
                      <h4>$4200</h4>
                      <small>+ Rp2.500.000 (Biaya Perlengkapan)</small>
                    </b-col>
                    <b-col lg="6">
                      <b-button class="action-button">SELENGKAPNYA</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card-text>
          </b-card>
        </div>
      </b-container>
    </section>
    <!-- ./Paket Umroh Lain -->
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

#paket-lain {
  background-color: #f7f4f4;
}
#li-image {
  font-size: 12px;
  line-height: 3em;
  list-style-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/treehouse-marker.png);
}
.jumbotron-image {
  margin-top: 100px;
  opacity: 0.57;
  background-image: linear-gradient(to right, #b7b6f9, #ffdbdb);
}
.action-button {
  width: 250px;
  height: 50px;
  margin-bottom: 50px;
  background-color: rgb(250, 98, 27);
  color: #fff;
  padding: 0;
  border: none;
  float: left;
}
.footer-paket-card {
  position: absolute;
  bottom: 0;
}
</style>
