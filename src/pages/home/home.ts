import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  /**
   * Opens up the share sheet so you can share using the app you like the most.
   */
  regularShare(){
    // share(message, subject, file, url)
    SocialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "www/assets/img/hulk.jpg", null); 
  }

  /**
   * This share's directly via twitter using the:
   * shareViaTwitter(message, image, url)
   */
  twitterShare(){
    SocialSharing.shareViaTwitter("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.jpg", null); 
  }

  /**
   * This share's directly via whatsapp using the:
   * shareViaWhatsapp(message, image, url)
   */
  whatsappShare(){
    SocialSharing.shareViaWhatsApp("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.jpg", null); 
  }

  /**
   * This share's directly via Instagram using:
   * shareViaInstagram(message, image)
   */
  instagramShare(){
    SocialSharing.shareViaInstagram("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.jpg"); 
  }

}
