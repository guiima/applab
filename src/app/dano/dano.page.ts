import { Component, OnInit } from "@angular/core";
import { acesso, SERVER_URL, logado } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
//
@Component({
  selector: "app-dano",
  templateUrl: "./dano.page.html",
  styleUrls: ["./dano.page.scss"]
})
export class DanoPage implements OnInit {
  exibir: boolean = acesso.permitido;
  vidrarias: any;
  vidraria: any;
  selecionado: any;
  texto: any;
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(SERVER_URL.base_url + "vidrarias")
      .toPromise()
      .then(res => {
        this.vidrarias = res;
        console.log(this.vidrarias);
      })
      .catch(res => {
        console.log(res);
      });
  }

  resgistrarDano() {
    console.log(this.texto);
    console.log("selecionado" + this.selecionado);

    let JsonInfo = {
      relatorio_dano: this.texto,
      usuario_id: logado.id,
      vidraria_id: this.selecionado
    };

    this.http
      .post(SERVER_URL.base_url + "danos", JsonInfo)
      .toPromise()
      .then(res => {
        console.log(res);
        //GET NA VIDRARIA PARA ATUALIZAR NO BANCO QNTD-1;
        this.http
          .get(SERVER_URL.base_url + "vidrarias/" + this.selecionado)
          .toPromise()
          .then(res => {
            this.vidraria = res;
            console.log(this.vidraria.quantidade);
            this.vidraria.quantidade = this.vidraria.quantidade - 1;
            console.log(this.vidraria.quantidade);
            this.atualizaVidraria();
          })
          .catch(res => {
            console.log(res);
          });
      })
      .catch(res => {
        console.log(res);
      });
  }
  atualizaVidraria() {
    this.http
      .put(SERVER_URL.base_url + "vidrarias/" + this.selecionado, this.vidraria)
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  }
}
