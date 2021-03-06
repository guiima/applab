import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";
import { timer } from "rxjs";

@Component({
  selector: "app-editequip",
  templateUrl: "./editequip.page.html",
  styleUrls: ["./editequip.page.scss"]
})
export class EditequipPage implements OnInit {
  id: any;
  nome: any;
  disponivel: any;

  new_nome: any;
  new_disponivel: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.nome = params.nome;
      this.disponivel = params.disponivel;
      console.log("params", params);
    });
  }

  ngOnInit() {}

  teste(event) {
    this.disponivel = event.target.value;
    // console.log(event.target.value);
  }

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Equipamento atualizado com sucesso!",
      subHeader: "Redirecionando...",
      buttons: [
        {
          text: "Fechar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  atualiza() {
    console.log("asasa", this.disponivel);
    let json = {
      nome: this.nome,
      disponivel: this.disponivel
    };

    console.log("aow", json.disponivel);

    this.http
      .put(SERVER_URL.base_url + "equipamentos/" + this.id, json)
      .toPromise()
      .then(resposde => {
        console.log(resposde);

        this.confirmacaoAlert();
        timer(1000).subscribe(() => {
          this.router.navigate(["admin"]);
        });
      })
      .catch(responde => {
        console.log(responde);
      });
  }
}
