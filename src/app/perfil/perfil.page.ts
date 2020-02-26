import { Component, OnInit } from "@angular/core";
import { acesso, SERVER_URL, logado } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { perfil } from "./perfil";
import { AlertController } from "@ionic/angular";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { timer } from "rxjs";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  exibir: boolean = acesso.permitido;
  user: perfil;
  nome: any;
  email: any;
  senha: any;
  orientador: any;
  ra: any;
  curso: any;
  instituicao: any;

  public appPages = [
    {
      title: "Uso Reagente",
      url: "/reagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/meio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/reserva",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/dano",
      icon: "alert"
    },
    {
      title: "Administração",
      url: "/admin",
      icon: "construct"
    },
    {
      title: "Perfil",
      url: "/perfil",
      icon: "person"
    },
    {
      title: "Sair",
      url: "",
      icon: ""
    }
  ];

  public appPages2 = [
    {
      title: "Uso Reagente",
      url: "/reagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/meio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/reserva",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/dano",
      icon: "alert"
    },
    {
      title: "Perfil",
      url: "/perfil",
      icon: "person"
    },
    {
      title: "Sair",
      url: "",
      icon: ""
    }
  ];

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
  AtualizaPerfil() {
    this.router.navigate(["editperfil"]);
  }

  async alertExcluir(nome: any) {
    let alert = await this.alert.create({
      header: nome,
      subHeader: "Deseja realmente EXCLUIR seu cadastro do sistema ? ",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluirUsuario(logado.id);
          }
        }
      ]
    });
    await alert.present();
  }
  async confirmacaoAlert() {
    let alert = await this.alert.create({
      header: "Usuario excluido com sucesso!",
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
  ExcluirUsuario(usuario_id: any) {
    this.http
      .delete(SERVER_URL.base_url + "usuarios/" + usuario_id)
      .toPromise()
      .then(responde => {
        this.confirmacaoAlert();
        timer(1000).subscribe(() => {
          this.router.navigate(["login"]);
        });
        // REDIRECIONAR PARA LOGIN ou CRIAR TELA DE DESPEDIDA!!!
      });
  }
}
