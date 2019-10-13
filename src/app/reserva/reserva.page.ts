import { Component, OnInit } from "@angular/core";
import { acesso } from "src/environments/environment";
import { reserva } from "./reserva";

@Component({
  selector: "app-reserva",
  templateUrl: "./reserva.page.html",
  styleUrls: ["./reserva.page.scss"]
})
export class ReservaPage implements OnInit {
  exibir: boolean = acesso.permitido;
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

  public reservas = [
    {
      hora: "7AM",
      reservado: ""
    },
    {
      hora: "8AM",
      reservado: ""
    },
    {
      hora: "9AM",
      reservado: ""
    },
    {
      hora: "10AM",
      reservado: ""
    },
    {
      hora: "11AM",
      reservado: ""
    },
    {
      hora: "12AM",
      reservado: ""
    },
    {
      hora: "1PM",
      reservado: ""
    },
    {
      hora: "2PM",
      reservado: ""
    },
    {
      hora: "3PM",
      reservado: ""
    },
    {
      hora: "4PM",
      reservado: "Reservado"
    },
    {
      hora: "5PM",
      reservado: ""
    },
    {
      hora: "6PM",
      reservado: ""
    },
    {
      hora: "7PM",
      reservado: ""
    },
    {
      hora: "8PM",
      reservado: ""
    },
    {
      hora: "9PM",
      reservado: ""
    },
    {
      hora: "10PM",
      reservado: ""
    }
  ];

  constructor() {}

  ngOnInit() {}
}
