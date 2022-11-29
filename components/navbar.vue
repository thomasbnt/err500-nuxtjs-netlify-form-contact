<template>
  <div class="main_menu">
    <nav>
      <ul>
        <li class="links__menu_item">
          <nuxt-link to="/" class="links__menu">
            Home
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li class="links__menu_item">
          <nuxt-link to="contact" class="links__menu">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",

}
</script>
<style scoped>
.main_menu {
  z-index: 500;
  width: 100%;
  box-shadow: 0 6px 6px #00000021;
}
nav {
  font-family: 'Open Sans', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", sans-serif;
  width: 100%;
  position: sticky;
  top: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: .5rem 2rem;
  scroll-snap-type: x mandatory;
  overflow: auto;
  flex: none;
  user-select: unset;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

nav > ul {
  list-style-type: none;
}

nav > ul > li {
  display: inline-block;
}

nav:first-of-type {
  z-index: 35;
}

nav:last-of-type {
  z-index: 30;
}

nav > ul {
  display: flex;
  align-items: center;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
  flex: none;
}

nav > ul > li.links__menu_item > a.links__menu {
  transition: .3s;
  font-weight: 600;
  padding: 10px;
  color: black;
}

nav > ul > li.links__menu_item > a.links__menu:hover, nav > ul > li.links__menu_item > a.links__menu:hover {
  transition: .3s;
  color: #424446bf;
  offset: 100px;
}

@media (prefers-color-scheme: dark) {
  nav > ul > li.links__menu_item > a.links__menu:hover, nav > ul > li.links__menu_item > a.links__menu:hover {
    transition: .3s;
    color: #cd8080;
  }
}

nav > ul > li > a.nuxt-link-exact-active {
  background-color: #d2d2d269;
  border-radius: 5px;
}

@media (prefers-color-scheme: dark) {
  nav > ul > li > a.nuxt-link-exact-active {
    color: #ea9f9f !important;
    background-color: #dcdcdc17;
  }
}

@media (max-width: 750px) {
  .main_menu {
    position: relative;
    margin-bottom: 0;
  }
}


.links__menu_item {
  margin: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-sizing: border-box;
  scroll-snap-align: center;
}

.links__menu_item:last-of-type {
  padding-right: .4rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>
