<template>     
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-side navbar-dark">
            <a href="index.html" class="navbar-brand mx-4 mb-3">
                <img class="me-lg-1 sidebar-logo" src="..\assets\images\ksi.png" alt="" style="width: 190px; height: 70px;">
            </a>

            <div class="navbar-nav w-100">
                <a href="/" class="nav-item nav-link" :class="{ 'active': $route.name === 'dashboard' }"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                <a href="/repository" class="nav-item nav-link" :class="{ 'active': $route.name === 'repository' }"><i class="fa fa-list me-2"></i>Repository</a>
                <a href="/journal" class="nav-item nav-link" :class="{ 'active': $route.name === 'journal' }"><i class="fa fa-book me-2"></i>Journal</a>
                <a href="/conference" class="nav-item nav-link" :class="{ 'active': $route.name === 'conference' }"><i class="fa fa-table me-2"></i>Conference</a>
                <a href="/customer" class="nav-item nav-link" :class="{ 'active': $route.name === 'customer' }"><i class="fa fa-user me-2"></i>Customers</a>
            </div>
        </nav>
    </div>
    <!-- Sidebar End -->
</template>

<script> 
export default {
 name: 'Side',
};
</script>

<style>

</style>
