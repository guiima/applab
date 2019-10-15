import { Component, OnInit } from "@angular/core";
import { acesso, SERVER_URL } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-relatorio",
  templateUrl: "./relatorio.page.html",
  styleUrls: ["./relatorio.page.scss"]
})
export class RelatorioPage implements OnInit {
  exibir: boolean = acesso.permitido;
  selecionado: any;
  data_inicio: any;
  data_final: any;
  vidrarias: any;
  recursos: any;
  meio_cultivo: any;
  exibirLista: any;
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exibirLista = false;
  }

  gerarRelatorio() {
    console.log(this.selecionado);
    // console.log(this.data_inicio);
    // console.log(this.data_final);

    let JsonInfo = {
      data_inicio: this.data_inicio,
      data_final: this.data_final
    };

    //meio de cultivo
    if (this.selecionado == 1) {
    }

    //reagente
    if (this.selecionado == 2) {
    }

    //vidraria
    if (this.selecionado == 3) {
      this.http
        .post(SERVER_URL.base_url + "registrovidrariadata", JsonInfo)
        .toPromise()
        .then(res => {
          this.vidrarias = res;
          console.log(res);
          this.exibirLista = true;
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
}
