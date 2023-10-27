module.exports = {
  apps: [
    {
      name: "my-express-app",
      script: "npm",
      args: "run start",
      cwd: "/root/api-whatsapp-ts", // Reemplaza con la ruta a tu proyecto
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
