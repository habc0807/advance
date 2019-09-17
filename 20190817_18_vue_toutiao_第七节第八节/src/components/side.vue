<template>
    <nav>
        <!-- <div class="toolbar">
            <span class="backBtn" v-on:click="$emit('more', 'hide')">
                <a></a>
            </span>
            <span class="title">
                <a href="">频道管理</a>
            </span>
        </div>
        <ul class="controlDetail">
            <li class="channelFigure tuijian" v-for="(tab, index) in tabs" :key="index">
                <a>{{tab.label}}</a>
            </li>
        </ul> -->
        <div class="nav-content">
            <span 
                v-for="(tab, name) in tabs"
                v-bind:key="name"
                v-bind:data-name="name"
                v-on:click="$emit('select', name)"
            >
                {{tab.label}}
            </span>
        </div>
        <a class="more_btn" v-on:click.prevent="$emit('more')">
            <span class="cross">+</span>
        </a>
    </nav>
</template>
<script>
export default {
    props: ['tabs'],
    mounted() {
        console.log('head: ' + this.$parent)
    },
    methods: {
        clicking() {
            // emit 发射
            console.log('click!!!', this.$emit)
        }
    }
}
</script>
<style lang="css" scoped>
    .toolbar {
        width: 100%;
        height: 50px;
        position: relative;
        background: #d43d3d;
    }
    .toolbar span {
        display: block;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
    }
    .toolbar .backBtn {
        width: 44px;
    }
</style>