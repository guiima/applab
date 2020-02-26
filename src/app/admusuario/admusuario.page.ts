import { Router } from "@angular/router";
import { usuario } from "./usuario";
import { SERVER_URL, acesso } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";

@Component({
  selector: "app-admusuario",
  templateUrl: "./admusuario.page.html",
  styleUrls: ["./admusuario.page.scss"]
})
export class AdmusuarioPage implements OnInit {
  exibir: boolean = acesso.permitido;
  novos: any; // TALVEZ POR TIPO USUARIO
  cadastrados: any; // TALVEZ POR TIPO USUARIO

  public appPages = [
    {
      title: "Uso Reagente",
      url: "/usoreagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/usomeio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/usoequip",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/notificadano",
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
      url: "/usoreagente",
      icon: "flask"
    },
    {
      title: "Uso Meio de Cultivo",
      url: "/usomeio",
      icon: "flask"
    },
    {
      title: "Reservar Equipamento",
      url: "/usoequip",
      icon: "build"
    },
    {
      title: "Notificar Dano",
      url: "/notificadano",
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
    private router: Router
  ) {}

  ngOnInit() {
    this.atualizaListas();
  }

  atualizaListas() {
    this.http
      .get(SERVER_URL.base_url + "usuariosnaoautorizados")
      .toPromise()
      .then(dados => {
        this.novos = dados;
      })
      .catch(dados => {
        console.log("err");
      });
    this.http
      .get(SERVER_URL.base_url + "usuariosautorizados")
      .toPromise()
      .then(dados => {
        this.cadastrados = dados;
      })
      .catch(dados => {
        console.log("err");
      });
  }

  LiberaUsuario(novo: any) {
    novo.autorizado = true;
    this.http
      .put(SERVER_URL.base_url + "usuarios/" + novo.id, novo)
      .toPromise()
      .then(responde => {
        console.log(responde);
        this.atualizaListas();
      })
      .catch(responde => {
        console.log(responde);
      });
  }

  ExcluiUsuario(id: number) {
    this.http
      .delete(SERVER_URL.base_url + "usuarios/" + id)
      .toPromise()
      .then(responde => {
        this.atualizaListas();
      });
  }
  AtualizaUsuario(usuario: usuario) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: usuario.id,
        nome: usuario.nome,
        instituicao: usuario.instituicao,
        senha: usuario.senha,
        curso: usuario.curso,
        email: usuario.email,
        ra: usuario.ra,
        tipo: usuario.tipo,
        autorizado: usuario.autorizado,
        orientador: usuario.orientador
      }
    };
    this.router.navigate(["editusuario"], navigationExtras);
  }

  async alertExcluir(id: number) {
    let alert = await this.alert.create({
      header: "USUARIO NÃO AUTORIZADO ? ",
      subHeader: "Não liberar o usuario e EXCLUIR seu pré-cadastro",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiUsuario(id);
          }
        }
      ]
    });
    await alert.present();
  }
  async alertExcluir1(id: number) {
    let alert = await this.alert.create({
      header: "EXCLUIR CADASTRO: ",
      subHeader:
        "Relamente deseja EXCLUIR PERMANENTEMENTE o usuario do sistema ?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        },
        {
          text: "Excluir",
          handler: () => {
            this.ExcluiUsuario(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async mostrausuario(novos: any) {
    let alert = await this.alert.create({
      header: "NOME: " + novos.nome,
      subHeader: "RA:" + novos.ra + " ORIENTADOR:" + novos.orientador,
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
}
