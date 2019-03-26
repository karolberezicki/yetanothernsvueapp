import { Vue, Component } from "vue-property-decorator";

import Gallery from "@/components/Gallery";

@Component({
  components: {
    Gallery
  }
})
export default class App extends Vue {
  log = [];
  msg = "Hello World!";
  toggle = false;
  onButtonTap(args) {
    console.log("Button tapped! " + new Date());
    this.msg = this.toggle ? "Hello World!" : "Goodbye!";
    this.toggle = !this.toggle;
    console.dir(args);
  }
}
