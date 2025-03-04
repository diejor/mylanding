<template>
    <div id="page">
        <header>
            <nav>
                <div class="logo">
                    <NuxtLink to="/">My Academic Page</NuxtLink>
                </div>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/playground">Playground</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <NuxtPage />
        </main>
        <footer>
            © 2025 Diego Rodrigues. All rights reserved.
        </footer>
    </div>
</template>

<style>
@import "public/styles.css";
</style>