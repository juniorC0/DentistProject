import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-cmp",
  moduleId: module.id,
  templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  clientFirstName: string = "";
  clientLastName: string = "";
  clientPhoneNumber: string = "";
  clientAge: number;
  message: string = "";
}
