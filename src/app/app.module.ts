import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { HeaderComponent } from './header/header.component';
import { FollowersSmComponent } from './followers-sm/followers-sm.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewCardsComponent } from './overview-cards/overview-cards.component';
import { FollowersCardsComponent } from './followers-cards/followers-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMainComponent,
    HeaderComponent,
    FollowersSmComponent,
    OverviewComponent,
    OverviewCardsComponent,
    FollowersCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
