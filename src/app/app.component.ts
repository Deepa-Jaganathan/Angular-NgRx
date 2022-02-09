import { Component } from "@angular/core";
import { IAppState } from "./store/state/app.state";
import { Store, select } from "@ngrx/store";
import { UserName } from "./models/name";
import { Observable } from "rxjs";
import { __core_private_testing_placeholder__ } from "@angular/core/testing";
import { getName } from "./store/actions/name.action";
import { selectUserList } from "./store/selectors/name.selector";
import { UserState } from "./store/state/name.state";
import { UserAlbumService } from "./services/user-album.service";
import { SessionTimers } from "./services/session-timers.service";
import { ViewportScroller } from "@angular/common";
import { MfaRepository } from "./repository/mfa/mfa.repository";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular-ngrx";
  userItems: Observable<Array<UserName>>;
  userAlbum: any;
  sess: any;
  user: any;
  public isMobileLayout = false;

  constructor(
    private viewportScroller: ViewportScroller,
    private store: Store<IAppState>,
    private album: UserAlbumService, //  private sessionTime: SessionTimers,
    private repo: MfaRepository
  ) {}

  ngOnInit() {
    this.store.dispatch(new getName());
    window.onresize = () => (this.isMobileLayout = window.innerWidth <= 991);
    // this.store
    //   .select(selectUserList)
    //   .subscribe((developers) => console.log(developers));

    // this.userAlbum = this.album
    //   .getUserAlbums()
    //   .subscribe((data) => console.log(data));
     
    // this.sess= this.sessionTime.remainingTime$;
    this.repo.getUserAlbums().pipe(
      map((data) => {
        // console.log(data);
      })
    );

    this.repo.getUserAlbums().subscribe((data) => {
      // console.log(data);
    });
    // console.log(this.user);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scrollToTopWithViewportScroller(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
