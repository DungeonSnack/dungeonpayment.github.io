import {
  qrController,
  deleteCookie,
} from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";
// import loadComponent from "/src/helpers/loadComponent.js";

// const promise = loadComponent("", "/src/pages/login-qr/login-qr.html");


    wauthparam.auth_ws = "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
    //wauthparam.keyword="aHR0cHM6Ly93YS5tZS82Mjg5NTgwMDAwNjAwMD90ZXh0PXdoNHQ1YXV0aDA=";
    wauthparam.keyword = "aHR0cHM6Ly93YS5tZS8rNjI4ODEwMjI1MjI5MjA=";
    wauthparam.tokencookiehourslifetime = 18;
    wauthparam.redirect = "/";
    deleteCookie(wauthparam.tokencookiename);
    qrController(wauthparam);
