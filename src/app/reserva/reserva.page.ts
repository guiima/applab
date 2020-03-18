import { usuario } from "./../admusuario/usuario";
import { Component, OnInit } from "@angular/core";
import { acesso, SERVER_URL, logado } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { reserva } from "./reserva";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-reserva",
  templateUrl: "./reserva.page.html",
  styleUrls: ["./reserva.page.scss"]
})
export class ReservaPage implements OnInit {
  //HOJE SIM!
  logado = logado.id;
  reserva_deletar: reserva[];
  exibir: boolean = acesso.permitido;
  data_pesquisa: Date;
  exibirLista: boolean = false;
  equipamentos: any;
  selecionado: any;

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

  public reservas;

  constructor(private http: HttpClient, private alert: AlertController) {}

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
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "8AM",
        hora_compara: "08:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "9AM",
        hora_compara: "09:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "10AM",
        hora_compara: "10:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "11AM",
        hora_compara: "11:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "12AM",
        hora_compara: "12:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "1PM",
        hora_compara: "13:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "2PM",
        hora_compara: "14:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "3PM",
        hora_compara: "15:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "4PM",
        hora_compara: "16:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "5PM",
        hora_compara: "17:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "6PM",
        hora_compara: "18:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "7PM",
        hora_compara: "19:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "8PM",
        hora_compara: "20:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "9PM",
        hora_compara: "21:00:00",
        reservado: "",
        usuario_id: ""
      },
      {
        hora: "10PM",
        hora_compara: "22:00:00",
        reservado: "",
        usuario_id: ""
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
              console.log("oi", uma_reserva);
              this.reservas[i].usuario_id = uma_reserva.usuario.id;
              this.reservas[i].reservado = uma_reserva.usuario.nome;
            }
            i++;
          }
        }
      })
      .catch(response => {
        console.log(response);
      });
  }
  async Aviso() {
    let alert = await this.alert.create({
      header: "Já existe uma reserva nesse horario!",
      subHeader: "Aualizando",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
  adcionarReserva(hora) {
    let JsonVerificador = {
      data: this.data_pesquisa,
      hora: hora
    };
    this.http
      .post<reserva[]>(SERVER_URL.base_url + "reservadatahora", JsonVerificador)
      .toPromise()
      .then(response => {
        if (response.length == 0 || response == null) {
          this.efetuarReserva(hora);
        } else {
          this.Aviso();
          this.informarData();
        }
      });
  }

  efetuarReserva(hora) {
    let JsonInfo = {
      data: this.data_pesquisa,
      hora: hora,
      usuario_id: logado.id,
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

  removerReserva(hora) {
    let JsonInfo = {
      data: this.data_pesquisa,
      hora: hora
    };
    this.http
      .post<reserva[]>(SERVER_URL.base_url + "reservadatahora", JsonInfo)
      .toPromise()
      .then(response => {
        this.reserva_deletar = response;
        this.deletarReserva();
      })
      .catch(response => {
        console.log(response);
      });
  }

  deletarReserva() {
    this.http
      .delete(SERVER_URL.base_url + `reservas/${this.reserva_deletar[0].id}`)
      .toPromise()
      .then(response => {
        this.informarData();
      })
      .catch(response => {
        console.log("erro");
      });
  }
}
