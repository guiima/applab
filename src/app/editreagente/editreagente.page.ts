import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";
import { timer } from "rxjs";
import { CompileShallowModuleMetadata } from "@angular/compiler";

@Component({
  selector: "app-editreagente",
  templateUrl: "./editreagente.page.html",
  styleUrls: ["./editreagente.page.scss"]
})
export class EditreagentePage implements OnInit {
  id: number;
  tipo: string;
  nomenclatura: string;
  quantidade: number;
  qtd_minima: number;
  numeracao: string;

  new_id: number;
  new_tipo: string;
  new_nomenclatura: string;
  new_quantidade: number;
  new_qtd_minima: number;
  new_numeracao: string;
  entrando: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.nomenclatura = params.nomenclatura;
      this.numeracao = params.numeracao;
      this.qtd_minima = params.qtd_minima;
      this.quantidade = params.quantidade;
      this.tipo = params.tipo;
    });
  }

  ngOnInit() {}

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Reagente atualizado com sucesso!",
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
    let json = {
      id: this.id,
      tipo: this.tipo,
      nomenclatura: this.nomenclatura,
      quantidade: this.quantidade,
      qtd_minima: this.qtd_minima,
      numeracao: this.numeracao
    };
    if (this.new_nomenclatura) {
      json.nomenclatura = this.new_nomenclatura;
    }
    if (this.entrando) {
      console.log(this.entrando);
      console.log(this.quantidade);
      //TESTAR ESSE CAST NUMBER!!!
      json.quantidade = Number(json.quantidade) + Number(this.entrando);
      console.log(json.quantidade);
    }
    if (this.new_qtd_minima) {
      json.qtd_minima = this.new_qtd_minima;
    }
    if (this.new_numeracao) {
      json.numeracao = this.new_numeracao;
    }
    this.http
      .put(SERVER_URL.base_url + "recursos/" + this.id, json)
      .toPromise()
      .then(resposde => {
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
