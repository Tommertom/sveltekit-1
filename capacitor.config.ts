import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'sveltekit-2',
  webDir: '.vercel/output/static',
  bundledWebRuntime: false,
  server: {
    url: "https://sveltekit-1-flax.vercel.app/"
  }
};

export default config;
