import { SERVER_URL } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"]
})
export class CadastroPage implements OnInit {
  nome: any;
  instituicao: any;
  ra: any;
  orientador: any;
  email: any;
  senha: any;
  curso: any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  Cadastrar() {
    let usuario = {
      nome: this.nome,
      instituicao: this.instituicao,
      ra: this.ra,
      orientador: this.orientador,
      email: this.email,
      senha: this.senha,
      curso: this.curso,
      tipo: "aluno",
      autorizado: false
    };
    this.http
      .post(SERVER_URL.base_url + "usuarios", usuario)
      .toPromise()
      .then(responde => {
        console.log("funcionou");
        this.router.navigate(["precadastro"]);
      })
      .catch(responde => {
        console.log(responde);
      });
  }
}
