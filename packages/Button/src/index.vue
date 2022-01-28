<template>
  <div class="ss-button-container">
    <span class="title">标题</span>
    <el-button type="primary">
      <slot></slot>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
</script>

<style scoped lang="scss">
.ss-button-container {
  .title {
    color: red;
  }
}
</style>
