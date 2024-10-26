```markdown
# Sample Application Setup Guide

This guide will walk you through the steps to set up individual services that can be hooked up with an auto CI/CD pipeline to a provisioned EC2 instance. Follow the steps carefully to ensure a successful setup.

## Step 1: Dockerize the Service

Create a `Dockerfile` in the root of your service directory. Here is a simple example of a `Dockerfile`:

```dockerfile
# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the application port (replace with your app's port).
EXPOSE 3000

# Command to run the application.
CMD ["npm", "start"]
```

## Step 2: Preparing GitHub Repository Secrets

To securely store sensitive information like Docker credentials and EC2 access keys, you need to add them as secrets in your GitHub repository settings. Follow these steps:

1. Go to your GitHub repository.
2. Click on **Settings**.
3. On the left sidebar, click on **Secrets and variables** > **Actions**.
4. Click on **New repository secret** and add the following secrets:

   - **DOCKER_REPO_URL**: The URL of your Docker repository.
   - **DOCKER_USERNAME**: Your Docker Hub username.
   - **DOCKER_PASSWORD**: Your Docker Hub password.
   - **EC2_HOST**: The public IP or DNS of your EC2 instance.
   - **EC2_USERNAME**: The SSH username for your EC2 instance.
   - **MY_EC2_SSH_KEY**: Your SSH private key for authenticating with the EC2 instance.

### Sample Secrets

Here’s an example of the secrets you may need to configure:

```plaintext
DOCKER_REPO_URL: docker.io/abhishekpandit
DOCKER_USERNAME: abhishekpandit
DOCKER_PASSWORD: ********
EC2_HOST: 3.238.92.61
EC2_USERNAME: ec2-user
MY_EC2_SSH_KEY: -----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAwIc23PtMAPOgW4DmQYJQHjqMupS3E3I0B8Px03bMYdmAaZgh
...
-----END RSA PRIVATE KEY-----
```

> **Note:** The EC2 SSH KEY is the key you provided when provisioning the EC2 instance.

## Step 3: Update GitHub Actions Workflow

Create or update the workflow file located at `.github/workflows/deploy.yml`. Ensure to update the Docker Hub Repository Name to your application repository name set up in Docker Hub.

## Conclusion

After completing these steps, your service should be set up for CI/CD deployment on your EC2 instance. Make sure to test the deployment to confirm everything is working as expected. If you encounter any issues, check the logs for troubleshooting.
```
