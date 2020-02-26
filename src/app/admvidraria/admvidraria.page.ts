import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";

@Component({
  selector: "app-admvidraria",
  templateUrl: "./admvidraria.page.html",
  styleUrls: ["./admvidraria.page.scss"]
})
export class AdmvidrariaPage implements OnInit {
  vidrarias: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.http
      .get(SERVER_URL.base_url + "vidrarias")
      .toPromise()
      .then(dados => {
        this.vidrarias = dados;
      })
      .catch(dados => {
        console.log(dados);
      });
  }

  AtualizaVidraria(vidraria: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: vidraria.id,
        nome: vidraria.nome,
        quantidade: vidraria.quantidade
      }
    };
    this.router.navigate(["editvidraria"], navigationExtras);
  }
  async alertExcluir(vidraria: any) {
    let alert = await this.alert.create({
      header: "EXCLUIR " + vidraria.nome,
      subHeader:
        "Relamente deseja EXCLUIR PERMANENTEMENTE a vidraria do sistema?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiVidraria(vidraria.id);
          }
        }
      ]
    });
    await alert.present();
  }
  ExcluiVidraria(vidraria_id) {
    this.http
      .delete(SERVER_URL.base_url + "vidrarias/" + vidraria_id)
      .toPromise()
      .then(responde => {
        this.atualizaLista();
      });
  }
}
