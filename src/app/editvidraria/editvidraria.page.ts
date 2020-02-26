import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { SERVER_URL } from "src/environments/environment";
import { timer } from "rxjs";

@Component({
  selector: "app-editvidraria",
  templateUrl: "./editvidraria.page.html",
  styleUrls: ["./editvidraria.page.scss"]
})
export class EditvidrariaPage implements OnInit {
  id: any;
  nome: any;
  quantidade: any;

  new_nome: any;
  new_quantidade: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.nome = params.nome;
      this.quantidade = params.quantidade;
    });
  }
  ngOnInit() {}

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Vidraria atualizada com sucesso!",
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
    let vidraria = {
      nome: this.nome,
      quantidade: this.quantidade
    };
    if (this.new_nome) {
      vidraria.nome = this.new_nome;
    }
    if (this.new_quantidade) {
      vidraria.quantidade = Number(this.new_quantidade);
    }
    this.http
      .put(SERVER_URL.base_url + "vidrarias/" + this.id, vidraria)
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
