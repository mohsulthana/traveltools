<template>
  <div>
    <div class="box"></div>
    <div class="navbar">
      <div class="navbar-link navbar-link-brand mb-5">
        Brand
      </div>
      <div class="navbar-link navbar-link-toggle" @click="toggle" >
        <font-awesome-icon icon="bars"/>
      </div>
      <nav class="navbar-items navbar-items-right">
        <font-awesome-icon :icon="['far', 'bell']" size="lg" class="mt-2 mr-5" />
        <b-img height="40" width="40" src="https://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg" rounded="circle" alt="Circle image"></b-img>
        <ul class="menu">
          <li>Farhan</li>
          <ul class="sub-menu">
            <li>Edit profile</li>
          </ul>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default ({
  methods: {
    toggle() {
      document.querySelector('.navbar-link-toggle').addEventListener('click', this.classToggle);
    },
    classToggle() {
      const navs = document.querySelectorAll('.navbar-items');
      navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
    },
  },
});
</script>

<style scoped>
.navbar {
  height: 80px;
  background-color: #fff;
  padding: 16px;
  font-family: sans-serif;
  color: black;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
.box {
  position: fixed;
  top: 0;
  z-index: 3;
  height: 80px;
  width: 80px;
  background-color: #7675c8;
}
.menu {
  float: left;
}
.menu > li:hover {
  color: #7675c8;
  transition: all 300ms ease-in-out;
}
.menu > li {
  display: inline-block;
  color: #000;
  padding-top: 10px;
  cursor: pointer;
  font-size: 17px;
}
.sub-menu {
  transform: scale(0);
  transform-origin: top center;
  transition: all 300ms ease-in-out;
}
.sub-menu li {
  display: inline-block;
  font-size: 14px;
  padding: 8px 0;
  color: #000;
  /*display: none;*/
  transform: scale(0);
  transform-origin: top center;
  transition: all 300ms ease-in-out;
}
.sub-menu li:hover {
  background: #7675c8;
  color: #fff;
}
.menu > li:hover .sub-menu li{
  /*display: block;*/
  transform: scale(1);
}
.menu > li:hover .sub-menu {
  transform: scale(1);
}
.navbar-items {
  display: flex;
}
.navbar-link {
  padding-right: 10px;
}
.navbar_items-right {
  margin-left:auto;
}
.navbar-link-brand {
  margin-left: 90px;
}
.navbar-link-toggle {
  display: none;
}

/* Media Queries */
@media only screen and (max-width: 768px) {
  .navbar-items, .navbar {
   flex-direction: column;
  }
  .navbar-items {
    display: none;
  }
  .navbar-items-right {
    margin-left: auto;
  }
  .navbar-link-toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
  }
  .navbar-toggle-show {
    display: inline-block;
  }
  .box {
    width: 40px;
    height: 40px;
  }
}
</style>
