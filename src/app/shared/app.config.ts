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
  apiEndpoint: "https://api.tekstsakte.com/api",
  authorityUrl: "https://account.tekstsakte.com",
   auth_redirect_uri: 'https://app.tekstsakte.com/auth-callback',
  auth_post_logout_redirect_uri: 'https://app.tekstsakte.com/logged-out',
  auth_response_type:"id_token token",
  auth_scope:"openid profile autocorrect",
  auth_client_id:"autocorrectclient"
  
};
export const LocalConfig: AppConfig = {
  apiEndpoint: "https://api.tekstsakte.com/api",
  authorityUrl: "https://localhost:44375",
   auth_redirect_uri: 'http://localhost:4200/auth-callback',
  auth_post_logout_redirect_uri: 'http://localhost:4200/logged-out',
  auth_response_type:"id_token token",
  auth_scope:"openid profile autocorrect",
  auth_client_id:"autocorrectclient"
  
};
