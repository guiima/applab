import { SERVER_URL } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-admequip",
  templateUrl: "./admequip.page.html",
  styleUrls: ["./admequip.page.scss"]
})
export class AdmequipPage implements OnInit {
  equipamentos: any;
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
      .get(SERVER_URL.base_url + "allequip")
      .toPromise()
      .then(dados => {
        this.equipamentos = dados;
      })
      .catch(dados => {
        console.log(dados);
      });
  }

  AtualizaEquip(equipamento: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: equipamento.id,
        nome: equipamento.nome,
        disponivel: equipamento.disponivel
      }
    };
    this.router.navigate(["editequip"], navigationExtras);
  }
  async alertExcluir(equipamento: any) {
    let alert = await this.alert.create({
      header: "EXCLUIR " + equipamento.nome,
      subHeader:
        "Relamente deseja EXCLUIR PERMANENTEMENTE o equipamento do sistema?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiEquip(equipamento.id);
          }
        }
      ]
    });
    await alert.present();
  }
  ExcluiEquip(equipamento_id) {
    this.http
      .delete(SERVER_URL.base_url + "equipamentos/" + equipamento_id)
      .toPromise()
      .then(responde => {
        this.atualizaLista();
      });
  }
}
