import { Vue, Component } from "vue-property-decorator";
import { GestureEventData } from "tns-core-modules/ui/gestures";

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
  onButtonTap(args : GestureEventData) {
    console.log("Button tapped! " + new Date());
    this.msg = this.toggle ? "Hello World!" : "Goodbye!";
    this.toggle = !this.toggle;
    console.dir(args);
  }
}
