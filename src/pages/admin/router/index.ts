import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Bayar from '../views/RiwayatTransaksi.vue';
import Metode from '../views/MetodePembayaran.vue';
import Konfirmasi from '../views/TransferRupiah.vue';
import DataJamaah from '../views/DataJamaah.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/admin/bayar',
      name: 'bayar',
      component: Bayar,
    },
    {
      path: '/admin/metode-pembayaran',
      name: 'metode',
      component: Metode,
    },
    {
      path: '/admin/konfirmasi-transfer',
      name: 'konfirmasi',
      component: Konfirmasi,
    },
    {
      path: '/admin/data-jamaah',
      name: 'data-jamaah',
      component: DataJamaah,
    },
  ],
});
