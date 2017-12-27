import Vue  from 'vue'
import { AxiosInstance } from 'axios'
// In order to support vue.$http, we need to augment existing Vue functionality
// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins

declare module 'vue/types/vue' {
  export interface Vue   {
    $http: AxiosInstance;
  }
}
 

