import { SERVER_URL } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import { reagente } from "./reagente";
import { acesso } from "src/environments/environment";

@Component({
  selector: "app-reagente",
  templateUrl: "./reagente.page.html",
  styleUrls: ["./reagente.page.scss"]
})
export class ReagentePage implements OnInit {
  jsonInfo: JSON;
  quantidade: number;
  reagentes: reagente[];
  tagreagente: string;
  exibir: boolean;
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
  constructor(private http: HttpClient, private router: Router) {
    this.exibir = acesso.permitido;
    console.log("exibirrr", this.exibir);
  }

  ngOnInit() {
    //comentaario
    return this.http
      .get<reagente[]>(SERVER_URL.base_url + "recursosreagente")
      .toPromise()
      .then(dados => {
        this.reagentes = dados;
      })
      .catch(response => {
        console.log("get não foi");
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
