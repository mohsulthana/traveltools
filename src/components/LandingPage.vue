<template>
  <div>
    <!-- Jumbotron -->
    <b-jumbotron>
      <b-container>
        <b-row align-h="start">
          <b-col cols="6">
            <h3 class="display-3">Umroh & Mengkaji Sejarah Ustmani bersama Tools.Travel</h3>
            <h3 class="lead">Tools.Travel lorem ipsum de amat</h3>
          </b-col>
        </b-row>
      <!-- Card -->
      <b-card no-body class="umroh-select" style="max-width: 740px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col>Icon</b-col>
                  <b-col>
                    <b-row>
                      <b-card-text class="text-muted">Paket Umroh</b-card-text>
                    </b-row>
                    <b-row>
                      <b-card-text>
                        <b-form-select
                        v-model="selected"
                        :options="options">
                        </b-form-select>
                      </b-card-text>
                    </b-row>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6" class="pr-4">
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col>Icon</b-col>
                  <b-col>
                    <b-row>
                      <b-card-text class="text-muted">
                        Waktu Keberangkatan
                      </b-card-text>
                    </b-row>
                    <b-row>
                      <b-card-text>
                        <b-form-input type="date"></b-form-input>
                      </b-card-text>
                    </b-row>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- ./Card -->
        <b-col
          md="4"
          class="mr-auto mt-3">
        <b-button class="text-light search">SEARCH</b-button>
        </b-col>
      </b-container>
    </b-jumbotron>
    <!-- ./ Jumbotron -->

    <!-- Banner -->
    <section id="banner">
      <b-container>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <div class="container-overlay">
                  <img height="320" width="560" src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg" alt="">
                  <p class="bottom-right text-right">
                    <span class="display-4 text-light">$4200</span>
                    <br />
                    <span class="text-muted">+ Rp.2.500.000 (Perlengkapan)</span></p>
                </div>
                  <p class="bottom-right"></p>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <b-card-text>
                    <h3
                    class="text-left font-weight-bold">
                    Paket Umroh + Wisata Sejarah Andalusia</h3>
                    <p class="text-left">Umroh bersama Ustadz Khalid Basalamah,
                    dilanjutkan dengan Tour Sejarah Bangkit dan Runtuhnya
                    Islam di Andalusia.</p>
                  </b-card-text>
                  <b-button class="text-light selengkapnya">Selengkapnya</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </b-container>
    </section>
    <!-- ./ Banner -->

    <!-- Paket Umroh -->
    <section id="paket-umroh" class="mt-5">
      <div>
        <b-container>
          <h4>Paket Umrol Tools.Travel</h4>
          <h5>Nikmati berbagai paket Umroh yang tersedia di Tools.Travel</h5>
            <b-card-group deck class="mt-3">
              <b-card
                overlay
                img-src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg"
                img-alt="Image"
                img-top
                text-variant="white"
                title="$1600"
                sub-title="+ Rp.2.500.000 (Perlengkapan)">
                <div slot="header" class="text-dark text-left">
                  <b-row><p class="text-left">Paket Bronze</p></b-row>
                </div>
                <div slot="footer" class="text-dark text-left">
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-button class="pesan">PESAN SEKARANG</b-button>
                  <h5 class="text-center mt-2">SELENGKAPNYA</h5>
                </div>
              </b-card>
              <b-card
                overlay
                img-src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg"
                img-alt="Image"
                img-top
                text-variant="white"
                title="$1600"
                sub-title="+ Rp.2.500.000 (Perlengkapan)">
                <div slot="header" class="text-dark text-left">
                  <b-row><p class="text-left">Paket Bronze</p></b-row>
                </div>
                <div slot="footer" class="text-dark text-left">
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-button class="pesan">PESAN SEKARANG</b-button>
                  <h5 class="text-center mt-2">SELENGKAPNYA</h5>
                </div>
              </b-card>
              <b-card
                overlay
                img-src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg"
                img-alt="Image"
                img-top
                text-variant="white"
                title="$1600"
                sub-title="+ Rp.2.500.000 (Perlengkapan)">
                <div slot="header" class="text-dark text-left">
                  <b-row><p class="text-left">Paket Bronze</p></b-row>
                </div>
                <div slot="footer" class="text-dark text-left">
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p class="text-left text-dark">Program 9 Hari</p>
                    </b-col>
                    <b-col>
                      <p class="text-left">Icon conteng</p>
                    </b-col>
                  </b-row>
                  <b-button class="pesan">PESAN SEKARANG</b-button>
                  <h5 class="text-center mt-2">SELENGKAPNYA</h5>
                </div>
              </b-card>
            </b-card-group>
        </b-container>
      </div>
    </section>
    <!-- ./ Paket Umroh -->

    <!-- Video -->
    <section id="video">
      <div>
        <b-container>
          <b-row align-self="center">
            <b-col md="4">
              <h2 class="text-left">Umroh & Tour Sejarah Daulah Utsmaniyah</h2>
              <p class="text-left">Uhud Tour menyajikan pelayanan Umroh berkualitas
                dibimbing langsung oleh Ustadz Khalid Basalamah
                dengan mengupas sejarah Daulah Utsmaniyah.
              </p>
            </b-col>
            <b-col>
              <img height="200" width="400" src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg" alt="" class="rounded mx-auto d-block">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
    <!-- ./Video -->
    <section>
      <Action />
    </section>
  </div>
</template>

<script>
import Action from '@/components/CallToAction';

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },
  components: {
    Action,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.umroh-select {
  width: 748px;
  height: 100.5px;
  border-radius: 3.9px;
  box-shadow: -5.3px 5.3px 10.5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}
.search {
  width: 133px;
  height: 45px;
  margin-right: 500px;
  background-color: #b7b6f9;
  font-family: Montserrat;
}
.lead {
  width: 507px;
  height: 41.5px;
  font-family: Montserrat;
  font-size: 19.5px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.display-3 {
  font-family: Montserrat;
  font-size: 46.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  font-family: Montserrat;
  font-size: 46.5px;
}

.container-overlay {
  position: relative;
  text-align: center;
  color: white;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 30px;
}
#video {
  margin-top: 280px;
  margin-bottom: 344.5px;
}
.email {
  width: 521px;
  height: 60.5px;
  border-radius: 5px;
  background-color: #ffffff;
}
.pesan {
  width: 313.5px;
  height: 41px;
  background-color: #b7b6f9;
  outline: 0px;
}
.selengkapnya {
  width: 206px;
  height: 48px;
  background-color: #7675c8;
}

.paket {
  box-shadow: -7.1px 7.1px 25px 0 rgba(0, 0, 0, 0.05);
}
.rounded-card {
  border-radius: 10px;
}
.btn-action {
  width: 156px;
  height: 60.5px;
  font-size: 14px;
  border-radius: 1.5px;
  background-color: #7675c8;
}
</style>
