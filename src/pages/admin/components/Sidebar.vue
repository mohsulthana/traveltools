<template>
  <div>
  <!-- Sidebar -->
    <div class="wrapper">
      <a href="">
        <div class="box-item active"></div>
        <div class="box-item"></div>
        <div class="box-item"></div>
      </a>
    </div>
  <!-- ./ Sidebar -->
  </div>
</template>

<script>
export default {

};
</script>


<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  width: 80px;
  background-color: #fff;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.wrapper .box-item {
  height: 45px;
  width: 45px;
  background: #aeaeb1;
}
.wrapper a .box-item {
  color: #000;
  position: relative;
  text-align: center;
  margin: 30% auto;
  top: 5%;
}
a .box-item.active:hover {
  background-color: #5755da;
  color: white;
}
a .box-item:not(:active) {
  background-color: #808080;
  color: white;
}
a .box-item.active {
  background-color: #7675c8;
  color: white;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .wrapper {
    width: 100%;
    height: 45px;
    position: relative;
    padding: 0;
  }
  .wrapper .box-item {
    height: 50px;
    width: 45px;
    background-color: #5755da;
  }
  .wrapper a .box-item {float: left;}
}
/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .wrapper a .box-item {
    height: 20%;
    text-align: center;
    float: none;
  }
}
</style>
