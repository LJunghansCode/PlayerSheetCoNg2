import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginService } from './login.service';
import { PlayerService } from './player.service';
import { UiGlobalService } from './ui-global.service';
import {FormService } from './form.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlayersheetComponent } from './playersheet/playersheet.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { NewPlayerComponent } from './player-dashboard/new-player/new-player.component';
import { PlayerListComponent } from './player-dashboard/player-list/player-list.component';
import { PlayerSpellsComponent } from './playersheet/player-spells/player-spells.component';
import { PlayerDetailsComponent } from './playersheet/player-details/player-details.component';
import { PlayerInfoComponent } from './playersheet/player-info/player-info.component';
import { CreateComponent } from './create/create.component';
import { InfoColumnsComponent } from './home/info-columns/info-columns.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerCardComponent } from './player-dashboard/player-list/player-card/player-card.component';
import { SpellFormComponent } from './playersheet/spell-form/spell-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'player-dashboard', component: PlayerDashboardComponent },
  { path: 'player/:id', component: PlayersheetComponent,
      children: [
        {path: '', redirectTo: 'info', pathMatch: 'full'},
        {path: 'info', component: PlayerInfoComponent },
        {path: 'spells', component: PlayerSpellsComponent,
          children: [
            {path: 'new', component: SpellFormComponent},
          ] },
        {path: 'details', component: PlayerDetailsComponent },
      ] },
  { path: 'create', component: CreateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayersheetComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    PlayerDashboardComponent,
    NewPlayerComponent,
    PlayerListComponent,
    PlayerSpellsComponent,
    PlayerDetailsComponent,
    PlayerInfoComponent,
    CreateComponent,
    InfoColumnsComponent,
    NavbarComponent,
    PlayerCardComponent,
    SpellFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TextareaAutosizeModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, PlayerService, UiGlobalService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
