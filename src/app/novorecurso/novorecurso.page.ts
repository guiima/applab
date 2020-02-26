import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";

@Component({
  selector: "app-novorecurso",
  templateUrl: "./novorecurso.page.html",
  styleUrls: ["./novorecurso.page.scss"]
})
export class NovorecursoPage implements OnInit {
  selecionado: any;
  nome: any;
  quantidade: any;
  qtd_minima: any;
  disponivel: any;
  numeracao: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {}

  ngOnInit() {}
  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Item criado com sucesso!",
      buttons: [
        {
          text: "Fechar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
  new_recurso() {
    // MESMA FUNCAO PARA REAGENTE E MEIO
    //FALTANDO CAMPOS, OLHA O INMSOMINIA DEPOIS!!
    let recurso = {
      tipo: this.selecionado,
      nomenclatura: this.nome,
      quantidade: this.quantidade,
      qtd_minima: this.qtd_minima,
      numeracao: this.numeracao
    };
    console.log(recurso);
    this.http
      .post(SERVER_URL.base_url + "recursos", recurso)
      .toPromise()
      .then(responde => {
        this.confirmacaoAlert();
        this.router.navigate(["admin"]);
      })
      .catch(responde => {
        console.log(responde);
      });
  }
  new_vidraria() {
    let vidraria = {
      nome: this.nome,
      quantidade: this.quantidade
    };
    this.http
      .post(SERVER_URL.base_url + "vidrarias", vidraria)
      .toPromise()
      .then(responde => {
        this.confirmacaoAlert();
        this.router.navigate(["admin"]);
      })
      .catch(responde => {
        console.log(responde);
      });
  }
  new_equipamento() {
    // ARRUMAR BD PARA TESTAR!!
    let equipamento = {
      nome: this.nome,
      disponivel: this.disponivel
    };
    this.http
      .post(SERVER_URL.base_url + "equipamentos", equipamento)
      .toPromise()
      .then(responde => {
        this.confirmacaoAlert();
        this.router.navigate(["admin"]);
      })
      .catch(responde => {
        console.log(responde);
      });
  }
}
