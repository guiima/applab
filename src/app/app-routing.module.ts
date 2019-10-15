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

  { path: "dano", loadChildren: "./dano/dano.module#DanoPageModule" },
  {
    path: "relatorio",
    loadChildren: "./relatorio/relatorio.module#RelatorioPageModule"
  },
  {
    path: "editusuario",
    loadChildren: "./editusuario/editusuario.module#EditusuarioPageModule"
  },
  { path: "admin", loadChildren: "./admin/admin.module#AdminPageModule" },
  {
    path: "admusuario",
    loadChildren: "./admusuario/admusuario.module#AdmusuarioPageModule"
  },
  {
    path: "admequip",
    loadChildren: "./admequip/admequip.module#AdmequipPageModule"
  },
  {
    path: "cadastro",
    loadChildren: "./cadastro/cadastro.module#CadastroPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
