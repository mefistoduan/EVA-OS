<template>
        <div class="container">
            <ul>
                <li :class="[{'box animate__animated animate__flipInX':state}]" >
                    <h5>this is title</h5>
                    <div class="cube">
                        <span>123</span>
                        <span>345</span>
                        <span>678</span>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
    export default {
        props: ['state'],
    }
</script>

<style scoped>
    .pages {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #009FE9;
    }
    li {
        width: 200px;
        height: 100px;
        display: block;
        border: 1px solid #fff;
        color: #fff;
        background-color: #333;
    }
</style>