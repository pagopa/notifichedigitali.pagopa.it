FROM node:16

# Our working directory

WORKDIR /app

# Set node env
#ENV NODE_ENV=production

# Copy the required files
COPY src/app .

# Install dependencies and run build
RUN yarn --frozen-lockfile
EXPOSE 8000

CMD ["yarn", "develop"]
