FROM node:18

LABEL Name="security-dashboard" \
      Version="0.1.0" \
      Description="Nuxt 3 Security Dashboard" \
      Maintainer="markustratschitt@yourdomain.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN adduser --disabled-password --gecos "" nuxtuser && chown -R nuxtuser /app

USER nuxtuser

CMD ["npm", "run", "dev"]
