<template>
  <StackLayout>
    <Label text="Swipe to view more!"/>
    <Image
      :src="currentImage"
      stretch="aspectFit"
      @tap="onTap"
      @longPress="onLongPress"
      @swipe="onSwipe"
    />
    <Label :text="index"/>
  </StackLayout>
</template>

<script lang="ts" src="./Gallery.ts"></script>

<style scoped>
label {
  color: #fff;
  font-size: 32;
}
</style>
