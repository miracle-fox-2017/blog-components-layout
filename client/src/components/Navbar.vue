<template>
  <b-navbar class="sticky-top" toggleable="md" type="dark" variant="success">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand style="margin-left: 2%;" href="/">MyBlog</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span>User</span>
          </template>
          <b-dropdown-item href="/register">Register</b-dropdown-item>
          <b-dropdown-item href="/login">Login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>