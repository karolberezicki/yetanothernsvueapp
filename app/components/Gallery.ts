import { Vue, Component } from "vue-property-decorator";
import { SwipeDirection, SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { action } from "tns-core-modules/ui/dialogs";
import * as clipboard from "nativescript-clipboard";
import * as Toast from "nativescript-toast";
import * as SocialShare from "nativescript-social-share";
import { Vibrate } from "nativescript-vibrate";
import { CatApi } from '@/shared/CatApi'
import axios from 'axios'

@Component
export default class Gallery extends Vue {
  cats: CatApi.SearchResult[] = [];
  index = 0;

  created() {
    console.log("Created!");
    axios.request<CatApi.SearchResult[]>({
      url: 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=Desc'
    }).then((response) => {
      this.cats = response.data;
      console.log("Cats loaded!");
    });
  }

  get imageSources() {
    return this.cats.map(c => c.url);
  }

  get currentImage() {
    return this.imageSources[this.index];
  }

  nextImage() {
    let nextIndex = this.index + 1;
    this.index = nextIndex >= this.imageSources.length ? 0 : nextIndex;
    console.log("Next image executed!");
  }

  previousImage() {
    let nextIndex = this.index - 1;
    this.index = nextIndex < 0 ? this.imageSources.length - 1 : nextIndex;
    console.log("Previous image executed!");
  }

  onTap() {
    console.log("Image tapped!");
  }

  onLongPress() {
    console.log("Image long pressed!");
    const vibrator = new Vibrate();
    vibrator.vibrate(100);
    const copyOption = "Copy address";
    const shareOption = "Share";
    action("Copy source to clipboard?", "Cancel", [
      copyOption,
      shareOption
    ]).then(result => {
      if (result === copyOption) {
        clipboard.setText(this.currentImage);
        var toast = Toast.makeText(`Copied source: ${this.currentImage}`);
        toast.show();
      }
      if (result === shareOption) {
        SocialShare.shareUrl(this.currentImage, "Check out this photo!");
      }
      console.log(result);
    });
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === SwipeDirection.left) {
      this.nextImage();
      return;
    }
    if (args.direction === SwipeDirection.right) {
      this.previousImage();
      return;
    }
  }
}
