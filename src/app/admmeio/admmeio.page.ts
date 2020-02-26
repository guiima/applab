import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";
import { reagente } from "../reagente/reagente";

@Component({
  selector: "app-admmeio",
  templateUrl: "./admmeio.page.html",
  styleUrls: ["./admmeio.page.scss"]
})
export class AdmmeioPage implements OnInit {
  meios: any;
  constructor(
    private alert: AlertController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.atualizaLista();
  }
  verifica_qntd(meio) {
    let x = Number(meio.qtd_minima);
    let y = Number(meio.quantidade);
    if (x > y) {
      return true;
    }
    return false;
  }

  atualizaLista() {
    this.http
      .get(SERVER_URL.base_url + "recursoscultivo")
      .toPromise()
      .then(dados => {
        this.meios = dados;
        console.log(dados);
      })
      .catch(dados => {
        console.log(dados);
      });
  }
  async mostrameio(meio: any) {
    console.log(meio.qtd_minima + "minimo");
    console.log(meio.quantidade);
    let alert = await this.alert.create({
      header: "NOMENCLATURA: " + meio.nomenclatura,
      subHeader: "Numeração:" + meio.numeracao,
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
  AtualizaMeio(meio: reagente) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: meio.id,
        tipo: meio.tipo,
        nomenclatura: meio.nomenclatura,
        quantidade: meio.quantidade,
        qtd_minima: meio.qtd_minima,
        numeracao: meio.numeracao
      }
    };

    this.router.navigate(["editreagente"], navigationExtras);
  }
  async alertExcluir(meio: any) {
    let alert = await this.alert.create({
      header: "EXCLUIR " + meio.nomenclatura,
      subHeader:
        "Relamente deseja EXCLUIR PERMANENTEMENTE o meio de cultivo do sistema?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiRecurso(meio.id);
          }
        }
      ]
    });
    await alert.present();
  }
  ExcluiRecurso(meio_id: any) {
    this.http
      .delete(SERVER_URL.base_url + "recursos/" + meio_id)
      .toPromise()
      .then(responde => {
        this.atualizaLista();
      });
  }
}
