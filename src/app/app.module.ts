import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';


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
import { SpellFormComponent } from './playersheet/player-spells/spell-form/spell-form.component';
import { CompanionsComponent } from './playersheet/companions/companions.component';
import { NoteBookComponent } from './playersheet/note-book/note-book.component';
import { PlayerSettingsComponent } from './playersheet/player-settings/player-settings.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewCompanionComponent } from './playersheet/companions/new-companion/new-companion.component';
import { NewNoteComponent } from './playersheet/note-book/new-note/new-note.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent}
    ]},
  { path: 'player-dashboard', component: PlayerDashboardComponent,
        children: [
          {path: 'new', component: NewPlayerComponent}
        ] },
  { path: 'player/:id', component: PlayersheetComponent,
      children: [
        {path: '', redirectTo: 'info', pathMatch: 'full'},
        {path: 'info', component: PlayerInfoComponent },
        {path: 'companions', component: CompanionsComponent,
          children: [
            {path: 'new', component: NewCompanionComponent},
          ] },
        {path: 'notes', component: NoteBookComponent,
          children: [
            {path: 'new', component: NewNoteComponent},
          ] },
        {path: 'settings', component: PlayerSettingsComponent },
        {path: 'spells', component: PlayerSpellsComponent,
          children: [
            {path: 'new', component: SpellFormComponent},
          ] },
        {path: 'details', component: PlayerDetailsComponent },
      ] },
  { path: 'create', component: CreateComponent},
  { path: 'about', component: AboutPageComponent},
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
    CompanionsComponent,
    NoteBookComponent,
    PlayerSettingsComponent,
    AboutPageComponent,
    NewCompanionComponent,
    NewNoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TextareaAutosizeModule,
    BrowserAnimationsModule,
    DragulaModule
  ],
  providers: [LoginService, PlayerService, UiGlobalService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
