  <template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!"/>
    <StackLayout backgroundColor="#3c495e">
      <GridLayout rows="auto, auto" verticalAlignment="center" backgroundColor="#FFFFFF">
        <Label class="message" :text="msg" col="0" row="0"/>
        <Button text="Tap me!!" @tap="onButtonTap" col="0" row="1"/>
      </GridLayout>
      <Gallery/>
    </StackLayout>
  </Page>
</template>

<script lang="ts" src="./App.ts"></script>
<style scoped src="./App.css"></style>
