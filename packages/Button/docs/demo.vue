<template>
  <div>
    <SSButton @click="onClick(1)">第一个</SSButton>
    <SSButton @click="onClick(2)">第二个</SSButton>
    <SSButton @click="onClick(3)">第三个</SSButton>
  </div>
</template>

<script setup>
const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>