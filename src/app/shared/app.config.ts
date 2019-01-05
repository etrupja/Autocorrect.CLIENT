import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export class AppConfig {

  apiEndpoint: string;
  authorityUrl: string;
  auth_redirect_uri: string;
  auth_post_logout_redirect_uri: string;
  auth_response_type:string;
  auth_scope:string;
  auth_client_id:string;
}

export const LiveConfig: AppConfig = {
  apiEndpoint: "https://localhost:44387/api",
  authorityUrl: "http://autocorrectaccount.nertilpoci.com/",
   auth_redirect_uri: 'http://localhost:4200/auth-callback',
  auth_post_logout_redirect_uri: 'http://localhost:4200',
  auth_response_type:"id_token token",
  auth_scope:"openid profile autocorrect",
  auth_client_id:"autocorrectclient"
  
};
export const LocalConfig: AppConfig = {
  apiEndpoint: "https://localhost:44387/api",
  authorityUrl: "http://autocorrectaccount.nertilpoci.com/",
   auth_redirect_uri: 'http://localhost:4200/auth-callback',
  auth_post_logout_redirect_uri: 'http://localhost:4200',
  auth_response_type:"id_token token",
  auth_scope:"openid profile autocorrect",
  auth_client_id:"autocorrectclient"
  
};
