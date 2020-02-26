import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SERVER_URL, logado } from "src/environments/environment";
import { perfil } from "../perfil/perfil";
import { AlertController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { timer } from 'rxjs';

@Component({
  selector: "app-editperfil",
  templateUrl: "./editperfil.page.html",
  styleUrls: ["./editperfil.page.scss"]
})
export class EditperfilPage implements OnInit {
  user: perfil;
  curso: string;
  nome: number;
  email: number;
  instituicao: string;
  orientador: number;
  ra: any;
  senha: string;

  new_curso: string;
  new_nome: number;
  new_email: number;
  new_instituicao: string;
  new_orientador: number;
  new_ra: any;
  new_senha: string;

  constructor(
    private alert: AlertController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http
      .get<perfil>(SERVER_URL.base_url + "usuarios/" + logado.id)
      .toPromise()
      .then(response => {
        this.user = response;
        this.curso = this.user.curso;
        this.nome = this.user.nome;
        this.email = this.user.email;
        this.instituicao = this.user.instituicao;
        this.orientador = this.user.orientador;
        this.ra = this.user.ra;
        this.senha = this.user.senha;
      })
      .catch(response => {
        console.log(this.user);
      });
  }

  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Perfil atualizado com sucesso!",
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

  // ADAPTAR FUNÇÃO PARA USUARIO!!!
   atualiza() {
      let json = {
        nome: this.nome,
        instituicao: this.instituicao,
        ra: this.ra,
        orientador: this.orientador,
        email: this.email,
        senha: this.senha,
        curso: this.curso,
        tipo: logado.tipo,
        autorizado: logado.autorizado
      };
      if (this.new_nome) {
        json.nome = this.new_nome;
      }
      if (this.new_instituicao) {
        json.instituicao = this.new_instituicao;
      }
      if (this.new_ra) {
        json.ra = this.new_ra;
      }
      if (this.new_orientador) {
        json.orientador = this.new_orientador;
      }
      if (this.new_senha) {
        json.senha = this.new_senha;
      }
      if (this.new_curso) {
        json.curso = this.new_curso;
      }
    this.http
      .put(SERVER_URL.base_url + "usuarios/" + logado.id, json)
      .toPromise()
      .then(resposde => {
        this.confirmacaoAlert();
        timer(1000).subscribe(() => {
          this.router.navigate(["reagente"]);
        });
      })
      .catch(responde => {
        console.log(responde);
      });
  }
}
