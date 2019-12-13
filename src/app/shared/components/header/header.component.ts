import { Component, OnInit } from "@angular/core";

import {
  faShoppingCart,
  faUserPlus,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "shared-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;

  constructor() {}

  ngOnInit() {}
}
