export {};

declare global {
  interface Window {
    solana: any; // whatever type you want to give. (any,number,float etc)
  }
}