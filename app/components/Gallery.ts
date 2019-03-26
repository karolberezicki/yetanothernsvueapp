import { Vue, Component } from "vue-property-decorator";
import { SwipeDirection } from "tns-core-modules/ui/gestures";
import { action } from "tns-core-modules/ui/dialogs";
import * as clipboard from "nativescript-clipboard";
import * as Toast from "nativescript-toast";
import * as SocialShare from "nativescript-social-share";
import { Vibrate } from "nativescript-vibrate";

@Component
export default class Gallery extends Vue {
  index = 0;
  imageSources = [
    "https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1552224/pexels-photo-1552224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1094246/pexels-photo-1094246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1198817/pexels-photo-1198817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1586473/pexels-photo-1586473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];

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

  onSwipe(args) {
    if (args.direction === SwipeDirection.left) {
      this.nextImage();
    }
    if (args.direction === SwipeDirection.right) {
      this.previousImage();
    }
  }
}
