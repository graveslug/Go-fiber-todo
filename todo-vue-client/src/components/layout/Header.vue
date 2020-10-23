<template>
    <div>
        <header>
            <h1><router-link to="*">ToDo</router-link></h1>
                <ul>
                    <li><router-link to="/signup">Signup</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </ul>
        </header>
    </div>
</template>

<style scoped>
    header {
      width: 100%;
      height: 5rem;
      background-color: #696969;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    header a {
      text-decoration: none;
      color: ghostwhite;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border: 1px solid transparent;
    }
    a:active,
    a:hover,
    a.router-link-active {
      border: 1px solid #43A047;
      color: #43A047;
    }
    h1 {
      margin: 0;
    }
    h1 a {
      color: ghostwhite;
      margin: 0;
    }
    h1 a:hover,
    h1 a:active,
    h1 a.router-link-active {
      border-color: transparent;
    }
    header nav {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      margin: 0 0.5rem;
    }
</style>
