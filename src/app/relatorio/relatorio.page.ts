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
  exibirCard: any;
  somaEntrada: any;
  somaSaida: any;
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
    this.exibirCard = false;
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
      //busca todos os registro no periodo
      this.http
        .post(SERVER_URL.base_url + "registrovidrariadata", JsonInfo)
        .toPromise()
        .then(res => {
          this.vidrarias = res;
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });

      //realiza a soma das entradas no periodo
      this.http
        .post(SERVER_URL.base_url + "registrovidrariasomaentrada", JsonInfo)
        .toPromise()
        .then(res => {
          this.somaEntrada = res;
          console.log("res:", res);
          console.log("soma entrada: ", this.somaEntrada[0].sum);
          if (this.somaEntrada[0].sum) {
            this.somaEntrada = this.somaEntrada[0].sum;
          } else {
            this.somaEntrada = 0;
          }
        })
        .catch(res => {
          console.log(res);
        });

      //realiza a soma das saidas no periodo
      this.http
        .post(SERVER_URL.base_url + "registrovidrariasomasaida", JsonInfo)
        .toPromise()
        .then(res => {
          this.somaSaida = res;
          console.log("res:", res);
          console.log("soma entrada: ", this.somaSaida[0].sum);
          if (this.somaSaida[0].sum) {
            this.somaSaida = this.somaSaida[0].sum;
          } else {
            this.somaSaida = 0;
          }

          this.exibirCard = true;
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
}
