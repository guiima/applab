import { Component, OnInit } from "@angular/core";
import { acesso, SERVER_URL, logado } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-reserva",
  templateUrl: "./reserva.page.html",
  styleUrls: ["./reserva.page.scss"]
})
export class ReservaPage implements OnInit {
  exibir: boolean = acesso.permitido;
  data_pesquisa: Date;
  exibirLista: boolean = false;
  equipamentos: any;
  selecionado: any;

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

  public reservas;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(SERVER_URL.base_url + "equipamentos")
      .toPromise()
      .then(response => {
        this.equipamentos = response;
        console.log(this.equipamentos);
      })
      .catch(response => {
        console.log(response);
      });
  }

  informarData() {
    this.reservas = [
      {
        hora: "7AM",
        hora_compara: "07:00:00",
        reservado: ""
      },
      {
        hora: "8AM",
        hora_compara: "08:00:00",
        reservado: ""
      },
      {
        hora: "9AM",
        hora_compara: "09:00:00",
        reservado: ""
      },
      {
        hora: "10AM",
        hora_compara: "10:00:00",
        reservado: ""
      },
      {
        hora: "11AM",
        hora_compara: "11:00:00",
        reservado: ""
      },
      {
        hora: "12AM",
        hora_compara: "12:00:00",
        reservado: ""
      },
      {
        hora: "1PM",
        hora_compara: "13:00:00",
        reservado: ""
      },
      {
        hora: "2PM",
        hora_compara: "14:00:00",
        reservado: ""
      },
      {
        hora: "3PM",
        hora_compara: "15:00:00",
        reservado: ""
      },
      {
        hora: "4PM",
        hora_compara: "16:00:00",
        reservado: ""
      },
      {
        hora: "5PM",
        hora_compara: "17:00:00",
        reservado: ""
      },
      {
        hora: "6PM",
        hora_compara: "18:00:00",
        reservado: ""
      },
      {
        hora: "7PM",
        hora_compara: "19:00:00",
        reservado: ""
      },
      {
        hora: "8PM",
        hora_compara: "20:00:00",
        reservado: ""
      },
      {
        hora: "9PM",
        hora_compara: "21:00:00",
        reservado: ""
      },
      {
        hora: "10PM",
        hora_compara: "22:00:00",
        reservado: ""
      }
    ];

    let JsonInfo = {
      data: this.data_pesquisa,
      equipamento_id: this.selecionado
    };
    let reservas_dia;
    this.http
      .post(SERVER_URL.base_url + "reservadata", JsonInfo)
      .toPromise()
      .then(response => {
        this.exibirLista = true;
        reservas_dia = response;

        for (let uma_reserva of reservas_dia) {
          let i = 0;
          for (let reserva of this.reservas) {
            if (uma_reserva.hora == reserva.hora_compara) {
              this.reservas[i].reservado = "Reservado";
            }
            i++;
          }
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  adcionarReserva(hora) {
    let JsonInfo = {
      data: this.data_pesquisa,
      hora: hora,
      usuario_id: 1, //MUDAR ESSA PORRA PARA VARIAVEL GLOBAL DO EVIRMONES
      equipamento_id: this.selecionado
    };
    this.http
      .post(SERVER_URL.base_url + "reservas", JsonInfo)
      .toPromise()
      .then(response => {
        console.log(response);
        this.informarData();
      })
      .catch(response => {
        console.log(response);
      });
  }
}
