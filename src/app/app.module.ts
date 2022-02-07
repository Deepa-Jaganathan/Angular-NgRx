import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./store/reducers/app.reducer";
import { UserEffects } from "./store/effects/name.effect";
import { EffectsModule } from "@ngrx/effects";
import { UserService } from "./user.service";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HeaderModule } from "./components/header/header.module";
import { UserTableModule } from "./components/user-table/user-table.module";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "./components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    UserTableModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //  Retains last 25 states
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
