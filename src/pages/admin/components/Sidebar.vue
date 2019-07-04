<template>
    <!-- Sidebar -->
    <div class="wrapper">
    <nav id="sidebar">
      <ul class="list-unstyled components">
          <li>
              <div class="box-item"></div><br>
              <div class="box-item"></div><br>
              <div class="box-item"></div>
          </li>
      </ul>
    </nav>
  </div>
  <!-- ./ Sidebar -->
</template>

<script>
export default {

};
</script>


<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
#sidebar {
  display: flex;
  justify-content: center;
  width: 80px;
  min-height: 100vh;
  position: fixed;
  background: #fff;
  color: #000;
}
.box-item {
  position: relative;
  top: 60px;
  height: 45px;
  width: 45px;
  background: #7675c8;
}
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
}
</style>
