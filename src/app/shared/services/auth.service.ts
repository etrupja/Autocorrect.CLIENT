import { Injectable, Inject } from "@angular/core";
import { APP_CONFIG, AppConfig } from "../app.config";
import {BehaviorSubject} from 'rxjs';
import { UserManager,WebStorageStateStore, UserManagerSettings, User } from 'oidc-client';
@Injectable()
export class AuthenticationService {
  private _user: User = null;
  private manager = new UserManager(getClientSettings(this.config));

  public user = new BehaviorSubject<User>(null);

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
   
}
logout(){
//  var sR= this.manager.createSignoutRequest();
//  this.manager.sign
  this.manager.signoutRedirect();
}
isLoggedIn(): boolean {
  
  return this._user != null && !this._user.expired;
}
getClaims(): any {
  return this._user.profile;
}
getToken(): string {
  return this._user.access_token;
}
startAuthentication(): Promise<void> {
  return this.manager.signinRedirect();
}
getQueryStringAuthorization():string
{
  return "?authorization=" + this.getToken();
  
}
completeAuthentication(): Promise<void> {
  return this.manager.signinRedirectCallback().then(_user => {
     
      this._user = _user;
      this.user.next(_user)
  });
}
}

export function getClientSettings(config:AppConfig ): UserManagerSettings {
  return {
      authority: config.authorityUrl,
      client_id: config.auth_client_id,
      redirect_uri: config.auth_redirect_uri,
      post_logout_redirect_uri: config.auth_post_logout_redirect_uri,
      response_type:config.auth_response_type,
      scope:config.auth_scope,
      filterProtocolClaims: true,
      loadUserInfo: true
  };
}
