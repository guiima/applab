import { SERVER_URL } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import { acesso } from "src/environments/environment";

@Component({
  selector: "app-meio",
  templateUrl: "./meio.page.html",
  styleUrls: ["./meio.page.scss"]
})
export class MeioPage implements OnInit {
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

  meios: any;
  exibir: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.exibir = acesso.permitido;
  }

  ngOnInit() {
    this.http
      .get(SERVER_URL.base_url + "recursoscultivo")
      .toPromise()
      .then(dados => {
        this.meios = dados;
        console.log(dados);
      })
      .catch(dados => {
        console.log(dados);
      });
  }
  selectItem(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    };
    this.router.navigate(["recurso"], navigationExtras);
  }
}
