import { reagente } from "./../reagente/reagente";
import { AlertController } from "@ionic/angular";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SERVER_URL } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-admreagente",
  templateUrl: "./admreagente.page.html",
  styleUrls: ["./admreagente.page.scss"]
})
export class AdmreagentePage implements OnInit {
  reagentes: any;
  constructor(
    private alert: AlertController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.atualizaLista();
  }

  verifica_qntd(reagente) {
    let x = Number(reagente.qtd_minima);
    let y = Number(reagente.quantidade);
    if (x > y) {
      return true;
    }
    return false;
  }

  atualizaLista() {
    this.http
      .get(SERVER_URL.base_url + "recursosreagente")
      .toPromise()
      .then(dados => {
        this.reagentes = dados;
        console.log(dados);
      })
      .catch(dados => {
        console.log(dados);
      });
  }

  async mostrareagente(reagente: any) {
    console.log(reagente.qtd_minima + "minimo");
    console.log(reagente.quantidade);
    // if (reagente.quantidade < reagente.qtd_minima) {
    //   let aux = reagente.quantidade - reagente.qtd_minima;
    //   console.log(aux);
    // }
    let alert = await this.alert.create({
      header: "NOMENCLATURA: " + reagente.nomenclatura,
      subHeader: "Numeração:" + reagente.numeracao,
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }

  AtualizaReagente(reagente: reagente) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: reagente.id,
        tipo: reagente.tipo,
        nomenclatura: reagente.nomenclatura,
        quantidade: reagente.quantidade,
        qtd_minima: reagente.qtd_minima,
        numeracao: reagente.numeracao
      }
    };

    this.router.navigate(["editreagente"], navigationExtras);
  }

  async alertExcluir(reagente: any) {
    let alert = await this.alert.create({
      header: "EXCLUIR " + reagente.nomenclatura,
      subHeader:
        "Relamente deseja EXCLUIR PERMANENTEMENTE o reagente do sistema?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiRecurso(reagente.id);
          }
        }
      ]
    });
    await alert.present();
  }
  ExcluiRecurso(recurso_id: any) {
    this.http
      .delete(SERVER_URL.base_url + "recursos/" + recurso_id)
      .toPromise()
      .then(responde => {
        this.atualizaLista();
      });
  }
}
