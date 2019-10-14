import { SERVER_URL } from "./../../environments/environment";
import { usuario } from "./../admusuario/usuario";
import { AlertController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { timer } from "rxjs";

@Component({
  selector: "app-editusuario",
  templateUrl: "./editusuario.page.html",
  styleUrls: ["./editusuario.page.scss"]
})
export class EditusuarioPage implements OnInit {
  id: number;
  nome: string;
  instituicao: string;
  senha: string;
  curso: string;
  email: string;
  ra: number;
  tipo: string;
  autorizado: boolean;

  radio: any;
  json: any;

  new_nome: any;
  new_ra: any;
  new_instituicao: any;
  new_curso: any;
  new_email: any;
  new_senha: any;
  new_autorizado: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.nome = params.nome;
      this.instituicao = params.instituicao;
      this.senha = params.senha;
      this.curso = params.curso;
      this.email = params.email;
      this.ra = params.ra;
      this.tipo = params.tipo;
      this.autorizado = params.autorizado;
    });
  }

  ngOnInit() {}

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Usuario atualizado com sucesso!",
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
    this.json = {
      id: this.id,
      nome: this.nome,
      instituicao: this.instituicao,
      ra: this.ra,
      email: this.email,
      senha: this.senha,
      curso: this.curso,
      tipo: this.tipo,
      autorizado: this.autorizado
    };
    if (this.new_nome) {
      this.json.nome = this.new_nome;
    }
    if (this.new_ra) {
      this.json.ra = this.new_ra;
    }
    if (this.new_instituicao) {
      this.json.instituicao = this.new_instituicao;
    }
    if (this.new_curso) {
      this.json.curso = this.new_curso;
    }
    if (this.new_email) {
      this.json.email = this.new_email;
    }
    if (this.new_senha) {
      this.json.senha = this.new_senha;
    }
    if (this.new_autorizado == "true") {
      this.json.autorizado = true;
    } else {
      this.json.autorizado = false;
    }
    this.http
      .put(SERVER_URL.base_url + "usuarios/" + this.id, this.json)
      .toPromise()
      .then(resposde => {
        this.confirmacaoAlert();
        timer(2000).subscribe(() => {
          this.router.navigate(["admin"]);
        });
      })
      .catch(responde => {
        console.log(responde);
      });
  }
}
