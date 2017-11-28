<template>
  <ul class="nav navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Storyshare</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="dropdown active">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Article <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="/admin">Article List</router-link></li>
              <li><a data-toggle="modal" data-target="#new-article">New Article</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </ul>
</template>
<script type="text/javascript">
export default{}
</script>
