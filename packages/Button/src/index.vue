<template>
  <el-button type="primary" @click="$emit('click', $event)">
    <slot></slot>
  </el-button>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
defineEmits(['click']);
</script>

<style scoped lang="less"></style>
