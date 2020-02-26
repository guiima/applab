import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },

  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "precadastro",
    loadChildren: "./precadastro/precadastro.module#PrecadastroPageModule"
  },
  {
    path: "reagente",
    loadChildren: "./reagente/reagente.module#ReagentePageModule"
  },
  {
    path: "recurso",
    loadChildren: "./recurso/recurso.module#RecursoPageModule"
  },
  {
    path: "reserva",
    loadChildren: "./reserva/reserva.module#ReservaPageModule"
  },
  { path: "admin", loadChildren: "./admin/admin.module#AdminPageModule" },
  {
    path: "admusuario",
    loadChildren: "./admusuario/admusuario.module#AdmusuarioPageModule"
  },
  { path: "dano", loadChildren: "./dano/dano.module#DanoPageModule" },
  {
    path: "editusuario",
    loadChildren: "./editusuario/editusuario.module#EditusuarioPageModule"
  },

  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "precadastro",
    loadChildren: "./precadastro/precadastro.module#PrecadastroPageModule"
  },
  {
    path: "reagente",
    loadChildren: "./reagente/reagente.module#ReagentePageModule"
  },
  {
    path: "recurso",
    loadChildren: "./recurso/recurso.module#RecursoPageModule"
  },

  { path: "dano", loadChildren: "./dano/dano.module#DanoPageModule" },
  {
    path: "relatorio",
    loadChildren: "./relatorio/relatorio.module#RelatorioPageModule"
  },

  { path: "admin", loadChildren: "./admin/admin.module#AdminPageModule" },
  {
    path: "admusuario",
    loadChildren: "./admusuario/admusuario.module#AdmusuarioPageModule"
  },

  { path: "dano", loadChildren: "./dano/dano.module#DanoPageModule" },
  {
    path: "admequip",
    loadChildren: "./admequip/admequip.module#AdmequipPageModule"
  },
  {
    path: "cadastro",
    loadChildren: "./cadastro/cadastro.module#CadastroPageModule"
  },
  {
    path: "admreagente",
    loadChildren: "./admreagente/admreagente.module#AdmreagentePageModule"
  },
  {
    path: "novorecurso",
    loadChildren: "./novorecurso/novorecurso.module#NovorecursoPageModule"
  },
  {
    path: "editreagente",
    loadChildren: "./editreagente/editreagente.module#EditreagentePageModule"
  },
  {
    path: "editequip",
    loadChildren: "./editequip/editequip.module#EditequipPageModule"
  },
  {
    path: "admvidraria",
    loadChildren: "./admvidraria/admvidraria.module#AdmvidrariaPageModule"
  },
  {
    path: "editvidraria",
    loadChildren: "./editvidraria/editvidraria.module#EditvidrariaPageModule"
  },
  { path: "perfil", loadChildren: "./perfil/perfil.module#PerfilPageModule" },
  {
    path: "editperfil",
    loadChildren: "./editperfil/editperfil.module#EditperfilPageModule"
  },
  { path: "meio", loadChildren: "./meio/meio.module#MeioPageModule" },
  {
    path: "admmeio",
    loadChildren: "./admmeio/admmeio.module#AdmmeioPageModule"
  },
  {
    path: "reserva",
    loadChildren: "./reserva/reserva.module#ReservaPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
