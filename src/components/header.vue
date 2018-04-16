<template>
    <header>
            <ul class="nav-bar">
                <li>
                    <nuxt-link class="nav-item" to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="nav-item" to="/users">Users</nuxt-link>
                </li>
            </ul>
    </header>
</template>
<style scoped>
.nav-bar{
    display: flex;
    justify-content:flex-end;    
    width: 100%;
    padding: 10px;
    background-color: darkslategrey;
     list-style: none;   
}
.nav-item{
    text-decoration: none;
    padding: 10px;
    margin:0;
    color: white;
}
</style>
