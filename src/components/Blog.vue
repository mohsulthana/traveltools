<template>
  <div>
    <section>
      <b-container>
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
    <b-container>
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
              <h6 class="text-left">WAKTU KEBERANGKATAN</h6>
                <ul id="li-image">
                  <li>Maret 2018</li>
                  <li>Juni 2018</li>
                </ul>
            </b-col>
            <b-col lg="6" xs="12">
              <h6 class="text-left">LAMA WAKTU UMROH</h6>
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
              <b-row>
              <b-col lg="5" xs="12">
                <div id="li-image"></div>
                <p class="text-left font-weight-bold">Quad</p>
                <p class="text-left font-weight-bold">Triple</p>
                <p class="text-left font-weight-bold">Double</p>
              </b-col>
              <b-col lg="5" xs="12">
                <p class="text-left">(1 Kamar 4 Tempat Tidur)</p>
                <p class="text-left">(1 Kamar 3 Tempat Tidur)</p>
                <p class="text-left">(1 Kamar 2 Tempat Tidur)</p>
              </b-col>
              <b-col lg="2" xs="12">
                <p class="text-left font-weight-bold">$3500</p>
                <p class="text-left font-weight-bold">$3700</p>
                <p class="text-left font-weight-bold">$3900</p>
              </b-col>
              <small
                class="text-info"
                >*Harga belum termasuk biaya perlengkapan sebesar Rp2.500.000</small>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- ./ Schedule -->

    <!-- Fasilitas Tab -->
    <section>
      <b-container>
        <b-tabs content-class="mt-3" fill>
          <!-- Fasilitas -->
          <b-tab title="Fasilitas">
          </b-tab>

          <!-- Persyaratan -->
          <b-tab title="Persyaratan" class="text-left">
            <div class="mt-5 persyaratan">
              <h3>Persyaratan Tools.Travel</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem aliquam porro fuga quo quis quae,
                illum culpa quam expedita itaque quibusdam soluta
                vero blanditiis debitis sapiente ea,
                consequuntur eius placeat?</p>
                <br>
              <p class="font-weight-bold">Persyaratan Berkas</p>
              <ul>
                <li>Paspor Asli berlaku minimal 8 bulan dan nama di paspor,
                  harus minimal 5 kata. <br>
                  Contoh: Abdullah Arif Sungkar
                </li>
                <li>Menyertakan nama ayah & nama ibu
                  (Persyaratan Visa Turki)
                </li>
              </ul>
            </div>
          </b-tab>
          <b-tab title="Hotel"><p>I'm the tab with the very, very long title</p></b-tab>
          <b-tab title="Itenerary"><p>I'm the tab with the very, very long title</p></b-tab>
          <b-tab title="Gallery"><p>I'm the tab with the very, very long title</p></b-tab>
        </b-tabs>
      </b-container>
    </section>
    <!-- ./ Fasilitas Tab -->

    <!-- Paket Umroh Lain -->
    <section id="paket-lain">
      <b-container class="py-5">
        <div class="py-3">
          <h3 class="text-left">Paket Umroh yang Lainnya</h3>
          <h6 class="text-left text-info">3 Paket Tersedia</h6>
        </div>
        <div class="mt-3">
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right>
                <h4 class="text-left">Umroh + Aqsha Palestina</h4>
                <p class="text-left text-info">April & Juli 2019</p> <br><br>
              <div class="card-body d-flex flex-column">
                <b-container>
                  <b-row align-v="end">
                    <b-col lg="6" xs="12" class="text-left">
                      <h4 class="font-weight-bold">$4200</h4>
                      <p>+ Rp2.500.000 (Biaya Perlengkapan)</p>
                    </b-col>
                    <b-col lg="6" xs="12">
                      <b-button class="action-button" style="float: right;">SELENGKAPNYA</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right>
                <h4 class="text-left">Umroh + Aqsha Palestina</h4>
                <p class="text-left text-info">April & Juli 2019</p> <br><br>
              <div class="card-body d-flex flex-column">
                <b-container>
                  <b-row align-v="end">
                    <b-col lg="6" xs="12" class="text-left">
                      <h4 class="font-weight-bold">$4200</h4>
                      <p>+ Rp2.500.000 (Biaya Perlengkapan)</p>
                    </b-col>
                    <b-col lg="6" xs="12">
                      <b-button class="action-button" style="float: right;">SELENGKAPNYA</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-right>
                <h4 class="text-left">Umroh + Aqsha Palestina</h4>
                <p class="text-left text-info">April & Juli 2019</p> <br><br>
              <div class="card-body d-flex flex-column">
                <b-container>
                  <b-row align-v="end">
                    <b-col lg="6" xs="12" class="text-left">
                      <h4 class="font-weight-bold">$4200</h4>
                      <p>+ Rp2.500.000 (Biaya Perlengkapan)</p>
                    </b-col>
                    <b-col lg="6" xs="12">
                      <b-button class="action-button" style="float: right;">SELENGKAPNYA</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
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
section {
  margin-top: 100px
}
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
}
.persyaratan {
  font-family: Montserrat;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
</style>
