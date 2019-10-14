import { SERVER_URL } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admequip",
  templateUrl: "./admequip.page.html",
  styleUrls: ["./admequip.page.scss"]
})
export class AdmequipPage implements OnInit {
  equipamentos: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(SERVER_URL.base_url + "equipamentos")
      .toPromise()
      .then(dados => {
        this.equipamentos = dados;
      })
      .catch(dados => {
        console.log(dados);
      });
  }
}
