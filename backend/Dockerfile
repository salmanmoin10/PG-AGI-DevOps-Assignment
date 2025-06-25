# Use an official Python runtime as a parent image
# python:3.11-slim is a good choice for being lightweight and compatible
FROM python:3.11-slim-bullseye

# Set the working directory inside the container
WORKDIR /app

# Copy the dependency file first to leverage Docker's layer caching
# This way, dependencies are only re-installed if requirements.txt changes
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
# --no-cache-dir reduces the image size by not storing the download cache
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's source code from your host to your image filesystem.
COPY . .

# Inform Docker that the container listens on port 8000 at runtime
EXPOSE 8000

# Define the command to run the application
# Use 0.0.0.0 as the host to allow connections from outside the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
